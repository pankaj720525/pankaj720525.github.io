<template>
    <!-- Main Content -->
    <div class="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all">
        <h1 class="text-xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            Welcome to <span class="font-semibold">PM Helpers</span>! We provide powerful tools to simplify
            financial and stock calculations, making your decision-making process easier.
        </p>

        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Our Mission</h2>
        <p class="text-gray-700 dark:text-gray-300 text-sm">
            Our goal is to create intuitive financial calculators that help individuals and businesses
            efficiently manage their finances and investments.
        </p>

        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">What We Offer</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
            <li>Stock Average Calculator</li>
            <li>EMI Calculator</li>
            <li>Upcoming Events Tracker</li>
            <li>Financial Insights</li>
        </ul>

        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Contact Us</h2>
        <p class="text-gray-700 dark:text-gray-300 text-sm">
            Have questions or suggestions? We value your feedback and continuously strive to improve our platform.
        </p>

        <!-- Disclaimer Section -->
        <div
            class="mt-6 p-4 border border-sky-500 bg-sky-100 dark:bg-sky-900 dark:border-sky-400 rounded-md">
            <h3 class="text-lg font-semibold text-sky-700 dark:text-sky-300">Disclaimer</h3>
            <p class="text-sky-800 dark:text-sky-200 text-sm mt-2 text-sm">
                The tools and calculators provided on this platform are for **educational and informational purposes
                only**.
                They should not be considered as financial or investment advice. Please consult a professional before
                making
                any financial decisions.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>