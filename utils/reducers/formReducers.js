
  export const reducer = (state, action) => {
    const { validationResult, inputId, inputValue } = action;


    const updateValues = {
        ...state.inputValues,
        [inputId]: inputValue
    }


    const updateValidities = {
      ...state.inputValidaties,
      [inputId]: validationResult
    }
  
    let updateFormIsValid = true;
  
    for (key in updateValidities){
      if (updateValidities[key]!== undefined){
          updateFormIsValid = false;
          break;
      }
    }
  
    return {
        inputValues: updateValues,
      inputValidaties : updateValidities,
      formIsValid: updateFormIsValid,
    };
  };