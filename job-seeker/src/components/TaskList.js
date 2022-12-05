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
                    <h3>Task</h3>
                    <h3>Deadline</h3>
                </div>
                <div>
                    {tasks.map((task) => (
                        <div key={task.id} className='task-container'>
                            <div className='task'>
                                <div>Apply to {task.company}</div>
                                <div>{task.deadline}</div>
                                    <div class="close-container">
                                    <div class="leftright"></div>
                                    <div class="rightleft"></div>
                                    <label class="close">close</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;