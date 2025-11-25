import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const{
    value: enteredEmail,
    handleInput: emailInput,
    handleBlur: emailBlur,
    isInValid: emailIsInvalid
  } = useInput('', (value) => isEmail(value));

  const{
    value: enteredPassword,
    handleInput: passwordInput,
    handleBlur: passwordBlur,
    isInValid: passwordIsInvalid
  } = useInput('', (value) => hasMinLength(value.trim(), 6));

  // const emailIsInvalid = emailIsEdited && !isEmail(enteredEmail);
  // const passwordIsInvalid = passwordIsEdited && !hasMinLength(enteredPassword.trim(), 6);

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredEmail);
    console.log(enteredPassword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredEmail}
          error={emailIsInvalid && "Enter a valid Email"}
          onBlur={emailBlur}
          onChange={emailInput} 
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredPassword}
          error={passwordIsInvalid && "Enter a valid Password"}
          onBlur={passwordBlur}
          onChange={passwordInput} 
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
