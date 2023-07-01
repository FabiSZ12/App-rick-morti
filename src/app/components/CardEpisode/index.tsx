import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../EpisodieCard/styles.module.css";

interface Character {
  id: number;
  name: string;
  image: string;
}



function EpisodeDetailsScreen(enlace:any) {
  
  const [personaje, setPersonaje] = useState<Character | null>(null);

  useEffect(() => {
    fetchEpisode();
    console.log('hol', enlace)
  
  }, []);

  async function fetchEpisode() {
    try {
      const response = await fetch(
        enlace.enlace
      );
      const data = await response.json();
      setPersonaje(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <>
            
              {personaje && <Link key={personaje.id} to={`/characters/${personaje.id}`}>
                <div className={styles.characterCard}>
                  <img src={personaje.image} alt={personaje.name} />
                  <p>{personaje.name}</p>
                </div>
              </Link>}
            
      </>  
  );
}

export default EpisodeDetailsScreen;
