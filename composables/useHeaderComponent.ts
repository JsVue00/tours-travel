import { menuTabvalue } from "~/libraries/contantData";
import { type IMenuTab } from "~/models/menuTab";
import { useStore } from "~/stores";
interface ILanguage {
    name: string;
    label: string;
    icon: string;
}

export default function useHeaderComponent() {
    const store = useStore();
    const menuTab = ref<IMenuTab[]>([]);
    const route = useRoute();
    menuTab.value = menuTabvalue;
    const IsActiveTab = (tabUrl: string) => {
        if (route.name !== '') {
            return route.path.split('/')[1].toLowerCase() === tabUrl.slice(1).toLowerCase();
        }
        return false;
    }

    const languages: ILanguage[] = [
        { name: 'en', label: 'English', icon: 'https://cdn-icons-png.flaticon.com/128/555/555417.png' },
        {
            name: 'kh',
            label: 'khmer',
            icon: 'https://cdn-icons-png.flaticon.com/128/14009/14009894.png'
        }
    ];
    const onChangeLanguage = (lang: string) => {
        store.changGlobalLanguage(lang);
        localStorage.setItem('locale', 'en')
        store.locale = localStorage.getItem('locale') as string;

        window.location.reload();

    };

    const language = computed(() => {
        return languages.find((langs: ILanguage) => langs.name === store.locale);
    });
    return {
        menuTab,
        IsActiveTab,
        language,
        languages,
        onChangeLanguage,
    }
}