import MovieCard from "./MovieCard";


export default function MovieGrid({ movies, onWatch, onBook, onEdit, onDelete }) {
    return (
        <div className="grid">
            {movies.map((m) => (
                <MovieCard
                    key={m.id}
                    m={m}
                    onWatch={onWatch}
                    onBook={onBook}
                    adminActions={(
                        <div className="admin-actions">
                            <button onClick={() => onEdit(m)}>Edit</button>
                            <button onClick={() => onDelete(m.id)} className="btn-danger">Delete</button>
                        </div>
                    )}
                />
            ))}
        </div>
    );
}