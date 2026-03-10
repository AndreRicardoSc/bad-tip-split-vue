import { ref } from "vue";

const despesas = ref([]);

const STORAGE_KEY = "despesas";

function loadFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    despesas.value = JSON.parse(stored);
  }
}

function saveStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(despesas.value));
}

loadFromStorage();

export function useDespesas() {
  function adicionarDespesa(despesa) {
    const gorjeta = despesa.valor * (despesa.porcentagemGorjeta / 100);
    const total = despesa.valor + gorjeta;
    const porPessoa = total / despesa.pessoas;

    const novaDespesa = {
      id: Date.now(),
      titulo: despesa.titulo,
      total,
      gorjeta,
      porPessoa,
      details: {
        valor: despesa.valor,
        porcentagemGorjeta: despesa.porcentagemGorjeta,
        pessoas: despesa.pessoas
      },
      criadoEm: new Date().toISOString(),
    };
    despesas.value.unshift(novaDespesa);
    saveStorage();
    return novaDespesa;
  }

  function detalharDespesa(id) {
    return despesas.value.find((d) => d.id === parseInt(id));
  }

  function atualizarDespesa(id, despesa) {
    const index = despesas.value.findIndex((d) => d.id === parseInt(id));
    const gorjeta = despesa.valor * (despesa.porcentagemGorjeta / 100);
    const total = despesa.valor + gorjeta;
    const porPessoa = total / despesa.pessoas;
    
    if(index !== -1 ) {
        despesas.value[index] = {
            id: Number(despesa.id),
            titulo: despesa.titulo,
            total,
            gorjeta,
            porPessoa,
            details: {
              valor: despesa.valor,
              porcentagemGorjeta: despesa.porcentagemGorjeta,
              pessoas: despesa.pessoas
            },
            editadoEm: new Date().toISOString(),
        }
        saveStorage();
        return despesas.value[index]
    }
    return null
  }

  function deletarDespesa(id) {
    despesas.value = despesas.value.filter((d) => d.id !== parseInt(id));
    saveStorage()
  }

  return {
    despesas,
    adicionarDespesa,
    detalharDespesa,
    atualizarDespesa,
    deletarDespesa
  }
}
