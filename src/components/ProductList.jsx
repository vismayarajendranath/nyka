import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { MyContext } from "./AppProvider";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const ProductList = () => {
  const { products, setProducts, searchTerm, handleLike, likesProds } =
    useContext(MyContext);

  useEffect(() => {
    const fetchedProds = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchedProds();
    // console.log(products);
  }, []);

  console.log(likesProds);
  return (
    <>
      <div className="grid grid-cols-12 container mx-auto gap-4 py-4">
        {products.map((item) => {
          return (
            <Link
              to={`product/${item.id}`}
              key={item.id}
              className=" !col-span-3"
              style={{
                display: item.title
                  .trim()
                  .toLowerCase()
                  .includes(searchTerm.trim().toLowerCase())
                  ? "block"
                  : "none",
              }}
            >
              <Card className="relative">
                <button
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-pink-600/20 flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLike(item.id);
                  }}
                >
                  <CiHeart className="text-white w-7 h-7" style={{color:likesProds.map((item)=>{
                    
                  })}}/>
                </button>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="h-48 w-auto object-contain pt-4"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text className="truncate">{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
