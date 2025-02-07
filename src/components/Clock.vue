<template>
    <div class="flex items-center space-x-1 font-mono text-sm font-bold">
      <!-- Hours -->
      <transition name="slide-down" mode="out-in">
        <span :key="hours">{{ hours }}</span>
      </transition> :
  
      <!-- Minutes -->
      <transition name="slide-down" mode="out-in">
        <span :key="minutes">{{ minutes }}</span>
      </transition> :
  
      <!-- Seconds -->
      <transition name="slide-down" mode="out-in">
        <span :key="seconds">{{ seconds }}</span>
      </transition>
  
      <!-- AM/PM -->
      <transition name="fade" mode="out-in">
        <span :key="ampm" class="ml-1 uppercase">{{ ampm }}</span>
      </transition>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const hours = ref("");
      const minutes = ref("");
      const seconds = ref("");
      const ampm = ref("");
  
      const updateClock = () => {
        const now = new Date();
        let h = now.getHours();
        ampm.value = h >= 12 ? "PM" : "AM";
        hours.value = String(h % 12 || 12).padStart(2, "0");
        minutes.value = String(now.getMinutes()).padStart(2, "0");
        seconds.value = String(now.getSeconds()).padStart(2, "0");
      };
  
      onMounted(() => {
        updateClock(); // Initial render
        setInterval(updateClock, 1000); // Update every second
      });
  
      return { hours, minutes, seconds, ampm };
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  