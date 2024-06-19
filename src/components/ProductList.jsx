import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { MyContext } from "./AppProvider";

const ProductList = () => {
  const {products, setProducts,searchTerm} = useContext(MyContext)

  useEffect(() => {
    const fetchedProds = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchedProds();
    console.log(products);
  }, []);
 
  

  return (
    <>
    <div className="grid grid-cols-12 container mx-auto gap-4 py-4">
    {products.map((item) => {
        return (
          <div key={item.id} className=" !col-span-3" style={{display: item.title.toLowerCase() === searchTerm.toLowerCase() ? 'none' : 'block' }}>
            <Card >
              <Card.Img variant="top" src={item.image} className="h-48 w-auto object-contain pt-4" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text className="truncate">{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ProductList;
