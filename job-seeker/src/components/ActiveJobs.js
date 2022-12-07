import React, { useState, useEffect } from 'react'
import {jobList} from './dummy-data'
import {getJobs} from './../Requests'

function ActiveJobs({username, rerender}) {
    const [jobs, setJobs] = useState([]);

    const getData = async () => {
        const res = await getJobs(username);
        setJobs(res);
    };

    useEffect(() => {
        getData();
    }, [rerender]);

    return(
        <div className='taskList'>
            <h2>Active Jobs</h2>
            <div>
                <div className='header-container'>
                    <div className='entry'>Title</div>
                    <div className='entry'>Location</div>
                    <div className='entry'>         </div>
                </div>
                <div>
                    {(jobs.map) ? jobs.map((job) => (
                        <div key={job.id} className='task-container'>
                            <div className='task'>
                                <div>{job.company} {job.title}</div>
                                <div>{job.city},{job.state}</div>
                                <div>{job.rating}</div>
                                <div class="close-container">
                                    <div class="leftright"></div>
                                    <div class="rightleft"></div>
                                    <label class="close">close</label>
                                </div>
                            </div>
                        </div>
                    )): ""}
                </div>
            </div>
        </div>
    );
}

export default ActiveJobs;