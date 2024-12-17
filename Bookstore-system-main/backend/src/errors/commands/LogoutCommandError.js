export default class LogoutError extends Error {
    constructor() {
        super("You can't perform this action!")
        this.name = "ActionPerformError"
    }
}

export const errors = {
    logoutError: new LogoutError()
}