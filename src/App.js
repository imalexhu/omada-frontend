import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import { Header, Footer } from "./components/Layout";
import {
    CreateTeam,
    Home,
    CreateURL,
    UserOnboarding,
    TeamDashboard
} from "./views";
import UserProfile from "./components/Users/UserProfile";
import Members from "./components/Users/Members";

const serverURL = `http://localhost:5000/`;

function App() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const requestUser = async () => {
            const request = await axios.get(serverURL + "get-user/chekambouris@gmail.com");
            setUser(request.data.data);
        }
        requestUser();
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createteam" element={<CreateTeam user={user} />} />
                <Route path="/profile" element={<UserProfile user={user} />} />
                <Route path="/members" element={<Members />} />
                <Route path="/createurl" element={<CreateURL />} />
                <Route path="/user_onboarding" element={<UserOnboarding />} />
                <Route path="/teamview" element={<TeamDashboard />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;