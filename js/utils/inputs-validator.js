class InputsValidator {
    /**
     * Checks input for errors.
     * @param {HTMLInputElement} input  Input to check.
     * @returns {string[]}              Error array.
     * @static
     */
    static checkInputForErrors(input) {
        let errors = this.#getErrors(input);
        return errors;
    }

    // ------------------------------------------

    /**
     * Gets errors using the correct procedure for the given input.
     * @param {HTMLInputElement} input 
     * @returns {string[]}
     */
    static #getErrors(input) {
        switch (input.type) {
            case "text":
                return this.#checkTextForErrors(input)

            case "email":
                return this.#checkEmailForErrors(input)

            case "password":
                return this.#checkPasswordForErrors(input)

            default:
                console.error("Unsupported input");
                return null;
        }
    }

    // ------------------------------------------

    /**
     * Checks text input and looks for errors.
     * @param {HTMLInputElement} textInput  Input to check.
     * @returns {string[]}                  Error array.
     */
    static #checkTextForErrors(textInput) {
        const errors = [];

        const name = textInput.name || "Input";
        const errorEmptyMsg = `${name} cannot be empty`;

        const value = textInput.value;
        if (value === "") errors.push(errorEmptyMsg);

        const words = value.split(" ");
        if (!words.length || words[0] === "") errors.push(errorEmptyMsg);

        return errors;
    }

    // ------------------------------------------

    /**
     * Checks email input and looks for errors.
     * @param {HTMLInputElement} emailInput     Input to check.
     * @returns {string[]}                      Error array.
     */
    static #checkEmailForErrors(emailInput) {
        const errors = [];

        const name = emailInput.name || "Input";
        const errorEmpty = `${name} cannot be empty`;
        const errorStructure = `Looks like this is not an email`;

        const value = emailInput.value;
        if (value === "") errors.push(errorEmpty);

        const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        if (!isValid) errors.push(errorStructure);

        return errors;
    }

    // ------------------------------------------

    /**
     * Checks password input and looks for errors.
     * @param {HTMLInputElement} passwordInput  Input to check.
     * @returns {string[]}                      Error array.
     */
    static #checkPasswordForErrors(passwordInput) {
        const errors = [];

        const name = passwordInput.name || "Input";
        const errorEmpty = `${name} cannot be empty`;

        const value = passwordInput.value;
        if (value === "") errors.push(errorEmpty);

        return errors;
    }

    // ------------------------------------------
}

export default InputsValidator;