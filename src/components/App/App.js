import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className = {styles.app}>
        <Header />
        <div className = {styles.wrapper}>
          <Sidebar />
          <main className = {styles.content}>
            <Route path='/profile'  component={Profile} />
            <Route path='/dialogs'  component={Dialogs} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
