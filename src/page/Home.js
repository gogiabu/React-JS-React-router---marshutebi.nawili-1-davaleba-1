import { Link } from "react-router-dom";

function Home () {
  return(
      <>
      <h1>Home</h1>
      <ul>
         <button><Link to={"/home"}>Home</Link></button>
         <button><Link to={"/About"}>About</Link></button>
         <button><Link to={"/Contact"}>Contact</Link></button>
      </ul>
      </>
  )
}

export default Home;
