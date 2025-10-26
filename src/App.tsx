import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe, Details, Home, Login, Podcast } from "./pages";
import MainLayout from "./layout/MainLayout";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-[#f7f8f9] flex flex-col min-h-screen">
      <Router>
        <main className="flex-1">
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={
                  <Home searchText={searchText} setSearchText={setSearchText} />
                }
              />
              <Route path="/post-details/:id" element={<Details />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/about-me" element={<AboutMe />} />

              <Route
                path="*"
                element={
                  <Home searchText={searchText} setSearchText={setSearchText} />
                }
              />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
