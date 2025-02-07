<script>
import { RouterView } from 'vue-router'
import Sidebar from './layout/Sidebar.vue';
import Navbar from './layout/Navbar.vue';

export default {
    name: 'App',
    components: {
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
    <div class="h-screen flex flex-col">

        <!-- Main Content Wrapper -->
        <div class="flex flex-1">

            <!-- Sidebar -->
            <div class="h-full bg-white dark:bg-gray-800 border-r duration-300 flex flex-col"
                :class="showSide ? 'w-[300px]' : 'w-[80px]'">

                <!-- Sidebar Header -->
                <div class="h-[50px] flex justify-start items-center border-b px-4">
                    <span v-if="showSide" class="font-bold">My App</span>
                </div>

                <!-- Sidebar Content -->
                <div class="flex-1 overflow-y-auto px-[20px] mt-[20px]">
                    <ul>
                        <li class="py-2"><a href="#" class="block">Home</a></li>
                        <li class="py-2"><a href="#" class="block">Profile</a></li>
                        <li class="py-2"><a href="#" class="block">Settings</a></li>
                    </ul>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 p-6">
                <div class="w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-all">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Welcome to <span class="font-semibold">PM Helpers</span>! We provide powerful tools to simplify
                        financial and stock calculations, making your decision-making process easier.
                    </p>

                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Our Mission</h2>
                    <p class="text-gray-700 dark:text-gray-300">
                        Our goal is to create intuitive financial calculators that help individuals and businesses
                        efficiently manage their finances and investments.
                    </p>

                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">What We Offer</h2>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Stock Average Calculator</li>
                        <li>EMI Calculator</li>
                        <li>Upcoming Events Tracker</li>
                        <li>Financial Insights</li>
                    </ul>

                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Contact Us</h2>
                    <p class="text-gray-700 dark:text-gray-300">
                        Have questions or suggestions? We value your feedback and continuously strive to improve our
                        platform.
                    </p>

                    <!-- Disclaimer Section -->
                    <div
                        class="mt-6 p-4 border border-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:border-yellow-400 rounded-md">
                        <h3 class="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Disclaimer</h3>
                        <p class="text-yellow-800 dark:text-yellow-200 text-sm mt-2">
                            The tools and calculators provided on this platform are for **educational and informational
                            purposes only**.
                            They should not be considered as financial or investment advice. Please consult a
                            professional before making
                            any financial decisions.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <!-- Full-Width Footer -->
        <div class="w-full h-[50px] bg-gray-200 dark:bg-gray-900 flex justify-center items-center border-t">
            <span class="text-gray-600 dark:text-gray-400 text-sm">© 2025 My App - All Rights Reserved</span>
        </div>

    </div>
</template>