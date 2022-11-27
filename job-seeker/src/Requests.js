const APIURL = 'http://localhost:5000'

export const getUser = async user => {
    const res = await fetch(`${APIURL}/get-user`);
    return res.json();
};