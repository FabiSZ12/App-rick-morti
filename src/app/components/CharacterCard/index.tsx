import styles from "./styles.module.css";
import { Link } from "react-router-dom";

type CharacterProp = {
  character: any;
};

function CharacterCard(props: CharacterProp) {
  return (
    <div key={props.character.id} className={styles.card}>
      <img className={styles.image} src={props.character.image} alt="" />
      <div className={styles.text}>
        <h1>{props.character.name}</h1>
        <p>
          {" "}
          <span
            className={
              props.character.status === "Alive" ? styles.alive : styles.dead
            }
          ></span>{" "}
          {props.character.status} - {props.character.species}
        </p>
      
        <Link
          className={styles.learnMore}
          to={`/characters/${props.character.id}`}
        >
          Informacion
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
