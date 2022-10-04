// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADD_CART",
    payload: product,
  };
};

// For Delete Item from Cart
export const deleteCart = (product) => {
  return {
    type: "DELETE_CART",
    payload: product,
  };
};
