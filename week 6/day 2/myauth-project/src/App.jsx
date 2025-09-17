import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/AdminDashBoard'
import UserDashboard from './pages/UserDashBoard'
import Unauthorized from './pages/Unauthorized'
import ProtectedRoute from './components/ProtectedRoute'
import RoleRoute from './components/RoleRoute'

export default function App() {
  return (
    <div>
      <Navbar />


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          <Route path="/admin" element={<RoleRoute role="admin"><AdminDashboard /></RoleRoute>} />
          <Route path="/me" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />


          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </main>


      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}