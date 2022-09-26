import './Header.css'
export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
            <h1>Gym Logo</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Membership</li>
        </ul>
      </header>
    </div>
  )
}
