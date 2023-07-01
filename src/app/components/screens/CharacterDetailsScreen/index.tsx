import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../CharactersScreen/styles.module.css";

function CharacterDetailsScreen() {
  const params = useParams();
  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${params.id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacter();
  }, [params.id]);

  return (
    <div className={styles.container}>
      {character ? (
        <div>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <Link className={styles.learnMore} to={`/places/${character.origin.url.split("/").pop()}`}>
            Origin: {character.origin.name}
          </Link>
          <br></br>
          <br></br>
          <Link className={styles.learnMore} to="/characters/" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
            Volver
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CharacterDetailsScreen;
