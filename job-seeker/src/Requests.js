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