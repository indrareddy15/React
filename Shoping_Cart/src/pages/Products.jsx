import React, { useEffect, useState } from "react";
import { fecthProducts } from "../utils";
import ProductCard from "../components/productCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fecthProducts();
      setProducts(response);
    };
    getProducts().catch((e) => console.log("we have an error", e));
  });
  return (
    <div className="products-cont">
      <div className="category-select">
        <span>All</span>
        <span>Women's</span>
        <span>Men's</span>
      </div>
      <div className="product-card-cont">
        {products.length > 0 &&
          products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electornic" && (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  rating={product.rating}
                  img={product.img}
                  categoryName={product.categoryName}
                  productName={product.title}
                  description={product.description}
                  price={product.price}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Products;
