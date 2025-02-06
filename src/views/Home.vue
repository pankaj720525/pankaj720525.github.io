<template lang="">
    <div>
        <div class="p-6">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Welcome to PM Helpers</h1>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
            PM Helpers is your go-to tool for managing essential calculations and event tracking efficiently. 
            Whether you need to calculate stock averages, EMI, or keep track of upcoming events, we’ve got you covered.
            </p>

            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl dark:text-teal-400 font-semibold text-gray-700">📊 Stock Average Calculator</h2>
                    <p class="text-gray-500 dark:text-gray-400 mt-2">
                    Quickly determine your stock average price when buying shares at different price points.
                    </p>
                </div>

                <div class="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl dark:text-teal-400 font-semibold text-gray-700">📅 Upcoming Events</h2>
                    <p class="text-gray-500 dark:text-gray-400 mt-2">
                    Never miss an important event again. Keep track of your schedules effortlessly.
                    </p>
                </div>

                <div class="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl dark:text-teal-400 font-semibold text-gray-700">💰 EMI Calculator</h2>
                    <p class="text-gray-500 dark:text-gray-400 mt-2">
                    Calculate your monthly loan payments with ease and plan your finances better.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
}
</script>

<style lang=""></style>