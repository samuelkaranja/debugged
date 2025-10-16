import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { AboutMe, Details, Home, Login, Podcast } from "./pages";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home searchText={searchText} />} />
            <Route path="/post-details/:id" element={<Details />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Home searchText={searchText} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
