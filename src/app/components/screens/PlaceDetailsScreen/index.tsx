import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../../PlaceCard/styles.module.css";

interface Place {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

function PlaceDetailsScreen() {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    fetchPlace();
  }, []);

  async function fetchPlace() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      const data = await response.json();
      setPlace(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      {place ? (
        <div>
          <h1 className={styles.title}>{place.name}</h1>
          <p className={styles.info}>Type: {place.type}</p>
          <p className={styles.info}>Dimension: {place.dimension}</p>
          <p className={styles.info}>Created: {place.created}</p>
          <Link className={styles.goBack} to="/places">
            Volver Atras
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlaceDetailsScreen;
