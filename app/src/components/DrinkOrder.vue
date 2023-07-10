<template>
    <div>
        <h2>注文フォーム</h2>
        <form @submit.prevent="placeOrder">
            <label for="name">お名前:</label>
            <input type="text" id="name" v-model="customerName" required>
            <br>
            <label for="drink">選択したドリンク</label>
            <input type="text" id="drink" v-model="selectedDrink" disabled>
            <br>
            <button type="submit">注文する</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customerName: '',
            selectedDrink: ''
        };
    },
    methods: {
        placeOrder() {
            console.log("selected drink: " + this.selectedDrink);
        }
    }
};
</script>