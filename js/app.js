import InputsValidator from "./utils/inputs-validator.js";

const form = document.querySelector(".sign-up");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const firstNameInput = event.target.querySelector("#firstName");
    const lastNameInput = event.target.querySelector("#lastName");
    const emailInput = event.target.querySelector("#email");
    const passwordInput = event.target.querySelector("#password");

    const firstNameErrors = InputsValidator.checkInputForErrors(firstNameInput);
    const lastNameErrors = InputsValidator.checkInputForErrors(lastNameInput);
    const emailErrors = InputsValidator.checkInputForErrors(emailInput);
    const passwordErrors = InputsValidator.checkInputForErrors(passwordInput);

    updateErrorStatus(firstNameInput, firstNameErrors);
    updateErrorStatus(lastNameInput, lastNameErrors);
    updateErrorStatus(emailInput, emailErrors);
    updateErrorStatus(passwordInput, passwordErrors);

    const testsPassed = !firstNameErrors.length && !lastNameErrors.length && !emailErrors.length && !passwordErrors.length;

    if (testsPassed) {
        console.log("Validation success");
    }
}

function updateErrorStatus(element, errors) {
    const container = element.closest(".sign-up__input-section");

    if (!errors.length) {
        if (container.classList.contains("error")) container.classList.remove("error");
        return;
    }

    if (!container.classList.contains("error")) container.classList.add("error");

    container.setAttribute("data-error", errors[0]);
}