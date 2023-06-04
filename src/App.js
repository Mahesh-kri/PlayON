import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import SignupPage from "./components/SignupPage";
import TurfOwnerPage from "./components/TurfOwnerPage";
import TurfNearby from "./components/TurfNearby";
import UserAccount from "./components/UserAccount";
import BookTurf from "./components/BookTurf";
import ListTurfPage from "./components/ListTurfPage";
import PlayerPage from "./components/Playerpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/TurfNearby" element={<TurfNearby />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/TurfOwnerPage" element={<TurfOwnerPage />} />
        <Route path="/UserAccount" element={<UserAccount />} />
        <Route path="/BookTurf" element={<BookTurf />} />
        <Route path="/ListTurfPage" element={<ListTurfPage />} />
        <Route path="/Playerpage" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
