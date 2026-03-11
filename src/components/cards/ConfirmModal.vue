<script setup>
import { useDarkLightMode } from "../../composables/useDarkLightMode";
const { mode } = useDarkLightMode();

const emits = defineEmits(["event", "close"]);
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="background" @click="emits('close')" :class="mode">
    <div class="card" @click.stop>
      <p class="text" :class="mode === 'light' ? 'text-black' : 'text-white'">{{ props.text }}</p>
      <div class="buttons">
        <button class="first" @click="emits('event')">Deletar</button>
        <button class="second" @click="emits('close')">Cancelar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
}

.card {
    width: 80%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 16px;
}
.text {
    font-size: 15px;
}

.buttons {
    display: flex;
    gap: 10px;
    width: 100%;
}

.buttons button {
  font-size: 15px;
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 16px;
}

.buttons .first {
    background: #e95b5b;
}

.buttons .second {
    background: transparent;
    border: solid 1px #e95b5b;
    color: #e95b5b;
}

.buttons button:active {
    transform: scale(95%);
}

.dark {
  background: #1a2434b2;

  & .card {
    background: #1e2939;
  }
}

.light {
  background: #ffffffb2;
  
  & .card {
    background: #ffffff;
  }
}
</style>
