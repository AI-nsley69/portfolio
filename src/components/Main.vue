<template>
    <section class="flex flex-1 flex-col justify-start overflow-y-scroll overflow-x-hidden">
        <!-- Overlay -->
         <Email />
        <!-- Site components -->
        <Introduction id="home"/>
        <WorkExperience id="work-experience" />
        <Projects id="projects"/>
        <Skills id="skills" />
        <!-- Footer -->
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Email from './Email.vue';
import Introduction from './Main/Introduction.vue';
import WorkExperience from './Main/WorkExperience.vue';
import Projects from './Main/Projects.vue';
import Skills from './Main/Skills.vue'

defineComponent({
    components: {
        Email,
        Introduction,
        WorkExperience,
        Projects,
        Skills,
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
