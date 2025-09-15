import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import playersData from '../players.json';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize players data
  useEffect(() => {
    setPlayers(playersData.players);
    setFilteredPlayers(playersData.players);
  }, []);

  // Filter players based on position
  const filterPlayers = (position) => {
    setActiveFilter(position);
    if (position === 'all') {
      setFilteredPlayers(players);
    } else {
      setFilteredPlayers(players.filter(player => player.position === position));
    }
  };

  // Search players by name
  const searchPlayers = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredPlayers(players);
    } else {
      setFilteredPlayers(
        players.filter(player => 
          player.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="players-container">
      <header>
        <h1>Top Football Players</h1>
        <p className="subtitle">The world's best football talents</p>
      </header>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => searchPlayers(e.target.value)}
          className="search-input"
        />
        
        <div className="filter-buttons">
          <button 
            className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => filterPlayers('all')}
          >
            All
          </button>
          <button 
            className={activeFilter === 'Forward' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => filterPlayers('Forward')}
          >
            Forwards
          </button>
          <button 
            className={activeFilter === 'Midfielder' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => filterPlayers('Midfielder')}
          >
            Midfielders
          </button>
          <button 
            className={activeFilter === 'Defender' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => filterPlayers('Defender')}
          >
            Defenders
          </button>
        </div>
      </div>
      
      <div className="players-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))
        ) : (
          <div className="no-results">
            <h2>No players found</h2>
            <p>Try a different search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;