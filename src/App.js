import React from 'react';
import './App.css';

function App() {
  return (
    <div className="mainWrap">

      <header className="header">
        <img className="logo" src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" alt="" />
      </header>

      <nav className="nav">
        <div>
          <a href="1">Profile</a>
        </div>
        <div>
          <a href="1">Messages</a>
        </div>
        <div>
          <a href="1">News</a>
        </div>
        <div>
          <a href="1">Music</a>
        </div>
        <div>
          <a href="1">Settings</a>
        </div>
      </nav>

      <div className="content">
        <img className="img" src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>

    </div>
  );
}

export default App;
