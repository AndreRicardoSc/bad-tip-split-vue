<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import AppHeader from "../components/layouts/AppHeader.vue";
import AppInput from "../components/forms/AppInput.vue";
import AppButton from "../components/forms/AppButton.vue";
import { useDespesas } from "../composables/useDespesas";

const router = useRouter();
const route = useRoute();
const { adicionarDespesa, detalharDespesa, atualizarDespesa } = useDespesas();
const $toast = useToast();

const isEditMode = computed(
  () => router.currentRoute.value.params.id !== "new",
);

const form = ref({
  titulo: "",
  valor: 0,
  porcentagemGorjeta: 0,
  pessoas: 0,
});

onMounted(() => {
  if (isEditMode.value) {
    const despesa = detalharDespesa(route.params.id);
    if (despesa) {
      form.value = {
        titulo: despesa.titulo,
        valor: despesa.details.valor,
        porcentagemGorjeta: despesa.details.porcentagemGorjeta,
        pessoas: despesa.details.pessoas,
      };
    } else {
      router.push("/");
    }
  }
});

function handleSubmit() {
  if (
    !form.value.titulo ||
    !form.value.valor ||
    !form.value.porcentagemGorjeta ||
    !form.value.pessoas
  ) {
    $toast.warning("Todos os campos precisam ser preenchidos", {
      duration: 3000,
      position: "top",
    });
    return;
  }

  if (isEditMode.value) {
    const response = atualizarDespesa(route.params.id, {id: route.params.id, ...form.value});
    if (response) {
      $toast.success(`${response.titulo} atualizado com sucesso!`, {
        duration: 3000,
        position: "top",
      });
    } else {
      $toast.error("Erro ao atualizar despesa!", {
        duration: 3000,
        position: "top",
      });
    }
  } else {
    const response = adicionarDespesa(form.value);
    if (response) {
      $toast.success(`${response.titulo} criado com sucesso!`, {
        duration: 3000,
        position: "top",
      });
    } else {
      $toast.error("Erro ao adicionar nova despesa!", {
        duration: 3000,
        position: "top",
      });
    }
  }

  router.push("/");
}
</script>

<template>
  <AppHeader
    :title="isEditMode ? 'Editar Cálculo' : 'Novo Cálculo'"
    :subtitle="
      isEditMode
        ? 'Altere os valores da sua despesa'
        : 'Adicione uma nova despesa'
    "
    button-back
  />
  <form class="form" @submit.prevent="handleSubmit">
    <AppInput
      label="Título"
      placeholder="Ex: Churrasco em família"
      v-model="form.titulo"
      required
    />
    <AppInput
      type="number"
      label="Valor da Despesa (R$)"
      placeholder="Ex: 300,00"
      v-model="form.valor"
      required
    />
    <AppInput
      type="number"
      label="Percentual de Gorjeta (%)"
      placeholder="Ex: 10"
      v-model="form.porcentagemGorjeta"
      required
    />
    <AppInput
      type="number"
      label="Quantidade de pessoas"
      placeholder="Ex: 4"
      v-model="form.pessoas"
      required
    />
    <AppButton
      :text="isEditMode ? 'Atualizar Despesa' : 'Criar Despesa'"
      type="submit"
    />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
}
</style>
