class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.status = message;
    }
}

module.exports = ExpressError;