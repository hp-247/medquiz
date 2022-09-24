import React from "react";
import "./Notes.css";
import { useState } from "react";
import SternocleidomastoidMuscle from "./SternocleidomastoidMuscle";
import InternalCarotidArtery from "./InternalCarotidArtery";
import CommonCartoidArtery from "./CommonCarotidArtery";
import ExternalCarotidArtery from "./ExternalCarotidArtery";
import VagusNerve from "./VagusNerve";
import SuperiorThyroidArtery from "./SuperiorThyroidArtery";
import LingualArtery from "./LingualArtery";
import FacialArtery from "./FacialArtery";
import SpinalAccessoryNerve from "./SpinalAccessoryNerve";
import SternohyoidM from "./SternohyoidM";
import SternothyroidM from "./SternothyroidM";
import OmohyoidM from "./OmohyoidM";
import ThyrohyoidM from "./ThyrohyoidM";
import CricothyroidM from "./CricothyroidM";
import ThyroidGland from "./ThyroidGland";
import DigastricM from "./DigastricM";
import StylohyoidMuscle from "./StylohyoidMuscle";
import MylohyoidM from "./MylohyoidM";
import SubmandibularGland from "./SubmandibularGland";
import AnteriorScaleneM from "./AnteriorScaleneM";
import PhrenicNerve from "./PhrenicNerve";
import MiddleScaleneM from "./MiddleScaleneM";
import PartsofB from "./PartsofB";
import HypoglossalNerve from "./HypoglossalNerve";
import SubclavianArtery from "./SubclavianArtery";
import VertebralArtery from "./VertebralArtery";
import ThyrocervicalTrunk from "./ThyrocervicalTrunk";
import InternalThoracicArtery from "./InternalThoracicArtery";
import InferiorThyroidArtery from "./InferiorThyroidArtery";
import RecurrentLaryngealNerves from "./RecurrentLaryngealNerves";
import MasseterM from "./MasseterM";
import BuccinatorM from "./BuccinatorM";
import Parotid from "./Parotid";
import Infraorbital from "./Infraorbital";
import Mental from "./Mental";
import Levator from "./Levator";
import Superior from "./Superior";
import SuperiorO from "./SuperiorO";
import Medial from "./Medial";
import Lateral from "./Lateral";
import Frontal from "./Frontal";
import Optic from "./Optic";
import Ophthalmic from "./Ophthalmic";
import Lacrimal from "./Lacrimal";
import SuperiorLaryn from "./SuperiorLaryn";
import Stylopharyn from "./Stylopharyn";
import Glosso from "./Glosso";
import InternalJug from "./InternalJug";
import Epig from "./Epig";
import Posterior from "./Posterior";
import Vocal from "./Vocal";
import Vestibular from "./Vestibular";
import SuperiorCervical from "./SuperiorCervical";
import Tensor from "./Tensor";
import InferiorNasal from "./InferiorNasal";
import Torus from "./Torus";
import Open from "./Open";
import LevatorVeli from "./LevatorVeli";
import Sal from "./Sal";
import Pal from "./Pal";
import InfraNeu from "./InfraNeu";
import Genio from "./Genio";
import Geniohyoid from "./Geniohyoid";
import Mylo from "./Mylo";
import LingualNerve from "./LingualNerve";
import Wharton from "./Wharton";

