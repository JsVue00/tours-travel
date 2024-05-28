import apis from "../Apis";

export default {
    async callGetAllCities(): Promise<any> {
        return await apis.get('city');
    }
}