import React from "react";
import { Link } from "react-router-dom";
import styles from "../EpisodieCard/styles.module.css";

interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const { id, name, episode: episodeCode } = episode;

  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <p>Episode: {episodeCode}</p>
      <Link to={`/episodes/${id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
};

export default EpisodeCard;
