import "./homepage.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
