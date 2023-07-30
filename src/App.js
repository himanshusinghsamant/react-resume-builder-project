import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/pages/AboutUs";
import { Container } from '@mui/material'

function App() {
  return (
    <>        
       <Navbar/>
       <Container>
       <AboutUs />
       </Container>     
    </>
  );
}

export default App;
