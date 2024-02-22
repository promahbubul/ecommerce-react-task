import React, { useEffect, useState } from "react";
import Card from "../../../../shared/Card";

const FeatreProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    fetch("/featureProduct.json")
      .then((res) => res.json())
      .then((data) => setFeatureProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl  font-extrabold underline text-center mt-10">
        Feature Products
      </h2>
      <div className="mt-5 grid  gap-10 grid-cols-12">
        {featureProducts.map((product) => (
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

export default FeatreProducts;
