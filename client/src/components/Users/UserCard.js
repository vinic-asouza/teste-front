import React from 'react'

export default function UserCard(props) {
    return (
        <div className="users-card">
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <div key={user.id} className="card">
                        <img src={user.avatar} alt="" />
                        <div className="info">
                            <h4><b>{user.name}</b></h4>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                ))
            ) : (
                    <div className="card">
                        <h3>No Users</h3>
                    </div>
                )}
        </div>
    )
}
