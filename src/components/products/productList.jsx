export default function ProductList(props){
    return(
        <>
            <tr>
                <td>{props.products.producto_descripcion}</td>
                <td>{props.products.producto_detalle}</td>
                <td>{props.products.producto_precio}</td>
                <td></td>
                <td></td>
                <td>{props.products.producto_stock}</td>
            </tr>
        </>
    )
}



//    <td><%= product.categoria.categoria_descripcion %></td>
//                                 <td><img src="/images/<%= product.producto_imagen %>" alt="<%= product.producto_imagen %>" class="product-image"></td>
//                                 <td><%= product.producto_descripcion %></td>
//                                 <td><%= product.producto_detalle %></td>
//                                 <td>$<%= product.producto_precio %></td>
//                                 <td><%= product.producto_stock %></td>
//                                 <td class="product_acciones">
//                                     <a href="/products/details/<%= product.producto_id %>"><button class="productacc"><i class="fa-solid fa-circle-info"></i></button></a>
//                                     <a href="/products/editproduct/<%= product.producto_id %>"><button class="productacc"><i class="fa-solid fa-square-pen"></i></button></a>
//                                     <form action="/products/producto/eliminar/<%= product.producto_id %>" method="post" onsubmit="return confirm('¿Estás seguro de eliminar este producto?');">
//                                         <button class="productacc" type="submit" class="btn-delete-product"><i class="fa-solid fa-trash-can"></i></button>
//                                     </form>
//                                 </td>