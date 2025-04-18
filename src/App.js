import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Register from "./component/Register";
import Login from "./component/Login";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
      <Navbar />
      <ToastContainer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />

    </Router>
    
    </>
  );
}

export default App;
