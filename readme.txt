node src/app.js

cURL:
-----


curl http://localhost:8080/api/products

curl "http://localhost:8080/api/products?limit=5"

curl http://localhost:8080/api/products/1

curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"Nuevo producto\",\"description\":\"Descripción del nuevo producto\",\"code\":\"ABC123\",\"price\":99.99,\"stock\":10,\"category\":\"Electrónicos\",\"thumbnails\":[\"ruta/imagen1.jpg\",\"ruta/imagen2.jpg\"]}" http://localhost:8080/api/products

curl -X PUT -H "Content-Type: application/json" -d "{\"title\":\"Nuevo título\",\"price\":199.99}" http://localhost:8080/api/products/1

curl -X DELETE http://localhost:8080/api/products/:pid


----


curl -X POST http://localhost:8080/api/carts

curl http://localhost:8080/api/carts/1

curl -X POST -H "Content-Type: application/json" -d "{\"quantity\": 1}" http://localhost:8080/api/carts/1/product/1
