const login = document.querySelector(".login-btn");
const signup = document.querySelector(".signup-btn");
const move = document.querySelector(".mov-btn");
const signupform = document.querySelector(".signupform");
const loginform = document.querySelector(".loginform");

console.log(login, signup);
login.addEventListener("click", () => {
  console.log("done");
  move.classList.add("moveright");
  move.innerHTML = "Log In";
  console.log(loginform);
  loginform.classList.add("login");
  signupform.classList.remove("signup");
});
signup.addEventListener("click", () => {
  console.log("done 2");
  move.classList.remove("moveright");
  move.innerHTML = "Sign Up";
  loginform.classList.remove("login");
  signupform.classList.add("signup");
});
// const sigup = document.getElementsBy
