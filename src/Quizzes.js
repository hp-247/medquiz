import React, { useState } from "react";
import "./Quizzes.css";
import Exam1 from "./Exam1/Exam1";
import Exam2 from "./Exam2/Exam2";
import Exam3 from "./Exam3/Exam3";
import Exam4 from "./Exam4/Exam4";
import Exam5 from "./Exam5/Exam5";
import Exam7 from "./Exam7/Exam7";
import Exam8 from "./Exam8/Exam8";

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
    setActiveTab("Digestive System");
  };
  const handle5 = () => {
    setActiveTab("Muscle Tissue");
  };
  const handle6 = () => {
    setActiveTab("Cartilage & Bone");
  };
  const handle7 = () => {
    setActiveTab("Abdomen");
  };
  const handle8 = () => {
    setActiveTab("Pelvis");
  };

  const renderCurrentSelection = () => {
    switch (activeTab) {
      case "Epithelial Tissue":
        return <Exam1 />;
      case "Connective Tissue":
        return <Exam2 />;
      case "Nervous Tissue":
        return <Exam3 />;
      case "Digestive System":
        return <Exam4 />;
      case "Muscle Tissue":
        return <h1>Coming Soon</h1>;
      case "Cartilage & Bone":
        return <h1>Coming Soon</h1>;
      case "Abdomen":
        return <Exam7 />;
      case "Pelvis":
        return <Exam8 />;
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
            Epithelial Tissue <span className="coming">(20 questions)</span>
          </div>
          <div
            className={
              activeTab === "Connective Tissue"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle2}
          >
            Connective Tissue <span className="coming">(73 questions)</span>
          </div>
          <div
            className={
              activeTab === "Nervous Tissue"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle3}
          >
            Nervous Tissue <span className="coming">(39 questions)</span>
          </div>
          <div
            className={
              activeTab === "Digestive System"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle4}
          >
            Digestive System <span className="coming">(47 questions)</span>
          </div>
          <div
            className={
              activeTab === "Abdomen" ? "each_topic active" : "each_topic"
            }
            onClick={handle7}
          >
            Abdomen <span className="coming">(15 questions)</span>
          </div>
          <div
            className={
              activeTab === "Pelvis" ? "each_topic active" : "each_topic"
            }
            onClick={handle8}
          >
            Pelvis <span className="coming">(10 questions)</span>
          </div>
          <div
            className={
              activeTab === "Muscle Tissue" ? "each_topic active" : "each_topic"
            }
            onClick={handle5}
          >
            Muscle Tissue <span className="coming">TBD</span>
          </div>
          <div
            className={
              activeTab === "Cartilage & Bone"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle6}
          >
            Cartilage & Bone <span className="coming">TBD</span>
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
