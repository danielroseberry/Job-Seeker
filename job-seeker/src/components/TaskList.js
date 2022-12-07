import React, { useState, useEffect } from 'react'
import {getTasks, updateTask} from './../Requests'

function TaskList({username, rerender, delJob}) {
    const [tasks, setTasks] = useState([]);

    const getData = async () => {
        const res = await getTasks(username);
        setTasks(res);
    };

    useEffect(() => {
        getData(username);
    }, [rerender, delJob]);

    const handleClick = async (id) => {
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].id === id){
                if (!tasks[i].status){
                    tasks[i].status = 1;
                }else{
                    tasks[i].status = null;
                }
                await updateTask(username, tasks[i]);
            }
        }
    };

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
                    {(tasks.map) ? tasks.map((task) => (
                        <div key={task.id} className='task-container'>
                            <div className='task'>
                                <div>Apply to {task.company}</div>
                                <div>{task.deadline}</div>
                                
                                    <div><input type="checkbox" id="status-box" name="status-box" value="Status" onClick={() => handleClick(task.id)}/></div>
                                
                            </div>
                        </div>
                    )) : ""}
                </div>
            </div>
        </div>
    );
}

export default TaskList;