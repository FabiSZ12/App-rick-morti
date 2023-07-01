import { Link } from "react-router-dom";


function HomeScreen() {
  const containerStyle = {
    display: "grid",
    gap: "10px",
  };
  const linkStyles = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    border: "10px solid blue",
    borderRadius: "10px",
    color: "blue",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    
  };
    return (
      <main>
        <div style={containerStyle}>
          <h1>Bienvenido a la app de Rick and Morty!</h1>
          <br></br>
          <br></br>
          <Link to="/characters"style={linkStyles}>Personajes </Link>
          <br />
          <br></br>
          <br></br>
          <Link to="/episodes"style={linkStyles}>Episodios</Link>
          <br />
          <br></br>
          <br></br>
          <Link to="/places" style={linkStyles}>Ubicaciones</Link>
        </div>
      </main>
    );
  }

export default HomeScreen;
