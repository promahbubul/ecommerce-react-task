import React, { useEffect, useState } from "react";
import Card from "../../shared/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="max-w-5xl mx-auto text-4xl font-bold my-5 bg-slate-900 text-white py-3 px-5 rounded-md">
        All Products
      </h2>
      <div className="my-5 grid max-w-6xl mx-auto  gap-10 grid-cols-12">
        {products.map((product) => (
          <Card
            key={product?.product_id}
            img={product?.image}
            name={product?.name}
            description={product?.description}
            price={product?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
