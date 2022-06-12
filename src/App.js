import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Hero_Header from "./components/hero-header";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Hero_Header/>
    </div>
  );
}

export default App;
