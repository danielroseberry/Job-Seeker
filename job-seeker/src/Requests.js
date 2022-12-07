const APIURL = 'http://127.0.0.1:5000'

export const getUser = async user => {
    const res = await fetch(`${APIURL}/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    return res.json();
};

export const createUser = async user => {
    const res = await fetch(`${APIURL}/register`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    return res.json();
};

export const getJobs = async username => {
    const res = await fetch(`${APIURL}/${username}/active-jobs`);
    return res.json();
};

export const getTasks = async username => {
    const res = await fetch(`${APIURL}/${username}/tasks`);
    return res.json();
};

export const addJob = async (job, username) => {
    const res = await fetch(`${APIURL}/${username}/${job.id}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    });
    return;
};

export const deleteJob = async (username, id) => {
    const res = await fetch(`${APIURL}/${username}/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
    });
    return;
};

export const updateTask = async (username, job) => {
    const res = await fetch(`${APIURL}/${username}/${job.id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    });
    return;
};