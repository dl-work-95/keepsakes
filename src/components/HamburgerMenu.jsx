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
            <li><Link to="/link1" onClick={() => setOpen(false)}>Link 1</Link></li>
            <li><Link to="/link2" onClick={() => setOpen(false)}>Link 2</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
