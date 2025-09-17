import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about-me" element={<AboutMe />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
