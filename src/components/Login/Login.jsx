import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'
import styles from './Login.module.css'
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div className={styles.loginInput}>
                <Field placeholder={"Email"}
                       name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div className={styles.loginInput}>
                <Field placeholder={"Password"}
                       type={"password"}
                       name={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div className={styles.rememberBlock}>
                <Field type={"checkbox"}
                       name={'rememberMe'}
                       component={Input}/> <span>Remember me</span>
            </div>

            { props.error && <div className={style.formError}>
                {props.error}
            </div> }

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