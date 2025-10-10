import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { AboutMe, Details, Home, Login, Podcast } from "./pages";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-details/:id" element={<Details />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
