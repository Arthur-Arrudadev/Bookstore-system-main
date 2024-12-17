class FindByRegistrationError extends Error {
    constructor() {
        super("Error on try find user registration.")
        this.name = "FindByRegistrationError"
    }
}

class FindByEmailError extends Error {
    constructor() {
        super("Error on try find user email.")
        this.name = "FindByEmailError"
    }
}

class CreateUserError extends Error {
    constructor() {
        super("Error on create user.")
        this.name = "CreateUserError"
    }
}

export const errors = {
    findByEmailError: new FindByEmailError(),
    createUserError: new CreateUserError(),
    findByRegistrationError: new FindByRegistrationError()
}