class UserNotExists extends Error {
    constructor() {
        super("User don't exists")
        this.name = "UserNotExists"
    }
}

export const errors = {
    userNotExists: new UserNotExists()
}