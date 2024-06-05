import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Workouts from "./pages/Workouts.jsx";
import ProgressTracking from "./pages/ProgressTracking.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/progress" element={<ProgressTracking />} />
      </Routes>
    </Router>
  );
}

export default App;