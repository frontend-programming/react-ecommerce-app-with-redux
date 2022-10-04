import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";

export default function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let componentMounted = true;
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await response.json();
      if (componentMounted) {
        setProduct(res);
        setLoading(false);
      }
    };
    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  const loader = () => (
    <>
      <div className="col-md-4">
        <Skeleton height={600} />
      </div>
      <div className="col-md-7 offset-md-1" style={{ lineHeight: 2 }}>
        <Skeleton height={40} width={200} />
        <Skeleton height={75} />
        <Skeleton height={25} width={100} />
        <Skeleton height={50} width={150} />
        <Skeleton height={150} />
        <Skeleton height={50} />
        <Skeleton height={50} width={220} />
      </div>
    </>
  );

  const showProduct = () => (
    <>
      <div className="col-md-4">
        <img src={product.image} className="img-fluid mb-4" />
      </div>
      <div className="col-md-7 offset-md-1">
        <h4 className="text-upperase text-black-50">{product.category}</h4>
        <h1 className="display-5 my-3">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star ms-2"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
        <p className="lead mb-5">{product.description}</p>
        <button
          className="btn btn-dark px-4 py-2"
          onClick={() => addProduct(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );

  return (
    <div className="my-5">
      <div className="container py-4">
        <div className="row">{loading ? loader() : showProduct()}</div>
      </div>
    </div>
  );
}
