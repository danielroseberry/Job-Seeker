import React, { useState } from 'react'

function UserPortal({ User, Logout}) {

    return(
        <div className='UserPortal'>
            <h2>Welcome to Job Seeker, <span>{User.name}</span></h2>
            <button onClick={Logout}>Logout</button>
        </div>
    );
}
export default UserPortal;
{/* <div className="welcome">
        <h2>Welcome to Job Seeker, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
</div> */}