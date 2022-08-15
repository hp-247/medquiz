const data = [
  {
    question:
      "A 45-year-old man complains of low back pain that radiates into both lower limbs and leg weakness. A magnetic resonance image (MRI) scan reveals that the body of the L5 vertebra is displaced anteriorly. A diagnosis of the patient's condition would be:",
    incorrectAnswers: ["Spinal stenosis", "Spondylolysis", "Spondylitis"],
    correctAnswer: "Spondylolisthesis",
    explanation:
      "In spondylolisthesis, there is an anterior displacement of vertebral body relative to the vertebral body inferior to it. Spondylolisthesis is usually accompanied by a defect or fracture of the isthmus of that vertebra. Spondylolisthesis is most common between the L5 vertebra and the sacrum and, in this patient, has stretched roots of lumbosacral spinal nerves in the cauda equina. This results in lower back pain radiating into both lower limbs and weaknesses in muscles of the legs.",
  },

  {
    question:
      "A spinal anesthesia is used for a patient undergoing surgery. The needle is passed between the L4 and L5 vertebrae. Which of the following structures will not be traversed by the needle in a normal performance of the procedure?",
    incorrectAnswers: ["Interspinous ligament", "Epidural space", "Dura"],
    correctAnswer: "Posterior longitudinal ligament",
    explanation:
      "The posterior longitudinal ligament covers the posterior parts of the vertebral bodies and the intervening disks and is anterior to the dural sac; the needle pieces the posterior aspect of the sac in a normal performance of a spinal procedure.",
  },
  {
    question:
      "A spinal anesthesia is used for a patient undergoing surgery. The needle is passed between the L4 and L5 vertebrae. Which of the following structures in the vettebral canal will be anesthetized in a spinal procedure?",
    incorrectAnswers: [
      "Dorsal and ventral rami",
      "Lumbar spinal nerves",
      "Lumbrosacral plexus",
    ],
    correctAnswer: "Dorsal and ventral roots",
    explanation:
      "The dorsal and ventral roots are in cauda equina, found in the vertebral canal; the other choices are found either in the intevertebral foramen or outside the vertebral canal.",
  },
  {
    question:
      "An MRI reveals that a patient has a posterolateral herniation of the nucleus pulposus of the intevertebral disk between L5 and the sacrum. which of the following might you expect to observe in the patient?",
    incorrectAnswers: [
      "Weakness in dorsiflexion",
      "Altered sensation on the dorsum of the foot",
      "Weakness in extension of the leg at the knee",
    ],
    correctAnswer: "Weakness in plantar flexion",
    explanation:
      "The roots of the S1 spinal nerve are typically compressed by a posterolateral herniation of the disk between L5 and S1. Compression of the S1 roots may result in altered sensation in the posterolateral leg, heal, and lateral side of the foot, weakness in flexion of the leg at the knee, and weakness in plantar flexion.",
  },
  {
    question:
      "A 50-year old man complains of back pain and has difficulty walking. Diagnostic imaging reveals calcification of the sacroiliac joints and anterior longitudnial ligament resulting from additional bone growth by osteophytes. These findings suggest that the patient has",
    incorrectAnswers: ["Scoliosis", "Spinal stenosis", "Spondylosis."],
    correctAnswer: "Spondylitis",
    explanation:
      "In spondylitis, additional bone growth by osteophytes at the margins of the vertebral bodies may result in calcification of the anterior longitudinal ligament and the sacroiliac joints.",
  },
  {
    question:
      "A 64-year-old man presents with pain that radiates from the back, throug the posterior thigh, and into the leg and foot. The diagnosis is a herniated nucleus pulposus of the intervettebral disk between the L4 and the L5 vertebrae. What else might the patient experience?",
    incorrectAnswers: [
      "Altered sensation in the L3 dermatome",
      "Fecal incontinence",
      "Weakness in the ability to extend the leg at the knee",
    ],
    correctAnswer:
      "Weakness of muscles innervated by the L5 spinal cord segment",
    explanation:
      "The L5 spinal nerve has been compressed. All other choices reflect lesions to spinal nerves other than L5.",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. After examining the patient the emergency medicine physician concludes that the serratus anterior muscle is damaged. Which of the following nerves innervates the serratus anterior muscle?",
    incorrectAnswers: ["Axillary", "Spinal accessory", "Thoracodorsal"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic is the only nerve that innervates the serratus anterior. The axillary nerve innervates the deltoid, the spinal accessory nerve innervates the sternocleidomastoid and trapezius, the dorsal scapular nerve supplies the rhomboid muscles and levator scapulae, and the latissimus dorsi is the muscle supplied by the thoracodorsal nerve.",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. After examining the patient the emergency medicine physician concludes that the serratus anterior muscle is damaged. Which of the following functions does the serratus anterior muscle serve?",
    incorrectAnswers: [
      "Adducts scapula",
      "Depresses ribs",
      "Elevation of scapula",
    ],
    correctAnswer: "Protraction and rotation of scapula",
    explanation:
      "The functions of the serratus anterior are protraction and rotation of the scapula. The rhomboid major and minor adduct the scapula, the serratus posterior inferior depresses the lower ribs, the levator scapulae elevates the scapula, and the latissimus dorsi adducts, extends, and medially rotates the arm.",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. After examining the patient the emergency medicine physician concludes that the serratus anterior muscle is damaged. Which of the following functions will the patient most likely be unable to perform?",
    incorrectAnswers: [
      "Retraction of the scapula",
      "Elevation of the scapula",
      "Depression of the scapula",
    ],
    correctAnswer: "Protraction of the scapula",
    explanation:
      "The serratus anterior muscle pulls the scapula forward (protraction) over the thoracic wall. Elevation of the scapula is carried out mainly by the trapezius and levator scapulae muscles while depression is performed primarily by the lower fibers of the trapezius. Different muscles contribute to the movement of the scapula such as the serratus anterior, trapezius, levator scapulae, rhomboids, and pectoralis minor.",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. During physical examination of the patient the emergency medicine physician observes a winged scapula. Which of the following muscles is most likely injured?",
    incorrectAnswers: [
      "Levator scapulae",
      "Trapezes",
      "Rhomboid major and minor",
    ],
    correctAnswer: "Serratus anterior",
    explanation:
      "The serratus anterior muscle pulls the scapula forward (protraction) and keeps the costal surface of the scapula closely opposed to the thoracic wall, preventing “winging” of the scapula. The levator scapulae elevates the scapula. The trapezius muscle is a powerful elevator of the shoulder and also rotates the scapula during reaching overhead. The rhomboid major and minor elevate and retract the scapula.",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. While performing the physical examination the emergency medicine physician observes a winged scapula. Which of the following nerves is most likely injured?",
    incorrectAnswers: ["Axillary", "Spinal accessory", "Dorsal"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic nerve innervates the serratus anterior muscle, which protracts and upwardly rotates the scapula. Persons with injury to this nerve will have their scapulae protrude on their back like a wing. The axillary nerve supplies the deltoid and teres minor muscles. The deltoid abducts, flexes, and extends while the teres minor laterally rotates the arm. The spinal accessory nerve is responsible for supplying the trapezius and sternocleidomastoid muscles. The trapezius elevates and upwardly rotates the scapula while the sternocleidomastoid flexes and pulls the chin upward to the opposite side. The dorsal scapular nerve supplies the rhomboid major and minor muscles and are responsible for retraction of the scapula. The thoracodorsal nerve supplies the latissimus dorsi muscle, which adducts, medially rotates, and extends the arm.",
  },
  {
    question:
      "A 55-year-old man with severe coughing is admitted to the hospital. Radiologic examination is consistent with tuberculosis of the right lung, with extension to the thoracic vertebral bodies of T6 and T7, producing a “gibbus deformity.” Which of the following conditions is most likely also to be confirmed by radiologic examination?",
    incorrectAnswers: ["Hyperlordosis", "Scoliosis", "Spina bifida"],
    correctAnswer: "Hyperkyphosis",
    explanation:
      "Hyperkyphosis is characterized by a “hunchback” due to an abnormal increase in curvature of the thoracic region of the vertebral column. Hyperlordosis, or “swayback,” is an increase in lumbar curvature of the spine. Lordosis can be physiologic, such as seen in a pregnant woman. Scoliosis is a lateral curvature of the spine with rotation of the vertebrae. Spina bifida is a neural tube defect characterized by failure of closure of the vertebral arch. Osteoarthritis is a degenerative disorder that affects the articular cartilage of joints and is not specifically related to the thoracic region of the spine.",
  },
  {
    question:
      "A 68-year-old man is admitted to the hospital due to severe back pain. Radiologic examination reveals severe osteoporosis of the vertebral column, with compression fractures to vertebrae L4 and L5. Which of the following parts of the vertebrae are most likely to be fractured in this patient?",
    incorrectAnswers: [
      "Spinous process",
      "Transverse process",
      "Superior articular process",
    ],
    correctAnswer: "Vertebral bodies",
    explanation:
      "A crush fracture is characterized by compression of the entire vertebral body. The wedge fracture is similar in that it affects the vertebral bodies, but it involves small fractures around the perimeter of the vertebral body. Both of these fractures cause reductions in overall height. Fracture of the spinal, transverse, or superior articular processes can be due to an oblique, transverse, or comminuted fracture. Intervertebral discs are associated with disc herniation, not compression fractures.",
  },
  {
    question:
      "A 45-year-old man is admitted to the hospital because of severe pain in the back and lower limb. Radiologic examination reveals spinal canal stenosis syndrome. Which of the following conditions is most likely to be confirmed by a magnetic resonance imaging (MRI) examination?",
    incorrectAnswers: [
      "Hypertrophy of supraspinous ligament",
      "Hypertrophy of interspinous ligament",
      "Hypertrophy of anterior longitudinal ligament",
    ],
    correctAnswer: "Hypertrophy of ligamentum flavum",
    explanation:
      "The ligamentum flavum connects the laminae of two adjacent vertebrae and forms the posterior wall of the vertebral canal. It is the only answer choice that is in direct contact with the vertebral foramen. Therefore, hypertrophy of only the ligamentum flavum would present as spinal canal stenosis. The supraspinous and interspinous ligaments connect spinous processes. The anterior longitudinal ligament connects the anterior portion of the vertebral bodies and intervertebral discs. Finally, the nuchal ligament is a thickened extension of the supraspinous ligament above the level of C7.",
  },
  {
    question:
      "A 35-year-old man is admitted to the hospital after a severe car crash. Radiologic examination reveals an injury to the dorsal surface of the neck and a fracture of the medial border of the right scapula. During physical examination, the patient presents with the scapula retracted laterally on the affected side. Which of the following nerves has most likely been injured on that side?",
    incorrectAnswers: ["Axillary", "Long thoracic", "Greater occipital"],
    correctAnswer: "Dorsal scapular",
    explanation:
      "The dorsal scapular (nerve from the ventral ramus of C5) is responsible for innervating rhomboids major and minor. The rhomboids are responsible for retraction of the scapula. Therefore, if this nerve is damaged, individuals present with a laterally displaced scapula. In this case, the levator scapulae remains functional due to additional innervation provided by C3 to C4 spinal nerves. The axillary nerve innervates the deltoid and teres minor muscles. The deltoid muscle abducts the humerus, and the teres minor laterally rotates the humerus. The long thoracic nerve innervates the serratus anterior, which functions to protract and upwardly rotate the scapula. The greater occipital nerve is mainly sensory but also contributes to the innervation of the semispinalis capitis. In addition, the greater occipital nerve can be involved in occipital neuralgias. The suprascapular nerve innervates the supraspinatus and infraspinatus muscles. The supraspinatus abducts the humerus, and the infraspinatus muscles laterally rotate the humerus. Injury to any of these other nerves would not present with a laterally retracted scapula.",
  },
  {
    question:
      "A 64-year-old man arrived at the clinic with a painful rash and skin eruptions that are localized entirely on one side of his body, closely following the dermatome level of the spinal nerve C7. The patient was diagnosed with the a herpes zoster virus infection known as “shingles.” In what structure has the virus most likely proliferated to cause the patient’s current condition?",
    incorrectAnswers: [
      "The sympathetic chain",
      "The lateral horn of the C7 spinal cord segment",
      "The posterior cutaneous branch of the dorsal primary ramus of C7",
    ],
    correctAnswer: "The dorsal root ganglion of the C7 spinal nerve",
    explanation:
      "Herpes zoster is a viral disease that remains latent in the dorsal root ganglia of the sensory nerves and when the virus becomes active presents as a painful skin lesion. It is associated only with sensory nerve fibers and has no motor involvement. The only answer choice that is solely responsible for sensory innervation is the dorsal root ganglion.",
  },
  {
    question:
      "A 45-year-old woman states that she has experienced moderate pain for 2 years over her left lower back; pain that radiates to her left lower limb. She states that after lifting a case of soft drinks, the pain suddenly became intense. She was admitted to the emergency department. Radiologic examination revealed intervertebral disc herniation between vertebral levels L4 and L5. Which of the following nerves was most likely affected by the disc herniation?",
    incorrectAnswers: ["L1", "L2", "L4"],
    correctAnswer: "L5",
    explanation:
      "Disc herniation in the lumbar region between L4 and L5 affects the L5 spinal nerve roots. Even though the L4 spinal nerve root lies directly between the L4 and L5 vertebrae, it exits from the spinal canal superior to the intervertebral disc, whereas the L5 spinal nerve root lies directly posterior to the disc.",
  },
  {
    question:
      "A 3-year-old boy is brought by his mother to the emergency department with severe headache, high fever, malaise, and confusion. Radiologic and physical examinations reveal that the patient suffers from meningitis. A lumbar puncture is ordered to confirm the diagnosis. Which vertebral level is the most appropriate location for the lumbar puncture?",
    incorrectAnswers: ["T12 to L1", "L1 to L2", "L2 to L3"],
    correctAnswer: "L4 to L5",
    explanation:
      "A lumbar puncture is performed by taking a sample of CSF from the lumbar cistern (the subarachnoid space below the spinal cord) between vertebrae L4 and L5 or sometimes between L3 and L4. It is done in this region because the spinal cord typically ends at the level of L1 to L2 and the dural sac ends at the level of S2. Therefore, it is the safest place to do the procedure because it lies between these areas and the risk of injuring the spinal cord is minimized. (Remember in children the cord ends more caudally.)",
  },
  {
    question:
      "When a lumbar puncture is performed to sample cerebrospinal fluid, which of the following external landmarks is the most reliable to determine the position of the L4 vertebral spine?",
    incorrectAnswers: [
      "The inferior angles of the scapulae",
      "The lowest pair of ribs bilaterally",
      "The sacral hiatus",
    ],
    correctAnswer: "The highest points of the iliac crests",
    explanation:
      "The highest points of the iliac crests are used as a landmark for locating the position of L4 to L5 for a lumbar puncture; they are identified and traced medially toward the vertebral column (Tuffier’s line). The inferior angles of the scapulae lie at vertebral level T7; the lowest ribs lead one to T12; the sacral hiatus is located lower at the distal portion of the sacrum; the posterior inferior iliac spines lie below S2.",
  },
];

export default data;
