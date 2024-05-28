import cityAllCalling from "~/apis/city/cityAllCalling";
import tourApiCalling from "~/apis/tours/tourApiCalling";
import type { IGetToureResponse } from "~/models/tour";

export default function useToursArea() {
    const cityData = ref<[]>([])
    const tourData = ref<IGetToureResponse[]>([])
    const getAllCities = async () => {
        const response = await cityAllCalling.callGetAllCities();
        cityData.value = response.data;

        console.log(response.data);
    }
    const getAllTours = async () => {
        const response = await tourApiCalling.callAllTours();
        tourData.value = response.data.Data;
    }
    const getTourById = (Id: number) => {
        return computed(() => {
            return tourData.value.find((tour: IGetToureResponse) => tour.Id === Id);
        })
    }
    return {
        getAllCities,
        getAllTours,
        tourData,
        getTourById
    }
}