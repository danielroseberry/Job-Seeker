import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import LoginForm from './components/LoginForm';
import UserPortal from './components/UserPortal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const adminUser = {
    email: "admin@jobseeker.com",
    password: "password"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match")
      setError("Details do not match!")
    }

  }

  const Logout = () => {
    console.log("Logout")
    setUser({
      name: "", 
      email: ""
    })
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <UserPortal User={user} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
