import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-green-100 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Sign Up</h1>
                <Signup />
                <div className="mt-4 text-center">
                  <Link to="/signin" className="text-green-600 hover:underline">
                    Already have an account? Sign In
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* Signin Page */}
        <Route
          path="/signin"
          element={
            <div className="min-h-screen bg-green-100 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Sign In</h1>
                <Signin />
                <div className="mt-4 text-center">
                  <Link to="/" className="text-green-600 hover:underline">
                    Need an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
