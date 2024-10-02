import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomeComponents/Home';
import LaptopManufacturers from './components/LaptopManufacturers';
import LaptopModels from './components/LaptopModels';
import ReviewPage from '../src/components/ReviewPage/ReviewPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/LaptopManufacturers" element={<LaptopManufacturers />} />
        <Route path="/LaptopModels" element={<LaptopModels />} />
      </Routes>
      </Layout>
      
    </Router>
  );
}

export default App;
