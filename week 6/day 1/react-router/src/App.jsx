import { Routes, Route, Navigate } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import Collage from './components/Collage'
import Students from './components/Students'
import Department from './components/Department'
import CollageDetails from './components/CollageDetails'
import Navbar from './Navbar'
import Users from './components/Users'
import UserDetail from './components/UserDetail'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail/>}/>

        </Route>

        <Route path="/collage" element={<Collage />}>
          <Route index element={<Students />} />
          <Route path="departments" element={<Department />} />
          <Route path="collagedetails" element={<CollageDetails />} />
        </Route>
        <Route path="/pagenotfound" element={<PageNotFound />}>
        </Route>
        {/* <Route path="/*" element={<PageNotFound/>}/> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <div>
      <h1>React Router Basic</h1>
    </div> */}

    </>
  )
}

export default App
