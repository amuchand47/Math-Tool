import "./App.css";
import About from "./components/About";
import Imp from "./components/Imp";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar title="Math tool" aboutText="About Us" impText ="Important Solution" />

        <div className="container my-3">
          {/* <TextForm heading = "Enter your text into analyse"/> */}

          {/* <About/> */}

          <Routes>

            < Route path="/about" element = {<About />}/>

            <Route path="/" element = {<TextForm heading="Convert your text into Latex form" />}/>

            < Route path="/impsol" element = {<Imp />}/>
              
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
