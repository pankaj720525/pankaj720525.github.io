<script>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

export default{
  name: 'App',
  components:{
      Sidebar,
      Navbar,
  },
  data() {
    return {
      showSide: true, // Sidebar state is now managed here
    };
  },
  methods: {
    toggleSidebar() {
      this.showSide = !this.showSide;
    },
  },
}
</script>

<template>
  <div class="w-screen h-screen flex overflow-x-hidden dark:bg-gray-900 dark:text-white">
        <Sidebar :showSide="showSide" />
        <div class="w-full h-full">
            <Navbar @toggle-sidebar="toggleSidebar" />
            <div class="h-[calc(100%-50px)]">            
                <div class="px-[20px] py-[20px]">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>