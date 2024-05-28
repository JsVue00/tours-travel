<template>
    <div class="flex flex-col space-y-4 items-center w-full px-2 md:px-[50px]">
        <div class=" text-[20px] md:text-[50px] pt-5 font-bold text-primary">
            {{ TourById.value?.AreaName }}
        </div>
        <!-- Content description -->
        <div class=" p-4 text-justify">
            <TheContent :content="TourById.value?.Description ?? ''" />
        </div>
        <div class=" w-full flex justify-center">
            <div class="image-details  ">
                <div class="h-[250px] photo rounded-sm overflow-hidden "
                    @click="onPreviewImage(img.TourId, img.ImageName)"
                    v-for="(img, index) in TourById.value?.ImageDetails" :key="index">
                    <img class=" w-full h-full object-cover"
                        :src="`https://localhost:3001/api/ImageUpload/get/TourImages%5C%5CTourId${img.TourId}/${img.ImageName}`"
                        alt="">
                </div>
            </div>
        </div>

        <div class="w-full justify-center text-center content-center overflow-x-hidden">
            <div class="w-full content-center text-center relative overflow-hidden align-middle">
                <iframe v-show="TourById.value?.MapEmbed.includes('http')" :src="TourById.value?.MapEmbed"
                    class="w-full content-center md:h-[400px]"  style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <el-dialog v-model="ImageDialogVisible" top="20px"
        style="padding:0 8px 8px 8px; background-color: var(--backGround1)" width="75dvw" @close="handleClose()">
        <img class=" w-full h-full object-cover" :src="imagePriviewUrl" alt="">
    </el-dialog>
</template>
<script lang="ts" setup>
const { getTourById, getAllTours } = useToursArea();
const route = useRoute();
const TourById = computed(() => {
    return getTourById(Number(route.params.id));
})

const ImageDialogVisible = ref<boolean>(false);
const imagePriviewUrl = ref<string>("");
const onPreviewImage = (tourId: number, file: string) => {
    ImageDialogVisible.value = true
    imagePriviewUrl.value = `https://localhost:3001/api/ImageUpload/get/TourImages%5C%5CTourId${tourId}/${file}`;
}
const handleClose = () => { imagePriviewUrl.value == ""; ImageDialogVisible.value = false };

onMounted(() => {
    getAllTours();
});

</script>
<style scoped>
.image-details {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
}

.image-details>.photo:hover {
    box-shadow: 4px 10px 10px var(--shadow)
}
</style>