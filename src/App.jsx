import { Route, Routes } from "react-router-dom";
import Continents from "./Pages/Home/Continents";
import Country from "./Pages/Country category/Country";
import Destination from "./Pages/Destination/Destination";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/continents/country/:id" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
