<template lang="">
    <div class="h-[50px] bg-white dark:bg-gray-800 px-[20px] flex justify-between items-center">
        <div class="cursor-pointer w-[30px]" @click="$emit('toggle-sidebar')">
            <div :class="{ 'dark-mode': isDarkMode }">
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect class="menu-icon" x="3" y="6" width="18" height="2"/>
                    <rect class="menu-icon" x="3" y="11" width="18" height="2"/>
                    <rect class="menu-icon" x="3" y="16" width="18" height="2"/>
                </svg>
            </div>
        </div>
        <div :class="{ 'dark': isDarkMode }">
            <DarkModeSwitch />
        </div>
    </div>
</template>
<script>
import DarkModeSwitch from '../components/Switch.vue';

export default {
    components: {
        DarkModeSwitch,
    },
}
</script>
<style lang="">
</style>