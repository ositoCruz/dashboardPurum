import { useEffect, useState } from "react";
import ProductList from "./productList";
// import style from "./product.module.css"



export default function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((respuesta) => respuesta.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">Todos los Productos en nuestra base de datos</h2>
          <table   className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                
                <th>Precio</th>
                <th></th>
                <th></th>
                <th>Stock</th>
              </tr>
            </thead>
            {products.map((product) => (
              <ProductList products={product} key={product.id} />
            ))}
          </table>
        </section>
      </main>
    </>
  );
}


// <!DOCTYPE html>
// <html lang="es">
// <%- include('../partials/head.ejs') %>
// <body>
//     <%- include('../partials/header.ejs') %>
//     <%- include('../partials/search.ejs') %>
//     <main>
//         <section class="productos">
//             <div class="div_title">
//                 <h1>Lista de Productos</h1>
//             </div>
//             <div class="div-products">
//                 <table>
//                     <thead>
//                         <th>Categoria</th>
//                         <th>Imagen</th>
//                         <th>Nombre</th>
//                         <th>Descripcion</th>
//                         <th>Precio</th>
//                         <th>Stock</th>
//                         <th>Acciones</th>
//                     </thead>
//                     <tbody>
//                         <% productosdata.forEach(product => { %>
//                             <tr>
//                              
//                             </tr>
//                         <% }); %>
//                     </tbody>
//                 </table>
//             </div>
//         </section>
//     </main>

//     <%- include('../partials/footer.ejs') %>
// </body>
// </html>