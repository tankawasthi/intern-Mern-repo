import BarChart from "./components/BarChart"
function App() {
  const data = [
    { name: "A", value: 40 },
    { name: "B", value: 90 },
    { name: "C", value: 60 },
    { name: "D", value: 30 },
    { name: "E", value: 80 },
  ]

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>D3 + React Visualization</h1>
        <BarChart data={data} width={600} height={400} />
      </div>
    </>
  )
}

export default App
