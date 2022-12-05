import React from 'react'

function AddNewTask(props) {

    // const submitNewTaskHandler = async e => {
    //     e.preventDefault();
    //     // setLoginDetails({username:"", password:""});
    //     // const user = await getUser(logindetails);

    //     // console.log(user);

    //     // if (user.username){ 
    //     //     Login(user);
    //     //     alert("Login Succeeded!");
    //     // }else{
    //     //     Login({});
    //     //     alert("Login Failed!");
    //     // }
    //     // if resp was {stuff} no error
    //     //else alert (Login Fail)
    // }

  return (props.trigger) ? (
    <div className='AddNewTask'>
        <div className='popup-inner'>
            {props.children}
            <button className='close-button' onClick={() => props.setTrigger(false)}>Close</button>
            
        </div>
    </div>
  ) : "";
}

export default AddNewTask