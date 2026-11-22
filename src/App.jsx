import { Routes, Route, Link } from "react-router-dom";
import { site } from "./data/site";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Topic from "./pages/Topic";
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">{site.name}</Link>
        <Link to="/math">Math</Link>
        <Link to="/physics">Physics</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:subject" element={<Subject />} />
          <Route path="/:subject/:topicId" element={<Topic />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>{site.name}</p>
      </footer>
    </>
  );
}

export default App;