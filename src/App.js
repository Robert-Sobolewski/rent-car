
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Services from './pages/home/services/Services';

import Demo from './pages/demo/Demo';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/services" element={<Services />} />

       <Route path="/demo" element={<Demo />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
