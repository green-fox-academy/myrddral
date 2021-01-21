"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwd1Value = pwd1.value.trim();
  const pwd2Value = pwd2.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
  }

  if (pwd1Value === "") {
    setErrorFor(pwd1, "Password cannot be blank");
  } else {
      setSuccessFor(pwd1);
  }
  
  if (pwd2Value === "") {
    setErrorFor(pwd2, "Password cannot be blank");
  } else {
      setSuccessFor(pwd2);
  } 
  
  if (pwd1Value !== pwd2Value) {
      setErrorFor(pwd2, 'Password do not match');
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //add error class
  formControl.className = "form-control success";
}
