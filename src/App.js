import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import MovieShow from "./components/movieShow";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="/movies/:id" element={<MovieShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
