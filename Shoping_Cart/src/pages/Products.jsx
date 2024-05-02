import React, { useEffect, useState } from "react";
import { fetchCategoryProducts, fetchProducts } from "../utils";
import ProductCard from "../components/productCard";
import { ALLOWED_CATEGORIES } from "../utils";
import { useParams } from "react-router-dom";

export const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("All");
  const { category } = useParams();

  const handleFilteredProducts = (productCategory = null) => {
    if (productCategory) {
      const filteredProducts = allProducts.filter(
        (product) => product.category === productCategory
      );
      setProducts(filteredProducts);
      console.log("filteredProducts", filteredProducts);
      console.log("Filter", productCategory);
    } else {
      setProducts(allProducts);
    }
  };

  useEffect(() => {
    if (!category) {
      const getProducts = async () => {
        const response = await fetchProducts();
        setProducts(response);
        setAllProducts(response);
      };
      getProducts().catch((e) => console.log("we have an error", e));
    } else {
      const getCategory = async () => {
        const response = await fetchCategoryProducts(category);
        setProducts(response);
      };
      getCategory().catch((e) => console.log("we have an error", e));
    }
  }, [category]);
  return (
    <div className="products-cont">
      {!category ? (
        <div className="category-select">
          <span
            className={`select-cat-span ${
              activeCat === "All" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilteredProducts();
              setActiveCat("All");
            }}
          >
            All
          </span>
          <span
            className={`select-cat-span ${
              activeCat === "women's" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilteredProducts(ALLOWED_CATEGORIES.WOMENS);
              setActiveCat("women's");
            }}
          >
            Women's
          </span>
          <span
            className={`select-cat-span ${
              activeCat === "men's" ? "cat-active" : ""
            }`}
            onClick={() => {
              handleFilteredProducts(ALLOWED_CATEGORIES.MENS);
              setActiveCat("men's");
            }}
          >
            Men's
          </span>
        </div>
      ) : (
        <div className="category-select">
          <span className="cat-active">{category}</span>
        </div>
      )}

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
                  img={product.image}
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
