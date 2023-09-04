import "./App.css";
import Navbar from "./components/Navbar";
import DetailsFilling from "./components/pages/DetailsFilling";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="para">
       <Navbar/>
       <DetailsFilling/>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
