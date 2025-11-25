const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Keeps feet warm',
      image: './assets/images/socks_green.jpg',
      inventory: 15,
      onSale: true
    };
  }
});