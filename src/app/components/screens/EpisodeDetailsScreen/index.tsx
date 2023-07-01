import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../../EpisodieCard/styles.module.css";
import Personaje from "../../CardEpisode"
interface Character {
  id: number;
  name: string;
  image: string;
}

interface Episode {
  id: number;
  name: string;
  episode: string;
  characters: Character[];
}

function EpisodeDetailsScreen() {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetchEpisode();
  }, []);

  async function fetchEpisode() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const data = await response.json();
      setEpisode(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      {episode ? (
        <div>
          <h1 className={styles.title}>
            {episode.name} - {episode.episode}
          </h1>
          <h2>PERSONAJES QUE APARECEN EN EL EPISODIO:</h2>
          <div className={styles.characterList}>
            {episode.characters.map((character) => (
            <Personaje enlace={character} />
            ))}
          </div>
          <Link to="/episodes" className={styles.goBacka}>
            Volver Atrás
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EpisodeDetailsScreen;
