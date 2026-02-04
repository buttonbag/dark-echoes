  /** detailed info about the current episode */
  export default function EpisodeDetails ({currentEpisode}) {
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

