import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <h1 className='logo'>Keepsakes</h1>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </header>
  );
}
