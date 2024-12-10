import React from "react";
import productData from "./product_data.json";
import ProductCard from "./ProductCard";
import Button from "./Button";


function ProductSection({sectionHeader, isSale}){
    const filteredProducts = productData.filter(product => isSale ? product.onsale : !product.onsale).slice(0, 4 || productData.length);

    return(
        <section>
            <div className="flex_row header_section">
                <h2>{sectionHeader}</h2>
                <Button buttonType="outline" buttonText={"See All"}></Button>
            </div>
            
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </section>
    )
}

export default ProductSection;