import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';


const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [allProducts, setAllProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    const fetchCategoryData = async (category, setData) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category} data. Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
        setData([]);
      }
    };

    fetchAllProducts();
    fetchCategoryData("electronics", setElectronics);
    fetchCategoryData("women's clothing", setWomensClothing);
    fetchCategoryData("jewelery", setJewelery);
    fetchCategoryData("men's clothing", setMensClothing);
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="grid lg:grid-cols-4 -m-4 gap-10">

          {selectedCategory === 'all' && allProducts.map((product) => (
            <div class="grid lg:grid-cols-3 md:grid-cols-2 -m-4 gap-10">
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
