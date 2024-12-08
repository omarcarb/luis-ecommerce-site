import React from "react";
import Button from "./Button";

function ProductCard({ product }){
    let priceDisplay;

    if (product.onsale === true) {
        priceDisplay = (
            <>
                <p className="card_price_original">${product.price}</p>
                <p className="card_price">${product.sale_price}</p>
            </>
    );
    } else {
        priceDisplay = <p className="card_price">${product.price}</p>;
    }
    return (
        <div className="product-card flex_column">
            <img src={product.image} alt={product.description} />
            <div className="card_header flex_row">
                <h3 className="card_name">{product.product_name}</h3>
                <div className="price_group flex_row">
                    {priceDisplay}
                </div>
            </div>
            <p className="card_description">{product.description}</p>
            <Button buttonText={"Add To Cart"} buttonType="primary"></Button>
        </div>
    );
}

export default ProductCard;