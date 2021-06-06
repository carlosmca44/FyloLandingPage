import "./App.css"
import Footer from "./components/Footer/inde";
import FLanding from "./components/first";
import SLanding from "./components/second";
import NavBar from "./components/NavBar"
import PreFooter from "./components/PreFooter";

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
