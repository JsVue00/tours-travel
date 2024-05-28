<template>
    <div class="w-full content-center justify-center items-center flex-col space-y-5 px-2 md:px-[50px]  flex">
        <div class="">
        </div>
        <!-- banner -->
        <div class=" w-full md:h-[400px] relative rounded-md overflow-hidden">
            <img class="w-full h-full object-fill" src="~/assets/images/travel-banner.png" alt="">
            <span
                class=" absolute top-4 left-4  md:text-[40px] font-bold text-text2">ស្វាគមន៍មកកាន់តំបន់ទេសចរណ៍នៅកម្ពុជា</span>

        </div>

        <div class="container">
            <div v-for="tour in tourData" class=" space-y-1" @click=" $router.push(`area/${tour.Id}`)" :key="tour.Id">
                <div
                    class=" bg-backGround2 shadow-md  w-full overflow-hidden  h-[200px] rounded-md  relative imageBox ">
                    <img class="h-full image w-full object-cover"
                        :src="getImage(`TourImages%5C%5CThumbnail`, tour.Thumbnail)!" alt="">

                </div>
                <div class=" text-center text-text3  py-2 w-full bg-backGround2 rounded-md">
                    <span><em>{{ tour.AreaName }}</em></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getImage } from '~/libraries/commonHelper';
const { getAllTours, tourData } = useToursArea();
onMounted(() => { getAllTours(); });
</script>
<style scoped>
.image {
    width: 98%;
    height: 98%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    border-radius: 5px;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    place-content: center;
}

.imageBox:hover::before {
    content: "";
    position: absolute;
    width: 120%;
    top: -10%;
    left: -10%;
    transform: translate(-50%, -50%);
    height: 100%;
    background-image: linear-gradient(45deg, #00e95d, #fde806);
    transform: rotate(10deg);
    z-index: 0;
    animation: circle 2s linear forwards infinite;
    transform: rotate(45deg);
}



@keyframes circle {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>