import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing/Landing';
import BestGames from './pages/BestGames/BestGames';
import Footer from './components/Footer';
import Achievements from './pages/Achievements/Achievements';

export default function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <main className='content'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/bestgames" element={<BestGames />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
