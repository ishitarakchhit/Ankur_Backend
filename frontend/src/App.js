import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import DashboardStudent from "./pages/DashboardStudent";
import DashboardEducator from "./pages/DashboardEducator";
import DashboardTherapist from "./pages/DashboardTherapist";
import RegisterListener from "./pages/RegisterListener";
import ListenerChat from "./pages/ListenerChat";
import ListenerLogin from "./pages/ListenerLogin";
import LandingPage from "./pages/Landing_page/Landing_page";
import AboutUs from "./pages/AboutUs/About_Us";
import PandC from "./pages/PandC/PandC";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import VideoCall from "./components/VideoCall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboardS" element={<DashboardStudent />} />
        <Route path="/dashboardE" element={<DashboardEducator />} />
        <Route path="/dashboardT" element={<DashboardTherapist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listenerregister" element={<RegisterListener />} />
        <Route path="/ListenerChat" element={<ListenerChat />} />
        <Route path="/listenerlogin" element={<ListenerLogin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/PandC" element={<PandC />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/videocall" element={<VideoCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
