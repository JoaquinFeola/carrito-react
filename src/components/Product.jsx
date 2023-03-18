

export const Product = ({producto}) => {
  const { id, name, price, amount } = producto;

  const btnclick = () => {
    console.log(price);
  }

  return (
    <>
        {
           <div className="card m-4">
              <div className="card-body text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="price-text">${price}</p>
                  <div className="actions-container">
                    <button className="btn btn-success" onClick={btnclick}>Agregar</button>
                  </div>
              </div>
          </div> 
        }
    </>
  )
}

  