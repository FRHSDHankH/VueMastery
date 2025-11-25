const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Keeps feet warm',
      image: './assets/images/socks_green.jpg',
      inventory: 15,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ]
    };
  }
});