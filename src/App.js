import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Header } from "./components/Layout"
import UserProfile from "./components/Users/UserProfile"
import { CreateTeam } from "./views"
import Members from "./components/Users/Members"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={null} />
        <Route path='/createteam' element={<CreateTeam />} />
        <Route path='/profile' element={<UserProfile user={0} />} />
        <Route path='/members' element={<Members />} />
      </Routes>
    </Router>
  )
}

export default App
