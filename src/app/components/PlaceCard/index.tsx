import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface PlaceCardProps {
  place: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
  };
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div key={place.id} className={styles.card}>
      <div className={styles.text}>
        <h1>Name: {place.name}</h1>
        <p>Type: {place.type}</p>
        <p>Dimension: {place.dimension}</p>
        <Link
          className={styles.learnMore}
          to={`/Places/${place.id}`}
        >
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
