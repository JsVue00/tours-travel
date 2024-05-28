import apis from "../Apis"
export default {
    async callAllProvinces(): Promise<any> {
        return await apis.get('province')
    }
}