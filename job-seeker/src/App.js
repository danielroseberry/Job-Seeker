import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import LoginForm from './components/LoginForm';
import UserPortal from './components/UserPortal'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createUser, getUser } from './Requests'

function App() {

  const [user, setUser] = useState({name: "", email: ""});
  const [login, setLogin] = useState(false);

  const Login = (details) => {

    if (details.username) {
      setUser(details);
      setLogin(true);
    }
    // const res = await getUser(details);
    // if (res.username) {
    //   setUser(res);
    //   setLogin(true);
    //   setError("");
    // }else{
    //   setError("Username or Password incorrect.  Try again.");
    // }

  }

  const Register = (details) => {
    // setError("Registration Failed.  Try again.");
    if (details.username) {
      setUser(details);
      setLogin(true);
    }
  }

  const Logout = () => {
    console.log("Logout")
    setUser({
      name: "", 
      email: ""
    });
    setLogin(false);
  }

  /*return (
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
  );*/

  return (
    <div>
      {!login ? 
      (<div className='login'>
      <LoginForm Login={Login} Register={Register} />
      </div>) : 
      <UserPortal Logout={Logout} name={user.name}/>
      }
    </div>
  );
}
export default App;
