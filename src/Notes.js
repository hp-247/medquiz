import React from "react";
import "./Notes.css";
import { useState } from "react";
import SternocleidomastoidMuscle from "./SternocleidomastoidMuscle";
import InternalCarotidArtery from "./InternalCarotidArtery";
import CommonCartoidArtery from "./CommonCarotidArtery";
import ExternalCarotidArtery from "./ExternalCarotidArtery";
import VagusNerve from "./VagusNerve";

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
            onClick={handle_notes7}
          >
            6. Superior thyroid artery
          </div>
          <div
            className={
              activeTabNotes === "Lingual artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            7. Lingual artery
          </div>
          <div
            className={
              activeTabNotes === "Facial artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            8. Facial artery
          </div>
          <div
            className={
              activeTabNotes === "Hypoglossal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            9. Hypoglossal nerve
          </div>
          <div
            className={
              activeTabNotes === "Spinal accessory nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            10. Spinal accessory nerve
          </div>
          <div
            className={
              activeTabNotes === "Sternohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            11. Sternohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Sternothyroid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            12. Sternothyroid m.
          </div>
          <div
            className={
              activeTabNotes === "Omohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            13. Omohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Thyrohyoid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            14. Thyrohyoid m.
          </div>
          <div
            className={
              activeTabNotes === "Cricothyroid m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            15. Cricothyroid m.
          </div>
          <div
            className={
              activeTabNotes === "Thyroid gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            17. Digastric m.
          </div>
          <div
            className={
              activeTabNotes === "Stylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            18. Stylohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Mylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            19. Mylohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Submandibular gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            21. Anterior scalene m.
          </div>
          <div
            className={
              activeTabNotes === "Phrenic nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            22. Phrenic nerve
          </div>
          <div
            className={
              activeTabNotes === "Middle scalene m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            23. Middle scalene m.
          </div>
          <div
            className={
              activeTabNotes === "Parts of brachial plexus in scalene interval"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            24. Parts of brachial plexus in scalene interval
          </div>
          <div
            className={
              activeTabNotes === "Subclavian artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            25. Subclavian artery
          </div>
          <div
            className={
              activeTabNotes === "Vertebral artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            26. Vertebral artery
          </div>
          <div
            className={
              activeTabNotes === "Thyrocervical trunk"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            27. Thyrocervical trunk
          </div>
          <div
            className={
              activeTabNotes === "Internal thoracic artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            28. Internal thoracic artery
          </div>
          <div
            className={
              activeTabNotes === "Inferior thyroid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            29. Inferior thyroid artery
          </div>
          <div
            className={
              activeTabNotes === "Recurrent laryngeal nerves"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            31. Masseter muscle
          </div>
          <div
            className={
              activeTabNotes === "Buccinator muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            32. Buccinator muscle
          </div>
          <div
            className={
              activeTabNotes === "Facial artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            33. Facial artery
          </div>
          <div
            className={
              activeTabNotes === "Parotid (Stensen’s) duct"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            34. Parotid (Stensen’s) duct
          </div>
          <div
            className={
              activeTabNotes === "Submandibular gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            35. Submandibular gland
          </div>
          <div
            className={
              activeTabNotes === "Infraorbital neurovascular bundle (NVB)"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            36. Infraorbital neurovascular bundle (NVB)
          </div>
          <div
            className={
              activeTabNotes === "Mental neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            38. Levator palpebrae superioris m.
          </div>
          <div
            className={
              activeTabNotes === "Superior rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            39. Superior rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Superior oblique m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            40. Superior oblique m.
          </div>
          <div
            className={
              activeTabNotes === "Medial rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            41. Medial rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Lateral rectus m."
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            42. Lateral rectus m.
          </div>
          <div
            className={
              activeTabNotes === "Frontal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            43. Frontal nerve
          </div>
          <div
            className={
              activeTabNotes === "Optic nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            44. Optic nerve
          </div>
          <div
            className={
              activeTabNotes === "Ophthalmic artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            45. Ophthalmic artery
          </div>
          <div
            className={
              activeTabNotes === "Lacrimal gland"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            47. Vagus nerve
          </div>
          <div
            className={
              activeTabNotes === "Superior laryngeal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            48. Superior laryngeal nerve
          </div>
          <div
            className={
              activeTabNotes === "Hypoglossal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            49. Hypoglossal nerve
          </div>
          <div
            className={
              activeTabNotes === "Spinal accessory nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            50. Spinal accessory nerve
          </div>
          <div
            className={
              activeTabNotes === "Stylopharyngeus muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            51. Stylopharyngeus muscle
          </div>
          <div
            className={
              activeTabNotes === "Glossopharyngeal nerve"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            52. Glossopharyngeal nerve
          </div>
          <div
            className={
              activeTabNotes === "Internal carotid artery"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            53. Internal carotid artery
          </div>
          <div
            className={
              activeTabNotes === "Internal jugular vein"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            54. Internal jugular vein
          </div>
          <div
            className={
              activeTabNotes === "Epiglottis"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            55. Epiglottis
          </div>
          <div
            className={
              activeTabNotes === "Posterior cricoarytenoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            56. Posterior cricoarytenoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Vocal fold"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            57. Vocal fold
          </div>
          <div
            className={
              activeTabNotes === "Vestibular fold"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            58. Vestibular fold
          </div>
          <div
            className={
              activeTabNotes === "Superior cervical ganglion"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            59. Superior cervical ganglion
          </div>
          <div
            className={
              activeTabNotes === "Epiglottis"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            61. Tensor veli palatini muscle
          </div>
          <div
            className={
              activeTabNotes === "Inferior nasal concha"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            62. Inferior nasal concha
          </div>
          <div
            className={
              activeTabNotes === "Torus tubarius"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            63. Torus tubarius
          </div>
          <div
            className={
              activeTabNotes === "Opening of pharyngotympanic tube"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            64. Opening of pharyngotympanic tube
          </div>
          <div
            className={
              activeTabNotes === "Levator veli palatini muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            65. Levator veli palatini muscle
          </div>
          <div
            className={
              activeTabNotes === "Levator veli palatini muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            66. Salpingopharyngeal fold
          </div>
          <div
            className={
              activeTabNotes === "Palatine neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            67. Palatine neurovascular bundle
          </div>
          <div
            className={
              activeTabNotes === "Infraorbital neurovascular bundle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            69. Genioglossus muscle
          </div>
          <div
            className={
              activeTabNotes === "Geniohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            70. Geniohyoid muscle
          </div>
          <div
            className={
              activeTabNotes === "Mylohyoid muscle"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
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
            onClick={handle_notes7}
          >
            72. Lingual nerve
          </div>
          <div
            className={
              activeTabNotes === "Submandibular (Wharton’s) duct"
                ? "each_topic active"
                : "each_topic"
            }
            onClick={handle_notes7}
          >
            73. Submandibular (Wharton’s) duct
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
