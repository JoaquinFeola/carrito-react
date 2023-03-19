import { Products } from "../helpers/Products";
import { ProductsCartComp } from "./ProductsCartComp";


export const Product = ({product, productsCart, setProductCart}) => {
  const { id, name, price, amount } = product;
  
  const AddProductToCart = () => {
    const findProductIndex = productsCart.findIndex( prod => prod.id == product.id );
    const productInCart = productsCart[findProductIndex];
    
    if ( findProductIndex === - 1 )
    {
      setProductCart([...productsCart, product ]);
    }
  };
  
  return (
    <>
        {
          <div className="card">
              <div className="card-body text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="price-text">${price}</p>
                  <div className="actions-container">
                    <button className="btn btn-success" onClick={AddProductToCart} >Agregar</button>
                  </div>
              </div>
          </div> 
        
        
      }
    </>
  )
}

  