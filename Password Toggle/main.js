const password = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");

eyeicon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "images/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "images/eye-close.png";
  }
});
