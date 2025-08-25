import './Landing.scss';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='landing-page'>
      <h1>Welcome to Keepsakes 👋</h1>
      <h2>What can you expect to see here</h2>
      <p>I will use this Github Pages sandbox to publish <strong>lists</strong>, links and other stuff I find interesting.</p>
      <h2>Lists?</h2>
      <p>Yes, there will be lists for my favorite things, like what I consider the <Link to="/bestgames">best games of all time</Link> for example.</p>
      <h2>Vibe coded</h2>
      <p>Yes, this website is mostly AI generated since it's a side project.</p>
    </div>
  );
}
