import { Link } from "react-router-dom";

function About () {
  return(
      <>
      <h1>About</h1>
      <ul>
         <button><Link to={"/home"}>Home</Link></button>
         <button><Link to={"/About"}>About</Link></button>
         <button><Link to={"/Contact"}>Contact</Link></button>
      </ul>
      </>
  )
}

export default About;
