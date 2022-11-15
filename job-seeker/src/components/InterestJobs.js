import React, { useState, useEffect } from 'react'
import {jobList} from './dummy-data'

function InterestJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(jobList);
    }, []);

    return(
        <div className='taskList'>
            <h2>Interested Jobs</h2>
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

export default InterestJobs;