import React from "react";
import {reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.loginInput}>
                {createField('Email', 'email', Input, [required])}
            </div>

            <div className={styles.loginInput}>
                {createField('Password', 'password', Input, [required], {type: 'password'})}
            </div>

            <div>
                <label className={styles.rememberBlock}>
                    {createField(null, 'rememberMe', Input, [], {type: 'checkbox'})}
                    <span>Remember me</span>
                </label>
            </div>

            {error && <div className={style.formError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.loginWrap}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);