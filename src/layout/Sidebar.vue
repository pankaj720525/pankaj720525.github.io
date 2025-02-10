<template>
    <div class="fixed inset-y-0 left-0 bg-white dark:bg-gray-800 border-r transition-transform duration-300 transform md:w-[250px] md:translate-x-0"
     :class="showSide ? 'translate-x-0 w-[250px] z-20' : '-translate-x-full'">
          
          <div class="h-[50px] flex justify-between items-center border-b px-4 dark:text-white">
              <span class="text-lg font-bold">Menu</span>
              <button @click="$emit('toggle-sidebar')" class="py-1 px-3 bg-gray-200 dark:bg-gray-700 rounded">
                  ✕
              </button>
          </div>

          <ul class="p-4 space-y-2">
              <li>
                <router-link to="/" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect x="14" y="3" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect x="3" y="14" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect x="14" y="14" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                  </svg>
                    <span class="ml-[10px] text-sm">Home</span>
                </router-link>
              </li>
              <li>
                <router-link to="/stock-average-calculator" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect x="7" y="7" width="10" height="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M7 14h.01M10 14h.01M13 14h.01M16 14h.01M7 17h.01M10 17h.01M13 17h.01M16 17h.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 7h2M16 9h2M16 11h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="ml-[10px] text-sm">Stock Average Calculator</span>
                </router-link>
              </li>
              <li>
                <router-link to="/emi-calculator" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect x="7" y="7" width="10" height="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M7 14h.01M10 14h.01M13 14h.01M16 14h.01M7 17h.01M10 17h.01M13 17h.01M16 17h.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 7h2M16 9h2M16 11h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="ml-[10px] text-sm">EMI Calculator</span>
                </router-link>
              </li>
              <li>
                <router-link to="/upcoming-events" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M8 2v4M16 2v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3 10h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle cx="12" cy="15" r="1.5" fill="currentColor"></circle>
                    </svg>
                    <span class="ml-[10px] text-sm">Upcoming Events</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about-us" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M8 2v4M16 2v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3 10h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle cx="12" cy="15" r="1.5" fill="currentColor"></circle>
                    </svg>
                    <span class="ml-[10px] text-sm">About Us</span>
                </router-link>
              </li>
              <li>
                <router-link to="/feedback" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer dark:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M8 2v4M16 2v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3 10h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle cx="12" cy="15" r="1.5" fill="currentColor"></circle>
                    </svg>
                    <span class="ml-[10px] text-sm">Feedback</span>
                </router-link>
              </li>
          </ul>
      </div>
</template>

<script> 
import full_logo from "../assets/mphelper.png";
import small_logo from "../assets/p-logo.png";


export default {
    data() {
        return {
            full_logo,
            small_logo
        }
    },
    props: {
        showSide: Boolean, // Receives from parent
    },
};
</script>

<style>
    .letter { font-family: Arial, sans-serif; font-weight: bold; font-size: 60px; fill: #007bff; }
</style>