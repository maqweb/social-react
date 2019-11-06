import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Groups from "./components/Groups/Groups";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mainWrap">
        <Header/>
        <Navbar/>
        <div className="content">
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/groups' component={Groups}/>
        </div>
      </div>
    </BrowserRouter>
    )
 };

export default App;
