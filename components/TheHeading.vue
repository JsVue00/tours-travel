<template>
    <div class="h-[50px] z-[999] fixed top-0  w-full gap-2 flex justify-center items-center bg-backGround1 shadow-lg">
        <NuxtLink v-for="tab in menuTab" :to="tab.tabUrl" class="px-2"
            :class="IsActiveTab(tab.tabUrl) ? 'tab-actived' : 'text-text1'">
            {{ $t(tab.tabName) }}
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const { menuTab, IsActiveTab } = useHeaderComponent()
</script>

<style>
.tab-actived {
    color: var(--primary);
    font-weight: 600;
    position: relative;
}

.tab-actived::before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 100%;
    height: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: width .5s ease-in-out;
    background: var(--primary)
}

@keyframes width {
    0% {
        width: 5px;
        opacity: 0;
    }

    100% {
        width: 100%;
        opacity: 1;
    }
}
</style>