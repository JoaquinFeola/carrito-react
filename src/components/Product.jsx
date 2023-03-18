

export const Product = ({product, productsCart}) => {
  const { id, name, price, amount } = product;

  const AddProductToCart = () => {
    const findProductIndex = productsCart.findIndex( prod => prod.id == product.id );
    const productInCart = productsCart[findProductIndex];

    if ( findProductIndex === - 1 )
    {
      productsCart.push(product);
      <ProductsCartComp/>
    }
    else
    {
      productInCart.amount ++;
      

    }
    console.log(productsCart);
  };
  
  return (
    <>
        {
           <div className="card m-4">
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

  