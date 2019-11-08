import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';

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
            <Route path='/users' render = { () => <UsersContainer store={props.store} /> } />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
