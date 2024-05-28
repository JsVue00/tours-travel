import kh from './locale/kh.json';
import en from './locale/en.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'kh',
    messages: {
        en: en,
        kh: kh
    }
}))
