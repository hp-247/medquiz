import React from "react";
import { useState } from "react";

function HeadMuscles() {
  const [activeTabPics, setActiveTabPics] = useState("Zygomatic bone");

  const handle_pic1 = () => {
    setActiveTabPics("Zygomatic bone");
  };
  const handle_pic3 = () => {
    setActiveTabPics("Temporalis muscle");
  };
  const handle_pic4 = () => {
    setActiveTabPics("Temporomandibular joint");
  };
  const handle_pic5 = () => {
    setActiveTabPics("External acoustic meatus");
  };
  const handle_pic7 = () => {
    setActiveTabPics("Mandible");
  };
  const handle_pic8 = () => {
    setActiveTabPics("Masseter muscle");
  };

  return (
    <div>
      <div className="notes-title">
        Muscles of mastication and facial muscles
      </div>
      <div className="diagram-img">
        <img src="diagram1.png" alt="head" id="head-img" />
        <div
          id="one"
          className={
            activeTabPics === "Zygomatic bone"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic1}
        >
          Zygomatic Bone
        </div>
        <div
          id="three"
          className={
            activeTabPics === "Temporalis muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic3}
        >
          Temporalis muscle
        </div>
        <div
          id="four"
          className={
            activeTabPics === "Temporomandibular joint"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic4}
        >
          Temporomandibular joint
        </div>
        <div
          id="five"
          className={
            activeTabPics === "External acoustic meatus"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic5}
        >
          External acoustic meatus
        </div>
        <div
          id="seven"
          className={
            activeTabPics === "Mandible"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic7}
        >
          Mandible
        </div>
        <div
          id="eight"
          className={
            activeTabPics === "Masseter muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic8}
        >
          Masseter muscle
        </div>
      </div>
    </div>
  );
}

export default HeadMuscles;
