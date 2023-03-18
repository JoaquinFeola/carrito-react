import { ProductsCartComp } from "./ProductsCartComp"

export const CartHeader = () => {
  return (
    <header className="bg-dark p-2 d-flex justify-content-end header">
        <button className="cart-btn text-white">
            <i className="bi bi-cart"></i>
        </button>
        <ProductsCartComp/>
    </header>
  )
}
