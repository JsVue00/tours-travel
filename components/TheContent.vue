<template>
    <div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script t lang="ts" setup>

defineProps({
    content: {
        type: String,
        required: true
    }
})

</script>