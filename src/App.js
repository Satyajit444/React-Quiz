import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from './Quiz';
import Start from './Start';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/start" element={<Start/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
