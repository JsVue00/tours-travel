import { defineStore } from "pinia";

export const useStore = defineStore('useStore', {
    state: () => ({
        name: 'hello world',
    }),
    persist: true,
})