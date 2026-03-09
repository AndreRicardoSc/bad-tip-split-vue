import { ref } from "vue";

const mode = ref('');

const STORAGE_KEY = 'styleMode';
const LIGHT_KEY = 'light';
const DARK_KEY = 'dark';

function loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored) {
        mode.value = JSON.parse(stored);
    } else {
        mode.value = LIGHT_KEY;
    }
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mode.value));
}

loadFromStorage();

export function useDarkLightMode() {

    function setLight() {
        mode.value = LIGHT_KEY;
        saveToStorage();
    }

    function setDark() {
        mode.value = DARK_KEY;
        saveToStorage();
    }

    return {
        mode,
        setLight,
        setDark
    }
}