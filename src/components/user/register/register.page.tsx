import * as React from "react";
import {RegisterForm} from "./register.form";
import {connect} from "react-redux";
import { registerUser } from "../../../redux-token-auth-config";

interface RegisterPageProps {
    registerUser: (user: any) => any;
}

class RegisterPageContainer extends React.Component<RegisterPageProps> {
    handleSubmit = (user: any) => {
        const {email, password} = user;
        const confirmSuccessUrl = "foo";
        this.props.registerUser({email, password, confirmSuccessUrl}).then(() => {
            console.log("Success")
        }).error((e: any) => {
            console.log("Error");
            console.log(e);
        })
    };

    render() {
        return (
            <RegisterForm onSubmit={this.handleSubmit}/>
        )
    }
}

export const RegisterPage = connect(
    null,
    { registerUser }
)(RegisterPageContainer);

