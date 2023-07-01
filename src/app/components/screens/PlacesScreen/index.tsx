import React, { useEffect, useState } from "react";
import styles from "../../PlaceCard/styles.module.css";
import PlaceCard from "../../PlaceCard";
import { Pagination } from "../../Pagination";

interface Place {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  // Otros campos de la ubicación
}

function PlacesScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    requestPlaces();
  }, [currentPage]);

  async function requestPlaces() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
      const json = await res.json();
      console.log(json.info);

      setPages(json.info.pages);
      setPlaces(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  function onPreview() {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  }

  function onNext() {
    setCurrentPage((prevPage) => Math.min(pages, prevPage + 1));
  }

  function onGoto(page: number) {
    setCurrentPage(page);
  }

  return (
    <main>
      <h1>Places</h1>
      <div className={styles.container}>
        {places.length > 0 ? (
          places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        pages={pages}
        onPreview={onPreview}
        onNext={onNext}
        onGoto={onGoto}
      />
    </main>
  );
}

export default PlacesScreen;
