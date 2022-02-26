import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Layout";
import { CreateTeam } from "./views";
import UserOnboarding from "./views/UserOnboarding/UserOnboarding";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/createteam" element={<CreateTeam />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/user_onboarding" element={<UserOnboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
