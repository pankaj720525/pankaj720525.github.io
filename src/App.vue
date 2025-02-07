<script>
import { RouterView } from 'vue-router'
import Sidebar from './layout/Sidebar.vue';
import Navbar from './layout/Navbar.vue';
import Footer from './layout/Footer.vue';

export default{
  name: 'App',
  components:{
      Sidebar,
      Navbar,
      Footer,
  },
  data() {
    return {
      showSide: false, // Sidebar state is now managed here
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
  <div class="h-screen flex flex-col">
    
    <!-- Navbar (Sticky & Separate from Sidebar) -->
    <Navbar :showSide="showSide" @toggle-sidebar="toggleSidebar" />
    
    <!-- Main Layout (Sidebar + Content) -->
    <div class="flex flex-1 pt-[50px]">
      
      <!-- Sidebar -->
      <Sidebar :showSide="showSide" @toggle-sidebar="toggleSidebar" />
      <!-- <Sidebar :onShowSide="toggleSidebar" :onToggleSidebar="toggleSidebar" /> -->

      <!-- Overlay for Mobile Sidebar -->
      <div v-if="showSide" @click="toggleSidebar" class="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"></div>

      <!-- Main Content -->
      <div class="flex-1 p-6 ml-0 md:ml-[250px] transition-all duration-300 dark:bg-black">
          <RouterView/>
      </div>
      
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>