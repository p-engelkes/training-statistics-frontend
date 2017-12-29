import {generateAuthActions} from "redux-token-auth";

const config = {
    authUrl: "http://localhost:3000/auth",
    userAttributes: {},
    userRegistrationAttributes: {
        name: "name",
        confirmSuccessUrl: "confirm_success_url"
    }
};

const {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials
} = generateAuthActions(config);

export {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials
}