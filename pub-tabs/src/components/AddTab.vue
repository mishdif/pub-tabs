<template>
    <button v-on:click="openModal">Add Tab</button>
    <div v-show="isModalOpen" class="modal">
        <div class="modal-content">
            <form >
                <label for="client">Client</label>
                <input type="text" id="client" v-model="client">
                <button v-on:click="submitForm">Submit</button>
                <button v-on:click="closeModal">Close</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddTab",
    data() {
        return {
            isModalOpen: false,
            client: "",
        };
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        async submitForm() {
            const result = await axios.post("http://localhost:3000/tabs", {
               client: this.client,
               punches: 10
            });

            console.log("Submitted:", { client: this.client });
            console.log(result)
            this.closeModal()
        }
    }
};
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}

button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
}
</style>