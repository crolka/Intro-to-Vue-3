const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeItem(id){
            let index = this.cart.indexOf(id);
            if(index > -1){
                this.cart.splice(index, 1);
            }
        }
    },
    computed:{
        emptycart(){
            return this.cart.length === 0;
        }
    }
  })
  