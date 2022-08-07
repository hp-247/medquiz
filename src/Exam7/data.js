const data = [
  {
    question:
      "In a male patient, an aneurysm of the superior mesenteric artery has compressed structures that cross the midline inferior to the origin of the artery from the abdominal aorta. What sign/symptom might the patient have?",
    incorrectAnswers: [
      "A spermatoccle in the left scrotum",
      "A hydrocele in the left scrotum",
      "Internal hemorrhoids",
    ],
    correctAnswer: "Pain and vomitting after a meal",
    explanation:
      "The aneurysm has compressed the third part of the doudenum and possibly the left renal vein, both of which cross the aorta inferior to the origin of the superior mesenteric atery. The patient may exhibit pain and vomiting after a meal and a variocele in the left spermatic cord.",
  },

  {
    question:
      "Your patient experiences portal hypertension resulting form cirrhosis of the liver. Between which of the following pairs of veins might collateral circulation develop to enable blood to bypass the liver?",
    incorrectAnswers: [
      "Hepatic vein/inferior vena cava",
      "Inferior epigastric vein/superficial epigastric vein",
      "Middle rectal vein/inferior rectal vein",
    ],
    correctAnswer: "Left gastric vein/azygos vein",
    explanation:
      "Esophageal varices develop as a result of the portacaval anastomosis between the esophageal branches of the left gastric vein and tributaries of the azygos vein.",
  },
  {
    question:
      "A 56-year-old man experiences peristent gastroesophageal reflux. Diagnostic imaging reveals that the patient has a sliding hiatal hernia. What other structure might be compressed by the hernia that courses through the same opening in the diaphragm?",
    incorrectAnswers: ["Phrenic nerve", "Thoracic duct", "Azygos vein"],
    correctAnswer: "Vagal trunks",
    explanation:
      "The vagal trunks traverse the esophageal hiatus, the site of a hiatal hernia",
  },
  {
    question:
      "Your patient has carinoma of the pancreas, which compresses structures coursing through it. You might expect the patient to have all of the following except:",
    incorrectAnswers: ["Splenomeagely", "Internal hemorrhoids", "Pancreatitis"],
    correctAnswer: "Caput medusa",
    explanation:
      "Caput medusa may develop in patients with liver cirrhosis but not in those pancreatic carcinoma.",
  },
  {
    question:
      "Your patient suffers from a fractured rib on the posterolateral aspect of the thorax on the left. The spleen is ruptured and has to be removed surgically, along with a significant part of the splenic artery. Removal of the distal part of the splenic artery might disrupt the blood supply to what structure?",
    incorrectAnswers: [
      "Left adrenal gland",
      "Head of the pancreas",
      "Third of the doudenum",
    ],
    correctAnswer: "Greater curvature of the stomach",
    explanation:
      "The splenic artery supplies the spleen, greater curvature and fundus of the stomach, and the body and tail of the pancreas.",
  },
  {
    question:
      "A 38-year-old banker with a history of heartburn suddenly experiences excrutiating pain in the epigastric region of the abdomen. Surgery is performed immedately on admission to the emergency room. There is evidece of an ulcer, which has ruptured through the postrior wall of the doudenum. What blood vessel might be subject to erosion?",
    incorrectAnswers: ["Common hepatic", "Left gastric", "Splenic"],
    correctAnswer: "Gastroduodenal",
    explanation:
      "The gastrodoudenal artery courses immediately posterior to the posterior part of the doudenum.",
  },
  {
    question:
      "A surgeon incises the lesser omentum of a patient to gain access to the omental bursa to remove the ulcerated material. What blood vessel has to be avoided in this approach?",
    incorrectAnswers: [
      "Short gastric arteries",
      "Left gastroepiploic artery",
      "Celiac artery",
    ],
    correctAnswer: "Proper hepatic artery",
    explanation:
      "The proper hepatic artery courses in the hepatdoudenal ligament, which is part of the lesser omentum.",
  },
  {
    question:
      "A 23-year-old secretary in good health suddenly doubles over in pain emanating from the area of teh umbilicus. The secretrary feels warm and uneasy and has no appetite. That night the pain becomes sharper and more localized and seems to have moved to the lower right abdominal region. The secretary calls her family physian, who arranges for an ambulance to bring the patient to the hospital. Which nerves most likely carried the painful sensations into the central nervous sytem that resulted in pain referred to the area of the umblilicus?",
    incorrectAnswers: [
      "Vagus nerves",
      "Pelvic splanchnic nerves",
      "Genitofemoral nerves",
    ],
    correctAnswer: "Lower Thoracic splanchnic nerves",
    explanation:
      "The lower thoracic splanchnic nerves carry visceral pain from an inflmaed appendix back into the CNS. Only sympathetic nerves visceral pain.",
  },
  {
    question:
      "An infant is born with defects in the migration and differentiation of neural crest cells. Which of the following gastrointestinal conditions might be evident?",
    incorrectAnswers: [
      "Sigmooid volvulus",
      "Intussusception",
      "Meckel's diverticulum",
    ],
    correctAnswer: "Achalasia of the esophagus",
    explanation:
      "Achalasia results from an absence of ganglion cells in the lower part of the esophagus.",
  },
  {
    question:
      "An infant is born with defects in the migration and differentiation of neural crest cells. What ganglia failed to develop?",
    incorrectAnswers: [
      "Paravertebral ganglia",
      "Celiac ganglia",
      "Dorsal root ganglia",
    ],
    correctAnswer: "Terminal ganglia",
    explanation:
      "Terminal ganglia are parasympathetic ganglia that develop in the walls of gastroinestinal structures.",
  },
  {
    question:
      "A male construction worker comes to the outpatient clinic after work complaining of groin pain and a bulge that appears when he lifts heavy objects. When the patient lies down, the bulge disappears. A diagnosis of an indirect hernia is made.Which of the following is characteristic of this type of hernia?",
    incorrectAnswers: [
      "The henrnia may pass posterior to the spermatic and cremasteric fasciae that cover the spermatic cord",
      "The hernia may pass through the superficial inguinal ring but not through the deep inguinal ring.",
      "The hernia has protruded through the anterior abdominal wall medial to the inferior epigastric blood vessels.",
    ],
    correctAnswer:
      "The hernia is most likely covered by all of the same layers that cover the spermatic cord.",
    explanation:
      "The hernia is mostly covered by all the same layers that cover spermatic cord. The other choices are choices are characteristic of a direct inguinal hernia; and one is characteristic of a femoral hernia.",
  },
  {
    question:
      "A surgeon is performing an exploratory inspection of a patient's abdomen. What anatomic feature permits the surgeon to distinguish the ileum from other parts of the small intestine?",
    incorrectAnswers: [
      "It is the only retroperitoneal part of the intestine.",
      "It has thicker walls than the jejunum.",
      "It has wider teniae coli than the jejunum",
    ],
    correctAnswer: "It has more fat in its mesentery than the jejenum.",
    explanation:
      "The ileum has more fat in its mesentery than the jejunum but has thinner walls and is less vascular.",
  },
];

export default data;
