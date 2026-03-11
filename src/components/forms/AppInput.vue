<script setup>
import { useDarkLightMode } from "../../composables/useDarkLightMode";
const { mode } = useDarkLightMode();

const model = defineModel();
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: String,
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="container">
    <div class="label">
      <label :class="mode === 'light' ? 'text-black' : 'text-white'">{{
        props.label
      }}</label>
      <span v-if="props.required" class="required">*</span>
    </div>
    <input
      class="input"
      :class="mode === 'light' ? 'input-light' : 'input-dark'"
      :type="props.type"
      :placeholder="props.placeholder"
      min="0"
      v-model="model"
    />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.label {
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  gap: 5px;
}

.required {
  color: red;
}

.input {
  width: 100%;
  font-size: 15px;
  background: transparent;
  border: solid 2px #6a7282;
  border-radius: 8px;
  padding: 12px;
  transition: all 200ms;
}

input:focus {
  outline: none;
}

.input-light {
  color: #000000;
  border-color: #c8cbd1;
}

.input-light:focus {
  border-color: var(--pink-primary);
}

.input-dark {
  color: #ffffff;
}

.input-dark:focus {
  border-color: var(--pink-secondary);
}
</style>
