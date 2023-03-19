import { useState } from "react"
import { CartHeader } from "./components/CartHeader.jsx"
import { ProductsContainer } from "./components/ProductsContainer"

export const ShoppingCart = () => {
  const [productsCart, setProductCart] = useState([]);

  return (
    <div>
        <CartHeader productsCart={productsCart} setProductCart={setProductCart}/>
        <ProductsContainer productsCart={productsCart} setProductCart={setProductCart}/>
    </div>
  )
}
