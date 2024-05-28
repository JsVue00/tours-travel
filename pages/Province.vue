<template>
    <div class="flex justify-center flex-wrap w-full text-text1">
        <div v-for="province in provinceData" class=" px-4">
            <div> {{ province.NameKh }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>

const { getAllProvinces,
    provinceData, } = useProvince();

onMounted(() => getAllProvinces())
</script>