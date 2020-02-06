import React from 'react';
import { FaUser } from 'react-icons/fa';
import './styles.css';


export default function Header() {
  return (
    <header id="main-header">
      <FaUser size="2em" />
      <h1>Users Control</h1>
    </header>
  );
}
