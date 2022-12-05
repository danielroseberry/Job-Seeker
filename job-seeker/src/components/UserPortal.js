import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import ActiveJobs from './ActiveJobs';
import InterestJobs from './InterestJobs';
import AddNewTask from './AddNewTask';

function UserPortal({Logout, name}) {
    const [buttonAddNewTask, setAddNewTask] = useState(false);
    const [newtaskdetails, setNewTaskDetails] = useState({companyname:"", jobtitle:"", salary:"", street:"", city:"", state:"", zipcode:"", deadline:"" });
    
    const submitNewTaskHandler = async e => {
        e.preventDefault();
        // setLoginDetails({username:"", password:""});
        // const user = await getUser(logindetails);

        // console.log(user);

        // if (user.username){ 
        //     Login(user);
        //     alert("Login Succeeded!");
        // }else{
        //     Login({});
        //     alert("Login Failed!");
        // }
        // if resp was {stuff} no error
        //else alert (Login Fail)
    }

    return(
         <div className='userPortal'>
            <div className='header'>
                <h2>JobSeeker</h2>
                <button onClick={Logout} className='logout'>Logout</button>
            </div>
            <div className='content-container'>
                <h2>Welcome, <span>{name}</span></h2>
                <div className="add-task-button">
                    <button onClick={() => setAddNewTask(true)}>New Application</button>
                    <AddNewTask trigger={buttonAddNewTask} setTrigger={setAddNewTask}>
                    <h3>New Application Form</h3>
                    <form className="input-group" id="newtask" onSubmit={submitNewTaskHandler}>
                                <div className="new-task-form-inner">
                                    {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
                                    <div className="form-group">
                                        <label htmlFor="company-name">Company/Institution:</label>
                                        <input type="text" name="company-name" id="company-name" onChange={e => setNewTaskDetails({...newtaskdetails, companyname: e.target.value})} value={newtaskdetails.companyname} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Job Title:</label>
                                        <input type="text" name="job-title" id="job-title" onChange={e => setNewTaskDetails({...newtaskdetails, jobtitle: e.target.value})} value={newtaskdetails.jobtitle} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary:</label>
                                        <input type="number" name="salary" id="salary" onChange={e => setNewTaskDetails({...newtaskdetails, salary: e.target.value})} value={newtaskdetails.salary} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street">Street:</label>
                                        <input type="text" name="street" id="street" onChange={e => setNewTaskDetails({...newtaskdetails, street: e.target.value})} value={newtaskdetails.street} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input type="text" name="city" id="city" onChange={e => setNewTaskDetails({...newtaskdetails, city: e.target.value})} value={newtaskdetails.city} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State:</label>
                                        <input type="text" name="state" id="state" onChange={e => setNewTaskDetails({...newtaskdetails, state: e.target.value})} value={newtaskdetails.state} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zipcode">Zipcode:</label>
                                        <input type="text" name="zipcode" id="zipcode" onChange={e => setNewTaskDetails({...newtaskdetails, zipcode: e.target.value})} value={newtaskdetails.zipcode} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="deadline">Deadline:</label>
                                        <input type="date" name="deadline" id="deadline" onChange={e => setNewTaskDetails({...newtaskdetails, deadline: e.target.value})} value={newtaskdetails.deadline} />
                                    </div>
                                    <div className="submit-task-button-container">
                                        <input type="submit" value="CREATE TASK"/>
                                    </div>
                                </div>
                            </form>
                    </AddNewTask>
                </div>
                <div className='flex-container'>
                    <TaskList />
                    <ActiveJobs username={username}/>
                    <InterestJobs />
                </div>
            </div>
         </div>
     );
 }

 export default UserPortal;