<script setup>
import { onMounted, ref } from "vue";
import { formatDate } from "../utils/formatDate";
import { useRouter } from "vue-router";
import { useDespesas } from "../composables/useDespesas";
import { useDarkLightMode } from "../composables/useDarkLightMode";
const { detalharDespesa } = useDespesas();
const { mode, setDark } = useDarkLightMode();

const router = useRouter();
const despesa = ref(null);
onMounted(() => {
  despesa.value = detalharDespesa(router.currentRoute.value.params.id);
  console.log(despesa.value);
  setDark()
});
</script>

<template>
  <div class="detail-view">
    <div class="top" :class="mode === 'light' ? 'top-light' : 'top-dark'">
      <span class="icon mdi mdi-wallet-bifold"></span>
      <div class="top-info">
        <h3
          class="title"
          :class="mode === 'light' ? 'text-black' : 'text-white'"
        >
          {{ despesa?.titulo }}
        </h3>
        <p class="date">
          <span class="mdi mdi-calendar-blank-outline"></span
          >{{ formatDate(despesa?.criadoEm) }}
        </p>
      </div>
    </div>
    <div class="resume" :class="mode === 'light' ? 'resume-light' : 'resume-dark'">
      <h3 :class="mode === 'light' ? 'text-black' : 'text-white'">Resumo do Cálculo</h3>
      <ul class="list">
        <li class="item-list">
          <p class="list-title">Valor da conta</p>
          <p :class="mode === 'light' ? 'text-black' : 'text-white'">
            R$
            {{ Number(despesa?.details?.valor).toFixed(2).replace(".", ",") }}
          </p>
        </li>
        <li class="item-list">
          <div class="list-title">
            <span class="mdi mdi-currency-usd"></span>
            <p>Gorjeta: ({{ despesa?.details?.porcentagemGorjeta }}%)</p>
          </div>
          <p class="gorjeta">
            R$ {{ Number(despesa?.gorjeta).toFixed(2).replace(".", ",") }}
          </p>
        </li>
        <li class="item-list">
          <div class="list-title">
            <span class="mdi mdi-account-multiple"></span>
            <p>Numero de pessoas</p>
          </div>
          <p :class="mode === 'light' ? 'text-black' : 'text-white'">
            {{ despesa?.details?.pessoas }}
          </p>
        </li>
      </ul>
      <div class="total" :class="mode === 'light' ? 'text-black' : 'text-white'">
        <p>Total</p>
        <p>R$ {{ Number(despesa?.total).toFixed(2).replace(".", ",") }}</p>
      </div>
    </div>
    <div class="value">
        <p class="per-people">Valor por pessoa</p>
        <p class="quant">{{ despesa?.porPessoa }}</p>
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}

.top {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  border-top: 6px solid transparent;
}

.top-light {
    background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, var(--pink-primary), var(--pink-secondary))
            border-box;
}

.top-dark {
    background:
        linear-gradient(#1e2939, #1e2939) padding-box,
        linear-gradient(90deg, var(--pink-primary), var(--pink-secondary))
        border-box;
}

.icon {
  color: var(--pink-primary);
  background: #8b5cf615;
  font-size: 32px;
  padding: 8px 14px;
  border-radius: 16px;
}

.top-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.title {
  font-size: 25px;
  font-weight: 600;
}

.date {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #a1a1a1;
}

.resume {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 30px;
  font-size: 20px;
  box-shadow: var(--card-shadow);
}

.resume-light {
    background: #ffffff;
}
.resume-dark {
    background: #1e2939;
    border: solid 1px #364153;
}

.list {
  margin-block: 20px;
}

.item-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a1a1a1;
  border-bottom: solid 1px;
  padding-block: 20px;
}

.list-title {
  display: flex;
}

.gorjeta {
  color: var(--pink-primary);
  background: #8b5cf615;
  padding: 4px;
  border-radius: 8px;
}

.total {
  display: flex;
  justify-content: space-between;
}

.value {
    color: #ffffff;
    background: linear-gradient(90deg, var(--pink-primary), var(--pink-secondary));
    padding: 30px;
    border-radius: 16px;
}

.per-people {
    font-size: 20px;
}

.quant {
    font-size: 40px;
}
</style>
