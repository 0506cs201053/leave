// frontend/src/App.js

import React from 'react';
import 
{
   BrowserRouter as Router,
    Route,
    Switch
     } from 'react-router-dom';
import Leave from './components/LeaveApplicationForm';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ResetPassword from './components/ResetPassword';
import list from './components/list';

//
import NavigationBar from './components/NavigationBar';
import SendMailForm from './components/SendMailForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/leave" component={Leave}/>
        <Route path="/send-mail" component={SendMailForm} />
        <Route path="/home" component={NavigationBar} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/list" component={list} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
