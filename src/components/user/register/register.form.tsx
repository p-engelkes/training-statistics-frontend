import * as React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const RegisterFormPresentation = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Benutzername</label>
                <Field name="name" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="email">E-Mail</label>
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

export const RegisterForm = reduxForm({
    form: 'register'
})(RegisterFormPresentation);



