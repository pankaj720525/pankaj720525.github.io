<template>
    <div class="w-screen h-screen flex overflow-x-hidden">
        <div class="w-[300px] h-full bg-white">
            <div class="h-[50px] bg-white flex justify-start items-center border-r-[1px] border-gray-200 border-b-[1px]">
                <div class="px-[20px]">
                    <h3 class="font-bold text-md">Market Updates</h3>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-white">
                <div class="px-[20px] flex flex-col space-y-[10px] mt-[20px]">
                    <div class="h-auto">
                        <route-link to="/dashboard" class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                <rect x="14" y="3" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                <rect x="3" y="14" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                <rect x="14" y="14" width="7" height="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                            </svg>
                            <span class="ml-[10px] text-sm">Dashboard</span>
                        </route-link>
                        <route-link>
                            <div class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v4m0 0l3-3"></path>
                                </svg>
                                <span class="ml-[10px] text-sm">Stock Average Calculator</span>
                            </div>
                        </route-link>
                        <route-link>
                            <div class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                    <rect x="7" y="7" width="10" height="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                    <path d="M7 14h.01M10 14h.01M13 14h.01M16 14h.01M7 17h.01M10 17h.01M13 17h.01M16 17h.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M16 7h2M16 9h2M16 11h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span class="ml-[10px] text-sm">EMI Calculator</span>
                            </div>
                        </route-link>
                        <route-link>
                            <div class="inline-flex relative items-center py-[10px] w-full rounded-md px-[10px] hover:bg-gray-700 hover:text-white cursor-pointer">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                                    <path d="M8 2v4M16 2v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3 10h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <circle cx="12" cy="15" r="1.5" fill="currentColor"></circle>
                                </svg>
                                <span class="ml-[10px] text-sm">Upcoming Events</span>
                            </div>
                        </route-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-white">
            <div class="h-[50px] bg-white px-[20px] flex justify-between items-center">
                <div class="hidden">
                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="h-[calc(100%-50px)] bg-contentBgColor">
                <div class="px-[20px] py-[20px]">
                    <h1>Dashboard</h1>
                    <p>Welcome to the dashboard!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard'
}
</script>