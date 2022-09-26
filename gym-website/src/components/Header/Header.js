import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Gym Logo</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/personal-training">Personal Training</Link>
          </li>
          <li><Link to="/group-classes">Group Classes</Link></li>
          <li><Link to="/membership">Membership</Link></li>
        </ul>
      </header>
    </div>
  )
}
