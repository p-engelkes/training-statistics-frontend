import * as React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LoginFormPresentation = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email">Benutzername</label>
                <Field name="email" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="password">Passwort</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <button type="submit">Registrieren</button>
            </div>
        </form>
    )
};

export const LoginForm = reduxForm({
    form: 'login'
})(LoginFormPresentation);