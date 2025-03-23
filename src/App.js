import React from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* Optional: Redirect to home if the route doesn't exist */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  )
}

export default App
