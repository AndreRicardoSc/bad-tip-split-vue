<script setup>
import AppHeader from "../components/layouts/AppHeader.vue";
import AppButton from "../components/forms/AppButton.vue";
import DespesaCard from "../components/cards/DespesaCard.vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDespesas } from "../composables/useDespesas";
import { useDarkLightMode } from "../composables/useDarkLightMode";
const { detalharDespesa } = useDespesas();
const { mode } = useDarkLightMode();

const router = useRouter();
const route = useRoute();
const $toast = useToast();
const despesa = ref({});

onMounted(() => {
  despesa.value = detalharDespesa(router.currentRoute.value.params.id);
  if (!despesa.value) {
    $toast.error("Erro ao encontrar despesa.", {
      duration: 3000,
      position: "top"
    });
    router.push('/')
  }
});

function goToEdit() {
  router.push(`/despesas/${router.currentRoute.value.params.id}/edit`)
}
</script>

<template>
  <AppHeader :title="despesa.titulo" button-back/>
  <div class="detail-view">
    <DespesaCard
        :id="despesa.id"
        :titulo="despesa.titulo"
        :criado-em="despesa.criadoEm"
    />
    <div
      class="resume"
      :class="mode === 'light' ? 'resume-light' : 'resume-dark'"
    >
      <h3 :class="mode === 'light' ? 'text-black' : 'text-white'">
        Resumo do Cálculo
      </h3>
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
      <div
        class="total"
        :class="mode === 'light' ? 'text-black' : 'text-white'"
      >
        <p>Total</p>
        <p>R$ {{ Number(despesa?.total).toFixed(2).replace(".", ",") }}</p>
      </div>
    </div>
    <div class="value">
      <p class="per-people">Valor por pessoa</p>
      <p class="quant">R$ {{ Number(despesa?.porPessoa).toFixed(2).replace('.', ',') }}</p>
    </div>
  </div>
  <button class="edit" @click="goToEdit">
    <span class="mdi mdi-square-edit-outline"></span>
  </button>
</template>

<style scoped>
.detail-view {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}

.resume {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 30px;
  font-size: 15px;
  box-shadow: var(--card-shadow);
}

.resume-light {
  background: #ffffff;
  color: #4a5565;
  border: solid 1px #f3f4f6;
}
.resume-dark {
  background: #1e2939;
  color: #99a1af;
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
  background: linear-gradient(
    90deg,
    var(--pink-primary),
    var(--pink-secondary)
  );
  padding: 30px;
  border-radius: 16px;
}

.per-people {
  font-size: 20px;
}

.quant {
  font-size: 40px;
}

.edit {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--pink-primary);
  border: none;
  color: #ffffff;
  font-size: 30px;
  height: 64px;
  width: 64px;
  border-radius: 50px;
  transition: all 200ms;
}

.edit:focus {
  transform: scale(98%);
  background: var(--pink-secondary);
}
</style>
