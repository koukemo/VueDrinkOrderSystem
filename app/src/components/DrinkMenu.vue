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
                this.selectDrink(drink)
            }
        },

        selectDrink(drink) {
            const order = {
            drink_id: drink.id,
            drink_name: drink.name
        };

        // バックエンドのAPIに注文データを送信
        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                // 注文成功の処理などを行う
            })
            .catch(error => {
                console.error(error);
                // エラーハンドリングなどを行う
            });
        }
    }

    
}
</script>