import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import {addPost} from "./redux/state";

const App = (props) => {
    return (
        <div className="mainWrap">
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className="content">
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText} />} />

                <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                              addMessage={props.addMessage}
                                                              updateNewMessageText={props.updateNewMessageText} />} />

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
};

export default App;
