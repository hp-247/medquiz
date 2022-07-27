import React, { useState } from "react";
import "./Quizzes.css";
import Exam1 from "./Exam1/Exam1";
import Exam2 from "./Exam2/Exam2";
import Exam3 from "./Exam3/Exam3";
import Exam4 from "./Exam4/Exam4";

function Quizzes() {
  const [activeTab, setActiveTab] = useState("Epithelial Tissue");

  const handle1 = () => {
    setActiveTab("Epithelial Tissue");
  };

  const handle2 = () => {
    setActiveTab("Connective Tissue");
  };

  const handle3 = () => {
    setActiveTab("Nervous Tissue");
  };
  const handle4 = () => {
    setActiveTab("Cartilage & Bone");
  };

  const renderCurrentSelection = () => {
    switch (activeTab) {
      case "Epithelial Tissue":
        return <Exam1 />;
      case "Connective Tissue":
        return <Exam2 />;
      case "Nervous Tissue":
        return <Exam3 />;
      case "Cartilage & Bone":
        return <Exam4 />;
      default:
        return null;
    }
  };

  return (
    <div className="quiz">
      <div className="category">
        <div className="title">Topics</div>
        <div className="topic">
          <div
            className={
              activeTab === "Epithelial Tissue"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle1}
          >
            Epithelial Tissue
          </div>
          <div
            className={
              activeTab === "Connective Tissue"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle2}
          >
            Connective Tissue
          </div>
          <div
            className={
              activeTab === "Nervous Tissue"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle3}
          >
            Nervous Tissue
          </div>
          <div
            className={
              activeTab === "Cartilage & Bone"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle4}
          >
            Cartilage & Bone
          </div>
        </div>
      </div>
      <div className="quiz__select">
        <h3>{activeTab} Quiz</h3>
        <div className="quiz__box">{renderCurrentSelection()}</div>
      </div>
    </div>
  );
}

export default Quizzes;
