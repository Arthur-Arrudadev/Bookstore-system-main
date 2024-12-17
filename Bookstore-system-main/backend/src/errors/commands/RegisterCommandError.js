class UserAlreadyExists extends Error {
    constructor() {
        super("User Already Exists")
        this.name = "UserAlreadyExists"
    }
}

class UserNullError extends Error {
    constructor() {
        super("User data is null. (reference: register.command.js)")
        this.name = "UserNullError"
    }
}

export const errors = {
    userAlreadyExists: new UserAlreadyExists(),
    userNullError: new UserNullError(),
}