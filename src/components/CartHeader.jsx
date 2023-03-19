import { ProductsCartComp } from "./ProductsCartComp"

export const CartHeader = ({ productsCart, setProductCart }) => {
  const openProductsCart = () => {
      const productsCartFrame = document.querySelector('.div-products-container');
      console.log(productsCartFrame);
  };

  return (
    <header className="bg-dark p-2 d-flex justify-content-end header">
        <button className="cart-btn text-white" onClick={openProductsCart}>
            <i className="bi bi-cart"></i>
        </button>
      <ProductsCartComp productsCart={productsCart} setProductCart={setProductCart}/>
    </header>
  )
}
