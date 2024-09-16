import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomeComponents/Home';
import LaptopManufacturers from './components/LaptopManufacturers';
import LaptopModels from './components/LaptopModels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LaptopManufacturers" element={<LaptopManufacturers />} />
        <Route path="/LaptopModels" element={<LaptopModels />} />
      </Routes>
    </Router>
  );
}

export default App;
