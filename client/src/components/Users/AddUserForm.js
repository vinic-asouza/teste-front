import React, { useState } from 'react'

export default function AddUserForm(props) {
  const initialFormState = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
  }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!user.name || !user.username) return

          props.addUser(user)
          setUser(initialFormState)
        }}
      >
        <ul>
          <li>
            <label htmlFor="name">Name: </label>
            <label htmlFor="username">Username: </label>
            <label htmlFor="email">Email: </label>
            <label htmlFor="phone">Phone: </label>
          </li>
          <li>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} required />
            <input type="text" name="username" value={user.username} onChange={handleInputChange} required />
            <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
            <input type="number" name="phone" value={user.phone} onChange={handleInputChange} required />
          </li>
        </ul>
        <ul>
          <li>
            <button>Add new user</button>
          </li>
        </ul>
      </form>
    </div>
  )
}