const cart = [];

const cartReducers = (state = cart, action) => {
  const product = action.payload;

  // console.log("product++++++", product);

  switch (action.type) {
    case "ADD_CART":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // const product = action.payload;
        // const addArray = [...state, { ...product, qty: 1 }];
        // console.log("add array+++++++++++++", addArray);
        return [...state, { ...product, qty: 1 }];
      }

    case "DELETE_CART":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default cartReducers;
