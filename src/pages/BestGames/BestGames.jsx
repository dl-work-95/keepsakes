import './BestGames.scss';
import { useEffect, useState } from 'react';

export default function BestGames() {
  const [gameYears, setGameYears] = useState([])
  const medals = ['🥇', '🥈', '🥉']; // top 3 medals
  const honorableEmoji = '⚪'; // symbol for honorable mentions
  const multiplayerEmoji = '👥'; // symbol for mp

  function getSteamCover(appId) {
    return `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;
  }

  useEffect(() => {
    async function fetchGamesSheet() {
      const url =
        'https://docs.google.com/spreadsheets/d/1HRYMh9Av556UFVRX1xCStmS_dXoVdFB2XOiPAemh8bY/gviz/tq?tqx=out:json';

      const res = await fetch(url);
      const text = await res.text();

      // Remove the `/*O_o*/ google.visualization.Query.setResponse(` wrapper
      const jsonText = text
        .replace(/^\/\*O_o\*\/\s*google\.visualization\.Query\.setResponse\(/, '')
        .replace(/\);\s*$/, '');

      const json = JSON.parse(jsonText);

      const rows = json.table.rows;

      // Transform rows into your nested structure
      const grouped = {};

      rows.forEach(({ c }) => {
        const year = c[0]?.v;
        const yearLabel = !year ? c[7]?.v : undefined; // fallback label for old list
        const listType = c[1]?.v;
        const rank = c[2]?.v;
        const title = c[3]?.v;
        const appId = c[4]?.v;
        const cover = c[5]?.v;
        const notes = c[6]?.v;

        const key = year || yearLabel || 'old-list';

        if (!grouped[key]) {
          grouped[key] = {
            year: year || undefined,
            yearLabel: yearLabel || undefined,
            games: [],
            honorable: [],
            multiplayer: [],
            oldGames: [],
            oldMultiplayer: []
          };
        }

        const entry = { title, notes, appId, cover };

        if (listType === 'main') grouped[key].games.push(entry);
        else if (listType === 'honorable') grouped[key].honorable.push(entry);
        else if (listType === 'multiplayer') grouped[key].multiplayer.push(entry);
        else if (listType === 'old') grouped[key].oldGames.push(title);
        else if (listType === 'old-multiplayer') grouped[key].oldMultiplayer.push(title);
      });

      // Convert object → array
      const result = Object.values(grouped)
        .sort((a, b) => (b.year || 0) - (a.year || 0));

      setGameYears(result);
      console.log('Transformed gameYears:', result);
    }

    fetchGamesSheet();
  }, []);

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
            <button
              key={year || yearLabel}
              onClick={() => {
                const el = document.getElementById(`year-${year || yearLabel}`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className='button-jump-to-year'
            >
              {year || yearLabel}
            </button>
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
