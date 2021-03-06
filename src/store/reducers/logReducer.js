const initialState = {
    login: false,
  };
  const hasLogged = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: true,
        };
      case "LOGOUT":
        return {
          ...state,
          login: false,
        };
      default:
        return state;
    }
  };
  export default hasLogged;

