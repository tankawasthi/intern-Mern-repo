import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballers } from "./store/footballSlice";

export default function App() {
  const dispatch = useDispatch();
  const { players, loading, error } = useSelector((state) => state.football);

  useEffect(() => {
    dispatch(fetchFootballers());
  }, [dispatch]);

  if (loading) return <h2 className="loading">⚽ Loading players...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div className="app">
      <h1 className="title">🏆 Top 10 Footballers</h1>

      <div className="grid">
        {players.map((player) => (
          <div key={player.id} className="card">
            <img src={player.image} alt={player.name} className="card-img" />
            <div className="card-content">
              <h2>{player.name}</h2>
              <p>🏟 {player.club}</p>
              <p>🌍 {player.country}</p>
              <p className="goals">⚽ Goals: {player.goals}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
