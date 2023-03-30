import React from "react";

export const Product =  ({ productInfo, addProduct }) => {
    const { id, name, price, stock, amount, imageURL } = productInfo;


    
    return (
        <div className="card product-card">
            <div className="card-top-content">
                <img 
                    className="card-image-top image-card" 
                    src={ imageURL } 
                    alt="imagen de producto - https://JoaMark.com.ar" 
                />
            </div>
            <div className="card-body">
                <p>${ price }</p>
                <p>{ name }</p>
            </div>
            <div className="actions-bar product__card-actions-bar">
                <button 
                    className="actions__bar-add-btn"
                    onClick={ () => addProduct(productInfo) }
                >
                    <i className="bi bi-cart"></i>
                    Agregar
                </button>
            </div>
        </div>
    )
}
