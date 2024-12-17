import { Link } from "react-router-dom";

function Contact () {
  return(
      <>
      <h1>Contact</h1>
      <ul>
         <button><Link to={"/home"}>Home</Link></button>
         <button><Link to={"/about"}>About</Link></button>
         <button><Link to={"/contact"}>Contact</Link></button>
      </ul>
      </>
  )
}

export default Contact;
