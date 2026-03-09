<script setup>
    import { onMounted } from 'vue';
    import { useDespesas } from '../composables/useDespesas';
    const { despesas, adicionarDespesa } = useDespesas();

    onMounted(() => {

    })
</script>
<template>
    <h1>Home</h1>
    <div v-for="despesa in despesas">
        {{ despesa }}
    </div>
</template>