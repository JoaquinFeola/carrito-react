import { Product } from "./Product";
import { Products } from "../helpers/Products";
import { useState } from "react";


export const ProductsContainer = () => {

  const [productsCart, setProductCart] = useState([])

  return (
    <div className="products-container d-flex flex-wrap">
      {
        Products.map(producto => (
          <Product key={producto.id} product={producto} productsCart={productsCart} />
        ))
      }
    </div>
  )
}
