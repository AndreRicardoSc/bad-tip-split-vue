<script setup>
import { formatDate } from '../../utils/formatDate';
import { useDarkLightMode } from '../../composables/useDarkLightMode';
import { useRouter } from 'vue-router';
const { mode } = useDarkLightMode();
const router = useRouter();

const props = defineProps({
    id: Number,
    titulo: String,
    criadoEm: {
        type: String,
        default: ''
    },
    redirect: {
        type: Boolean,
        default: false
    }
});

function redirect() {
    if(props.redirect) {
        router.push({ name: 'despesa-detail', params: { id: props.id }})
    }
}
</script>
<template>
    <div @click="redirect" class="card" :class="mode === 'light' ? 'card-light text-black' : 'card-dark text-white'">
        <div class="top">
            <span class="mdi mdi-wallet-bifold icon"></span>
            <div>
                <h2 class="title">{{ props.titulo }}</h2>
                <div class="date" v-if="props.criadoEm">
                    <span class="mdi mdi-calendar-blank-outline"></span>
                    <p>{{ formatDate(props.criadoEm) }}</p>
                </div>
                
            </div>
        </div>
        <slot name="content"></slot>
    </div>
</template>
<style scoped>
.card{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  border-top: 6px solid transparent;
}

.card:active {
  transform: scale(98%);
  opacity: 50%;
  transition: all 200ms;
}

.card-light {
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(90deg, var(--pink-primary), var(--pink-secondary))
      border-box;
}

.card-dark {
  background:
    linear-gradient(#1e2939, #1e2939) padding-box,
    linear-gradient(90deg, var(--pink-primary), var(--pink-secondary))
      border-box;
}

.top {
    display: flex;
    align-items: center;
    gap: 20px;
}

.icon {
    color: var(--pink-primary);
    background: #8b5cf615;
    font-size: 30px;
    padding: 0 5px;
    border-radius: 8px;
}

.title {
    font-size: 20px;
}

.date {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #a1a1a1;
}
</style>