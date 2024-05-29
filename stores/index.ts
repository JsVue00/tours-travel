import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const useStore = defineStore('app', {
    state: () => {
        return {
            name: 'hello world',
            locale: 'kh',
        }
    },
    actions: {
        changGlobalLanguage(lang: string) {
            this.locale = 'en';
           
        }
    },
    persist: true,
})