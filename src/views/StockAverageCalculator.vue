<template>
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Stock Average Calculator</h1>
            <div class="grid grid-cols-2 gap-6">
                <div>
                    <h3 class="text-bold text-2md">First Buying</h3>
                    <div class="mt-3">
                        <label class="block text-gray-800">Quantity</label>
                        <input 
                            v-model.number="quantity1"
                            type="number"
                            class="w-full p-2 border border-gray-400 dark:bg-gray-900 rounded focus:ring focus:ring-blue-100"
                            />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-800">Buying Price Per Share</label>
                        <input 
                            v-model.number="price1"
                            type="number"
                            class="w-full p-2 border border-gray-400 dark:bg-gray-900 rounded focus:ring focus:ring-blue-100"
                            />
                    </div>
                    <div v-if="showResults" class="mt-3 font-bold"><span class="text-sm font-semibold">Invested amount in the 1st Buying:</span> <span class="text-teal-500">{{ firstInvestment.toLocaleString() }}</span></div>
                </div>
                <div>
                    <h3>Second Buying</h3>
                    <div class="mt-3">
                        <label class="block text-gray-800">Quantity</label>
                        <input 
                            v-model.number="quantity2"
                            type="number"
                            class="w-full p-2 border border-gray-400 dark:bg-gray-900 rounded focus:ring focus:ring-blue-100"
                            />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-800">Buying Price Per Share</label>
                        <input 
                            v-model.number="price2"
                            type="number"
                            class="w-full p-2 border border-gray-400 dark:bg-gray-900 rounded focus:ring focus:ring-blue-100"
                            />
                    </div>
                    <div v-if="showResults" class="mt-3"> <span class="text-sm font-semibold">Invested amount in the 2nd Buying:</span> <span class="font-bold text-teal-500">{{ secondInvestment.toLocaleString() }}</span></div>
                </div>
            </div>
            <!-- Result -->
            <div v-if="showResults" class="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded text-center">
                <h3 class="text-lg font-semibold">Investment Summary</h3>
                <p class="text-2xl font-bold">Total Investment: <span class="text-teal-500">{{ totalInvestment.toLocaleString() }}</span></p>
                <p class="text-2xl font-bold"> Average Price Per Share: <span class="text-teal-500">{{ averagePrice.toLocaleString() }}</span> </p>
            </div>
            <div class="mt-6 flex justify-between">
                <button
                    @click="clearFields"
                    class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                    Clear
                </button>
                <button
                    @click="manualCalculate"
                    class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                    >
                    Calculate Average
                </button>
            </div>
        </div>
        <div class="max-w-2xl dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md h-[100%]">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity1: null,
            price1: null,
            quantity2: null,
            price2: null,
            averagePrice: null,
            firstInvestment: null,
            secondInvestment: null,
            totalQuantity: null,
            totalInvestment: 0,
            showResults: false,
        };
    },
    computed: {
        isCalculationValid() {
            return this.quantity1 > 0 && this.price1 > 0 && this.quantity2 > 0 && this.price2 > 0;
        }
    },
    watch: {
        quantity1: "autoCalculate",
        price1: "autoCalculate",
        quantity2: "autoCalculate",
        price2: "autoCalculate",
    },
    methods: {
        autoCalculate() {
            if (this.isCalculationValid) {
                this.calculate();
            }
        },
        manualCalculate() {
            if (this.isCalculationValid) {
                this.calculate();
            } else {
                this.showResults = false;
            }
        },
        calculate() {
            this.firstInvestment = (this.quantity1 || 0) * (this.price1 || 0);
            this.secondInvestment = (this.quantity2 || 0) * (this.price2 || 0);
            this.totalInvestment = this.quantity1 * this.price1 + this.quantity2 * this.price2;
            this.averagePrice = this.totalInvestment / (this.quantity1 + this.quantity2);
            this.showResults = true;
        },
        clearFields() {
            this.quantity1 = null;
            this.price1 = null;
            this.quantity2 = null;
            this.price2 = null;
            this.averagePrice = 0;
            this.firstInvestment = null;
            this.secondInvestment = null;
            this.totalInvestment = 0;
            this.showResults = false;
        }
    }
}
</script>

<style>

</style>
