class ResponseModel {
    constructor(success, data, message) {
        this.success = success;
        this.data = data;
        this.message = message;
    }
}

module.exports = ResponseModel;