import React from 'react';
import './App.css';
import {HashRouter, Switch, Redirect, Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {intializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/WithSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component<{}> {

    catchAllUnhandledErrors = () => {
        alert('Some error occured!');
        console.error()
    };

    componentDidMount(): void {
        this.props.intializeApp();
        window.addEventListener('unhandlerejectdion', this.catchAllUnhandledErrors)
    }

    componentWillUnmount(): void {
        window.removeEventListener('unhandlerejectdion', this.catchAllUnhandledErrors)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="mainWrap">
                <HeaderContainer/>

                <div className="container">
                    <Navbar/>
                    <div className="content">
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"}/>}/>
                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer)}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                           {/* <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>*/}

                            <Route path='/login'
                                   render={() => <Login/>}/>
                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {intializeApp}))(App);

let MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default MainApp;