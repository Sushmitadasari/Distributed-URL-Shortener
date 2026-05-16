import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/analytics/:shortCode"
          element={<Analytics />}
        />
      </Routes>
    </div>
  );
}

export default App;