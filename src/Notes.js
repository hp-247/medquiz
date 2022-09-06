import React from "react";
import "./Notes.css";
import { useState } from "react";
import HeadMuscles from "./Head_Muscles/HeadMuscles";
import FacialMuscles from "./Facial_Muscles/FacialMuscles";

function Notes() {
  const [activeTabNotes, setActiveTabNotes] = useState("Head Muscles");

  const handle_notes1 = () => {
    setActiveTabNotes("Head Muscles");
  };

  const handle_notes2 = () => {
    setActiveTabNotes("Facial Muscles");
  };

  const renderCurrentSelection = () => {
    switch (activeTabNotes) {
      case "Head Muscles":
        return <HeadMuscles />;
      case "Facial Muscles":
        return <FacialMuscles />;
      default:
        return null;
    }
  };

  return (
    <div className="notes">
      <div className="left">{renderCurrentSelection()}</div>
      <div className="right">
        <div className="title">Topics</div>
        <h4 className="new_quizzes glow">New Diagrams</h4>
        <hr />
        <div className="topic">
          <div
            className={
              activeTabNotes === "Head Muscles"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes1}
          >
            Head Muscles
          </div>
          <div
            className={
              activeTabNotes === "Facial Muscles"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes2}
          >
            Facial Muscles
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
