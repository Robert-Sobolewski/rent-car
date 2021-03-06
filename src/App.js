import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Navigation from "./components/navbar/Navbar";

import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";
import Cars from "./pages/cars/Cars";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import Book from "./pages/book/Book";
import Demo from "./pages/demo/Demo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Book />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
