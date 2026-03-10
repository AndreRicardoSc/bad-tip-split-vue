<script setup>
    const emits = defineEmits(['event']);
    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'button'
        }
    })
</script>

<template>
    <button :type="props.type" class="button" @click="emits('event')">
        {{ props.text }}
    </button>
</template>

<style scoped>
    .button {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        font-size: 20px;
        text-align: center;
        min-height: 64px;
        border-radius: 8px;
        border: transparent;
        background: linear-gradient(135deg, var(--pink-primary), var(--pink-secondary));
        color: #ffffff;
    }
</style>