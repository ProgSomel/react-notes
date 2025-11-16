export const cartReducer = (state, action) => {
  switch (action.type) {
    case "toggle-to-cart": {
      const hasInCart = state?.some(
        (item) => item.id === action.payload.selectedProduct.id
      );
      if (hasInCart) {
        const filteredProducts = state?.filter(
          (product) => product?.id !== action.payload.selectedProduct.id
        );
        return filteredProducts;
      } else {
        const newProduct = { ...action.payload.selectedProduct, quantity: 1 };
        return [...state, newProduct];
      }
    }
    case "update-quantity": {
      const updatedProduct = state.map((product) => {
        if (product.id == action.payload.id) {
          return {
            ...product,
            quantity: action.payload.quantity,
          };
        } else {
          return product;
        }
      });
      return updatedProduct;
    }
    case "check-out": {
      return action.payload;
    }
    default:
      return state;
  }
};
