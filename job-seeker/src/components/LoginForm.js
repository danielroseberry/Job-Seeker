import React, { useState, useEffect } from 'react'
import {getUser, createUser} from './../Requests'

function LoginForm({Login, Register}) {
    const [logindetails, setLoginDetails] = useState({username:"", password:""});
    const [registerdetails, setRegisterDetails] = useState({name:"", email:"", zipcode:"", username:"", password:""});

    const submitLoginHandler = async e => {
        e.preventDefault();
        // setLoginDetails({username:"", password:""});
        const user = await getUser(logindetails);

        console.log(user);

        if (user.username){ 
            Login(user);
            alert("Login Succeeded!");
        }else{
            Login({});
            alert("Login Failed!");
        }
        // if resp was {stuff} no error
        //else alert (Login Fail)
    }

    const submitRegisterHandler = async e => {
        e.preventDefault();
        // setRegisterDetails({name:"", email:"", zipcode:"", username:"", password:""});
        const user = await createUser(registerdetails);

        console.log(user);

        if (user.username){ 
            Register(user);
            alert("Registration Succeeded!");
        }else{
            Register({});
            alert("Registration Failed!");
        }
        //post to server 
        //if resp was signin errro
        // alert(SIGNIN ERROR)
        //else

    }

    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    function loginclick() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";

    }

    function registerclick(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    }

    useEffect(() => {
        // Update the document title using the browser API
        setLoginDetails({username:"", password:""})
        setRegisterDetails({})
      },[]);

  return (
    <div className="log-reg-box">
        <div className="form-box">
            <h2>JobSeeker</h2>

            <div className="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" onClick={registerclick}>LOGIN</button>
                <button type="button" class="toggle-btn" onClick={loginclick}>SIGN UP</button>
            </div>

            <form className="input-group" id="login" onSubmit={submitLoginHandler}>
                <div className="form-inner">
                    {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
                    <div className="form-group">
                        <label htmlFor="login-name">Username:</label>
                        <input type="text" name="username" id="username" onChange={e => setLoginDetails({...logindetails, username: e.target.value})} value={logindetails.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setLoginDetails({...logindetails, password: e.target.value})} value={logindetails.password}/>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="LOGIN"/>
                    </div>
                </div>
            </form>

            <form className="input-group" id="register" onSubmit={submitRegisterHandler}>
                <div className="form-inner">
                    {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
                    <div className="form-group">
                        <label htmlFor="reg-name">Name:</label>
                        <input type="text" name="reg-name" id="reg-name" onChange={e => setRegisterDetails({...registerdetails, name: e.target.value})} value={registerdetails.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-email">Email:</label>
                        <input type="text" name="reg-email" id="reg-email" onChange={e => setRegisterDetails({...registerdetails, email: e.target.value})} value={registerdetails.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-zip">Zipcode:</label>
                        <input type="text" name="reg-zip" id="reg-zip" onChange={e => setRegisterDetails({...registerdetails, zipcode: e.target.value})} value={registerdetails.zipcode}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-username">Username:</label>
                        <input type="text" name="reg-username" id="reg-username" onChange={e => setRegisterDetails({...registerdetails, username: e.target.value})} value={registerdetails.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Password:</label>
                        <input type="password" name="reg-password" id="reg-password" onChange={e => setRegisterDetails({...registerdetails, password: e.target.value})} value={registerdetails.password}/>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="SIGN UP"/>
                    </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default LoginForm