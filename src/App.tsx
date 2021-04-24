import "./App.css"
import FLanding from "./sections/landings/first";
import SLanding from "./sections/landings/second";
import NavBar from "./sections/NavBar"
import PreFooter from "./sections/PreFooter";

function App() {
  return (
    <div>
      <NavBar />
      <FLanding />
      <SLanding />
      <PreFooter />

  Phone: +1-543-123-4567
  example@fylo.com

  About Us
  Jobs
  Press
  Blog

  Contact Us
  Terms
  Privacy

  <footer>
    <p className="attribution">
      Challenge by <a href="www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="/#">Your Name Here</a>.
    </p>
  </footer>      
    </div>
  );
}

export default App;
