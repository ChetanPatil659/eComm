import React from "react";
import { Link } from "react-router-dom";


const Products = (props) => {
  let { title, image, price, category, id } = props;

  return (
        
        // <div class="grid lg:grid-cols-4 -m-4 gap-10">
        <div class="p-4 w-[300px] shadow">
                {/* <Link to={`/products/${id}`} > */}
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-auto h-auto block" src={image} />
                    </a>
                    <div class="mt-4">
                        {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3> */}
                        <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
                        <p class="mt-1">${price}</p>
                    </div>
                {/* </Link> */}
            </div>
            // </div>
            
  );
};

export default Products;
