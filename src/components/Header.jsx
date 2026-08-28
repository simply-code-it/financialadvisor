import React from 'react'

export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="brand">
        <h1>Customer Life Insurance Centre</h1>
        <p className="tag">Trusted guidance for Tata AIA life solutions</p>
      </div>
      <nav className="nav">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('services')}>Services</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  )
}
