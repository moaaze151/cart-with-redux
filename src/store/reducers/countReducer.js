const initialState = {
  cart: [
    // {
    //   product: {
    //     desc: "It is a long established fact that a reader will be distracted by the readable l be distracted by distribution of letters, as l be distracted by the readable content of a page when looking a opposed to using  the readable content of a page when looking a content of a page when looking at its layout.",
    //     details: "Details",
    //     id: 1,
    //     price: 100,
    //     source: "./img/1.jpg",
    //     title: "Smart Cats",
    //   },
    //   quantity: 5,
    // },
  ],
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const id = action.payload.product.id;
      state.cart = state.cart.filter((e) => e.product.id !== id);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DEL":
      state.cart = state.cart.filter((e) => e.product.id !== action.payload);
      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
};
export default counter;
//  action.payload
