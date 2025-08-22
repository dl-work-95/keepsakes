import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Keepsakes. All rights reserved.</p>
    </footer>
  );
}
