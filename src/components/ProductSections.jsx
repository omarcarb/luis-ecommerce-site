import React from "react";
import productData from "./product_data.json";
import ProductCard from "./ProductCard";


function ProductSection(){
    const product = productData[0] 
    return(
        <section>
            <h2>Recommended</h2>
            <div className="product-list">
                {productData.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductSection;