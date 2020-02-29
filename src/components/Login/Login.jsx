import React from "react";
import {reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
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

            {captchaUrl && <img className={styles.captcha} src={captchaUrl} alt=""/>}
            {captchaUrl && createField(
                'Symbols from image',
                'captcha',
                Input,
                [required],
                {})}

            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.loginWrap}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);