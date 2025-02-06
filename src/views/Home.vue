<template lang="">
    <div>
        <h1>Home</h1>
        <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Market and sectors</h2>
                <!-- <a href="#" class="text-blue-500 hover:underline">See All</a> -->
            </div>

            <div class="grid grid-cols-3 gap-4">
                <MarketCard
                    v-for="market in marketData"
                    :key="market.name"
                    :name="market.name"
                    :value="market.value"
                    :change="market.change"
                    :data="market.data"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DonutChart from '../components/DonutChart.vue';
import MarketCard from "../components/MarketCard.vue";

export default {
    components: {
        MarketCard
    },
    data() {
        return {
            marketData: [
                { name: "NIFTY 50", value: 23696.30, change: -0.18, data: [23600, 23750, 23800, 23700, 23696] },
                { name: "USD/INR", value: 87.61, change: 0.42, data: [86.9, 87.0, 87.2, 87.4, 87.61] },
                { name: "Gold", value: 8689.57, change: 0.98, data: [8600, 8620, 8650, 8670, 8689] },
                { name: "NIFTY 100 Largecap", value: 24271.35, change: -0.03, data: [24200, 24300, 24250, 24271] },
                { name: "NIFTY 100 Midcap", value: 54180.85, change: 0.68, data: [54000, 54100, 54200, 54180] },
                { name: "NIFTY 100 Smallcap", value: 17108.50, change: 1.85, data: [17000, 17050, 17100, 17108] },
                { name: "NIFTY Bank", value: 50343.05, change: 0.37, data: [50000, 50200, 50400, 50343] },
                { name: "NIFTY IT", value: 42888.30, change: 0.07, data: [42800, 42900, 42850, 42888] },
                { name: "NIFTY Pharma", value: 21868.50, change: 0.62, data: [21700, 21800, 21850, 21868] },
            ],
        };
    },
}
</script>

<style lang=""></style>