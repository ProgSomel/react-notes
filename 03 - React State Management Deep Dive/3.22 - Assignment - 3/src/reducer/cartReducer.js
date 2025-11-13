const initialState = {
  cartData: [],
};
const CartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_To_CART":
      return {
        ...cartState,
        cartData: [...cartState.cartData, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartData: cartState.cartData?.filter(
          (item) => item.id != action.payload
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        cartData: cartState.cartData.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...cartState,
        cartData: cartState.cartData.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      };
    default:
      return cartState;
  }
};

export { initialState, CartReducer };
