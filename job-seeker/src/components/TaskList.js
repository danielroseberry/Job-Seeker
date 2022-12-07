import React, { useState, useEffect } from 'react'
import {jobList} from './dummy-data'

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(jobList);       
    }, []);

    return(
        <div className='taskList'>
            <h2>Upcoming Tasks</h2>
            <div>
                <div className='header-container'>
                    <div className='entry'>Task</div>
                    <div className='entry'>Deadline</div>
                    <div className='entry'>Status</div>
                </div>
                <div>
                    {tasks.map((task) => (
                        <div key={task.id} className='task-container'>
                            <div className='task'>
                                <div>Apply to {task.company}</div>
                                <div>{task.deadline}</div>
                                
                                    <div><input type="checkbox" id="status-box" name="status-box" value="Status"/></div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;