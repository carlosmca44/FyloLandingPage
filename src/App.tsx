import "./App.css"
import Footer from "./sections/Footer/inde";
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
      <Footer />     
    </div>
  );
}

export default App;
