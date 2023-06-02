
const exceptions = {
    ALREADY_EXIST: {"statusCode": 409, "message": "User already exists"},
    USER_DOESNT_EXIST: {"statusCode": 404, "message": "User does not exist"}
}

export default exceptions