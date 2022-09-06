import React from "react";
import { useState } from "react";

function FacialMuscles() {
  const [activeTabPics, setActiveTabPics] = useState(
    "Frontal belly of occipitofrontalis muscle"
  );

  const handle_pic1 = () => {
    setActiveTabPics("Frontal belly of occipitofrontalis muscle");
  };
  const handle_pic2 = () => {
    setActiveTabPics("Corrugator supercilii muscle");
  };
  const handle_pic3 = () => {
    setActiveTabPics("Palpebral part of orbicularis oculi muscle");
  };
  const handle_pic4 = () => {
    setActiveTabPics("Transverse part of nasalis muscle");
  };
  const handle_pic4B = () => {
    setActiveTabPics("Alar part of nasalis muscle");
  };
  const handle_pic5 = () => {
    setActiveTabPics("Levator labii superioris alaequenasi muscle");
  };

  const handle_pic6 = () => {
    setActiveTabPics("Levator labii superioris muscle");
  };

  const handle_pic7 = () => {
    setActiveTabPics("Zygomaticus major muscle");
  };
  const handle_pic8 = () => {
    setActiveTabPics("Levator anguli oris muscle");
  };

  const handle_pic9 = () => {
    setActiveTabPics("Parotid duct");
  };

  const handle_pic10 = () => {
    setActiveTabPics("Orbicularis oris muscle");
  };

  const handle_pic11 = () => {
    setActiveTabPics("Masseter muscle");
  };
  const handle_pic12 = () => {
    setActiveTabPics("Depressor anguli oris muscle");
  };
  const handle_pic13 = () => {
    setActiveTabPics("Mentalis muscle");
  };
  const handle_pic14 = () => {
    setActiveTabPics("Sternocleidomastoid muscle");
  };

  const handle_pic15 = () => {
    setActiveTabPics("Procerus muscle");
  };

  const handle_pic16 = () => {
    setActiveTabPics("Depressor supercilii muscle");
  };

  const handle_pic17 = () => {
    setActiveTabPics("Orbital part of orbicularis oculi muscle");
  };

  const handle_pic18 = () => {
    setActiveTabPics("Zygomaticus minor muscle");
  };

  const handle_pic19 = () => {
    setActiveTabPics("Buccinator muscle");
  };

  const handle_pic20 = () => {
    setActiveTabPics("Risorius muscle");
  };

  const handle_pic21 = () => {
    setActiveTabPics("Depressor labii inferioris muscle");
  };

  const handle_pic22 = () => {
    setActiveTabPics("Platysma muscle");
  };

  return (
    <div>
      <div className="notes-title">Facial muscles (anterior aspect)</div>
      <div className="diagram-img-face">
        <img src="diagram2.png" alt="head" id="head-img" />
        <div
          id="oneFace"
          className={
            activeTabPics === "Frontal belly of occipitofrontalis muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic1}
        >
          Frontal belly of occipitofrontalis muscle
        </div>
        <div
          id="twoFace"
          className={
            activeTabPics === "Corrugator supercilii muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic2}
        >
          Corrugator supercilii muscle
        </div>
        <div
          id="threeFace"
          className={
            activeTabPics === "Palpebral part of orbicularis oculi muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic3}
        >
          Palpebral part of orbicularis oculi muscle
        </div>
        <div
          id="fourAFace"
          className={
            activeTabPics === "Transverse part of nasalis muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic4}
        >
          Transverse part of nasalis muscle
        </div>
        <div
          id="fourBFace"
          className={
            activeTabPics === "Alar part of nasalis muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic4B}
        >
          Alar part of nasalis muscle
        </div>
        <div
          id="fiveFace"
          className={
            activeTabPics === "Levator labii superioris alaequenasi muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic5}
        >
          Levator labii superioris alaeque nasi muscle
        </div>
        <div
          id="sixFace"
          className={
            activeTabPics === "Levator labii superioris muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic6}
        >
          LLevator labii superioris muscle
        </div>
        <div
          id="sevenFace"
          className={
            activeTabPics === "Zygomaticus major muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic7}
        >
          Zygomaticus major muscle
        </div>
        <div
          id="eightFace"
          className={
            activeTabPics === "Levator anguli oris muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic8}
        >
          Levator anguli oris muscle
        </div>
        <div
          id="nineFace"
          className={
            activeTabPics === "Parotid duct"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic9}
        >
          Parotid duct
        </div>
        <div
          id="tenFace"
          className={
            activeTabPics === "Orbicularis oris muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic10}
        >
          Orbicularis oris muscle
        </div>
        <div
          id="elevenFace"
          className={
            activeTabPics === "Masseter muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic11}
        >
          Masseter muscle
        </div>
        <div
          id="twelveFace"
          className={
            activeTabPics === "Depressor anguli oris muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic12}
        >
          Depressor anguli oris muscle
        </div>
        <div
          id="thirteenFace"
          className={
            activeTabPics === "Mentalis muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic13}
        >
          Mentalis muscle
        </div>
        <div
          id="fourteenFace"
          className={
            activeTabPics === "Sternocleidomastoid muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic14}
        >
          Sternocleidomastoid muscle
        </div>
        <div
          id="fifteenFace"
          className={
            activeTabPics === "Procerus muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic15}
        >
          Procerus muscle
        </div>
        <div
          id="sixteenFace"
          className={
            activeTabPics === "Depressor supercilii muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic16}
        >
          Depressor supercilii muscle
        </div>
        <div
          id="seventeenFace"
          className={
            activeTabPics === "Orbital part of orbicularis oculi muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic17}
        >
          Orbital part of orbicularis oculi muscle
        </div>
        <div
          id="eighteenFace"
          className={
            activeTabPics === "Zygomaticus minor muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic18}
        >
          Zygomaticus minor muscle
        </div>
        <div
          id="nineteenFace"
          className={
            activeTabPics === "Buccinator muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic19}
        >
          Buccinator muscle
        </div>
        <div
          id="twentyFace"
          className={
            activeTabPics === "Risorius muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic20}
        >
          Risorius muscle
        </div>
        <div
          id="twentyOneFace"
          className={
            activeTabPics === "Depressor labii inferioris muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic21}
        >
          Depressor labii inferioris muscle
        </div>
        <div
          id="twentyTwoFace"
          className={
            activeTabPics === "Platysma muscle"
              ? "each_topic_notes active"
              : "each_topic_notes"
          }
          onClick={handle_pic22}
        >
          Platysma muscle
        </div>
      </div>
    </div>
  );
}

export default FacialMuscles;
