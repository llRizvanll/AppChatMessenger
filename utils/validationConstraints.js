import { validate } from "validate.js";
export const validateString = (inputId, inputValue) => {
  const constraints = { presence: { allowEmpty: false } };

  if (inputValue !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "Please enter valid name!",
    };
  }
  const validationResult = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResult && validationResult[inputId];
};

export const validateEmail = (inputId, inputValue) => {
  const constraints = { presence: { allowEmpty: false } };

  if (inputValue !== "") {
    constraints.email = true;
  }
  const validationResult = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResult && validationResult[inputId];
};

export const validatePassword = (inputId, inputValue) => {
  const constraints = { presence: { allowEmpty: false } };

  if (inputValue !== "") {
    constraints.length = {
      minimum: 8,
      message: "must be atleast 8 characters",
    };
  }
  const validationResult = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResult && validationResult[inputId];
};
