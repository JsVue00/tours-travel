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

        <!-- Popular Form -->
        <div
            class=" w-full  flex-col md:flex-row md:items-center text-start h-[50px] md:pl-4 md:space-x-5 flex justify-start">
            <span class="text-lg font-medium text-primary ">{{ $t('popular_area') }}</span>
            <div class="flex justify-start  gap-2">
                <div :class="{ 'border-warning delay-100': isSearch }"
                    class="w-[30px] h-[30px]  border-[1px] border-primary cursor-pointer bg-backGround2 text-center content-center rounded-full"
                    @click="isSearch ? onCloseSearch() : onSearch()">
                    <el-icon v-if="!isSearch"
                        style="vertical-align: middle; width: 20px; height: 20px; color: var(--primary); font-weight: bold; ">
                        <Search />
                    </el-icon>
                    <el-icon v-else
                        style="vertical-align: middle; width: 20px; height: 20px; color: var(--warning); font-weight: bold; ">
                        <Close />
                    </el-icon>
                </div>
                <div class="input-form delay-100 relative " :class="{ 'isSearch': isSearch }">
                    <input v-model="searchValue" type="text"
                        :placeholder="`${$t('search') + ' / ' + $t('tour_area') + ' / ' + $t('province')}`"
                        @input="onInputValue()">
                    <!-- result list -->
                    <div class="w-full bg-backGround2 overflow-hidden search-list z-10 top-10 rounded-md absolute">
                        <div v-if="searchValue === '' || null"></div>
                        <div v-else-if="searchData.length <= 0 && filterProvinceData.length <= 0" class="m-2">No data
                        </div>
                        <div v-else
                            class="w-full grid md:grid-cols-2 p-2 divide-y-[1px] md:divide-y-0 md:divide-x-[1px]">
                            <div>
                                <div class="text-md text-center  font-bold w-full">{{ $t('tour_area') }}</div>
                                <div v-for="data in searchData"
                                    class=" cursor-pointer p-2 hover:text-text3 hover:underline"
                                    @click=" $router.push(`area/${data.Id}`)">{{
                                        data.AreaName }}</div>
                            </div>
                            <div>
                                <div class="text-md text-center font-bold w-full">{{ $t('province') }}</div>
                                <div v-for="data in filterProvinceData"
                                    class=" cursor-pointer p-2 hover:text-text3 hover:underline"
                                    @click=" $router.push(`province`)">{{
                                        data.NameEn + ' - ' + data.NameKh }}</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="container">
            <div v-for="tour in tourData" class=" space-y-1" @click=" $router.push(`area/${tour.Id}`)" :key="tour.Id">
                <div
                    class=" bg-backGround2 shadow-md  w-full overflow-hidden  h-[200px] rounded-md  relative imageBox ">
                    <img class="h-full image w-full object-cover"
                        :src="getImage(`TourImages%5C%5CThumbnail`, tour.Thumbnail)!" alt="">
                </div>
                <div class=" text-center text-text3 cursor-pointer  py-2 w-full bg-backGround2 rounded-md">
                    <span><em>{{ tour.AreaName }}</em></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getImage } from '~/libraries/commonHelper';
import { Search, Close } from '@element-plus/icons-vue';
const { getAllProvinces, provinceData } = useProvince()
const { getAllTours, tourData } = useToursArea();

const searchValue = ref<string>('');
const isSearch = ref<boolean>(false);
const onSearch = () => {
    isSearch.value = true
}

const onInputValue = () => {
    console.log(searchValue.value);
}

const searchData = computed(() => {
    return tourData.value.filter(item => {
        return item.AreaName.toLowerCase().includes(searchValue.value.toLowerCase())
    })
})
const filterProvinceData = computed(() => {
    return provinceData.value.filter(item => {
        return item.NameEn.toLowerCase().includes(searchValue.value) ||
            item.NameKh.toLowerCase().includes(searchValue.value)
    })
})
const onCloseSearch = () => {
    isSearch.value = false;
    searchValue.value = '';
}

onMounted(() => {
    getAllTours();
    getAllProvinces();

});

</script>
<style lang="scss" scoped>
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

/* input search */
input {
    border: 1px solid gray;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 4px 5px;

    &::placeholder {
        color: var(--shadow);
    }

    &:focus {
        border: 1px solid var(--primary);
        outline: none;
    }
}

.input-form {
    height: 32px;
    width: 0;
    visibility: hidden;
    transition: all .3s linear;

    .search-list {
        overflow: hidden;
        border: 1px solid var(--background1);
        transition: all .3s linear;
    }
}

.isSearch {
    width: 60dvw;
    visibility: visible;

    .search-list {
        overflow-y: scroll;
        max-height: 300px;
    }

}

@media screen and (max-width: 500px) {
    .isSearch {
        width: 100%;
    }
}
</style>