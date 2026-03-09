<script setup>
import AppHeader from "../components/layouts/AppHeader.vue";
import DespesaCard from "../components/cards/DespesaCard.vue";
import { onMounted, ref } from "vue";
import { useDespesas } from "../composables/useDespesas";
const { despesas } = useDespesas();
</script>
<template>
  <AppHeader title="Divisão de Despesas" subtitle="Suas despesas salvas"/>
  <div class="despesas">
    <div class="cards">
      <DespesaCard
        v-for="(despesa, index) of despesas"
        :key="index"
        :titulo="despesa.titulo"
        :total="despesa.total"
        :gorjeta="despesa.gorjeta"
        :porPessoa="despesa.porPessoa"
      />
    </div>
  </div>
</template>
<style scoped>
.despesas {
  padding: 20px;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
