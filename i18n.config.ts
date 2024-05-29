import kh from './locale/kh.json';
import en from './locale/en.json';
import { useStore } from './stores';
const stour = useStore();
export default defineI18nConfig(() => ({
    legacy: false,
    locale: stour.locale,
    messages: {
        en: en,
        kh: kh
    }
}))
