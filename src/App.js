import "./App.css";
import Navbar from "./components/Navbar";
import DetailsFilling from "./components/pages/DetailsFilling";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import AboutUs from "./components/pages/AboutUs";
import MyResume from './components/pages/MyResumes';
import Preview from "./components/Preview";
import {Provider} from 'react-redux'
import store from "./Redux/Store";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </div>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
