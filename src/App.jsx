import { useState } from "react";
import { episodeList } from "./data";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [currentEpisode, setCurrentEpisode] = useState();

  // pass the data along
  return (
    <main>
        <header>
          <h1>Dark Echoes</h1>
        </header>
        <div className="episode-container">
          <EpisodeList episodes={episodes} setCurrentEpisode={setCurrentEpisode} />
          <EpisodeDetails currentEpisode={currentEpisode} />
        </div>
    </main>
        

  );
}
