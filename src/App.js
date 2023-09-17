import "./App.css";
import Navbar from "./components/Navbar";
import DetailsFilling from "./components/pages/DetailsFilling";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import AboutUs from "./components/pages/AboutUs";
import MyResume from './components/pages/MyResumes'
import Preview from "./components/Preview";
import {Provider} from 'react-redux'
import store from "./Redux/Store";
import DataContextPro from "./context/Context";
// import Template_1 from './templates/Template_1'

function App() {
  return (
    <>
      <BrowserRouter>
    <DataContextPro>
      <Provider store = {store}>
        <div className="para">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/preview" element={<Preview/>} />
            <Route
              exact
              path="/details-filling-page/*"
              element={<DetailsFilling />}
            />
              <Route exact path="/my-resumes" element={<MyResume/>} />
            <Route exact path="/about-us" element={<AboutUs />} />
          </Routes>
          {/* <Template_1/> */}
        </div>
        </Provider>
      </DataContextPro>
      </BrowserRouter>
    </>
  );
}

export default App;
