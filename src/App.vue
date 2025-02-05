<script>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

export default{
  name: 'App',
  components:{
      Sidebar,
      Navbar,
  }
}
</script>

<template>
  <div class="w-screen h-screen flex overflow-x-hidden">
        <Sidebar />
        <div class="w-full h-full bg-white">
            <Navbar />
            <div class="h-[calc(100%-50px)] bg-contentBgColor">                
                <div class="px-[20px] py-[20px]">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

