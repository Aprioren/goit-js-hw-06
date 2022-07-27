const refs = {
    formRef : document.querySelector('.login-form'),
}

refs.formRef.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {

  event.preventDefault();

  const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("СБУ собирает информацию о вас, не разочаровуйте следователя");
  }

  let userData = {email : email.value, password : password.value};

  console.log(userData);
  event.currentTarget.reset();
}