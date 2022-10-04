import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Products(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let componentMounted = true;
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const res = await response.json();
      if (componentMounted) {
        setData(res);

        setLoading(false);
      }
    };
    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton count={5} height={320} />
        </div>
        <div className="col-md-3">
          <Skeleton count={5} height={320} />
        </div>
        <div className="col-md-3">
          <Skeleton count={5} height={320} />
        </div>
        <div className="col-md-3">
          <Skeleton count={5} height={320} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {/* <div className="buttons d-flex justify-content-center mb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Jewelery</button>
          <button className="btn btn-outline-dark me-2">Electronic</button>
        </div> */}

        {data.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card text-center p-4">
              <NavLink to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  height="250px"
                  alt={product.title}
                />
              </NavLink>
              <div className="card-body">
                <h6 className="card-title">
                  {product.title.substring(0, 20)}...
                </h6>
                <p className="card-text lead fw-bold">${product.price}</p>
                <NavLink
                  to={`/product/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
