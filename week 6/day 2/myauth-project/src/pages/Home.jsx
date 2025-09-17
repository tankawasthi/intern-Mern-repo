import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as api from "../api/mockBackend";  // your mock API
import MovieGrid from "../components/MovieGrid";
import Modal from "../components/Modal";
import MovieForm from "../components/MovieForm";

export default function Dashboard({ user }) {
  const [movies, setMovies] = useState([]);
  const [watch, setWatch] = useState(null);
  const [book, setBook] = useState(null);
  const [editMovie, setEditMovie] = useState(null);

  // Load movies on mount
  useEffect(() => {
    setMovies(api.getMovies());
  }, []);

  // ====== Handlers ======
  const handleAdd = () => {
    setEditMovie({});
  };

  const handleWatch = (movie) => setWatch(movie);

  const handleBook = (movie) => setBook(movie);

  const handleEdit = (movie) => setEditMovie(movie);

  const handleDelete = (movie) => {
    api.removeMovie(movie.id);
    toast.warning("Movie deleted");
    setMovies(api.getMovies());
  };

  const saveMovie = (payload) => {
    if (payload.id) {
      const res = api.editMovie(payload);
      if (res.error) toast.error(res.error);
      else toast.success("Movie updated");
    } else {
      api.addMovie(payload);
      toast.success("Movie added");
    }
    setMovies(api.getMovies());
    setEditMovie(null);
  };

  const confirmBook = ({ seats = 1 }) => {
    api.bookMovie({ movieId: book.id, userId: user.id, seats });
    toast.success("Booking confirmed 🔥");
    setBook(null);
  };

  // ====== Render ======
  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to Netflix-Lite</h1>
        <p>Top picks for you</p>
        {user && user.role === "admin" && (
          <button onClick={handleAdd}>+ Add Movie</button>
        )}
      </div>

      <MovieGrid
        movies={movies}
        onWatch={handleWatch}
        onBook={handleBook}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Watch Modal */}
      <Modal open={!!watch} onClose={() => setWatch(null)} title={watch?.title}>
        <div style={{ textAlign: "center" }}>
          <img src={watch?.image} alt="poster" style={{ width: "60%" }} />
          <p>{watch?.description}</p>
          <p>Duration: {watch?.duration}</p>
          <p>Rating: {watch?.rating}</p>
        </div>
      </Modal>

      {/* Booking Modal */}
      <Modal open={!!book} onClose={() => setBook(null)} title={`Book: ${book?.title}`}>
        <div>
          <p>
            Confirm booking for <strong>{book?.title}</strong>
          </p>
          <button onClick={() => confirmBook({ seats: 1 })}>Confirm</button>
        </div>
      </Modal>

      {/* Add/Edit Movie Modal */}
      <Modal
        open={!!editMovie}
        onClose={() => setEditMovie(null)}
        title={editMovie?.id ? "Edit Movie" : "Add Movie"}
      >
        <MovieForm
          initial={editMovie}
          onSubmit={saveMovie}
          onCancel={() => setEditMovie(null)}
        />
      </Modal>
    </div>
  );
}
