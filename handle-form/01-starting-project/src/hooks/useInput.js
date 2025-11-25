import { useState } from "react";

export function useInput(defaultValue, validateFn){
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const isValid = validateFn(enteredValue);

    function handleInput(event){
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleBlur(){
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    didEdit,
    handleInput,
    handleBlur,
    isInValid: didEdit && !isValid
  }
}