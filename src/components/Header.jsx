import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <h1 className='logo'>
        <Link to="/" onClick={() => setOpen(false)}>
          Keepsakes
        </Link>
      </h1>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </header>
  );
}
