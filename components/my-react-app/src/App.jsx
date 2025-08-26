
import Netflix from './NetflixSeries'
import data from './data'
import './App.css'


const App = () => {
  return (
    <>
      <div>
        {
        data.map((series) => 
          <Netflix image={series.image} name={series.name} summary={series.summary} rating={series.rating} />
        )
      }
      </div>
    </>
  )
}
export default App;  