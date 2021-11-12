import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import CreateProfile from "./pages/create-profile/create-profile";
import DisplayProfile from "./pages/display-profile/display-profile";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<DisplayProfile />} />
        <Route path="/create" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
