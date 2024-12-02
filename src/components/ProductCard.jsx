import React from "react";

function ProductCard({ product }){
    return (
        <div className="product-card">
            <img src={product.image} alt="" />
            <h3 className="card_name">{product.product_name}</h3>
            <p className="card_price">Price: ${product.price}</p>
            <p className="card_description">{product.description}</p>
        </div>
    );
}

export default ProductCard;