const express = require('express');
const router = express.Router();
const cartManager = require('../managers/cartManager');

// Crear un nuevo carrito
router.post('/', (req, res) => {
  const newCart = cartManager.createCart();
  res.json(newCart);
});

// Lista de productos del carrito por su ID (problemas con validar id use parseint)
router.get('/:cid', (req, res) => {
    const cartId = parseInt(req.params.cid, 10); 
    const cart = cartManager.getCartById(cartId);
  
    if (cart) {
      res.json(cart.products);
    } else {
      res.status(404).json({ error: 'Carrito no encontrado' });
    }
  });
  

// Agregar un producto al carrito
router.post('/:cid/product/:pid', (req, res) => {
    const cartId = parseInt(req.params.cid, 10);
    const productId = req.params.pid;
    const quantity = req.body.quantity;
  
    const updatedCart = cartManager.addProductToCart(cartId, productId, quantity);
  
    if (updatedCart) {
      res.json(updatedCart);
    } else {
      res.status(404).json({ error: 'Carrito/Producto no encontrado' });
    }
  });

module.exports = router;
