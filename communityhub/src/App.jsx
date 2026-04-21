import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import Posts from "./Posts.jsx";

function App() {
  return (
    <div>
      <h1>CommunityHub</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;