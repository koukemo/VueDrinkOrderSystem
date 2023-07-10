<template>
    <div>
        <h2>ドリンクメニュー</h2>
        <ul>
            <li v-for="drink in drinks" :key="drink.id" @click="selectDrink(drink)">{{ drink.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drinks: [
                {id: 1, name: '緑茶'},
                {id: 2, name: 'ほうじ茶'},
                {id: 3, name: '水'},
                {id: 4, name: 'コーヒー'},
                {id: 5, name: '烏龍茶'} 
            ]
        };
    },
    methods: {
        selectDrink(drink) {
            print("selected:" + drink.name)
        }
    }
}
</script>