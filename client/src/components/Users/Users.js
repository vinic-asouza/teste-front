import React, { useState, useEffect } from 'react'

import UserTable from './UserTable'
import UserCard from './UserCard'
import AddUserForm from './AddUserForm'

import './styles.css'

import api from '../../services/api'

export default function Users() {
  const [users, setUsers] = useState([])
  const [auxComponent, setAuxComponent] = useState();
  const [detail, setDetail] = useState('');

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  useEffect(() => {
    async function loadUsers() {
      const res_users = await api.get('users');
      setUsers(res_users.data);
    }
    loadUsers();
  }, []);

  function showTable() {
    setDetail('table');
  }
  function showCard() {
    setDetail('card');
  }

  function loadComponent() {
    switch (detail) {
      case 'table':
        setAuxComponent(<UserTable users={users} deleteUser={deleteUser} />);
        return '';
      case 'card':
        setAuxComponent(<UserCard users={users} deleteUser={deleteUser} />);
        return '';
      default:
        setAuxComponent(<UserTable users={users} deleteUser={deleteUser} />);
        return '';
    }
  }

  useEffect(() => {
    loadComponent();
  }, [detail, users]);

  return (
    <div className="main-content">
      <AddUserForm addUser={addUser} />
      <div className="actions">
        <nav>
          <button type="button" onClick={() => showTable()}>Table</button>
          <button type="button" onClick={() => showCard()}>Cards</button>
        </nav>
      </div>
      {auxComponent}
    </div>
  )
}
