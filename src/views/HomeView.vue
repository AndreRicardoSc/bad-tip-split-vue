<script setup>
import AppHeader from "../components/layouts/AppHeader.vue";
import AppButton from "../components/forms/AppButton.vue";
import DespesaCard from "../components/cards/DespesaCard.vue";
import { useDespesas } from "../composables/useDespesas";
import { useDarkLightMode } from "../composables/useDarkLightMode";
import router from "../router";
const { despesas } = useDespesas();
const { mode } = useDarkLightMode();
</script>
<template>
  <AppHeader title="Cálculo de Despesas" subtitle="Suas despesas salvas" />
  <div class="despesas">
    <div v-if="despesas.length > 0" class="cards">
      <DespesaCard
        v-for="(despesa, index) of despesas"
        :key="index"
        :id="despesa.id"
        :titulo="despesa.titulo"
        redirect
      >
        <template #content>
          <ul class="content">
            <li class="first">
              <div>
                <p>Valor total</p>
                <p>
                  R$ {{ Number(despesa.total).toFixed(2).replace(".", ",") }}
                </p>
              </div>
              <div>
                <p>Gorjeta ({{ despesa.details.porcentagemGorjeta }}%)</p>
                <span class="gorjeta">
                  R$ {{ Number(despesa.gorjeta).toFixed(2).replace(".", ",")}}
                </span>
              </div>
            </li>
            <li class="second">
              <p>Por pessoa</p>
              <span class="per-people">
                R$ {{ Number(despesa.porPessoa).toFixed(2).replace('.', ',') }}
              </span>
            </li>
          </ul>
        </template>
      </DespesaCard>
    </div>
    <div v-else class="mascot">
      <img src="/images/nota.png" alt="mascote">
      <p>Nenhuma despesa encontrada</p>
    </div>
  </div>
  <AppButton text="Adicionar despesa" @event="router.push('/despesas/new/edit')"/>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.first {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid;
  padding-bottom: 10px;
  & div {
    display: flex;
    justify-content: space-between;
  }
}

.gorjeta {
  color: var(--pink-primary);
  background: #8b5cf615;
  padding: 4px;
  border-radius: 8px;
}

.second {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.per-people {
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-secondary));
  padding: 8px 12px;
  border-radius: 8px;
  color: #ffffff;
}

.despesas {
  padding: 20px;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mascot {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mascot img {
  width: 100%;
}

.mascot p {
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: var(--pink-primary);
}

@media (min-width: 550px) {
  .mascot img{
    width: 50%;
  }
}

@media (min-width: 1048px) {
  .mascot img {
    width: 30%;
  }
}
</style>