function Notes() {
  const [activeTabNotes, setActiveTabNotes] = useState(
    "Sternocleidomastoid muscle"
  );

  const handle_notes3 = () => {
    setActiveTabNotes("Sternocleidomastoid muscle");
  };

  const handle_notes4 = () => {
    setActiveTabNotes("Common carotid artery");
  };

  const handle_notes5 = () => {
    setActiveTabNotes("Internal carotid artery");
  };

  const handle_notes6 = () => {
    setActiveTabNotes("External carotid artery (ECA)");
  };

  const handle_notes7 = () => {
    setActiveTabNotes("Vagus nerve");
  };

  const handle_notes8 = () => {
    setActiveTabNotes("Superior thyroid artery");
  };

  const handle_notes9 = () => {
    setActiveTabNotes("Lingual artery");
  };

  const handle_notes10 = () => {
    setActiveTabNotes("Facial artery");
  };

  const handle_notes11 = () => {
    setActiveTabNotes("Hypoglossal nerve");
  };

  const handle_notes12 = () => {
    setActiveTabNotes("Spinal accessory nerve");
  };

  const handle_notes13 = () => {
    setActiveTabNotes("Sternohyoid m.");
  };

  const handle_notes14 = () => {
    setActiveTabNotes("Sternothyroid m.");
  };

  const handle_notes15 = () => {
    setActiveTabNotes("Omohyoid m.");
  };

  const handle_notes16 = () => {
    setActiveTabNotes("Thyrohyoid m.");
  };

  const handle_notes17 = () => {
    setActiveTabNotes("Cricothyroid m.");
  };

  const handle_notes18 = () => {
    setActiveTabNotes("Thyroid gland");
  };

  const handle_notes19 = () => {
    setActiveTabNotes("Digastric m.");
  };

  const handle_notes20 = () => {
    setActiveTabNotes("Stylohyoid muscle");
  };
  const handle_notes21 = () => {
    setActiveTabNotes("Mylohyoid muscle");
  };

  const handle_notes22 = () => {
    setActiveTabNotes("Submandibular gland");
  };
  const handle_notes23 = () => {
    setActiveTabNotes("Anterior scalene m.");
  };

  const handle_notes24 = () => {
    setActiveTabNotes("Phrenic nerve");
  };
  const handle_notes25 = () => {
    setActiveTabNotes("Middle scalene m.");
  };
  const handle_notes26 = () => {
    setActiveTabNotes("Parts of brachial plexus in scalene interval");
  };
  const handle_notes27 = () => {
    setActiveTabNotes("Subclavian artery");
  };
  const handle_notes28 = () => {
    setActiveTabNotes("Vertebral artery");
  };
  const handle_notes29 = () => {
    setActiveTabNotes("Thyrocervical trunk");
  };
  const handle_notes30 = () => {
    setActiveTabNotes("Internal thoracic artery");
  };
  const handle_notes31 = () => {
    setActiveTabNotes("Inferior thyroid artery");
  };
  const handle_notes32 = () => {
    setActiveTabNotes("Recurrent laryngeal nerves");
  };
  const handle_notes33 = () => {
    setActiveTabNotes("Masseter muscle");
  };
  const handle_notes34 = () => {
    setActiveTabNotes("Buccinator muscle");
  };
  const handle_notes35 = () => {
    setActiveTabNotes("Facial artery");
  };
  const handle_notes36 = () => {
    setActiveTabNotes("Parotid (Stensen’s) duct");
  };
  const handle_notes37 = () => {
    setActiveTabNotes("Submandibular gland");
  };
  const handle_notes38 = () => {
    setActiveTabNotes("Infraorbital neurovascular bundle (NVB)");
  };
  const handle_notes39 = () => {
    setActiveTabNotes("Mental neurovascular bundle");
  };
  const handle_notes40 = () => {
    setActiveTabNotes("Levator palpebrae superioris m.");
  };
  const handle_notes41 = () => {
    setActiveTabNotes("Superior rectus m.");
  };
  const handle_notes42 = () => {
    setActiveTabNotes("Superior oblique m.");
  };
  const handle_notes43 = () => {
    setActiveTabNotes("Medial rectus m.");
  };
  const handle_notes44 = () => {
    setActiveTabNotes("Lateral rectus m.");
  };
  const handle_notes45 = () => {
    setActiveTabNotes("Frontal nerve");
  };
  const handle_notes46 = () => {
    setActiveTabNotes("Optic nerve");
  };
  const handle_notes47 = () => {
    setActiveTabNotes("Ophthalmic artery");
  };
  const handle_notes48 = () => {
    setActiveTabNotes("Lacrimal gland");
  };
  const handle_notes49 = () => {
    setActiveTabNotes("Vagus nerve");
  };
  const handle_notes50 = () => {
    setActiveTabNotes("Superior laryngeal nerve");
  };
  const handle_notes51 = () => {
    setActiveTabNotes("Hypoglossal nerve");
  };
  const handle_notes52 = () => {
    setActiveTabNotes("Spinal accessory nerve");
  };
  const handle_notes53 = () => {
    setActiveTabNotes("Stylopharyngeus muscle");
  };
  const handle_notes54 = () => {
    setActiveTabNotes("Glossopharyngeal nerve");
  };
  const handle_notes55 = () => {
    setActiveTabNotes("Internal carotid artery");
  };
  const handle_notes56 = () => {
    setActiveTabNotes("Internal jugular vein");
  };
  const handle_notes57 = () => {
    setActiveTabNotes("Epiglottis");
  };
  const handle_notes58 = () => {
    setActiveTabNotes("Posterior cricoarytenoid muscle");
  };
  const handle_notes59 = () => {
    setActiveTabNotes("Vocal fold");
  };
  const handle_notes60 = () => {
    setActiveTabNotes("Vestibular fold");
  };
  const handle_notes61 = () => {
    setActiveTabNotes("Superior cervical ganglion");
  };
  const handle_notes62 = () => {
    setActiveTabNotes("Epiglottis");
  };
  const handle_notes63 = () => {
    setActiveTabNotes("Tensor veli palatini muscle");
  };
  const handle_notes64 = () => {
    setActiveTabNotes("Inferior nasal concha");
  };
  const handle_notes65 = () => {
    setActiveTabNotes("Torus tubarius");
  };
  const handle_notes66 = () => {
    setActiveTabNotes("Opening of pharyngotympanic tube");
  };
  const handle_notes67 = () => {
    setActiveTabNotes("Levator veli palatini muscle");
  };
  const handle_notes68 = () => {
    setActiveTabNotes("Salpingopharyngeal fold");
  };
  const handle_notes69 = () => {
    setActiveTabNotes("Palatine neurovascular bundle");
  };
  const handle_notes70 = () => {
    setActiveTabNotes("Infraorbital neurovascular bundle");
  };
  const handle_notes71 = () => {
    setActiveTabNotes("Genioglossus muscle");
  };
  const handle_notes72 = () => {
    setActiveTabNotes("Geniohyoid muscle");
  };
  const handle_notes73 = () => {
    setActiveTabNotes("Mylohyoid muscle");
  };
  const handle_notes74 = () => {
    setActiveTabNotes("Lingual nerve");
  };
  const handle_notes75 = () => {
    setActiveTabNotes("Submandibular (Wharton’s) duct");
  };

  const renderCurrentSelection = () => {
    switch (activeTabNotes) {
      case "Sternocleidomastoid muscle":
        return <SternocleidomastoidMuscle />;
      case "Common carotid artery":
        return <CommonCartoidArtery />;
      case "Internal carotid artery":
        return <InternalCarotidArtery />;
      case "External carotid artery (ECA)":
        return <ExternalCarotidArtery />;
      case "Vagus nerve":
        return <VagusNerve />;
      case "Superior thyroid artery":
        return <SuperiorThyroidArtery />;
      case "Lingual artery":
        return <LingualArtery />;
      case "Facial artery":
        return <FacialArtery />;
      case "Hypoglossal nerve":
        return <HypoglossalNerve />;
      case "Spinal accessory nerve":
        return <SpinalAccessoryNerve />;
      case "Sternohyoid m.":
        return <SternohyoidM />;
      case "Sternothyroid m.":
        return <SternothyroidM />;
      case "Omohyoid m.":
        return <OmohyoidM />;
      case "Thyrohyoid m.":
        return <ThyrohyoidM />;
      case "Cricothyroid m.":
        return <CricothyroidM />;
      case "Thyroid gland":
        return <ThyroidGland />;
      case "Digastric m.":
        return <DigastricM />;
      case "Stylohyoid muscle":
        return <StylohyoidMuscle />;
      case "Mylohyoid muscle":
        return <MylohyoidM />;
      case "Submandibular gland":
        return <SubmandibularGland />;
      case "Anterior scalene m.":
        return <AnteriorScaleneM />;
      case "Phrenic nerve":
        return <PhrenicNerve />;
      case "Middle scalene m.":
        return <MiddleScaleneM />;
      case "Parts of brachial plexus in scalene interval":
        return <PartsofB />;
      case "Subclavian artery":
        return <SubclavianArtery />;
      case "Vertebral artery":
        return <VertebralArtery />;
      case "Thyrocervical trunk":
        return <ThyrocervicalTrunk />;
      case "Internal thoracic artery":
        return <InternalThoracicArtery />;
      case "Inferior thyroid artery":
        return <InferiorThyroidArtery />;
      case "Recurrent laryngeal nerves":
        return <RecurrentLaryngealNerves />;
      case "Masseter muscle":
        return <MasseterM />;
      case "Buccinator muscle":
        return <BuccinatorM />;
      case "Parotid (Stensen’s) duct":
        return <Parotid />;
      case "Infraorbital neurovascular bundle (NVB)":
        return <Infraorbital />;
      case "Mental neurovascular bundle":
        return <Mental />;
      case "Levator palpebrae superioris m.":
        return <Levator />;
      case "Superior rectus m.":
        return <Superior />;
      case "Superior oblique m.":
        return <SuperiorO />;
      case "Medial rectus m.":
        return <Medial />;
      case "Lateral rectus m.":
        return <Lateral />;
      case "Frontal nerve":
        return <Frontal />;
      case "Optic nerve":
        return <Optic />;
      case "Ophthalmic artery":
        return <Ophthalmic />;
      case "Lacrimal gland":
        return <Lacrimal />;
      case "Superior laryngeal nerve":
        return <SuperiorLaryn />;
      case "Stylopharyngeus muscle":
        return <Stylopharyn />;
      case "Glossopharyngeal nerve":
        return <Glosso />;
      case "Internal jugular vein":
        return <InternalJug />;
      case "Epiglottis":
        return <Epig />;
      case "Posterior cricoarytenoid muscle":
        return <Posterior />;
      case "Vocal fold":
        return <Vocal />;
      case "Vestibular fold":
        return <Vestibular />;
      case "Superior cervical ganglion":
        return <SuperiorCervical />;
      case "Tensor veli palatini muscle":
        return <Tensor />;
      case "Inferior nasal concha":
        return <InferiorNasal />;
      case "Torus tubarius":
        return <Torus />;
      case "Opening of pharyngotympanic tube":
        return <Open />;
      case "Levator veli palatini muscle":
        return <LevatorVeli />;
      case "Salpingopharyngeal fold":
        return <Sal />;
      case "Palatine neurovascular bundle":
        return <Pal />;
      case "Infraorbital neurovascular bundle":
        return <InfraNeu />;
      case "Genioglossus muscle":
        return <Genio />;
      case "Geniohyoid muscle":
        return <Geniohyoid />;
      case "Lingual nerve":
        return <LingualNerve />;
      case "Submandibular (Wharton’s) duct":
        return <Wharton />;
      default:
        return null;
    }
  };

  return (
    <div className="notes">
      <div className="left">{renderCurrentSelection()}</div>
      <div className="right">
        <div className="title">Topics</div>

        <h4 className="new_quizzes glow">Structure List of Head and Neck</h4>
        <hr />
        <div className="container-scroll">
          <h4>Neck Triangles</h4>
          <div
            className={
              activeTabNotes === "Sternocleidomastoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes3}
          >
            1. Sternocleidomastoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Common carotid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes4}
          >
            2. Common carotid artery
          </div>
          <div
            className={
              activeTabNotes === "Internal carotid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes5}
          >
            3. Internal carotid artery
          </div>
          <div
            className={
              activeTabNotes === "External carotid artery (ECA)"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes6}
          >
            4. External carotid artery (ECA)
          </div>
          <div
            className={
              activeTabNotes === "Vagus nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            5. Vagus nerve
          </div>
          <div
            className={
              activeTabNotes === "Superior thyroid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes8}
          >
            6. Superior thyroid artery
          </div>
          <div
            className={
              activeTabNotes === "Lingual artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes9}
          >
            7. Lingual artery
          </div>
          <div
            className={
              activeTabNotes === "Facial artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes10}
          >
            8. Facial artery
          </div>
          <div
            className={
              activeTabNotes === "Hypoglossal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes11}
          >
            9. Hypoglossal nerve
          </div>
          <div
            className={
              activeTabNotes === "Spinal accessory nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes12}
          >
            10. Spinal accessory nerve
          </div>
          <div
            className={
              activeTabNotes === "Sternohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes13}
          >
            11. Sternohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Sternothyroid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes14}
          >
            12. Sternothyroid m.
          </div>
          <div
            className={
              activeTabNotes === "Omohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes15}
          >
            13. Omohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Thyrohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes16}
          >
            14. Thyrohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Cricothyroid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes17}
          >
            15. Cricothyroid m.
          </div>
          <div
            className={
              activeTabNotes === "Thyroid gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes18}
          >
            16. Thyroid gland
          </div>
          <h4>Submental Region</h4>
          <div
            className={
              activeTabNotes === "Digastric m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes19}
          >
            17. Digastric m.
          </div>
          <div
            className={
              activeTabNotes === "Stylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes20}
          >
            18. Stylohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Mylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes21}
          >
            19. Mylohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Submandibular gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes22}
          >
            20. Submandibular gland
          </div>
          <h4>Root of the Neck</h4>
          <div
            className={
              activeTabNotes === "Anterior scalene m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes23}
          >
            21. Anterior scalene m.
          </div>
          <div
            className={
              activeTabNotes === "Phrenic nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes24}
          >
            22. Phrenic nerve
          </div>
          <div
            className={
              activeTabNotes === "Middle scalene m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes25}
          >
            23. Middle scalene m.
          </div>
          <div
            className={
              activeTabNotes === "Parts of brachial plexus in scalene interval"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes26}
          >
            24. Parts of brachial plexus in scalene interval
          </div>
          <div
            className={
              activeTabNotes === "Subclavian artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes27}
          >
            25. Subclavian artery
          </div>
          <div
            className={
              activeTabNotes === "Vertebral artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes28}
          >
            26. Vertebral artery
          </div>
          <div
            className={
              activeTabNotes === "Thyrocervical trunk"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes29}
          >
            27. Thyrocervical trunk
          </div>
          <div
            className={
              activeTabNotes === "Internal thoracic artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes30}
          >
            28. Internal thoracic artery
          </div>
          <div
            className={
              activeTabNotes === "Inferior thyroid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes31}
          >
            29. Inferior thyroid artery
          </div>
          <div
            className={
              activeTabNotes === "Recurrent laryngeal nerves"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes32}
          >
            30. Recurrent laryngeal nerves
          </div>
          <h4>Face</h4>
          <div
            className={
              activeTabNotes === "Masseter muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes33}
          >
            31. Masseter muscle
          </div>
          <div
            className={
              activeTabNotes === "Buccinator muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes34}
          >
            32. Buccinator muscle
          </div>
          <div
            className={
              activeTabNotes === "Facial artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes35}
          >
            33. Facial artery
          </div>
          <div
            className={
              activeTabNotes === "Parotid (Stensen’s) duct"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes36}
          >
            34. Parotid (Stensen’s) duct
          </div>
          <div
            className={
              activeTabNotes === "Submandibular gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes37}
          >
            35. Submandibular gland
          </div>
          <div
            className={
              activeTabNotes === "Infraorbital neurovascular bundle (NVB)"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes38}
          >
            36. Infraorbital neurovascular bundle (NVB)
          </div>
          <div
            className={
              activeTabNotes === "Mental neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes39}
          >
            37. Mental neurovascular bundle
          </div>
          <h4>Orbit (superior view)</h4>
          <div
            className={
              activeTabNotes === "Levator palpebrae superioris m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes40}
          >
            38. Levator palpebrae superioris m.
          </div>
          <div
            className={
              activeTabNotes === "Superior rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes41}
          >
            39. Superior rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Superior oblique m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes42}
          >
            40. Superior oblique m.
          </div>
          <div
            className={
              activeTabNotes === "Medial rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes43}
          >
            41. Medial rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Lateral rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes44}
          >
            42. Lateral rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Frontal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes45}
          >
            43. Frontal nerve
          </div>
          <div
            className={
              activeTabNotes === "Optic nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes46}
          >
            44. Optic nerve
          </div>
          <div
            className={
              activeTabNotes === "Ophthalmic artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes47}
          >
            45. Ophthalmic artery
          </div>
          <div
            className={
              activeTabNotes === "Lacrimal gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes48}
          >
            46. Lacrimal gland
          </div>
          <h4>Posterior approach to pharynx and larynx</h4>
          <div
            className={
              activeTabNotes === "Vagus nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes49}
          >
            47. Vagus nerve
          </div>
          <div
            className={
              activeTabNotes === "Superior laryngeal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes50}
          >
            48. Superior laryngeal nerve
          </div>
          <div
            className={
              activeTabNotes === "Hypoglossal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes51}
          >
            49. Hypoglossal nerve
          </div>
          <div
            className={
              activeTabNotes === "Spinal accessory nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes52}
          >
            50. Spinal accessory nerve
          </div>
          <div
            className={
              activeTabNotes === "Stylopharyngeus muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes53}
          >
            51. Stylopharyngeus muscle
          </div>
          <div
            className={
              activeTabNotes === "Glossopharyngeal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes54}
          >
            52. Glossopharyngeal nerve
          </div>
          <div
            className={
              activeTabNotes === "Internal carotid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes55}
          >
            53. Internal carotid artery
          </div>
          <div
            className={
              activeTabNotes === "Internal jugular vein"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes56}
          >
            54. Internal jugular vein
          </div>
          <div
            className={
              activeTabNotes === "Epiglottis"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes57}
          >
            55. Epiglottis
          </div>
          <div
            className={
              activeTabNotes === "Posterior cricoarytenoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes58}
          >
            56. Posterior cricoarytenoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Vocal fold"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes59}
          >
            57. Vocal fold
          </div>
          <div
            className={
              activeTabNotes === "Vestibular fold"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes60}
          >
            58. Vestibular fold
          </div>
          <div
            className={
              activeTabNotes === "Superior cervical ganglion"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes61}
          >
            59. Superior cervical ganglion
          </div>
          <div
            className={
              activeTabNotes === "Epiglottis"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes62}
          >
            60. Epiglottis
          </div>
          <h4>Nasal Region</h4>
          <div
            className={
              activeTabNotes === "Tensor veli palatini muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes63}
          >
            61. Tensor veli palatini muscle
          </div>
          <div
            className={
              activeTabNotes === "Inferior nasal concha"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes64}
          >
            62. Inferior nasal concha
          </div>
          <div
            className={
              activeTabNotes === "Torus tubarius"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes65}
          >
            63. Torus tubarius
          </div>
          <div
            className={
              activeTabNotes === "Opening of pharyngotympanic tube"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes66}
          >
            64. Opening of pharyngotympanic tube
          </div>
          <div
            className={
              activeTabNotes === "Levator veli palatini muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes67}
          >
            65. Levator veli palatini muscle
          </div>
          <div
            className={
              activeTabNotes === "Salpingopharyngeal fold"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes68}
          >
            66. Salpingopharyngeal fold
          </div>
          <div
            className={
              activeTabNotes === "Palatine neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes69}
          >
            67. Palatine neurovascular bundle
          </div>
          <div
            className={
              activeTabNotes === "Infraorbital neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes70}
          >
            68. Infraorbital neurovascular bundle
          </div>
          <h4>Oral region and tongue (A. Median section of tongue)</h4>
          <div
            className={
              activeTabNotes === "Genioglossus muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes71}
          >
            69. Genioglossus muscle
          </div>
          <div
            className={
              activeTabNotes === "Geniohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes72}
          >
            70. Geniohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Mylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes73}
          >
            71. Mylohyoid muscle
          </div>
          <h4>
            Oral region and tongue (B. Floor of oral cavity lateral to tongue)
          </h4>
          <div
            className={
              activeTabNotes === "Lingual nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes74}
          >
            72. Lingual nerve
          </div>
          <div
            className={
              activeTabNotes === "Submandibular (Wharton’s) duct"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes75}
          >
            73. Submandibular (Wharton’s) duct
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
