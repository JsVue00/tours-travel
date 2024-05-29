<template>
    <el-dropdown trigger="click">
        <el-button size="small">
            <img class="object-fill w-[24px] h-auto" :src="language?.icon" alt="" /><el-icon
                class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu style="width: 100px;" v-for="(lang, index) in languages" :key="index">
                <el-dropdown-item @click="onChangeLanguage('en')">
                    <img class="object-fill w-[24px] h-auto mr-1" :src="lang.icon" alt="" />
                    {{ lang.label }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
const { language, languages,
    onChangeLanguage } = useHeaderComponent();
</script>
<style scoped>
button {
    background-color: transparent !important;
    border: none !important;
}
</style>