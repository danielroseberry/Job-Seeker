import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import LoginForm from './components/LoginForm';
import UserPortal from './components/UserPortal'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getUser } from './Requests'

function App() {
  const adminUser = {
    email: "admin@jobseeker.com",
    password: "password"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const getLogin = async details => {
    const res = await getUser(details);
    return res;
  };

  const Login = details => {
    console.log(details);
    const tempUser = getLogin(details)
    if (tempUser){
      setUser({
        name: tempUser.name,
        email: tempUser.email
      });
      setLogin(true);
    }

    /*if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      })
      setLogin(true);
    } else {
      console.log("Details do not match")
      setError("Details do not match!")
    }*/

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
      <LoginForm Login={Login} error={error} />
      </div>) : 
      <UserPortal Logout={Logout} name={user.name}/>
      }
    </div>
  );
}
export default App;
