const adding = (arr) => {
  return {
    type: "ADD",
    payload: arr ? arr : [],
  };
};
const deleting = (id) => {
  return {
    type: "DEL",
    payload: id ? id : 0,
  };
};
// const loggedIn = () => {
//   return {
//     type: "LOGIN",
//     payload: true,
//   };
// };
// const loggedOut = () => {
//   return {
//     type: "LOGOUT",
//     payload: false,
//   };
// };
// export { increment, decrement, loggedIn, loggedOut };
export { adding, deleting };
