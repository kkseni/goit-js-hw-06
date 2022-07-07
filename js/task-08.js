const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("alert");
  }

  const formData = {
    email,
    password
  }
  console.log (formData)
  event.currentTarget.reset();
}