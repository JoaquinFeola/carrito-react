import { Product } from "./Product";
import { Products } from "../helpers/Products";


export const ProductsContainer = () => {
  return (
    <div className="products-container d-flex flex-wrap">
      {
        Products.map(producto => (
          <Product key={producto.id} producto={producto} />
        ))
      }
    </div>
  )
}
