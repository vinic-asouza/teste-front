import React from 'react'

export default function UserTable(props) {

  function confirmExclusao(id) {
    if(window.confirm("Tem certeza que deseja excluir?")) {
      props.deleteUser(id);
    }
  }

  return (
    <div className="view-users">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>E-Mail</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src={user.avatar} alt="" /></td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => confirmExclusao(user.id)} className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
