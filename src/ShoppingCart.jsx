import { useContext, useState } from "react"
import { Header } from "./components/header/Header"
import { ProductsContainer } from "./components/products/ProductsContainer"

export const ShoppingCart = () => {
  const [ productsCart, setProductsCart ] = useState([]);
  return (
    <div>

        <Header productsCart={{ productsCart: productsCart, setProductsCart: setProductsCart }}/>
        <ProductsContainer productsCart={{ productsCart: productsCart, setProductsCart: setProductsCart }}/>
    </div>
  )
}
