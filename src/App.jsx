import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [currentEpisode, setCurrentEpisode] = useState();

  /** detailed info about the current episode */
  const EpisodeDetails = () => {
    if(!currentEpisode){
      return (
        <section id="details">
          <h2>Details</h2>
          <p>Select an Episode</p>
      </section>
      )
    }
    return (
      <section id="details">
        <h2>{currentEpisode.title}</h2>
        <p>{currentEpisode.description}</p>
        <button>Watch episode {currentEpisode.id} now</button>
      </section>
    );
  }
  
  /** list of episodes that the user can select from */
  const EpisodeList = () => {
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

  // pass the data along
  return (
    <main>
        <header>
          <h1>Dark Echoes</h1>
        </header>
        <div className="episode-container">
          <EpisodeList />
          <EpisodeDetails />
        </div>
    </main>
        

  );
}
