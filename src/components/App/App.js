import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import DialogsContainer from '../Dialogs/DialogsContainer';
import {Route, BrowserRouter} from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className = {styles.app}>
        <Header />
        <div className = {styles.wrapper}>
          <Sidebar />
          <main className = {styles.content}>
            <Route path='/profile' render = { () => <ProfileContainer store={props.store} /> } />
            <Route path='/dialogs' render = { () => <DialogsContainer store={props.store} /> } />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
