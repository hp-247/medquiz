import React from "react";
import { useState } from "react";

function SternocleidomastoidMuscle() {
  const [activeTabPics, setActiveTabPics] = useState(
    "Frontal belly of occipitofrontalis muscle"
  );

  const handle_pic1 = () => {
    setActiveTabPics("Frontal belly of occipitofrontalis muscle");
  };
  const handle_pic2 = () => {
    setActiveTabPics("Corrugator supercilii muscle");
  };

  return (
    <div>
      <div className="notes-title">Sternocleidomastoid muscle</div>
      <div className="diagram-img-stern">
        <div class="stern-img">
          <img src="Stern1.png" alt="head" />
        </div>
        <div class="stern-img">
          <img src="Stern2.png" alt="head" />
        </div>
        <div class="stern-img">
          <img src="Stern6.png" alt="head" />
        </div>
      </div>
      <div className="diagram-img-stern">
        <div class="stern-img">
          <img src="Stern3.png" alt="head" />
        </div>
        <div class="stern-img">
          <img src="Stern4.png" alt="head" />
        </div>
        <div class="stern-img">
          <img src="Stern5.png" alt="head" />
        </div>
      </div>
    </div>
  );
}

export default SternocleidomastoidMuscle;
