import { menuTabvalue } from "~/libraries/contantData";
import { type IMenuTab } from "~/models/menuTab"

export default function useHeaderComponent() {
    const menuTab = ref<IMenuTab[]>([]);
    const route = useRoute();
    menuTab.value = menuTabvalue;
    const IsActiveTab = (tabUrl: string) => {
        if (route.name !== '') {
            return route.path.split('/')[1].toLowerCase() === tabUrl.slice(1).toLowerCase();
        }
        return false;
    }
    return {
        menuTab,
        IsActiveTab
    }
}