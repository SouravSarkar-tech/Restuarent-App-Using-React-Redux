import React from "react";
import "./List.css";

const List = ({ products, setShowProductModal, setProductSub }) => {
  const clickHandler = product => {
    setShowProductModal(true);
    setProductSub(product);
  }

  return (
    <div className="List">
      {products.length !== 0 ? (
        products?.map((product) => (
          <div
            key={product.id}
            className="product-item"
            role="button"
            aria-pressed="true"
            onClick={() => clickHandler(product)}
          >
            <div className="product-description">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className="product-price">£{product.price}</div>
          </div>
        ))
      ) : (
        <div className="product-item">
          <h4>Nothing Here!</h4>
        </div>
      )}
    </div>
  );
}


export default List;
