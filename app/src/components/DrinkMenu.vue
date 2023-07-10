<template>
  <div>
    <h2>ドリンクメニュー</h2>
    <div class="d-flex flex-column align-items-center">
      <button
        v-for="(drink, index) in drinks"
        :key="drink.id"
        :class="index % 2 === 0 ? 'btn btn-primary btn-block mb-3' : 'btn btn-secondary btn-block mb-3'"
        @click="confirmOrder(drink)"
      >
        {{ drink.name }}
      </button>
    </div>
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
        confirmOrder(drink) {
            if (confirm(`${drink.name}を注文しますか？`)) {
                alert(`${drink.name}を注文しました`);
            }
        }
    }
}
</script>