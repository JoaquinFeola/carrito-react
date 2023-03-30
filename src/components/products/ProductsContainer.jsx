import { useCallback, useContext, useState } from "react";
import { Products } from "../../helpers/Products";
import { ProductsHeader } from "../header/ProductsHeader";
import { Product } from "./Product";

export const ProductsContainer = ({ productsCart }) => {
  console.log(productsCart);
  
  const addProduct = (product) => {
      const findProductIndex = productsCart.findIndex( prod => prod.id === product.id );
      if( findProductIndex != -1 ) return;
      setProductsCart([ product, ...productsCart ]);
    };
    



  return (
    <div className="products-container d-flex flex-wrap" >
      {
        ( Products.map( product => (
            <Product key={ product.id } productInfo={ product } addProduct={ addProduct } />
        )))
      }
    </div>
  )
}
