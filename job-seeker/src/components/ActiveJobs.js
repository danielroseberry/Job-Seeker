import React, { useState, useEffect } from 'react'
import {jobList} from './dummy-data'
import {getJobs} from './../Requests'

function ActiveJobs({username}) {
    const [jobs, setJobs] = useState([]);

    const getData = async () => {
        const res = await getJobs(username);
        setJobs(res);
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className='taskList'>
            <h2>Active Jobs</h2>
            <div>
                <div className='header-container'>
                    <div>Sort By</div>
                </div>
                <div>
                    {jobs.map((job) => (
                        <div key={job.id} className='task-container'>
                            <div className='task'>
                                <div>{job.title}</div>
                                <div>{job.rating}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActiveJobs;