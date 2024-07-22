<template>
    <section class="min-h-screen flex flex-col px-4">
        <PageHeader title="Skills" />
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '../PageHeader.vue';

defineComponent({
    components: { 
        PageHeader,
    }
})

</script>

<style scoped>
</style>