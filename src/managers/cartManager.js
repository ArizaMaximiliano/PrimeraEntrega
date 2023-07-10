const fs = require('fs');
const carritoFilePath = './src/files/carrito.json';

class CartManager {
  constructor() {
    this.carts = [];
    this.cartId = 1;
    this.loadCart();
  }

  loadCart() {
    try {
      const data = fs.readFileSync(carritoFilePath, 'utf8');
      this.carts = JSON.parse(data);
    } catch (err) {
      this.saveCart();
    }
  }

  saveCart() {
    const data = JSON.stringify(this.carts, null, 2);
    fs.writeFileSync(carritoFilePath, data, 'utf8');
  }

  createCart() {
    const newCart = {
      id: this.cartId++,
      products: []
    };

    this.carts.push(newCart);
    this.saveCart();

    return newCart;
  }

  getCartById(cartId) {
    return this.carts.find(cart => cart.id === cartId);
  }

  addProductToCart(cartId, productId, quantity) {
    const cart = this.getCartById(cartId);

    if (!cart) {
      return null;
    }

    const existingProduct = cart.products.find(product => product.id === productId);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      const newProduct = {
        id: productId,
        quantity: quantity
      };

      cart.products.push(newProduct);
    }

    this.saveCart();

    return cart;
  }
}

module.exports = new CartManager();
