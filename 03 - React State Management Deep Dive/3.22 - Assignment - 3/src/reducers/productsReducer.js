export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "filtering": {
      const status = action.payload;
      const copyProducts = [...state].sort((a, b) => a.id - b.id); // Uses current state, not initialProducts

      if (status === "most popular") {
        copyProducts.sort((a, b) => b.rating - a.rating);
      } else if (status === "low to high") {
        copyProducts.sort((a, b) => a.price - b.price);
      } else if (status === "high to low") {
        copyProducts.sort((a, b) => b.price - a.price);
      } else if (status === "newest") {
        copyProducts.sort(
          (a, b) =>
            Number(b.date.replaceAll("-", "")) - // Fixed: b - a for newest first
            Number(a.date.replaceAll("-", ""))
        );
      }
      // For "all" or any other status, return unsorted current state
      return copyProducts;
    }
    case "check-out": {
      const updatedProducts = state.map((product) => {
        const cartItem = action.payload.find((item) => item.id === product.id);
        if (cartItem) {
          return {
            ...product,
            stock: product.stock - cartItem.quantity,
          };
        }
        return product;
      });
      return updatedProducts;
    }
    default:
      return state;
  }
};
