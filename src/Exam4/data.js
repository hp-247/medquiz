const data = [
  {
    question: "Another name for the liver is called",
    incorrectAnswers: ["Hepta", "Heptum", "Hilum"],
    correctAnswer: "Hepar",
  },

  {
    question: "The secretion of the partial cell is termed as",
    incorrectAnswers: ["pepsin", "lipase", "amylase"],
    correctAnswer: "Glycoprotein",
  },
  {
    question: "Esophagus is commonly called as",
    incorrectAnswers: ["food pipe only", "gullet only", "ducts"],
    correctAnswer: "food pipe and gullet",
  },
  {
    question: "Functions of the large intestine, included",
    incorrectAnswers: [
      "absorption of water",
      "secretion of mucus to lubricate",
      "digestion and secretion of some gastrointestinal hormones",
    ],
    correctAnswer: "all of above",
  },
  {
    question:
      "The large phagocytic, relating to the mononuclear phagocytes system of the liver, called as",
    incorrectAnswers: ["Paneth cells", "endothelial cells", "ITO cells"],
    correctAnswer: "Kupffer cells",
  },
  {
    question: "The antigen transporting cells are called",
    incorrectAnswers: ["Paneth cells", "goblet cells", "enterocytes"],
    correctAnswer: "M cells",
  },
  {
    question: "The diameter of the islets is nearly",
    incorrectAnswers: [
      "10-20 micrometer",
      "300-400 micrometer",
      "230-250 micrometer",
    ],
    correctAnswer: "100-200 micrometer",
  },
  {
    question: "The terminal part of the alimentary canal is referred to as",
    incorrectAnswers: ["rectum", "mucosa", "Paneth cells"],
    correctAnswer: "anal canal",
  },
  {
    question: "The dentin forming cells are named as",
    incorrectAnswers: ["Adontoblasts", "enamel", "chondrocytes"],
    correctAnswer: "odontoblasts",
  },
  {
    question: "The functions of the liver, incorporated with",
    incorrectAnswers: [
      "detoxification",
      "synthesis of the plasma protein",
      "storage of carbohydrates",
    ],
    correctAnswer: "all of above",
  },
  {
    question:
      "The upper short segment of the gland that opens into the gastric pit, is named as",
    incorrectAnswers: ["neck", "basal cells", "submucosa"],
    correctAnswer: "isthmus",
  },
  {
    question: "The Fundic gland, inlcuded",
    incorrectAnswers: [
      "gastrin",
      "cholecystokinin and serotonin",
      "secretin and glucagon",
    ],
    correctAnswer: "all of above",
  },
  {
    question:
      "The part of the tooth that is buried in the bony socket is named as",
    incorrectAnswers: ["crown", "neck", "brain"],
    correctAnswer: "root",
  },
  {
    question:
      "The pulp-like acidic mass that passes from stomah to the intestine is known as",
    incorrectAnswers: ["adventitia", "mucosa", "none of above"],
    correctAnswer: "chyme",
  },
  {
    question: "The A cell of the pancreas, producing",
    incorrectAnswers: ["insulin", "somatostatin", "none of above"],
    correctAnswer: "glucagon",
  },
  {
    question:
      "The number of Circumvallate papillae that are present at the back of the oral part of the tongue is about",
    incorrectAnswers: ["2 to 5", "10-11", "10-15"],
    correctAnswer: "10-14",
  },
  {
    question:
      "The main component of the mucous is secreted by the column-shaped cell that is present in the intestinal  or respiratory tract, named as",
    incorrectAnswers: ["Paneth cells", "odontoblasts", "enterocytes"],
    correctAnswer: "goblet cells",
  },
  {
    question:
      "A droplet of fat, persist in the blood or lymph after absorption from the small intestine, called as",
    incorrectAnswers: ["bolus", "chyme", "Paneth cells"],
    correctAnswer: "chylomicron",
  },
  {
    question:
      "The small pieces of the food that enteres in the stomach, called as",
    incorrectAnswers: ["digested food", "digestible food", "Mucosed food"],
    correctAnswer: "bolus",
  },
  {
    question: "The length of the microvilli is about",
    incorrectAnswers: ["2 micrometer", "5 micrometer", "6 micrometer"],
    correctAnswer: "1 micrometer",
  },
  {
    question:
      "The glands that lie in a narrow ring-shaped area around the cardia is named as ",
    incorrectAnswers: ["Fundic glands", "pyloric glands", "none of above"],
    correctAnswer: "cardiac glands",
  },
  {
    question: "The taste buds lies on the dorsal surface of the",
    incorrectAnswers: [
      "lingual papillae",
      "filiform papillae",
      "foliate papillae",
    ],
    correctAnswer: "fungiform papillae",
  },
  {
    question: "The width of the hepatic sinusoids is nearly",
    incorrectAnswers: ["4-7 micrometer", "3-7 micrometer", "2-6 micrometer"],
    correctAnswer: "9-12 micrometer",
  },
  {
    question:
      "A mass of the skeletal muscle which is covered by the mucous membrane, termed as",
    incorrectAnswers: ["lip", "cheeks", "oral cavity"],
    correctAnswer: "tongue",
  },
  {
    question: "Gastric lipase is secreted by the",
    incorrectAnswers: ["parietal cells", "mucosa cells", "epithelium"],
    correctAnswer: "chief cells",
  },
  {
    question:
      "The cells that are located in the neck and bases of the Fundic glands are named as",
    incorrectAnswers: ["extrinsic factor", "peptic cells", "adventitia"],
    correctAnswer: "enteroendrocrine cells",
  },
  {
    question: "The enteroendocrine cells are also called as",
    incorrectAnswers: ["gastrin", "cholecystokinin", "secretin"],
    correctAnswer: "gastrointestinal hormones",
  },
  {
    question: "Taste cells are also named as",
    incorrectAnswers: ["basal cells", "odontoblasts", "soft tissues"],
    correctAnswer: "neuroepithelial cells",
  },
  {
    question: "The gastric juice, engrossed with enzymes, named as",
    incorrectAnswers: ["pepsin", "gastric lipase", "hydrochloric acid"],
    correctAnswer: "all of above",
  },
  {
    question:
      "The part of the tooth that is visible and projects beyond the gum margin, named as",
    incorrectAnswers: ["root", "neck", "none of above"],
    correctAnswer: "crown",
  },
  {
    question: "The length of the small intestine is nearly",
    incorrectAnswers: ["3 m", "4 m", "8 m"],
    correctAnswer: "7 m",
  },
  {
    question: "The length of the intestinal villi is nearly",
    incorrectAnswers: ["2 mm", "4 mm", "7 mm"],
    correctAnswer: "1 mm",
  },
  {
    question: "The number of the intestinal villi is about",
    incorrectAnswers: [
      "10-30 per square mm",
      "30-60 per square mm",
      "30-80 per square mm",
    ],
    correctAnswer: "10-40 per square mm",
  },
  {
    question: "The major component of the saliva embodied with",
    incorrectAnswers: [
      "amylase",
      "thiocyanate ion and Lactoferrin",
      "lysozymes and secretory igA",
    ],
    correctAnswer: "all of above",
  },
  {
    question: "Thin connective tissue capsule, covering the liver, termed as",
    incorrectAnswers: ["1 mm", "3 mm", "4 mm"],
    correctAnswer: "2 mm",
  },
  {
    question: "The width of the liver lobule is about",
    incorrectAnswers: ["0.3 mm", "0.4 mm", "0.9 mm"],
    correctAnswer: "0.7 mm",
  },
  {
    question: "The number of cells in the taste bud is approximately",
    incorrectAnswers: ["30 to 40", "50 to 60", "60 to 100"],
    correctAnswer: "50 to 90",
  },
  {
    question: "Amount of saliva produced per day in humans is approximately",
    incorrectAnswers: ["200 to 1000 ml", "600-800 ml", "500-900 ml"],
    correctAnswer: "700-1200 ml",
  },
  {
    question: "The absorptive cell of the the small intestine are named as",
    incorrectAnswers: ["Endocytes", "microvilli", "villi"],
    correctAnswer: "enterocytes",
  },
  {
    question: "The length of the taste bud is nearly",
    incorrectAnswers: ["mesentery", "Omentum", "superficial layer"],
    correctAnswer: "70-80",
  },
  {
    question: "The retroperitoneal part of the colon is covered by the",
    incorrectAnswers: ["mast cells", "fixed cells", "none of above"],
    correctAnswer: "plasma cell",
  },
  {
    question: "The exocrine secretory product of the liver is named as",
    incorrectAnswers: ["HCL", "glucose", "pepsin"],
    correctAnswer: "bile",
  },
  {
    question:
      "The glands on the dorsal surface of the tongue, secretes purely serous fluid, named as",
    incorrectAnswers: ["lingual glands", "salivary glands", "Thyrotropes"],
    correctAnswer: "glands of von ebner",
  },
  {
    question: "The intestinal enteroendocrine cells belong to",
    incorrectAnswers: [
      "endrocrine system",
      "exocrine system",
      "autocrine system",
    ],
    correctAnswer: "neuroendrocrine system",
  },
  {
    question:
      "The cells that synthesized and remain in the connective tissues are termed as",
    incorrectAnswers: [
      "resident cells only",
      "fixed cells only",
      "migrant cells",
    ],
    correctAnswer: "resident and fixed cells",
  },
  {
    question: "In adipocytes, the fats are stored as",
    incorrectAnswers: ["oil", "carbs", "proteins"],
    correctAnswer: "triglycerides",
  },
  {
    question:
      "The cells that enter the connective tissues via bloodstreams are named as",
    incorrectAnswers: ["resident cells", "fixed cells", "mesenchymal cells"],
    correctAnswer: "migrant cells",
  },
];

export default data;
