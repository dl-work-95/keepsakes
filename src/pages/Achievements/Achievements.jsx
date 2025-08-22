import './Achievements.scss';

export default function Achievements() {
  const achievements = [
    //{
    //game: '',
    //type: '',
    //emoji: '🏆',
    //title: '',
    //platform: '',
    //cover: '',
    //link: '',
    //notes: '',
    //year: '',
    //difficulty: '',
    //emoji:'',
    //appId: 
    //},
    {
      game: 'Metal Gear Solid 4: Guns of the Patriots',
      type: 'Challenge/Trophy',
      title: 'Big Boss Emblem',
      platform: 'PS3',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd-QuW2InEAIOSM8vexjz8YuSFlrnh3JkEQ&s',
      emoji: '🏆'
    },
    {
      game: 'Call of Duty: World at War',
      type: 'Trophy',
      emoji: '🏆',
      title: 'Heart of the Reich on Veteran',
      platform: 'PS3',
      appId: 10090
    },
    {
      game: 'Phasmophobia',
      type: 'Challenge/Trophy',
      emoji: '🏆',
      title: 'Apocalypse Challenge',
      platform: 'PC',
      appId: 739630,
      year: 2025,
    },
    {
      game: 'GTA Online',
      type: 'Challenge',
      emoji: '⏱️',
      title: 'Criminal Mastermind',
      platform: 'PC',
      cover: 'https://m.media-amazon.com/images/M/MV5BN2MxZTg0ZjYtYWRhMC00MTZlLTg0Y2QtYjhjZDdiNTk2MWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    }
  ];

  function getSteamCover(appId) {
    return `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;
  }

  return (
    <div className="achievements-page">
      <h1>Gaming Achievements</h1>
      <ul className="achievements-list">
        {achievements.map((a, index) => (
          <li key={index} className="achievement-item">
            <div className="achievement-cover-block">
              <img
                src={a.appId ? getSteamCover(a.appId) : (a.cover || 'no-cover.png')}
                alt={a.game}
                className="game-cover"
                loading="lazy"
              />
            </div>
            <div className="achievement-info-block">
              <strong>{a.game}</strong>

              <span>{a.emoji}{a.type}: {a.title}</span>
              {a.notes && <span className="achievement-notes"> ({a.notes})</span>}
              <span> [{a.platform}]{' '}{a.year && (a.year)}</span>
              {a.difficulty && <span> [{a.difficulty}]</span>}
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                  Proof
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
