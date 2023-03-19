import { useEffect } from "react"
import { Products } from "../helpers/Products";


export const ProductsCartComp = ({ productsCart, setProductCart }) => {

  const addAmount = (product) => {
    const findProduct = Products.find(prod => prod.id === product.id);
    const findIndexProduct = productsCart.findIndex(prod => prod.id === findProduct.id);
    productsCart[findIndexProduct].amount++;
    setProductCart( [...productsCart] );
  };

  return (
    <div className={`div-products-container rounded-1 bg-dark ${(productsCart.length > 0) ? 'p-2' : null}`} >

      {
        productsCart.map( product => (
          <div className="card mt-3" key={ product.id } >
              <div className="card-body text-center">
                <h3 className="card-title">{ product.name }</h3>
                <p className="card-text text-center">${ product.price * product.amount }</p>
                <p className="card-text text-center">{ product.amount }</p>
                <div className="actions-container">
                  <button className="btn-remove btn btn-danger m-2">-</button>
                  <button className="btn-add btn btn-success" onClick={() => addAmount(product)}>+</button>
                </div>
              </div>
          </div>
        ))
      }

    </div>
  )
}

