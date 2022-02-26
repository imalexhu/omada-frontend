import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserOnboarding from "./views/UserOnboarding/UserOnboarding"
import { Header } from "./components/Layout";
import UserProfile from "./components/Users/UserProfile";
import { CreateTeam } from "./views";
import Home from "./views/Home/Home";
import CreateURL from "./views/CreateURL/CreateURL";
import UserOnboarding from "./views/UserOnboarding/UserOnboarding";
import TeamDashboard from "./views/TeamDashboard/TeamDashboard"
import Members from "./components/Users/Members";
import axios from "axios";

const serverURL = `http://localhost:5000/`;

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const requestUser = async () => {
      const request = await axios.get(serverURL+"get-user/chekambouris@gmail.com");
      setUser(request.data.data);
      console.log(request.data.data);
    }
    requestUser();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createteam" element={<CreateTeam user={user} />} />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route path="/members" element={<Members />} />
        <Route path="/createurl" element={<CreateURL />} />
        <Route path="/user_onboarding" element={<UserOnboarding />} />
        <Route path="/teamview" element={<TeamDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
