<script setup>
import AppHeader from '../components/layouts/AppHeader.vue';
import DespesaCard from '../components/cards/DespesaCard.vue';
import { onMounted, ref } from 'vue';

    const despesas = ref([
        {
            titulo: 'Churrasco',
            total: 200,
            gorjeta: 20,
            porPessoa: 44,
        },
        {
            titulo: 'Churrasco',
            total: 200,
            gorjeta: 20,
            porPessoa: 44,
        },
        {
            titulo: 'Churrasco',
            total: 200,
            gorjeta: 20,
            porPessoa: 44,
        },
       
    ]);

    function pegarDespesas() {
        const response = localStorage.getItem("despesas");
        if(response) {
            despesas.value = response
        }
    }

    onMounted(pegarDespesas)
</script>
<template>
<AppHeader/>
<div class="despesas">

  <div class="cards">
    <DespesaCard v-for="(despesa, index) of despesas" :key="index" :titulo="despesa.titulo" :total="despesa.total" :gorjeta="despesa.gorjeta" :porPessoa="despesa.porPessoa"/>
  </div>
</div>
</template>
<style scoped>

.despesas{
    padding: 20px;
    
}
.cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}


</style>
