const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  computed:{
    cartLength(){
      return this.cart.length === 0;
    }
  },
  methods: {
    updateCart(id) {
      console.log(
        'reacted to in the addToCart click'
      );
      this.cart.push(id);
    },
    removeItemCart(id) {
      console.log(
        'id: ' + id
      );
      let index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});