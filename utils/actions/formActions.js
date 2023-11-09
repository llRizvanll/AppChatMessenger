import { validateEmail, validatePassword, validateString } from "../validationConstraints";

export const validateInput = (inputId, inputValue ) => {
    if (inputId === "firstname" || inputId === "lastname") {
        return validateString(inputId, inputValue);
      } else if (inputId === "password") {
        return validatePassword(inputId,inputValue);
      } else if (inputId === "mail") {
        return validateEmail(inputId,inputValue);
      }
}