import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserOnboarding from "./views/UserOnboarding/UserOnboarding"
import { Header } from "./components/Layout";
import UserProfile from "./components/Users/UserProfile";
import { CreateTeam } from "./views";
import Home from "./views/Home/Home";
import Members from "./components/Users/Members";
import CreateURL from "./views/CreateURL/CreateURL";
import UserOnboarding from "./views/UserOnboarding/UserOnboarding";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createteam" element={<CreateTeam />} />
        <Route path="/profile" element={<UserProfile user={0} />} />
        <Route path="/members" element={<Members />} />
        <Route path="/createurl" element={<CreateURL />} />
        <Route path="/user_onboarding" element={<UserOnboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
