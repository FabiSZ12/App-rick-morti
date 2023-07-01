import React, { useEffect, useState } from "react";
import styles from "../../EpisodieCard/styles.module.css";
import EpisodeCard from "../../EpisodieCard";
import { Pagination } from "../../Pagination";

interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  // Otros campos del episodio
}

function EpisodesScreen() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    requestEpisodes();
  }, []);

  async function requestEpisodes() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await res.json();
      setEpisodes(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <h1>EPISODIOS</h1>
      <div>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      
    </main>
  );
}

export default EpisodesScreen;
