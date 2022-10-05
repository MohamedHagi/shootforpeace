import "./homepage.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stories from "./components/Stories";
import Services from "./components/Services";

function App() {



  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
      <Routes>

        <Route exact path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/services' element={<Services />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
