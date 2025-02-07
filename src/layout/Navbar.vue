<template lang="">
    <div class="w-full h-[50px] bg-white dark:text-white dark:bg-gray-900 flex items-center px-6 fixed top-0 z-20 justify-between">
        <button @click="$emit('toggle-sidebar')" class="md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <span class="text-lg font-semibold ml-2 flex items-center">
            <img :src="small_logo" class="duration-500" alt="logo" width="40">
            <div class="ml-1 text-[1.4rem] font-bold dark:text-white hidden sm:block">PM Helpers</div>
        </span>

        <div class="flex items-center gap-4">
            <Clock />
            <DarkModeSwitch :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
// Dark Mode Toggle
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');
import DarkModeSwitch from '../components/Switch.vue';
import Clock from "../components/Clock.vue";
import small_logo from "../assets/p-logo.png";

export default {
    data() {
        return {
            small_logo,
            isDarkMode: localStorage.getItem('darkMode') === 'true' // Move isDarkMode here
        };
    },
    components: {
        Clock,
        DarkModeSwitch,
    },
    methods: {
        toggleDarkMode () {
            isDarkMode.value = !isDarkMode.value;
            localStorage.setItem('darkMode', isDarkMode.value);
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            if (prefersDarkScheme.matches) {
                document.documentElement.classList.toggle("light");
            } else {
                document.documentElement.classList.toggle("dark");
            }
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        }
    },
    mounted() {
        document.documentElement.classList.toggle('dark', this.isDarkMode);
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }
}

</script>
<style lang="">
</style>