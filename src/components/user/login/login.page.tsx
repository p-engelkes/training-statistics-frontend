import * as React from "react";
import {LoginForm} from "./login.form";
import {connect} from "react-redux";
import { signInUser } from "../../../redux-token-auth-config";

interface LoginPageProps {
    signInUser: (user: any) => any;
}

class LoginPageContainer extends React.Component<LoginPageProps> {
    handleSubmit = (user: any) => {
        const {email, password} = user;
        this.props.signInUser({email, password})
    };

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit}/>
        )
    }
}

export const LoginPage = connect(
    null,
    { signInUser }
)(LoginPageContainer);