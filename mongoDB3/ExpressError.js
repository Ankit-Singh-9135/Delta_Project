class ExpressError extends Error {
    constructor(status, message) {
        supper();
        this.status = status;
        this.message = message;
    }
}