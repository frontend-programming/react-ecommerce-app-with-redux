import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/actions";

function Cart(props) {
  const cartItems = useSelector((state) => state.cartReducers);
  const dispatch = useDispatch();

  const handleDeleteCart = (product) => {
    dispatch(deleteCart(product));
  };

  const handleAddCart = (product) => {
    dispatch(addCart(product));
  };

  const handleTotalAmount = () => {
    return cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  };

  const ShowCarts = ({ product }) => (
    <div className="row p-4 mb-3 bg-light">
      <div className="col-md-2">
        <div className="p-3 bg-white">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
      </div>
      <div className="col-md-9 ms-4">
        <h3>{product.title}</h3>
        <p className="lead fw-bold">
          {product.qty} X ${product.price} = $
          {(product.qty * product.price).toFixed(2)}
        </p>
        <button
          className="btn btn-outline-dark me-4"
          onClick={() => handleDeleteCart(product)}
        >
          <i className="fa fa-minus"></i>
        </button>
        <button
          className="btn btn-outline-dark me-4"
          onClick={() => handleAddCart(product)}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-3">
      {cartItems.length > 0 ? (
        <div className="container">
          {cartItems.map((product, index) => (
            <ShowCarts product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lead fw-bold">Your Cart is Empty</p>
            </div>
          </div>
        </div>
      )}
      {cartItems.length != 0 && (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lead fw-bold">
                Total Amount: ${handleTotalAmount().toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
