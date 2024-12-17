class ServerRunError extends Error {
    constructor() {
        super("Is not possible run server.")
        this.name = "ServerRunError"
    }
}

export const errors = {
    serverRunError: new ServerRunError()
}