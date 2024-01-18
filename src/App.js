import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Navbar from "./components/Navbar";
import Vegge from "./components/Vegge";
import Italian from "./components/Italian";
import American from "./components/American";
import Thai from "./components/Thai";
import Japanese from "./components/Japanese";
import Recipe from "./components/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/vegge" element={<Vegge />} />
        <Route path="/italian" element={<Italian />} />
        <Route path="/american" element={<American />} />
        <Route path="/thai" element={<Thai />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
