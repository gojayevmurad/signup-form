const btn = document.querySelector(".change-btn");
const signup = document.querySelector(".signup");

btn.addEventListener("click", () => {
  if (signup.classList.contains("change")) {
    btn.innerHTML = "SIGN UP";
    signup.classList.remove("change");
  } else {
    btn.innerHTML = "CLOSE";
    signup.classList.add("change");
  }
});
