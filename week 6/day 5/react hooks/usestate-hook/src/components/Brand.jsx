import { useState } from "react";

export default function Brand() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" };
    });
  };

  const resetColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "red" };
    });
  };

  const changeRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCar(previousState => {
      return { ...previousState, color: randomColor };
    });
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333' }}>Car Details</h1>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: car.color, textTransform: 'uppercase' }}>
          {car.brand} {car.model}
        </h2>
        <p style={{ fontSize: '18px' }}>
          Year: <strong>{car.year}</strong>
        </p>
        <p style={{ fontSize: '18px' }}>
          Color: <strong style={{ color: car.color }}>{car.color}</strong>
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={updateColor}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              margin: '5px',
              cursor: 'pointer'
            }}
          >
            Change to Blue
          </button>
          
          <button 
            onClick={resetColor}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              margin: '5px',
              cursor: 'pointer'
            }}
          >
            Reset to Red
          </button>
          
          <button 
            onClick={changeRandomColor}
            style={{
              backgroundColor: '#6f42c1',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              margin: '5px',
              cursor: 'pointer'
            }}
          >
            Random Color
          </button>
        </div>
      </div>
      
      <p style={{ marginTop: '20px', color: '#666' }}>
        Click the buttons to change the car's color!
      </p>
    </div>
  );
}