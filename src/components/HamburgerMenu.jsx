import { Link } from 'react-router-dom';
import './HamburgerMenu.scss';

export default function HamburgerMenu({ open, setOpen }) {
  return (
    <div className="menu-wrapper">
      <button className="menu-button" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <nav className="menu">
          <ul>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/bestgames" onClick={() => setOpen(false)}>Best Games</Link></li>
            <li><Link to="/achievements" onClick={() => setOpen(false)}>Achievements</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
