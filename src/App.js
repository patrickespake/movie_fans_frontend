import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import MovieDetails from "./components/movieDetails";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/" exact element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
