/** list of episodes that the user can select from */
export default function EpisodeList({episodes, setCurrentEpisode}) {
  return (
    <section id="episodes">
      <h2>Episodes</h2>

      <ul className="episode-list">
        {episodes.map(episode =>
          <li key={episode.id} onClick={() => setCurrentEpisode(episode)}>
            {episode.title}
          </li>
        )}
      </ul>

    </section>
  );
}