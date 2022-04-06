<script setup lang="ts">
import { Ref } from 'vue';

interface KnapsackItem {
    id: number;
    weight: number;
    value: number;
}

type KnapsackCompItem = KnapsackItem & { ratio: number; frac: number };

const knapsackData = ref('');
const maxW = ref(0);
const knapsackDisplay: Ref<KnapsackItem[]> = ref([]);
const knapsackDisplay01 = ref([]);
const knapsackDisplayFrac: Ref<KnapsackCompItem[]> = ref([]);
const knapsackMaxFrac = ref(0);
const knapsackMax01 = ref(0);

function calculateKnapsack() {
    // Split up the data and create weight/value objects
    const rows = knapsackData.value.split('\n');
    const kgridNums = rows.map((r) => r.split(',').map(Number));
    const kgrid: KnapsackItem[] = kgridNums.map((row, index) => ({
        id: index,
        weight: row[0],
        value: row[1],
    }));
    knapsackDisplay.value = kgrid;

    greedyFracKnapsack(kgrid);
    dp01Knapsack(kgrid);
}

function greedyFracKnapsack(kgrid: KnapsackItem[]) {
    // Sort by value/weight ratio descending
    const sortedGrid: KnapsackCompItem[] = kgrid
        .map((k) => ({ ...k, ratio: k.value / k.weight, frac: 0 }))
        .sort((a, b) => b.ratio - a.ratio);

    // Iterate through the sorted grid until we run out of residual capacity
    let rc = maxW.value;
    let maxV = 0;
    let i = 0;
    for (i = 0; i < sortedGrid.length; i++) {
        if (sortedGrid[i].weight <= rc) {
            sortedGrid[i].frac = 1;
            maxV += sortedGrid[i].value;
            rc -= sortedGrid[i].weight;
        } else {
            break;
        }
    }
    if (i < sortedGrid.length) {
        const remFrac = rc / sortedGrid[i].weight;
        sortedGrid[i].frac = remFrac;
        maxV += remFrac * sortedGrid[i].value;
    }

    // Store values
    knapsackDisplayFrac.value = sortedGrid;
    knapsackMaxFrac.value = maxV;
}

function dp01Knapsack(kgrid: KnapsackItem[]) {
    // Shift kgrid over by 1 and initialize empty dp grid
    const kgrid1 = [null, ...kgrid];
    const kdp = [...Array(kgrid1.length)].map(e => Array(maxW.value + 1).fill(0))

    // Perform DP iteratively
    for (let i = 1; i < kdp.length; i++) {
        for (let j = 1; j < maxW.value + 1; j++) {
            const temp = j >= kgrid1[i].weight ? kdp[i-1][j-kgrid1[i].weight] + kgrid1[i].value : 0; 
            kdp[i][j] = Math.max(kdp[i-1][j], temp);
        }
    }

    // Store values
    knapsackDisplay01.value = kdp;
    knapsackMax01.value = kdp[kgrid.length][maxW.value];
}
</script>

<template>
    <div class="root center">
        <h1>Data Structures & Algorithms Calculators</h1>
        <h2>0-1 and Fractional Knapsack</h2>
        <p>
            Type in your objects as [weight, value] pairs (with each pair on its own line), enter
            the max weight, and press the compute button
        </p>
        <textarea placeholder="w,v" v-model="knapsackData" style="width: 10rem"></textarea>
        <input type="number" v-model="maxW" placeholder="Max Weight" />
        <button id="compute-knapsack" @click="calculateKnapsack">Compute!</button>
        <table>
            <tr>
                <td class="table-head">Object #</td>
                <td v-for="item in knapsackDisplay" :key="item.id">{{ item.id }}</td>
            </tr>
            <tr>
                <td class="table-head">Weight</td>
                <td v-for="item in knapsackDisplay" :key="item.id">{{ item.weight }}</td>
            </tr>
            <tr>
                <td class="table-head">Value</td>
                <td v-for="item in knapsackDisplay" :key="item.id">{{ item.value }}</td>
            </tr>
        </table>
        <p class="center-p"><b>Fractional Knapsack (Greedy Algorithm)</b></p>
        <table>
            <tr>
                <td class="table-head">Object #</td>
                <td v-for="item in knapsackDisplayFrac" :key="item.id">{{ item.id }}</td>
            </tr>
            <tr>
                <td class="table-head">Weight</td>
                <td v-for="item in knapsackDisplayFrac" :key="item.id">{{ item.weight }}</td>
            </tr>
            <tr>
                <td class="table-head">Value</td>
                <td v-for="item in knapsackDisplayFrac" :key="item.id">{{ item.value }}</td>
            </tr>
            <tr>
                <td class="table-head">V/W Ratio</td>
                <td v-for="item in knapsackDisplayFrac" :key="item.id">
                    {{ item.ratio.toFixed(3) }}
                </td>
            </tr>
            <tr>
                <td class="table-head">Fraction</td>
                <td v-for="item in knapsackDisplayFrac" :key="item.id">
                    {{ item.frac % 1 == 0 ? item.frac : item.frac.toFixed(3) }}
                </td>
            </tr>
        </table>
        <p class="center-p">Max Value: {{ knapsackMaxFrac }}</p>
        <p class="center-p"><b>0-1 Knapsack (DP Algorithm)</b></p>
        <table>
            <tr>
                <th>Weight</th>
                <th>0</th>
                <th v-for="i in maxW" :key="i">{{i}}</th>
            </tr>
            <tr v-for="(row, index) in knapsackDisplay01" :key="index">
                <td class="table-head">Object {{index}}</td>
                <td v-for="(item, index1) in row" :key="index1">{{item}}</td>
            </tr>
        </table>
        <p class="center-p">Max Value: {{ knapsackMax01 }}</p>
    </div>
</template>

<style>
h1 {
    width: 100%;
    word-wrap: break-word;
}

h2,
p {
    text-align: center;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
