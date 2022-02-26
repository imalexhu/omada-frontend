import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Header } from "./components/Layout"
import UserProfile from "./views/userProfile"
import { CreateTeam } from "./views"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={null} />
        {/* <Route path='/createteam' element={<CreateTeam />} /> */}
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </Router>
  )
}

export default App
