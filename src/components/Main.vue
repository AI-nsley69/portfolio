<template>
    <section class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden">
        <!-- Overlay -->
         <Email />
        <!-- Site components -->
        <Introduction />
        <!-- Work experience -->
        <Projects />
        <!-- Skills -->
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Introduction from './Main/Introduction.vue';
import Projects from './Main/Projects.vue';
import Email from './Email.vue';

defineComponent({
    components: {
        Introduction,
        Projects,
        Email,
    }
})
</script>

<style scoped>
section {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
section::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>
