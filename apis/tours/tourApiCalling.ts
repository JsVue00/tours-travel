import apis from "../Apis"
export default {
    async callAllTours(): Promise<any> {
        return await apis.get('tours/getall')
    }
}