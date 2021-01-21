
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";
import MetodosDePago from "./pages/MetodosDePago";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

import React, { useState, useEffect } from 'react';

import fire from './server/fire'
import { ServerStyleSheet } from "styled-components";
import Login from './pages/Login';
import Hero from './pages/Hero'

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong.password":
            setPasswordError(err.message);
            break;
        }
      });

  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalidad-email":
            setEmailError(err.message);
            break;
          case "auth/weak.password":
            setPasswordError(err.message);
            break;
        }
      });
  };


  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser('')
      }
    });
  };

  useEffect(() => {
    authListener();

  }, []);

  return (


    
    <>

      <Navbar />
      <Switch>
      
        
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/hero/" component={Hero} />
        <Route exact path="/MetodosDePago/" component={MetodosDePago} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>

    </>
  );
}




export default App;
