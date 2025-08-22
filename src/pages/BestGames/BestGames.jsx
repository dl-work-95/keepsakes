import './BestGames.scss';

export default function BestGames() {
  const gameYears = [
    {
      year: 2025,
      games: [{ title: 'Clair Obscur: Expedition 33', appId: 1903340 }],
      honorable: []
    },
    {
      year: 2024,
      games: [],
      multiplayer: [{ title: 'Helldivers 2', notes: 'To more COOP PVEs' }]
    },
    {
      year: 2023,
      games: [{ title: 'Starfield', appId: 1716740 }],
      honorable: []
    },
    {
      year: 2021,
      games: [],
      multiplayer: [{ title: 'It Takes Two', notes: 'Best COOP game and it set the formula.' }]
    },
    {
      year: 2020,
      games: [{ title: 'Ghost of Tsushima', appId: 2215430 }, { title: 'The Walking Dead: The Telltale Definitive Series', appId: 1449690, notes: 'Games launched different years. The order of liking is 1>4>2>M>3>400' }],
      multiplayer: [{ title: 'Phasmophobia', notes: 'OG of proximity horror.' }]
    },
    {
      year: 2018,
      games: [{ title: 'Red Dead Redemption 2', appId: 1174180 }],
      honorable: [{ title: 'Marvel\'s Spider-Man' }],
      multiplayer: [{ title: 'Sea of Thieves', notes: 'If I told you the hours spent on this...' }]
    },
    {
      year: 2017,
      games: [{ title: 'Horizon Zero Dawn', appId: 1151640 }],
      multiplayer: [{ title: 'Playerunknown\'s Battlegrounds (PUBG)', notes: 'Best BR imo' }]
    },
    {
      year: 2016,
      games: [],
      honorable: [{ title: 'Uncharted 4: A Thief\'s End' }],
      multiplayer: [{ title: 'Battlefield 1', notes: 'Probably won\'t ever get something like this.' }]
    },
    {
      year: 2015,
      games: [{ title: 'The Witcher 3: Wild Hunt', notes: 'Better experience if you play the trilogy', appId: 292030 }, { title: 'Metal Gear Solid V: The Phantom Pain', notes: 'Metal Gear Saga as a whole', appId: 287700 }],
      honorable: []
    },
    {
      year: 2013,
      games: [{ title: 'The Last of Us', appId: 1888930 }, { title: 'Assassin\'s Creed IV: Black Flag', appId: 242050 }],
      honorable: [],
      multiplayer: [{ title: 'GTA Online', notes: 'The GTA V version was revolutionary.' }]
    },
    {
      year: 2012,
      games: [],
      honorable: [{ title: 'Mass Effect 3', notes: 'The trilogy' }],
      multiplayer: [{ title: 'Counter-Strike', notes: 'The best competitive game out there to this day' }]
    },
    {
      //year: 2011,
      //games: [],
      //honorable: [],
      //multiplayer: []
    },
    {
      year: 2010,
      games: [{ title: 'Red Dead Redemption', appId: 2668510, notes: 'Undead Nightmare also' }, { title: 'Fallout: New Vegas', appId: 22380 }],
      honorable: [{ title: 'Mass Effect 2', notes: 'The trilogy' }],
      multiplayer: [{ title: 'Battlefield: Bad Company 2', notes: 'The hours I\'ve spent blowing the buildings with the M-COMs' }]
    },
    {
      year: 2009,
      games: [{ title: 'Batman: Arkham Asylum', appId: 35140 }, { title: 'Uncharted 2: Among Thieves', cover: 'https://m.media-amazon.com/images/M/MV5BYzAxNDY2NjktNTI0Yi00NmJjLTkyMjYtNDk2ZGZkZTg0ZTg2XkEyXkFqcGc@._V1_.jpg' }],
      honorable: [],
      multiplayer: [{ title: 'Call of Duty: Modern Warfare 2', notes: 'CoD in the 2008-2012 era... 👨‍🍳' }]
    },
    {
      year: 2008,
      games: [{ title: 'Metal Gear Solid 4: Guns of the Patriots', notes: 'Metal Gear Saga as a whole', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd-QuW2InEAIOSM8vexjz8YuSFlrnh3JkEQ&s' }, { title: 'Call of Duty: World at War', appId: 10090 }, { title: 'Grand Theft Auto IV', appId: 12210 }],
      honorable: [{ title: 'Far Cry 2' }]
    },
    {
      year: 2007,
      honorable: [{ title: 'Mass Effect', notes: 'The trilogy' }]
    },
    {
      year: 2004,
      games: [{ title: 'Grand Theft Auto: San Andreas', appId: 12120 }],
      honorable: []
    },
    {
      year: 2001,
      games: [{ title: 'Metal Gear Solid 2: Sons of Liberty', notes: 'Metal Gear Saga as a whole', appId: 2131640 }],
      honorable: []
    },
    {
      year: 1998,
      games: [{ title: 'Metal Gear Solid', notes: 'Metal Gear Saga as a whole', appId: 2131630 }],
      honorable: []
    },
    // Add more years here
    {
      yearLabel: 'Old list as of 2025',
      oldGames: [
        'Red Dead Redemption 1 & 2',
        'The Last of Us Part 1',
        'Metal Gear Solid Saga',
        'The Witcher Trilogy',
        'Horizon: Zero Dawn',
        'Ghost of Tsushima',
        'Grand Theft Auto: San Andreas & 4',
        'Assassin\'s Creed IV: Black Flag',
        'The Walking Dead: The Telltale Series (1>4>2>M>3>400)',
        'Call of Duty: World at War'
      ],
      oldMultiplayer: [
        'Sea of Thieves',
        'Battlefield 1 or BFBC2',
        'Call of Duty: Modern Warfare 2 or CoD in the 2008-2012 era',
        'Counter-Strike',
        'GTA Online',
        'Helldivers 2',
        'Phasmophobia',
        'PUBG',
        'It Takes Two (Co-op)'
      ]
    }
  ];

  const medals = ['🥇', '🥈', '🥉']; // top 3 medals
  const honorableEmoji = '⚪'; // symbol for honorable mentions
  const multiplayerEmoji = '👥'; // symbol for mp

  function getSteamCover(appId) {
    return `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;
  }

  return (
    <div className='best-games-page'>
      <h1>Best Games Listed by Year</h1>
      <p>I think top 10 lists just don't cut it anymore. So I decided to list the top games in each year and actually recommend all of them instead of a top 20, 15 or 10.</p>
      <p>The years will be in descending order and some years might be missing because I didn't play any from those years. There will be some games you think should be here and maybe I haven't played them yet.</p>
      <p className="jump-to-year">
        Jump to year:{' '}
        {gameYears
          .sort((a, b) => (b.year || 0) - (a.year || 0))
          .map(({ year, yearLabel }) => (
            <a key={year || yearLabel} href={`#year-${year || yearLabel}`} style={{ marginRight: '1rem' }}>
              {year || yearLabel}
            </a>
          ))}
      </p>
      {gameYears.map(({ year, yearLabel, games = [], honorable = [], multiplayer = [], oldGames = [], oldMultiplayer = [] }) => (
        <div key={year || yearLabel}>
          <h2 id={`year-${year || yearLabel}`}>{year || yearLabel}</h2>
          <ol>
            {games?.map((game, index) => (
              <div key={index} className="game-item">
                <span className="medal">{medals[index] || `#${index + 1}`}</span>
                <img
                  src={game.appId ? getSteamCover(game.appId) : (game.cover || 'no-cover.png')}
                  alt={game.title}
                  className="game-cover"
                  loading="lazy"
                />
                <div className="game-details">
                  <span className="game-title">{game.title}</span>
                  {game.notes && <p className="game-notes">{game.notes}</p>}
                </div>
              </div>
            ))}
            {honorable?.length > 0 && (
              <p>
                {honorableEmoji} Honorable Mentions:{' '}
                {honorable.map((h, index) => (
                  <span key={index}>
                    {h.title}
                    {h.notes && (
                      <span className="game-notes-inline"> ({h.notes})</span>
                    )}
                    {index < honorable.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            )}
            {multiplayer?.length > 0 && (
              <p>
                {multiplayerEmoji} Best Multiplayer:{' '}
                {multiplayer.map((game, index) => (
                  <span key={index}>
                    {game.title}
                    {game.notes && (
                      <span className="game-notes-inline"> ({game.notes})</span>
                    )}
                    {index < multiplayer.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            )}
            {/* Old 2025 list */}
            {oldGames?.length > 0 && (
              <div className="old-list-section">
                <p>🔹 Top Games (That I played until 2025):</p>
                <ul>
                  {oldGames.map((game, index) => (
                    <li key={index}>{game}</li>
                  ))}
                </ul>
              </div>
            )}
            {oldMultiplayer?.length > 0 && (
              <div className="old-list-section">
                <p>🎮 Top Multiplayer Games (That I played until 2025):</p>
                <ul>
                  {oldMultiplayer.map((game, index) => (
                    <li key={index}>{game}</li>
                  ))}
                </ul>
              </div>
            )}
          </ol>
        </div>
      ))}
    </div>
  );
}
