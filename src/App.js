import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" />

        <div className="container my-3">
          {/* <TextForm heading = "Enter your text to analyse"/> */}

          {/* <About/> */}

          <Routes>
            < Route path="/about" element = {<About />}/>
            <Route path="/" element = {<TextForm heading="Enter your text to analyse" />}/>
              
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
