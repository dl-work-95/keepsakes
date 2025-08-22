import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Link1 from './pages/Link1';
import Link2 from './pages/Link2';
import './App.scss'

export default function App() {
  return (
    <Router basename="/keepsakes">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/link1" element={<Link1 />} />
        <Route path="/link2" element={<Link2 />} />
      </Routes>
    </Router>
  );
}
