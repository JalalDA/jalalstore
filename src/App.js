import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hoodie from "./pages/Hoodie";
import Daster from "./pages/Daster";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hoodie" element={<Hoodie/>}/>
        <Route path="/daster" element={<Daster/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
