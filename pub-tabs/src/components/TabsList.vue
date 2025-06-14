<template>
    <table>
        <tr class="tabel-header">
            <td>Client</td>
            <td>Punches</td>
        </tr>
        <tr v-for="item in tabs" :key="item.id">
            <td>{{ item.client }}</td>
            <td v-on:click="changePunches(item)">{{ item.punches }}</td>
        </tr>
    </table>
</template>

<script>
import axios from "axios"
export default {
    name: "TabsList",
    data() {
        return {
            tabs:[]
        }
    }, 
    methods: {
        async changePunches(item) {
            let updated_punches = item.punches - 1;
            const result = await axios.put("http://localhost:3000/tabs/"+item.id, {
               client: item.client,
               punches: updated_punches
            });
            
            console.log(result);
            this.loadTabs();
        },
        async loadTabs() {
            let result = await axios.get("http://localhost:3000/tabs");
            this.tabs = result.data;
        }
    },
    async mounted() {
        this.loadTabs();
    }
}
</script>

<style>
table {
    table-layout: auto;
    width: 100%;
    font-size: 24px;
}
.tabel-header td {
    background: skyblue;
    color: white;
    font-weight: bold;
}
</style>