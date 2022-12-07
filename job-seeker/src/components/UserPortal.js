import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import ActiveJobs from './ActiveJobs';
import InterestJobs from './InterestJobs';
import AddNewTask from './AddNewTask';
import { addJob } from '../Requests';

function UserPortal({Logout, name, username}) {
    const [buttonAddNewTask, setAddNewTask] = useState(false);
    const [newtaskdetails, setNewTaskDetails] = useState({});
    
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

        await addJob(newtaskdetails, username);
        setNewTaskDetails({});
        setAddNewTask(false);
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
                    <button onClick={() => setAddNewTask(true)}>Add Job</button>
                    <AddNewTask trigger={buttonAddNewTask} setTrigger={setAddNewTask}>
                    <h3>New Job</h3>
                    <form className="input-group" id="newtask" onSubmit={submitNewTaskHandler}>
                                <div className="new-task-form-inner">
                                    {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
                                    <div className="form-group">
                                        <label htmlFor="company-name">Company/Institution:</label>
                                        <input type="text" name="company-name" id="company-name" onChange={e => setNewTaskDetails({...newtaskdetails, company: e.target.value, id: Date.now()})} value={newtaskdetails.company} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Job Title:</label>
                                        <input type="text" name="job-title" id="job-title" onChange={e => setNewTaskDetails({...newtaskdetails, title: e.target.value, id: Date.now()})} value={newtaskdetails.title} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary:</label>
                                        <input type="number" name="salary" id="salary" onChange={e => setNewTaskDetails({...newtaskdetails, salary: e.target.value, id: Date.now()})} value={newtaskdetails.salary} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street">Street:</label>
                                        <input type="text" name="street" id="street" onChange={e => setNewTaskDetails({...newtaskdetails, street: e.target.value, id: Date.now()})} value={newtaskdetails.street} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input type="text" name="city" id="city" onChange={e => setNewTaskDetails({...newtaskdetails, city: e.target.value, id: Date.now()})} value={newtaskdetails.city} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State:</label>
                                        <input type="text" name="state" id="state" onChange={e => setNewTaskDetails({...newtaskdetails, state: e.target.value, id: Date.now()})} value={newtaskdetails.state} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zipcode">Zipcode:</label>
                                        <input type="text" name="zipcode" id="zipcode" onChange={e => setNewTaskDetails({...newtaskdetails, zipcode: e.target.value, id: Date.now()})} value={newtaskdetails.zipcode} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="deadline">Deadline:</label>
                                        <input type="date" name="deadline" id="deadline" onChange={e => setNewTaskDetails({...newtaskdetails, deadline: e.target.value, id: Date.now()})} value={newtaskdetails.deadline} />
                                    </div>
                                    <div className="submit-task-button-container">
                                        <input type="submit" value="Add Job"/>
                                    </div>
                                </div>
                            </form>
                    </AddNewTask>
                </div>
                <div className='flex-container'>
                    <TaskList />
                    <ActiveJobs username={username} rerender={buttonAddNewTask}/>
                    {/* <InterestJobs /> */}
                </div>
            </div>
         </div>
     );
 }

 export default UserPortal;