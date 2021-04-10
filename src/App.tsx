import "./App.css"
import FLanding from "./sections/landings/first";
import SLanding from "./sections/landings/second";
import NavBar from "./sections/NavBar"

function App() {
  return (
    <div>
      <NavBar/>
      <FLanding />
      <SLanding />

  Get early access today

  It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you.

  Get Started For Free

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
