import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import ActiveJobs from './ActiveJobs';
import InterestJobs from './InterestJobs';

function UserPortal({Logout, name, username}) {

     return(
         <div className='userPortal'>
            <div className='header'>
                <h2>JobSeeker</h2>
                <button onClick={Logout} className='logout'>Logout</button>
            </div>
            <div className='content-container'>
                <h2>Welcome, <span>{name}</span></h2>
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