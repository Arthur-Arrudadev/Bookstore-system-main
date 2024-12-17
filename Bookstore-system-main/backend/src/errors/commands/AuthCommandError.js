class UserNotExistsError extends Error {
    constructor() {
        super("User not exists, try again.")
        this.name = "UserNotExists"
    }
}

class PasswordNotMatch extends Error {
    constructor() {
        super("Password not match.")
        this.name = "PasswordNotMatch"
    }
}


export const errors = {
    userNotExistsError: new UserNotExistsError(),
    passwordNotMatch: new PasswordNotMatch()
}