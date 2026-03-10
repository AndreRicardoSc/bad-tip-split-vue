<script setup>
import { useDarkLightMode } from "../../composables/useDarkLightMode";
import { useRouter } from "vue-router";
const { mode, setLight, setDark } = useDarkLightMode();
const router = useRouter();

const props = defineProps({
  title: String,
  subtitle: {
    type: String,
    default: "",
  },
  buttonBack: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <header :class="mode === 'light' ? 'header-light' : 'header-dark'">
    <div>
      <span
        v-if="props.buttonBack"
        class="mdi mdi-arrow-left-thin"
        :class="mode === 'light' ? 'back-light' : 'back-dark'"
        @click="router.back()"
      ></span>
      <span v-else class="mdi mdi-calculator home"></span>
      <div class="titles">
        <h1 :class="mode === 'light' ? 'text-black' : 'text-white'">
          {{ props.title }}
        </h1>
        <p class="subtitle" v-if="props.subtitle">{{ props.subtitle }}</p>
      </div>
    </div>
    <button v-if="mode === 'light'" class="button-light" @click="setDark">
        <span class="mdi mdi-weather-night"></span>
    </button>
    <button v-if="mode ==='dark'" class="button-dark" @click="setLight">
        <span class="mdi mdi-lightbulb-on-30"></span>
    </button>
  </header>
</template>

<style scoped>
.header-light {
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
}

.header-dark {
  background-color: #1e2939;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #364153;
}

div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.back-light {
  border: solid 2px #e5e7eb;
  color: #364153;
  font-size: 20px;
  border-radius: 16px;
  padding: 8px 12px;
}
.back-dark {
  border: solid 2px #364153;
  color: #e5e7eb;
  font-size: 20px;
  border-radius: 16px;
  padding: 8px 12px;
}

.home {
  font-size: 30px;
  color: #ffffff;
  border-radius: 16px;
  padding: 2px 8px;
  background: linear-gradient(
    135deg,
    var(--pink-primary),
    var(--pink-secondary)
  );
}

.titles {
  display: block;
}

h1 {
  font-size: 20px;
}

.subtitle {
  color: #6a7282;
  font-size: 15px;
}

.button-light {
    color: #9810fa;
    border: solid 2px #e5e7eb;
    border-radius: 16px;
    padding: 5px 10px;
    background: transparent;
    font-size: 25px;
}
.button-dark {
    color: #d08700;
    border: solid 2px #364153;
    border-radius: 16px;
    padding: 5px 10px;
    background: transparent;
    font-size: 25px;
}
</style>
