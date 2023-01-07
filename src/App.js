import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hoodie from "./pages/Hoodie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hoodie" element={<Hoodie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
