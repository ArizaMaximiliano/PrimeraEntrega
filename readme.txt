node src/app.js

Hice las pruebas con cURL en el cmd.

cURL:
-----


curl http://localhost:8080/api/products

curl "http://localhost:8080/api/products?limit=2"

curl http://localhost:8080/api/products/1

curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"Nuevo producto\",\"description\":\"Descripción del nuevo producto\",\"code\":\"ABC000\",\"price\":200,\"stock\":10,\"category\":\"Instrumentos\",\"thumbnails\":[\"img/imagen1.jpg\",\"img/imagen2.jpg\"]}" http://localhost:8080/api/products

curl -X PUT -H "Content-Type: application/json" -d "{\"title\":\"Actualizacion de titulo\",\"price\":500}" http://localhost:8080/api/products/1

curl -X DELETE http://localhost:8080/api/products/:pid


----


curl -X POST http://localhost:8080/api/carts

curl http://localhost:8080/api/carts/1

curl -X POST -H "Content-Type: application/json" -d "{\"quantity\": 1}" http://localhost:8080/api/carts/1/product/1
