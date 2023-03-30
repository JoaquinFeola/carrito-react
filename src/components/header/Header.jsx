import { ProductsHeader } from "./ProductsHeader"


export const Header = () => {

  return (
    <header className="header ">
        <h3>JoaMark</h3>
        <div 
          className="header__btns-container flex-grow-1">
            <div className="header__cart-btn-container">
                <button 
                    className="cart__btn__container-cart-btn">
                    <i className="bi bi-cart4"></i>
                    <span className="badge text-bg-secondary"></span>
                </button>
                <p className="cart__btn__container__cart__btn-text">Carrito</p>
            </div>
        </div>
        <ProductsHeader/>
    </header>
  )
}
