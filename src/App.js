import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import Quizzes from "./Quizzes";
import Flashcards from "./Flashcards";
import Login from "./Login";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/notes"
          element={
            <>
              <Header />
              <Notes />
            </>
          }
        />
        <Route
          path="/quizzes"
          element={
            <>
              <Header />
              <Quizzes />
            </>
          }
        />
        <Route
          path="/flashcards"
          element={
            <>
              <Header />
              <Flashcards />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
