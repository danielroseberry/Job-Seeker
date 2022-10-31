import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import LoginForm from './components/LoginForm';
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
        <div className="welcome">
        <h2>Welcome to Job Seeker, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
