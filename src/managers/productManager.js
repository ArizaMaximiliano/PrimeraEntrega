const fs = require('fs');
const productosFilePath = './src/files/productos.json';

class ProductManager {
  constructor() {
    this.products = [];
    this.nuevoID = 1;
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(productosFilePath, 'utf8');
      this.products = JSON.parse(data);
    } catch (err) {
      this.saveProducts();
    }
  }

  saveProducts() {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(productosFilePath, data, 'utf8');
  }

  addProduct(title, description, code, price, stock, category, thumbnails) {
    const productoExiste = this.products.find((producto) => producto.code === code);

    if (productoExiste) {
      console.log("Error el producto tiene un codigo existente");
      return null;
    }

    if (!title || !description || !price || !code || !stock || !category) {
      console.log("El producto tiene un error. Todos los campos son obligatorios");
      return null;
    } else {
      const producto = {
        id: this.nuevoID++,
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbnails
      };

      this.products.push(producto);
      this.saveProducts();

      console.log("El producto fue agregado correctamente");
      return producto;
    }
  }

  getProduct() {
    return this.products;
  }

  getProducts(limit) {
    if (limit) {
      return this.products.slice(0, limit);
    } else {
      return this.products;
    }
  }

  getProductById(id) {
    const productId = this.products.find((producto) => producto.id === parseInt(id));
  
    if (!productId) {
      console.log("ID no encontrado");
    } else {
      console.log("El producto del ID fue encontrado");
    }
  
    return productId;
  }

  updateProduct(id, update) {
    const product = this.getProductById(id);

    if (!product) {
      return null;
    }

    Object.assign(product, update);
    this.saveProducts();

    return product;
  }

  deleteProduct(id) {
    const productId = parseInt(id);
    const productIndex = this.products.findIndex((product) => product.id === productId);
  
    if (productIndex !== -1) {
      const deletedProduct = this.products.splice(productIndex, 1)[0];
      this.saveProducts();
      console.log("El producto fue eliminado correctamente");
      return deletedProduct;
    } else {
      console.log("El producto no fue encontrado");
      return null;
    }
  }
}

module.exports = new ProductManager();
