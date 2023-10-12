import React from "react";
import "./Products.css";

const Products = ({ productItems,handleAddProduct }) => {

  return (
    <div className="products">
      {productItems.map((product) => {
        return (
          <div className="card">
            <div>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>
              <h3 className="product-name">{product.name}</h3>
            </div>
            <div className="product-price">${product.price} </div>
            <div>
              <button className="product-add-button" onClick={()=>handleAddProduct(product)}>Add to Cart</button>
              </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
