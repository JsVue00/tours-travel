const BASE_URL = "https://localhost:3001/api";
export const getImage = (folder: string, fileName: string) => {
    return `${BASE_URL}/ImageUpload/get/${folder}/${fileName}`;
}
