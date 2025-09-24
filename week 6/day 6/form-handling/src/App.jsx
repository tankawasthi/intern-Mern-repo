import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";

function App(){
  return(
    <Router>
      <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  )
}
export default App;