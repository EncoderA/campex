import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Chatbot from "./pages/Chatbot"; // ✅ Import your chatbot page
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <h2> CampeX</h2>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tour" className="nav-link">Virtual Tour</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/clubs" className="nav-link">Clubs</Link>
            <Link to="/chatbot" className="nav-link">Chatbot</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tour" element={<VirtualTour />} />
            <Route path="/events" element={<Events />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 CAMPEX | Developed for Campus Virtual Tour</p>
        </footer>
      </div>
    </Router>
  );
}

// ✅ Landing Page
// function Landing() {
//   return (
//     <div className="landing-page">
//       <h1>Welcome to CampeX 🌐</h1>
//       <p>Explore our campus, discover events, and connect with clubs!</p>

//       <div className="button-group">
//         <Link to="/tour" className="main-btn">🎥 Virtual Tour</Link>
//         <Link to="/events" className="main-btn">🎟 Events</Link>
//         <Link to="/clubs" className="main-btn">🤝 Clubs</Link>
//       </div>

//       {/* 💬 Floating Chatbot Icon */}
//       <Link to="/chatbot" className="chatbot-float">
//         💬
//       </Link>
//     </div>
//   );
// }

// function VirtualTour() {
//   return (
//     <div className="tour-frame">
//       <iframe
//         src="/marzipano-export/index.html"
//         title="Virtual Tour"
//         width="100%"
//         height="700px"
//         style={{ border: "none", borderRadius: "12px" }}
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

function VirtualTour() {
  return (
    <div className="tour-fullscreen">
      <iframe
        src="/marzipano-export/index.html"
        title="Virtual Tour"
        allowFullScreen
      ></iframe>
    </div>
  );
}


function Events() {
  return (
    <div className="page-container">
      <h2>🎟 Upcoming Events</h2>
      <p>Stay tuned for campus event updates.</p>
    </div>
  );
}

function Clubs() {
  return (
    <div className="page-container">
      <h2>🤝 Student Clubs</h2>
      <p>Explore and join student clubs across the campus.</p>
    </div>
  );
}

export default App;
