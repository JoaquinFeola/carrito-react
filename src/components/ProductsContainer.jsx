import { Product } from "./Product";
import { Products } from "../helpers/Products";


export const ProductsContainer = ({productsCart, setProductCart}) => {


  return (
    <div className="products-container d-flex flex-wrap gap-3 justify-content-center m-3">
      {
        Products.map(producto => (
          <Product key={producto.id} product={producto} productsCart={productsCart} setProductCart={setProductCart} />
        ))
      }
    </div>
  )
}
