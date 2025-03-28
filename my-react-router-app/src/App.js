import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UseEffectExamplePage from "./pages/use-effect-example";
import UseMemoExamplePage from "./pages/use-memo-example";
import UseCallbackExamplePage from "./pages/use-callback-example";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link to="/profile" className="text-blue-500 hover:underline">Profile</Link></li>
            <li><Link to="/use-effect-example" className="text-blue-500 hover:underline">useEffect Example</Link></li>
            <li><Link to="/use-memo-example" className="text-blue-500 hover:underline">useMemo Example</Link></li>
            <li><Link to="/use-callback-example" className="text-blue-500 hover:underline">useCallback Example</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/use-effect-example" element={<UseEffectExamplePage />} />
          <Route path="/use-memo-example" element={<UseMemoExamplePage />} />
          <Route path="/use-callback-example" element={<UseCallbackExamplePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;