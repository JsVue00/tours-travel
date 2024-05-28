import provinceApiCalling from "~/apis/province/provinceApiCalling";
import type { IGetProvinceResponse } from "~/models/province";

export default function useProvince() {
    const provinceData = ref<IGetProvinceResponse[]>([]);

    const getAllProvinces = async () => {
        const response = await provinceApiCalling.callAllProvinces();
        provinceData.value = response.data.Data;
    }

    return {
        getAllProvinces,
        provinceData,
    }
}