import React from "react";

function ProductCard({ product }){
    return (
        <div className="product-card">
            <img src={product.image} alt={product.description} />
            <div className="card_header flex_row">
                <h3 className="card_name">{product.product_name}</h3>
                <p className="card_price">${product.price}</p>
            </div>
            <p className="card_description">{product.description}</p>
        </div>
    );
}

export default ProductCard;