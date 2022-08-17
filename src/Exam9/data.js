const data = [
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. The emergency medicine physician examines the patient and observes what is shown in Figure 1-1. Which of the following nerves is most likely injured?",
    incorrectAnswers: ["Axillary", "Spinal accessory", "Dorsal"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic nerve innervates the serratus anterior muscle, which protracts the scapula, holds the scapula close to the thoracic wall preventing it from “winging”, and abducts and upwardly rotates the scapula. Patients with injury to this nerve will have their scapulae protruding on their back like a wing. The axillary nerve supplies the deltoid and teres minor muscles. The deltoid abducts, flexes, and extends and the teres minor laterally rotates the arm. The spinal accessory nerve is responsible for supplying the trapezius and sternocleidomastoid muscles. The trapezius elevates and upwardly rotates the scapula while the sternocleidomastoid flexes and pulls the chin upward to the opposite side. The dorsal scapular nerve supplies the rhomboid major and minor muscles and are responsible for retraction of the scapula. The thoracodorsal nerve supplies the latissimus dorsi muscle, which adducts, medially rotates, and extends the arm.",
    image: "back-question.jpg",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. The emergency medicine physician examines the patient and observes what is shown in Figure 1-1. Which of the following functions will the patient most likely be unable to perform during physical examination?",
    incorrectAnswers: [
      "Lateral rotation of the shoulder joint",
      "Abduction of the shoulder joint from 0 to 90 degrees",
      "Flexion of the shoulder joint",
    ],
    correctAnswer: "Abduction of the shoulder joint above 90 degrees",
    explanation:
      "In this image, the patient has a winged scapula. This occurs as a result of damage to the long thoracic nerve, which innervates the serratus anterior muscle. The functions of this muscle are protraction of the scapula and superior rotation of the glenoid fossa. The supraspinatus abducts the arm for about the first 12 degrees, and then the deltoid abducts the arm to about 90 degrees. Elevating the arm further requires rotation of the scapula (including superior rotation of the glenoid fossa) that is normally done by the serratus anterior.",
    image: "back-question.jpg",
  },
  {
    question:
      "A 45-year-old man complains of low back pain that radiates into both lower limbs and leg weakness. A magnetic resonance image (MRI) scan reveals that the body of the L5 vertebra is displaced anteriorly. A diagnosis of the patient's condition would be:",
    incorrectAnswers: ["Spinal stenosis", "Spondylolysis", "Spondylitis"],
    correctAnswer: "Spondylolisthesis",
    explanation:
      "In spondylolisthesis, there is an anterior displacement of vertebral body relative to the vertebral body inferior to it. Spondylolisthesis is usually accompanied by a defect or fracture of the isthmus of that vertebra. Spondylolisthesis is most common between the L5 vertebra and the sacrum and, in this patient, has stretched roots of lumbosacral spinal nerves in the cauda equina. This results in lower back pain radiating into both lower limbs and weaknesses in muscles of the legs.",
    image: "",
  },

  {
    question:
      "A spinal anesthesia is used for a patient undergoing surgery. The needle is passed between the L4 and L5 vertebrae. Which of the following structures will not be traversed by the needle in a normal performance of the procedure?",
    incorrectAnswers: ["Interspinous ligament", "Epidural space", "Dura"],
    correctAnswer: "Posterior longitudinal ligament",
    explanation:
      "The posterior longitudinal ligament covers the posterior parts of the vertebral bodies and the intervening disks and is anterior to the dural sac; the needle pieces the posterior aspect of the sac in a normal performance of a spinal procedure.",
    image: "",
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
    image: "",
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
    image: "",
  },
  {
    question:
      "A 50-year old man complains of back pain and has difficulty walking. Diagnostic imaging reveals calcification of the sacroiliac joints and anterior longitudnial ligament resulting from additional bone growth by osteophytes. These findings suggest that the patient has",
    incorrectAnswers: ["Scoliosis", "Spinal stenosis", "Spondylosis."],
    correctAnswer: "Spondylitis",
    explanation:
      "In spondylitis, additional bone growth by osteophytes at the margins of the vertebral bodies may result in calcification of the anterior longitudinal ligament and the sacroiliac joints.",
    image: "",
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
    image: "",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. After examining the patient the emergency medicine physician concludes that the serratus anterior muscle is damaged. Which of the following nerves innervates the serratus anterior muscle?",
    incorrectAnswers: ["Axillary", "Spinal accessory", "Thoracodorsal"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic is the only nerve that innervates the serratus anterior. The axillary nerve innervates the deltoid, the spinal accessory nerve innervates the sternocleidomastoid and trapezius, the dorsal scapular nerve supplies the rhomboid muscles and levator scapulae, and the latissimus dorsi is the muscle supplied by the thoracodorsal nerve.",
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
  },
  {
    question:
      "A 35-year-old man is admitted to the emergency department after a severe car crash. While performing the physical examination the emergency medicine physician observes a winged scapula. Which of the following nerves is most likely injured?",
    incorrectAnswers: ["Axillary", "Spinal accessory", "Dorsal"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic nerve innervates the serratus anterior muscle, which protracts and upwardly rotates the scapula. Persons with injury to this nerve will have their scapulae protrude on their back like a wing. The axillary nerve supplies the deltoid and teres minor muscles. The deltoid abducts, flexes, and extends while the teres minor laterally rotates the arm. The spinal accessory nerve is responsible for supplying the trapezius and sternocleidomastoid muscles. The trapezius elevates and upwardly rotates the scapula while the sternocleidomastoid flexes and pulls the chin upward to the opposite side. The dorsal scapular nerve supplies the rhomboid major and minor muscles and are responsible for retraction of the scapula. The thoracodorsal nerve supplies the latissimus dorsi muscle, which adducts, medially rotates, and extends the arm.",
    image: "",
  },
  {
    question:
      "A 55-year-old man with severe coughing is admitted to the hospital. Radiologic examination is consistent with tuberculosis of the right lung, with extension to the thoracic vertebral bodies of T6 and T7, producing a “gibbus deformity.” Which of the following conditions is most likely also to be confirmed by radiologic examination?",
    incorrectAnswers: ["Hyperlordosis", "Scoliosis", "Spina bifida"],
    correctAnswer: "Hyperkyphosis",
    explanation:
      "Hyperkyphosis is characterized by a “hunchback” due to an abnormal increase in curvature of the thoracic region of the vertebral column. Hyperlordosis, or “swayback,” is an increase in lumbar curvature of the spine. Lordosis can be physiologic, such as seen in a pregnant woman. Scoliosis is a lateral curvature of the spine with rotation of the vertebrae. Spina bifida is a neural tube defect characterized by failure of closure of the vertebral arch. Osteoarthritis is a degenerative disorder that affects the articular cartilage of joints and is not specifically related to the thoracic region of the spine.",
    image: "",
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
    image: "",
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
    image: "",
  },
  {
    question:
      "A 35-year-old man is admitted to the hospital after a severe car crash. Radiologic examination reveals an injury to the dorsal surface of the neck and a fracture of the medial border of the right scapula. During physical examination, the patient presents with the scapula retracted laterally on the affected side. Which of the following nerves has most likely been injured on that side?",
    incorrectAnswers: ["Axillary", "Long thoracic", "Greater occipital"],
    correctAnswer: "Dorsal scapular",
    explanation:
      "The dorsal scapular (nerve from the ventral ramus of C5) is responsible for innervating rhomboids major and minor. The rhomboids are responsible for retraction of the scapula. Therefore, if this nerve is damaged, individuals present with a laterally displaced scapula. In this case, the levator scapulae remains functional due to additional innervation provided by C3 to C4 spinal nerves. The axillary nerve innervates the deltoid and teres minor muscles. The deltoid muscle abducts the humerus, and the teres minor laterally rotates the humerus. The long thoracic nerve innervates the serratus anterior, which functions to protract and upwardly rotate the scapula. The greater occipital nerve is mainly sensory but also contributes to the innervation of the semispinalis capitis. In addition, the greater occipital nerve can be involved in occipital neuralgias. The suprascapular nerve innervates the supraspinatus and infraspinatus muscles. The supraspinatus abducts the humerus, and the infraspinatus muscles laterally rotate the humerus. Injury to any of these other nerves would not present with a laterally retracted scapula.",
    image: "",
  },
  {
    question:
      "A 64-year-old man arrived at the clinic with a painful rash and skin eruptions that are localized entirely on one side of his body, closely following the dermatome level of the spinal nerve C7. The patient was diagnosed with the a herpes zoster virus infection known as “shingles.” In what structure has the virus most likely proliferated to cause the patient's current condition?",
    incorrectAnswers: [
      "The sympathetic chain",
      "The lateral horn of the C7 spinal cord segment",
      "The posterior cutaneous branch of the dorsal primary ramus of C7",
    ],
    correctAnswer: "The dorsal root ganglion of the C7 spinal nerve",
    explanation:
      "Herpes zoster is a viral disease that remains latent in the dorsal root ganglia of the sensory nerves and when the virus becomes active presents as a painful skin lesion. It is associated only with sensory nerve fibers and has no motor involvement. The only answer choice that is solely responsible for sensory innervation is the dorsal root ganglion.",
    image: "",
  },
  {
    question:
      "A 45-year-old woman states that she has experienced moderate pain for 2 years over her left lower back; pain that radiates to her left lower limb. She states that after lifting a case of soft drinks, the pain suddenly became intense. She was admitted to the emergency department. Radiologic examination revealed intervertebral disc herniation between vertebral levels L4 and L5. Which of the following nerves was most likely affected by the disc herniation?",
    incorrectAnswers: ["L1", "L2", "L4"],
    correctAnswer: "L5",
    explanation:
      "Disc herniation in the lumbar region between L4 and L5 affects the L5 spinal nerve roots. Even though the L4 spinal nerve root lies directly between the L4 and L5 vertebrae, it exits from the spinal canal superior to the intervertebral disc, whereas the L5 spinal nerve root lies directly posterior to the disc.",
    image: "",
  },
  {
    question:
      "A 3-year-old boy is brought by his mother to the emergency department with severe headache, high fever, malaise, and confusion. Radiologic and physical examinations reveal that the patient suffers from meningitis. A lumbar puncture is ordered to confirm the diagnosis. Which vertebral level is the most appropriate location for the lumbar puncture?",
    incorrectAnswers: ["T12 to L1", "L1 to L2", "L2 to L3"],
    correctAnswer: "L4 to L5",
    explanation:
      "A lumbar puncture is performed by taking a sample of CSF from the lumbar cistern (the subarachnoid space below the spinal cord) between vertebrae L4 and L5 or sometimes between L3 and L4. It is done in this region because the spinal cord typically ends at the level of L1 to L2 and the dural sac ends at the level of S2. Therefore, it is the safest place to do the procedure because it lies between these areas and the risk of injuring the spinal cord is minimized. (Remember in children the cord ends more caudally.)",
    image: "",
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
    image: "",
  },
  {
    question:
      "A 39-year-old man presents with severe neck pain after a whiplash injury, sustained when his car was struck from behind. Radiologic studies reveal trauma to the ligament lying on the anterior surface of the cervical vertebral bodies. Which ligament is most likely disrupted?",
    incorrectAnswers: [
      "Ligamentum flavum",
      "Nuchal ligament",
      "Posterior longitudinal ligament",
    ],
    correctAnswer: "Anterior longitudinal ligament",
    explanation:
      "The anterior longitudinal ligament lies anterior to the vertebral bodies along the vertebral column. The ligamentum flavum connects the laminae of two adjacent vertebrae. The nuchal ligament is a continuation of the supraspinous ligament above C7, which connects spinous processes. The posterior longitudinal ligament lies on the posterior margin of the vertebral bodies. The transverse cervical (cardinal) ligament is associated with the pelvic region of the body and not the spinal column (GAS Figs. 2-31 and 2-34).",
    image: "",
  },
  {
    question:
      "A 65-year-old man complains of severe back pain and the inability to move his left lower limb. Radiologic studies demonstrate compression of nerve elements at the intervertebral foramen between vertebrae L5 and S1. Which structure is most likely responsible for this space-occupying lesion?",
    incorrectAnswers: [
      "Anulus fibrosus",
      "Posterior longitudinal ligament",
      "Anterior longitudinal ligament",
    ],
    correctAnswer: "Nucleus pulposus",
    explanation:
      "Compression of nerves at the intervertebral foramen indicates a disc herniation. A disc herniation is characterized by protrusion of the nucleus pulposus through the anulus fibrosus posterolaterally into the spinal canal or intervertebral foramen. In general, the ligaments may be affected by the herniation but are not responsible for the compression of the spinal nerve roots.",
    image: "",
  },
  {
    question:
      "A 27-year-old man is admitted to the emergency department after a car crash. Physical examination reveals weakness during medial rotation and adduction of the humerus. Which of the following nerves was most probably injured?",
    incorrectAnswers: ["Axillary", "Dorsal scapular", "Spinal accessory"],
    correctAnswer: "Thoracodorsal",
    explanation:
      "The thoracodorsal nerve innervates the latissimus dorsi, one of major muscles that adduct and medially rotate the humerus. The axillary nerve supplies the deltoid muscle, the dorsal scapular nerve supplies the rhomboids and levator scapulae muscles, and the spinal accessory nerve innervates the trapezius. None of these nerves medially rotates or adducts the humerus. The radial nerve is responsible for the innervation on the posterior aspect of the arm and forearm. The medial and lateral pectoral nerves and the lower subscapular nerve supply the other medial rotators of the humerus.",
    image: "",
  },
  {
    question:
      "A 39-year-old woman complains of an inability to reach the top of her head to brush her hair with her right hand. History reveals that she had undergone a mastectomy procedure of her right breast 2 months earlier. Physical examination demonstrates winging of her right scapula. Which nerves were most likely damaged during surgery?",
    incorrectAnswers: ["Dorsal scapular", "Thoracodorsal", "Spinal accessory"],
    correctAnswer: "Long thoracic",
    explanation:
      "The long thoracic nerve innervates the serratus anterior, which is responsible for elevation and protraction of the scapula beyond the horizontal level while maintaining its position against the thoracic wall. Along with the thoracodorsal nerve, the long thoracic nerve runs superficially along the thoracic wall and is subject to injury during a mastectomy procedure. The axillary nerve, the spinal accessory nerve, and the thoracodorsal nerve supply the deltoid muscle, trapezius muscle, and latissimus dorsi muscles, respectively. The dorsal scapular nerve is responsible for innervation of the rhomboids and levator scapulae. Aside from the long thoracic and thoracodorsal nerves, the remaining nerves do not course along the lateral thoracic wall.",
    image: "",
  },
  {
    question:
      "A 19-year-old man is brought to the emergency department after dislocating his shoulder while playing football. Following treatment of the dislocation, he cannot initiate abduction of his arm. An MRI of the affected shoulder shows a torn muscle. Which muscle was most likely damaged by the injury?",
    incorrectAnswers: [
      "Coracobrachialis",
      "Long head of the triceps brachii",
      "Pectoralis minor",
    ],
    correctAnswer: "Supraspinatus",
    explanation:
      "The rotator cuff muscles are common sites of damage during shoulder injuries. These muscles include the supraspinatus, infraspinatus, teres minor, and subscapularis (SITS). Initiation of abduction of the humerus (the first 15 degrees) is performed by the supraspinatus, followed by the deltoid from 15 to 90 degrees. Above the horizontal, the scapula is rotated by the trapezius and serratus anterior muscles, causing the glenoid fossa to turn superiorly and allowing the humerus to move above 90 degrees. The teres major and the pectoralis major are responsible for medial rotation and adduction of the humerus. These muscles are therefore not involved in abduction at the glenohumeral joint.",
    image: "",
  },
  {
    question:
      "A 1-year-old girl is brought to the clinic for a routine checkup. The child appears normal except for a dimpling of the skin in the midline of the lumbar region with a tuft of hair growing over the dimple. What is this relatively common condition that results from incomplete embryologic development?",
    incorrectAnswers: ["Meningomyelocele", "Meningocele", "Rachischisis"],
    correctAnswer: "Spina bifida occulta",
    explanation:
      "Spina bifida is a developmental condition resulting from incomplete fusion of the vertebral arches within the lumbar region. Spina bifida occulta commonly presents asymptomatically with midline, lumbar, cutaneous stigmata such as a tuft of hair and a small dimple. More severe forms (spina bifida cystica) are categorized into three types: Spina bifida cystica with meningocele presents with protrusion of the meninges through the unfused vertebral arches; spina bifida with myelomeningocele is characterized by protrusion both of the meninges and central nervous system (CNS) tissues and is often associated with neurologic deficits; and rachischisis, also known as spina bifida cystica with myeloschisis, results from a failure of neural folds to fuse and is characterized by protrusion of the spinal cord or spinal nerves and meninges.",
    image: "",
  },
  {
    question:
      "A young resident complains of an itch on his back that appears to be caused by an insect bite. Which nerve fibers carry the sensation of a mosquito bite on the back, just lateral to the spinous process of the T4 vertebra?",
    incorrectAnswers: [
      "Somatic efferent",
      "Visceral afferent",
      "Visceral efferent",
    ],
    correctAnswer: "Somatic afferent",
    explanation:
      "Somatic afferents are responsible for conveying pain, pressure, touch, temperature, and proprioception to the CNS. Afferent fibers carry only sensory stimuli, whereas efferent fibers convey motor information. Visceral innervation is associated with the autonomic nervous system. Visceral afferents generally carry information regarding the physiologic changes of the internal viscera whereas visceral efferents deliver autonomic motor function to three types of tissue: smooth muscle, cardiac muscle, and glandular epithelium.",
    image: "",
  },
  {
    question:
      "A 15-year-old woman was suspected of having meningitis. To obtain a sample of cerebrospinal fluid by spinal tap in the lumbar region (lumbar puncture), the tip of the needle must be placed in which of the following locations?",
    incorrectAnswers: [
      "In the epidural space",
      "Between anterior and posterior longitudinal ligaments",
      "Superficial to the ligamentum flavum",
    ],
    correctAnswer: "In the subarachnoid space",
    explanation:
      "CSF is found within the subarachnoid space and is continuous with the ventricles of the brain (CSF flows from the ventricles to the subarachnoid space). The epidural space, positioned between the dura mater and periosteum, contains fat and the internal vertebral venous plexus (of Batson). The subdural space, between the arachnoid mater and dura mater, exists only as a potential space and does not contain cerebrospinal fluid. The anterior and posterior longitudinal ligaments traverse the length of the vertebral bodies.",
    image: "",
  },
  {
    question:
      "A 19-year-old man is diagnosed with a herniated disc but he has no symptoms of spinal cord injury. In the event of intervertebral disc herniation in the cervical region, which of the following ligaments is in an anatomic position to protect the spinal cord from direct compression?",
    incorrectAnswers: [
      "Supraspinous",
      "Posterior longitudinal",
      "Anterior longitudinal",
    ],
    correctAnswer: "Posterior longitudinal",
    explanation:
      "The posterior longitudinal ligament is the only ligament spanning the posterior aspect of the vertebral bodies and intervertebral discs. With intervertebral disc herniation, the nucleus pulposus of the intervertebral disc protrudes posterolaterally. The anterior longitudinal ligament traverses the anterior side of the vertebral bodies and thus would not protect the spinal cord from direct compression. The supraspinous and ligamentum flavum ligaments connect the spinous processes and the laminae of adjacent vertebrae, respectively. The nuchal ligament is a continuation of the supraspinous ligaments near the C7 vertebrae and runs to the occipital protuberance.",
    image: "",
  },
  {
    question:
      "In spinal anesthesia, the needle is often inserted between the spinous processes of the L4 and L5 vertebrae to ensure that the spinal cord is not injured. This level is safe because in the adult the spinal cord usually terminates at the disc between which of the following vertebral levels?",
    incorrectAnswers: ["T11 and T12", "T12 and L1", "L2 and L3"],
    correctAnswer: "L1 and L2",
    explanation:
      "This is the location of the conus medullaris, a tapered conical projection of the spinal cord at its inferior termination. Although the conus medullaris rests at the level of L1 and L2 in adults, it is often situated at L3 in newborns. The cauda equina and filum terminale extend beyond the conus medullaris.",
    image: "",
  },
  {
    question:
      "A 22-year-old woman is diagnosed with Raynaud's disease. In such a case, the patient suffers chronic vasospasm in response to cold. This can lead to arterial constriction and painful ischemia, especially in the fingers or toes. Relief from the symptoms in the hands would require surgical division of which of the following neural elements?",
    incorrectAnswers: [
      "Lower cervical and upper thoracic ventral roots",
      "Lower cervical and upper thoracic dorsal roots",
      "Lower cervical and upper thoracic spinal nerves",
    ],
    correctAnswer: "Lower cervical and upper thoracic sympathetic fibers",
    explanation:
      "The sympathetic division of the autonomic nervous system is primarily responsible for vasoconstriction. Separation of ventral or dorsal roots would lead to undesired consequences, such as a loss of motor or sensory activity. Similarly, surgical division of spinal nerves would also have unwanted consequences, but such are not related to the increased arterial constriction and the painful ischemia in the digits. Division of selected sympathetic chain ganglia, however, would decrease the sympathetic outflow to the upper limbs.",
    image: "",
  },
  {
    question:
      "A 69-year-old woman visits her physician due to severe neck pain. Radiologic studies reveal bony growths (osteophytes) in the intervertebral foramen between vertebrae C2 and C3. Which of the following muscles would be most likely affected by this condition?",
    incorrectAnswers: [
      "Rhomboideus major",
      "Serratus anterior",
      "Supraspinatus",
    ],
    correctAnswer: "Diaphragm",
    explanation:
      "The diaphragm is innervated by the phrenic nerve, which arises from C3 to C5. The rhomboid, serratus anterior, supraspinatus, and latissimus dorsi are innervated by the ventral rami of the brachial plexus (C5 to T1).",
    image: "",
  },
  {
    question:
      "A 42-year-old woman is diagnosed with stenosis of the cervical vertebral canal. A laminectomy of two vertebrae is performed. Which of the following ligaments will most likely also be removed?",
    incorrectAnswers: ["Anterior longitudinal", "Denticulate", "Nuchal"],
    correctAnswer: "Ligamentum flavum",
    explanation:
      "The anterior longitudinal ligament runs along the anterior-most aspect of the vertebral column from C1 to the sacrum and would therefore be unaffected by a laminectomy. Denticulate ligaments extend laterally from the pia mater to the arachnoid mater along the length of the spinal cord. The ligamentum flavum is one of the two ligaments found in the vertebral canal and is adherent to the anterior aspect of the vertebral arches and often greatly thickened in spinal pathology. It is thus simultaneously removed upon excision of the lamina. The nuchal ligament is a thick longitudinal extension continuing from the supraspinous ligament at the level of C7 to the external occipital protuberance (inion). The cruciate ligament is an incorrect answer because it is located anterior to the spinal cord, and thus would not be involved in laminectomy.",
    image: "",
  },
  {
    question:
      "A 28-year-old pregnant woman is admitted to the obstetrics department for delivery. In the final stages of labor, a caudal anesthetic is administered via the sacral hiatus. Into which of the following spaces in thesacral canal is the anesthetic placed?",
    incorrectAnswers: [
      "Vertebral canal",
      "Vertebral venous plexus",
      "Subarachnoid space",
    ],
    correctAnswer: "Epidural space",
    explanation:
      "The vertebral canal is the longitudinal canal that extends through the vertebrae, containing the meninges, spinal cord, and associated ligaments. The internal vertebral venous plexus is the mostly valveless network of veins extending longitudinally along the vertebral canal. Neither of these answer choices describes a specific space. The spinal epidural space is found superficially to the dura mater. It is a fat-filled space extending from C1 to the sacrum. The subarachnoid space is a true space containing CSF. It is found within the CNS and extends to the level of S2. The subdural space is a potential space between the dura and the arachnoid mater. Normally, these two layers are fused due to the pressure of CSF in the subarachnoid space.",
    image: "",
  },
  {
    question:
      "A 12-year-old child was brought to the emergency department by his parents because he has been suffering from a very high fever and severe stiffness in his back. The initial diagnosis is meningitis. The attending physician orders a lumbar puncture to confirm the diagnosis. Upon microscopic examination of the cerebrospinal fluid, hematopoietic cells are seen. Which of the following ligaments was most likely penetrated by the needle?",
    incorrectAnswers: [
      "Denticulate",
      "Anterior longitudinal",
      "Posterior longitudinal",
    ],
    correctAnswer: "Supraspinous",
    explanation:
      "Lumbar puncture is generally performed at the level of L4 or L5. The supraspinous ligament extends between spinous processes on the dorsal aspect of the vertebrae. The needle will bypass this structure. The denticulate ligaments are not correct because they terminate with the conus medullaris at the level of L2 and are located laterally. The anterior longitudinal ligament extends along the most anterior aspect of the vertebral bodies and can be reached only ventrally. The posterior longitudinal ligament is present at the correct vertebral level but will be punctured only if the procedure is performed incorrectly as in this case, where hematopoietic cells were aspirated from the vertebral body anterior to the ligament. The nuchal ligament extends cranially from the supraspinous ligament in the lower cervical region to the skull.",
    image: "",
  },
  {
    question:
      "A 25-year-old male racing car driver is admitted to the emergency department after a severe car crash. Radiologic studies reveal damage to the tip of the transverse process of the third cervical vertebra, with a significantly large pulsating hematoma. What artery is the most likely to have been damaged?",
    incorrectAnswers: [
      "Anterior spinal artery",
      "Ascending cervical artery",
      "Deep cervical artery",
    ],
    correctAnswer: "Vertebral artery",
    explanation:
      "The anterior spinal artery is located anteriorly along the spinal cord and is not directly associated with the vertebrae. The vertebral arteries run through the transverse foramina of cervical vertebrae C6 through C1 and are therefore most closely associated with injury to the transverse processes. The ascending cervical artery is usually a very small branch from the thyrocervical trunk of the subclavian artery, running on the anterior aspect of the vertebrae. The deep cervical artery arises from the costocervical trunk and is also a very small artery and courses along the posterior aspect of the cervical vertebrae. The posterior spinal arteries are adherent to the posterior aspect of the spinal cord.",
    image: "",
  },
  {
    question:
      "A 79-year-old man, a retired military veteran, presents to the outpatient clinic with an abnormal curvature of the vertebral column. He complains that it has become increasingly painful to walk around town.Upon physical examination, he has an abnormally increased convexity to his thoracic curvature resulting from osteoporosis. Which of the following is the most likely clinical condition of this patient's spine?",
    incorrectAnswers: ["Scoliosis", "Spinal stenosis", "Lordosis"],
    correctAnswer: "Hyperkyphosis",
    explanation:
      "Scoliosis is defined as a lateral deviation of the spinal column to either side. Hyperkyphosis is an increased primary curvature of the spinal column. This curvature is associated with thoracic and sacral regions and is most likely this patient's clinical condition. Spinal stenosis is a narrowing of the vertebral canal and is not directly associated with a displacement of the spinal column. Hyperlordosis is the increased secondary curvature affecting the cervical and lumbar regions. A herniated disc is a rupture of the anulus fibrosus of the intervertebral disc, commonly causing a posterolateral displacement of the nucleus pulposus into the vertebral canal.",
    image: "",
  },
  {
    question:
      "A 42-year-old woman complains of pain and stiffness in her neck. She was injured sliding into second base headfirst during her company's softball game. Radiographs reveal no fractures of her spine. However, upon physical examination, her right shoulder is drooping and she has difficulty in elevating that shoulder. If you ordered an MRI, it would most likely reveal soft tissue damage involving which of the following nerves?",
    incorrectAnswers: [
      "Thoracodorsal nerve",
      "Dorsal scapular nerve",
      "Greater occipital nerve",
    ],
    correctAnswer: "Spinal accessory nerve",
    explanation:
      "The thoracodorsal nerve innervates the latissimus dorsi, which has no direct action on the shoulder girdle. The spinal accessory nerve is the eleventh cranial nerve (CN XI) and innervates both the trapezius and sternocleidomastoid muscles. The loss of CN XI results in drooping of the shoulder due to paralysis of the trapezius. In addition to the clinical findings of the MRI, one can test the innervation of this nerve by asking the patient to shrug his or her shoulders against resistance (testing the trapezius), as well as turning his or her head against resistance (testing the sternocleidomastoid). The dorsal scapular nerve usually innervates the levator scapulae muscle and the rhomboid muscles. The greater occipital nerve is primarily a sensory nerve innervating the posterolateral aspect of the scalp. The axillary nerve is a branch of the brachial plexus and innervates the deltoid and teres minor muscles. It is not involved in shoulder elevation.",
    image: "",
  },
  {
    question:
      "A 53-year-old man was in a head-on vehicle collision that resulted in compression of his spinal cord by the dens (odontoid process) of the axis, with resulting quadriplegia. Which of the following ligaments was most probably torn?",
    incorrectAnswers: [
      "Anterior longitudinal ligament",
      "Ligamentum flavum",
      "Supraspinous ligament",
    ],
    correctAnswer: "Transverse ligament of the atlas",
    explanation:
      "The anterior longitudinal ligament runs on the anterior aspect of the vertebrae and is not affected. The transverse ligament of the atlas anchors the dens laterally to prevent posterior displacement of the dens. This ligament has been torn in this injury. The ligamentum flavum is found on the posterior aspect of the vertebral canal and does not contact the anteriorly placed dens. The supraspinous ligament is located along the spinous processes of the vertebrae. The nuchal ligament is a longitudinal extension of the supraspinous ligament above the level of C7.",
    image: "",
  },
  {
    question:
      "An 18-year-old woman passenger injured in a rollover car crash was rushed to the emergency department. After the patient is stabilized, she undergoes physical examination. She demonstrates considerable weakness in her ability to flex her neck, associated with injury to CN XI. Which of the following muscles is most probably affected by nerve trauma?",
    incorrectAnswers: [
      "Iliocostalis thoracis",
      "Rhomboid major",
      "Teres major",
    ],
    correctAnswer: "Sternocleidomastoid",
    explanation: "",
    image: "",
  },
  {
    question:
      "A 23-year-old man was killed in a high-speed motor vehicle collision after racing his friend on a local highway. When the medical examiner arrives at the scene, it is determined that the most likely cause of death was a spinal cord injury. Upon confirmation by autopsy, the medical examiner officially reports that the patient's cause of death was a fracture of the pedicles of the axis (C2). Breaking of which of the following ligaments would be most likely implicated in this fatal injury?",
    incorrectAnswers: [
      "Ligamentum flavum",
      "Nuchal ligament",
      "Posterior longitudinal ligament",
    ],
    correctAnswer: "Cruciform ligament",
    explanation:
      "The pedicles are bony structures connecting the vertebral arches to the vertebral body. The ligamentum flavum runs on the posterior aspect of the vertebral canal and is more closely associated with the laminae than to the pedicles of the vertebrae. The nuchal ligament is a longitudinal extension of the supraspinous ligament from C7 to the occiput, both running on the most posterior aspect of the vertebrae along the spinous processes. The cruciform (also called cruciate or transverse ligament of the atlas) ligament is a stabilizing ligament found at the skull base and C1/C2. It attaches to the pedicles and helps stabilize the dens. The posterior longitudinal ligament extends the length of the anterior aspect of the vertebral canal and is anterior to the pedicles.",
    image: "",
  },
  {
    question:
      "A 65-year-old man is injured when a vehicle traveling at a high rate of speed hits his car from behind. Radiologic examination reveals that two of his articular processes are now locked together, a condition known as “jumped facets.” In which region of the spine is this injury most likely to occur?",
    incorrectAnswers: ["Thoracic", "Lumbar", "Lumbosacral"],
    correctAnswer: "Cervical",
    explanation:
      "Spondylolysis is the anterior displacement of one or more vertebrae. This is most commonly seen with the cervical vertebrae because of their small size and structure and the oblique angle of the articular facets. Lumbar vertebrae are somewhat susceptible to this problem because of the pressures at lower levels of the spine and the sagittal angles of the articular facets. It is much less common in the thoracic vertebrae due to the stabilizing factor of the ribs. It is not seen in the sacral vertebrae because they are fused together.",
    image: "",
  },
  {
    question:
      "Following a car crash, a 47-year-old woman complains of severe headache and back pain. Radiologic examination reveals bleeding of the internal vertebral venous plexus (of Batson), resulting in a large hematoma. In what space has the blood most likely accumulated?",
    incorrectAnswers: ["Subarachnoid space", "Subdural space", "Central canal"],
    correctAnswer: "Epidural space",
    explanation:
      "The internal vertebral plexus (of Batson) surrounds the dura mater in the spinal epidural space; hence the bleeding would cause the hematoma in that space. The subarachnoid space, containing the CSF, is located between pia and arachnoid mater. A subarachnoid hemorrhage would most likely result from a ruptured intercerebral aneurysm. A subdural hematoma would result most likely from a venous bleed from a torn cerebral vein as it enters the superior sagittal venous sinus within the skull. The central canal is located within the gray matter of the spinal cord. The lumbar cistern is an enlargement of the subarachnoid space between the conus medullaris of the spinal cord and the caudal end of the subarachnoid space.",
    image: "",
  },
  {
    question:
      "A 32-year-old man, an elite athlete, was lifting heavy weights during an intense training session. The athlete felt severe pain radiating to the posterior aspect of his right thigh and leg. The patient was taken to the hospital where MRI revealed a ruptured L4/L5 intervertebral disc. Which nerve is most probably affected?",
    incorrectAnswers: ["L3", "L4", "L2"],
    correctAnswer: "L5",
    explanation:
      "In the lumbar region spinal nerves exit the vertebral column below their named vertebrae. In an L4, L5 intervertebral disc herniation, the L5 spinal nerve would be affected as it descends between L4, L5 vertebrae to exit below the L5 level. L2, L3, and L4 spinal nerves have already exited above the level of herniation; therefore, they would not be affected by this herniation. An “L6” spinal nerve normally does not exist. (The National Board of Medical Examiners does not allow “made up” structures, but in cases of lumbarization of S1, some people recognize an L6 nerve.)",
    image: "",
  },
  {
    question:
      "A 24-year-old patient suffered a lower back strain after a severe fall while skiing. MRI studies reveal injury to the muscles responsible for extending and laterally bending the trunk. What arteries provide blood supply for these muscles?",
    incorrectAnswers: ["Subscapular", "Thoracodorsal", "Anterior intercostal"],
    correctAnswer: "Posterior intercostal",
    explanation:
      "Posterior intercostal arteries supply the deep back muscles, which are responsible for extending and laterally bending the trunk. The subscapular artery supplies the subscapularis muscle, the thoracodorsal artery supplies the latissimus dorsi, the anterior intercostal supplies the upper nine intercostal spaces, and the suprascapular artery supplies the supraspinatus and infraspinatus muscles. These muscles are not responsible for extension and lateral flexion of the trunk.",
    image: "",
  },
  {
    question:
      "A 22-year-old male soccer player is forced to leave the game following a head-to-head collision with another player. He is admitted to the hospital, and radiologic examination reveals slight dislocation of the atlantoaxial joint. As a result, he experiences decreased range of motion at that joint. What movement of the head would most likely be severely affected?",
    incorrectAnswers: ["Flexion", "Abduction", "Extension"],
    correctAnswer: "Rotation",
    explanation:
      "The atlantoaxial joint is a synovial joint responsible for rotation of the head, not flexion, abduction, extension, or adduction. The atlantooccipital joint is primarily involved in flexion and extension of the head on the neck.",
    image: "",
  },
  {
    question:
      "A 42-year-old man is struck in the back, rupturing the internal vertebral venous plexus (of Batson). Radiologic studies reveal a hematoma causing compression of the spinal cord. When aspirating the excess blood, the physician performing the procedure should stop the needle just before puncturing which of the following structures?",
    incorrectAnswers: ["Spinal cord", "Pia mater", "Arachnoid mater"],
    correctAnswer: "Dura mater",
    explanation:
      "The internal vertebral plexus (of Batson) lies external to the dura mater in the epidural space. To aspirate excess blood, the physician must pass the needle through the ligamentum flavum to reach the epidural space wherein the blood would accumulate. The spinal cord, pia mater, and arachnoid mater are located deep to the epidural space.",
    image: "",
  },
  {
    question:
      "A 35-year-old man pedestrian is crossing a busy intersection and is hit by a truck. He is admitted to the emergency department, and a CT scan reveals a dislocation of the fourth thoracic vertebra. Which of the following costal structures is most likely also involved in the injury?",
    incorrectAnswers: [
      "Head of the fourth rib",
      "Neck of the fourth rib",
      "Head of the third rib",
    ],
    correctAnswer: "Head of the fifth rib",
    explanation:
      "The T4 thoracic vertebra articulates with the head of the fifth rib. The head of the rib has two facets. The rib articulates with the superior facet on the body of its own vertebra (the fourth rib articulates with the superior facet T4 vertebra) and with the inferior facet on the body of the vertebra above (the fourth rib articulates with the inferior facet of T3 vertebra). Taking the T4 vertebra into consideration, the superior facet of this vertebra articulates with the head of the fourth rib and the inferior facet articulates with the head of the fifth rib. The head of the fourth rib has two points of articulation (a joint with the vertebral body and a costotransverse joint) on T4, so when it is injured it moves as a unit, whereas the fifth rib has only one articulation with T4.",
    image: "",
  },
  {
    question:
      "A 20-year-old male hiker suffers a deep puncture wound during a fall. Physical examination reveals a lesion between the trapezius and latissimus dorsi muscles on the right lateral side of his back. Upon admission to the hospital, physical examination reveals weak adduction and medial rotation of his arm. Which of the following muscles is most probably injured?",
    incorrectAnswers: ["Teres minor", "Triceps brachii", "Supraspinatus"],
    correctAnswer: "Teres major",
    explanation:
      "The teres major is responsible for adduction and medial rotation of the humerus, the teres minor is responsible for lateral rotation of the humerus, the triceps brachii is responsible for extension of the forearm, the supraspinatus is responsible for the first 0 to 15 degrees of abduction, and the infraspinatus is a lateral rotator.",
    image: "",
  },
  {
    question:
      "A 22-year-old man is thrown through a plate glass wall in a fight. Radiologic examination reveals that the lateral border of his right scapula is shattered. He is admitted to the emergency department, and physical examination reveals difficulty laterally rotating his arm. Which of the following muscles is most probably injured?",
    incorrectAnswers: ["Teres major", "Latissimus dorsi", "Trapezius"],
    correctAnswer: "Infraspinatus",
    explanation:
      "The infraspinatus is responsible for lateral rotation of the humerus (along with the teres minor, not a choice here). The teres major is responsible for adduction and medial rotation of the humerus. The latissimus dorsi is responsible for adduction, extension, and medial rotation of the humerus. The trapezius is an elevator of the scapula and rotates the scapula during abduction of the humerus above the horizontal plane. The supraspinatus is responsible for the first 0 to 15 degrees of abduction.",
    image: "",
  },
  {
    question:
      "A 24-year-old woman presents with severe headache, photophobia, and stiffness of her back. Physical examination reveals positive signs for meningitis. The attending physician decides to perform a lumbar puncture to determine if a pathogen is in the cerebrospinal fluid (CSF). What is the last structure the needle will penetrate before reaching the lumbar cistern?",
    incorrectAnswers: ["Dura mater", "Pia mater", "Ligamentum flavum"],
    correctAnswer: "Arachnoid mater",
    explanation:
      "When a lumbar puncture is performed, the needle must penetrate the ligamentum flavum, the dura mater, and finally the arachnoid mater to reach the subarachnoid space where the CSF is located. The lumbar cistern is a continuation of the subarachnoid space below the conus medullaris. The pia mater is adherent to the spinal cord, and the posterior longitudinal ligament is attached to the posterior aspect of the vertebral bodies.",
    image: "",
  },
  {
    question:
      "A 19-year-old presents at the emergency department with high fever, severe headache, nausea, and stiff neck that have persisted for 3 days. The attending physician suspects meningitis and obtains a sample of CSF using a lumbar puncture. From which of the following spaces was the CSF collected?",
    incorrectAnswers: ["Epidural space", "Subdural space", "Pretracheal space"],
    correctAnswer: "Subarachnoid space",
    explanation:
      "The subarachnoid space, containing the CSF, is located between the pia and the arachnoid mater. Neither the epidural space, the subdural space, nor the pretracheal space contains CSF. Although the central canal, contained within the substance of the spinal cord, does contain CSF, extraction of CSF from this space would result in spinal cord injury. CSF circulates within the subarachnoid space and can be aspirated only from that location. The subdural space is only a potential space between the dura and arachnoid mater. The epidural space contains the epidural fat and Batson’s venous plexus and is the site to inject an anesthetic for epidural anesthesia. CSF is not located in the pretracheal space.",
    image: "",
  },
  {
    question:
      "A 38-year-old man is admitted to the emergency department after a car collision. During physical examination several lacerations to the back are discovered. Pain from lacerations or irritations of the skin of the back is conveyed to the central nervous system by which of the following?",
    incorrectAnswers: [
      "Communicating rami",
      "Ventral primary rami",
      "Ventral roots",
    ],
    correctAnswer: "Dorsal primary rami",
    explanation:
      "General somatic afferent fibers are conveyed from the skin of the back via the dorsal primary rami. Communicating rami contain general visceral efferent (sympathetic) fibers and general visceral afferent fibers of the autonomic nervous system. Ventral primary rami convey mixed spinal nerves to/from all other parts of the body excluding the back, and parts of the head innervated by cranial nerves. The ventral roots contain only efferent (motor) fibers. Intercostal nerves are the ventral rami of T1 to T11. The ventral ramus of T12 is the subcostal nerve.",
    image: "",
  },
  {
    question:
      "A 66-year-old woman had been diagnosed with a tumor on her spine. She has started to retain urine and is experiencing rectal incontinence. Both of these symptoms are signs of conus medullaris syndrome. At which of the following vertebral levels is the tumor probably located?",
    incorrectAnswers: ["L3/L4", "L3", "L4"],
    correctAnswer: "T12 to L2",
    explanation:
      "The conus medullaris is usually located at the L1 to L2 vertebral level; therefore, any choice that contains that region is the correct answer. L3 to L4 is a common location to perform lumbar puncture, but it is caudal to the apex of the conus medullaris. L3 and L4 are caudal to the conus medullaris. T11 is superior to the conus medullaris.",
    image: "",
  },
  {
    question:
      "Examination of a 3-day-old male infant reveals protrusion of his spinal cord and meninges from a defect in the lower back. Which of the following describes this congenital anomaly?",
    incorrectAnswers: [
      "Avulsion of meninges",
      "Meningitis",
      "Spina bifida occulta",
    ],
    correctAnswer: "Spina bifida with myelomeningocele",
    explanation:
      "Because the meninges and spinal cord are included in the protrusion, the patient’s condition is a classic presentation of spina bifida with myelomeningocele. If the protrusion contains only meninges but no CNS tissue, it is known as spina bifida with meningocele. Meningitis is an inflammation of the meninges caused by bacteria, viral, or numerous other irritants (e.g., blood). It does not cause deformation of the vertebrae or result in protrusion of spinal cord contents. Spina bifida occulta is a normally asymptomatic condition in which the vertebral laminae fail to fuse completely during embryologic development. A tuft of hair is commonly seen growing over the affected region (usually lumbar in position).",
    image: "",
  },
  {
    question:
      "A 32-year-old mother complains of serious pain in the coccygeal area some days after giving birth. To determine whether the coccyx is involved, a local anesthetic is first injected in the region of the coccyx and then dynamic MRI studies are performed. Physical examination reveals pain with palpation to the region of the coccyx. The local anesthetic is used to interrupt which of the following nerve pathways?",
    incorrectAnswers: [
      "Visceral afferents",
      "Somatic efferent",
      " Sympathetic preganglionic",
    ],
    correctAnswer: "Somatic afferent",
    explanation:
      "Somatic afferent fibers convey localized pain, typically from the body wall and limbs. Visceral afferents convey autonomic nervous system sensory information. Pain from these fibers will present as dull and diffuse. Somatic efferent fibers convey motor information to skeletal muscle. Sympathetic preganglionic fibers are visceral efferent fibers and do not contain sensory information. Parasympathetic preganglionic fibers are also visceral efferents and do not contain sensory information.",
    image: "",
  },
  {
    question:
      "During a routine physical examination, a 65-yearold man is tested for ease and flexibility of the movements of his lumbar region. Which of the following movements is most characteristic of the intervertebral joints in the lumbar region?",
    incorrectAnswers: ["Circumduction", "Abduction", "Inversion"],
    correctAnswer: "Lateral flexion",
    explanation:
      "Lateral flexion is the best answer because other movements of the lumbar portion of the vertebral column are very limited due to the orientation of the articular facets.",
    image: "",
  },
  {
    question:
      "A 72-year-old man with cancer of the prostate gland presents with loss of consciousness and seizures. A CT scan is performed and a brain tumor is diagnosed. The tumor spread to the brain from the pelvis via the internal vertebral venous plexus (of Batson). What feature of the plexus allows this to happen?",
    incorrectAnswers: [
      "The internal venous plexus contains the longest veins in the body.",
      "The internal venous plexus has valves that ensure one-way movement of blood.",
      "The internal venous plexus is located in the subarachnoid space.",
    ],
    correctAnswer: "The internal venous plexus is, in general, valveless.",
    explanation:
      "Batson’s venous plexus, in general, is a valveless network of veins located in the epidural space of the vertebral canal. The lack of valves can provide a route for the metastasis of cancer (e.g., from prostate or breast to brain) because the flow of blood is bidirectional due to local pressures. The length of Batson’s plexus is irrelevant to the question. B is incorrect because Batson’s plexus, in general, does not have valves or one-way movement of blood. Batson’s plexus is located within the epidural space, not the subarachnoid or subdural spaces.",
    image: "",
  },
  {
    question:
      "A 26-year-old man painting his house slipped and fell from the ladder, landing on the pavement below. After initial examination in the emergency department, the patient is sent to the radiology department. Radiographs reveal that the portion of his left scapula that forms the tip, or point, of the shoulder has been fractured. Which part of the bone was fractured?",
    incorrectAnswers: [
      "Coracoid process",
      "Superior angle of the scapula",
      "Glenoid",
    ],
    correctAnswer: "Acromion",
    explanation:
      "The acromion (the highest point of the shoulder) is the part of the scapula that forms the “point” of the shoulder. The coracoid process is located more medially. The superior angle of the scapula is located near the midline of the back. The glenoid of the scapula articulates with the head of the humerus to form the glenohumeral joint. The spine of the scapula is located posteriorly and separates supraspinous and infraspinous fossae.",
    image: "",
  },
  {
    question:
      "A 43-year-old male construction worker survived a fall from a two-story building but lost all sensation in his lower limbs and was admitted to the hospital for examination and treatment. Radiologic studies revealed that he crushed his spinal cord at vertebral level C6. Which of the following muscles will most likely be paralyzed?s",
    incorrectAnswers: ["Sternocleidomastoid", "Trapezius", "Diaphragm"],
    correctAnswer: "Latissimus dorsi",
    explanation:
      "All of the spinal nerves from C6 and below will be affected. The trapezius and sternocleidomastoid muscles will be intact because they are innervated by the spinal accessory nerve. The deltoid will be affected because its nerve motor supply is from the axillary nerve derived from C5 and C6. The diaphragm will work properly as its motor nerve supply is derived from the phrenic nerve (C3 to C5).",
    image: "",
  },
  {
    question:
      "A maternal serum sample with high alphafetoprotein alerted the obstetrician to a possible neural tube defect. Ultrasound diagnosis revealed a myelomeningocele protruding from the back of the child. Which of the following is the most likely diagnosis of this congenital anomaly?",
    incorrectAnswers: ["Cranium bifida", "Spina bifida occulta", "Hemothorax"],
    correctAnswer: "Spina bifida cystica",
    explanation:
      "Spina bifida cystica refers to spina bifida with a meningocele or myelomeningocele and is the correct answer. Cranium bifida could present with meningocele in the skull, but it would not be located in the lower back. Spina bifida occulta is a defect in the formation of the vertebral arches and does not usually present with meningocele. Hemothorax refers to blood accumulation in the pleural space surrounding the lungs. Caudal regression syndrome presents with loss or deformation of the distal part of the spine and/or spinal cord and is not related to a meningocele or myelomeningocele, in general.",
    image: "",
  },
  {
    question:
      "A 7-year-old girl who is somewhat obese is brought to the emergency department because of a soft lump above the buttocks. Upon physical examination you note the lump is located just superior to the iliac crest unilaterally on the left side. The protrusion is deep to the skin and pliable to the touch. Which of the following is the most probable diagnosis?",
    incorrectAnswers: [
      " Tumor of the external abdominal oblique muscle",
      "Indirect inguinal hernia",
      "Direct inguinal hernia",
    ],
    correctAnswer: "Herniation at the lumbar triangle (of Petit)",
    explanation:
      "The lumbar triangle (of Petit) is bordered medially by the latissimus dorsi, laterally by the external abdominal oblique, and inferiorly by the iliac crest. The floor of Petit’s triangle is formed by the internal abdominal oblique, and this is a possible site of herniation. An indirect inguinal hernia is located in the inguinal canal of the anterior abdominal wall. A direct inguinal hernia is located in Hesselbach’s triangle of the anterior abdominal wall. A femoral hernia occurs below the inguinal ligament. Answer A is not the best answer because this lump is described as soft and pliable, which would not likely indicate a tumor, as tumors tend to be hard masses.",
    image: "",
  },
  {
    question:
      "A 54-year-old woman is admitted to the emergency department due to increasing back pain over the preceding year. MRI reveals that her intervertebral discs have been compressed. It is common for the discs to decrease in size in people older than 40, and this can result in spinal stenosis and disc herniation. At which locations are the spinal nerves most likely to be compressed?",
    incorrectAnswers: [
      "Between the denticulate ligaments",
      "As they pass through the vertebral foramen",
      " Between the superior and inferior articular facets",
    ],
    correctAnswer: "Between inferior and superior vertebral notches",
    explanation:
      "This question tests anatomic knowledge relating to typical vertebra and the spinal cord. Intervertebral disc herniations occur when the nucleus pulposus of the intervertebral disc protrudes through the anulus fibrosus into the intervertebral foramen or vertebral canal. The most common protrusion is posterolaterally, where the anulus fibrosus is not reinforced by the posterior longitudinal ligament. The inferior and superior vertebral notches frame the intervertebral foramen, so this is the most likely location of compression. The denticulate ligaments are lateral extensions of pia mater that anchor to the dura mater, and help maintain the spinal cord in position within the subarachnoid space. The vertebral foramen is the canal through which the spinal cord passes; while this may also be a place of compression, it is not the most likely site of herniation. Articular facets are the locations where vertebral bodies articulate with each other. Intercostovertebral joints are locations where vertebral bodies articulate with ribs.",
    image: "",
  },
  {
    question:
      "A 37-year-old pregnant woman is given a caudal epidural block to alleviate pain during vaginal delivery. Caudal epidural blocks involve injection of local anesthetic into the sacral canal. Which of the following landmarks is most commonly used for the caudal epidural block?",
    incorrectAnswers: [
      "Anterior sacral foramina",
      "Posterior sacral foramina",
      "Median sacral crest",
    ],
    correctAnswer: "Cornua of the sacral hiatus",
    explanation:
      "Caudal anesthesia is used to block the spinal nerves that carry sensation from the perineum. This procedure is commonly used by anesthesiologists to relieve pain during labor and childbirth. Administration of local anesthetic to the epidural space is via the sacral hiatus, which opens between the sacral cornua. The anterior sacral foramina are located on the pelvic surface of the sacrum and are not palpable from a dorsal approach. The posterior sacral foramina and intervertebral foramina are the openings through which sacral nerves exit and are not palpable landmarks. The median sacral crest is cranial to the injection site.",
    image: "",
  },
  {
    question:
      "A 34-year-old pregnant woman in the maternity ward was experiencing considerable pain during labor. Her obstetrician decided to perform a caudal epidural block. What are the most important bony landmarks used for the administration of such anesthesia?",
    incorrectAnswers: [
      "Ischial tuberosities",
      "Ischial spines",
      "Posterior superior iliac spines",
    ],
    correctAnswer: "Sacral cornua",
    explanation:
      "The sacral cornua lie on either side of the sacral hiatus, from which one can gain access to the sacral canal. This is the best landmark for administration of anesthesia. The ischial tuberosities are more commonly used as landmarks for a pudendal nerve block. The ischial spines are only palpated intravaginally. The posterior superior iliac spines, though palpable, are not proximal enough for an epidural block within the sacral canal. The coccyx is not part of the sacral canal.",
    image: "",
  },
  {
    question:
      "A 22-year-old man is brought into the emergency department following a brawl in a tavern. He has severe pain radiating across his back and down his left upper limb. He supports his left upper limb with his right hand, holding it close to his body. Any attempt to move the left upper limb greatly increases the pain. A radiograph is ordered and reveals an unusual sagittal fracture through the spine of the left scapula. The fracture extends superiorly toward the suprascapular notch. Which nerve is most likely affected?",
    incorrectAnswers: [
      "Thoracodorsal nerve",
      "Axillary nerve",
      "Subscapular nerve",
    ],
    correctAnswer: "Suprascapular nerve",
    explanation:
      "The suprascapular nerve passes through the suprascapular notch, deep to the superior transverse scapular ligament. This nerve is most likely affected in a fracture of the scapula as described in the question. The thoracodorsal nerve runs behind the axillary artery and lies superficial to the subscapularis muscle and would therefore be protected. The axillary nerve passes posteriorly through the quadrangular space, which is distal to the suprascapular notch. The subscapular nerve originates from the posterior cord of the brachial plexus, which is distal to the site of fracture.",
    image: "",
  },
  {
    question:
      "A 5-year-old boy is admitted to the hospital because of pain in the upper back. Radiologic examination reveals abnormal fusion of the C5 and C6 vertebrae and a high-riding scapula. Which of the following is the most likely diagnosis?",
    incorrectAnswers: ["Lordosis", "Kyphosis", "Scoliosis"],
    correctAnswer: "Klippel-Feil syndrome",
    explanation:
      "Klippel-Feil syndrome is a congenital defect in which there is a reduction, or extensive fusion of one or more cervical vertebrae. It often manifests as a short, stiff neck with limited motion. Hyperlordosis is an abnormal increase in lumbar curvature. Hyperkyphosis (“hunchback”) is an abnormal increase in thoracic curvature. Scoliosis is a lateral curvature of the spine. Spina bifida can present with deformities in the lumbar region.",
    image: "",
  },
  {
    question:
      "A 53-year-old man is admitted to the emergency department due to severe back pain. MRI examination reveals anterior dislocation of the body of the L5 vertebra upon the sacrum. Which of the following is the most likely diagnosis?",
    incorrectAnswers: [
      "Spondylolysis",
      "Herniation of intervertebral disc",
      "Lordosis",
    ],
    correctAnswer: "Spondylolisthesis",
    explanation:
      "Spondylolisthesis is an anterior vertebral displacement created by an irregularity in the anterior margin of the vertebral column such that L5 and the overlying L4 (and sometimes L3) protrude forward rather than being restrained by S1. Spondylolysis is a condition in which the region between the superior and inferior articular facets (on the posterior arch of the L5 vertebra) is damaged or missing, which is not the case in this example. Herniation is a protrusion of the nucleus pulposus through the anulus fibrosus, and this is not associated with vertebral dislocation. Hyperlordosis and scoliosis are excessive curvatures that do not involve dislocations.",
    image: "",
  },
  {
    question:
      "A male newborn infant is brought to the clinic by his mother and diagnosed with a congenital malformation. MRI studies reveal that the cerebellum and medulla oblongata are protruding inferiorly through the foramen magnum into the vertebral canal. What is this clinical condition called?",
    incorrectAnswers: ["Meningocele", "Klippel-Feil syndrome", "Hydrocephalus"],
    correctAnswer: "Chiari II malformation",
    explanation:
      "Chiari II malformation results from herniation of the medulla and cerebellum into the foramen magnum. Meningocele is a small defect in the cranium in which only the meninges herniate. Klippel-Feil syndrome results from an abnormal number of cervical vertebral bodies. Hydrocephalus results from an overproduction of cerebrospinal fluid, obstruction of its flow, or interference with CSF absorption. Tethered cord syndrome is a congenital anomaly often caused by a defective closure of the neural tube. This syndrome is characterized by a low conus medullaris and a thickened filum terminale.",
    image: "",
  },
  {
    question:
      "A 62-year-old woman is admitted to the hospital because of her severe back pain. Radiologic examination reveals that the L4 vertebral body has slipped anteriorly, with fracture of the zygapophysial joint (Fig. 1-2). What is the proper name of this condition?",
    incorrectAnswers: [
      "Spondylolisthesis",
      "Crush vertebral fracture",
      "Intervertebral disc herniation",
    ],
    correctAnswer: "Spondylolysis and spondylolisthesis",
    explanation:
      "Spondylolisthesis is an anterior displacement created by an irregularity in the anterior margin of the vertebral column such that L5 and the overlying L4 (and sometimes L3) protrude forward. Spondylolysis is a condition in which the region between the superior and inferior articular facets (on the posterior arch of the L5 vertebra) is damaged or missing, which is not the case in this example. Compression vertebral fracture is a collapse of vertebral bodies as a result of trauma. Intervertebral disc herniations occur when the nucleus pulposus protrudes through the anulus fibrosus into the intervertebral foramen or vertebral canal. The most common protrusion is posterolaterally, where the anulus fibrosus is not reinforced by the posterior longitudinal ligament. Klippel-Feil syndrome results from an abnormal number of cervical vertebral bodies.",
    image: "back-question2.jpg",
  },
  {
    question:
      "A 40-year-old woman survived a car crash in which her neck was hyperextended when her vehicle was struck from behind. At the emergency department, a plain radiograph of her cervical spine revealed a fracture of the odontoid process (dens). Which of the following was also most likely injured?",
    incorrectAnswers: [
      "Posterior tubercle of the atlas",
      "Atlanto-occipital joint",
      "Inferior articular process of the axis",
    ],
    correctAnswer: "Anterior arch of the atlas",
    explanation:
      "The odontoid process, or the dens, projects superiorly from the body of the axis and articulates with the anterior arch of the atlas. The posterior and anterior tubercles of the atlas are bony eminences on the outer surface. The inferior articular facet is where the axis articulates with the C3 vertebra (GAS Fig. 2-21).",
    image: "",
  },
  {
    question:
      "A 34-year-old woman is admitted to the emergency department after a car crash. Radiologic examination reveals a whiplash injury in addition to hyperextension of her cervical spine. Which of the following ligaments will most likely be injured?",
    incorrectAnswers: [
      "Ligamentum flavum",
      "Posterior longitudinal ligament",
      "Anulus fibrosus",
    ],
    correctAnswer: "Anterior longitudinal ligament",
    explanation:
      "The anterior longitudinal ligament is a strong fibrous band that covers and connects the anterolateral aspect of the vertebrae and intervertebral discs; it maintains stability and prevents hyperextension. It can be torn by cervical hyperextension. The ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The posterior longitudinal ligament runs within the vertebral canal supporting the posterior aspect of the vertebrae and prevents hyperflexion. The anulus fibrosus is the outer fibrous part of an intervertebral disc. The interspinous ligament connects adjacent spinous processes.",
    image: "",
  },
  {
    question:
      "A 23-year-old college student is admitted to the emergency department after jumping from a 50-foot high waterfall. The MRI of his back reveals a lateral shift of the spinal cord to the left. Which of the following structures has most likely been torn to cause the deviation?",
    incorrectAnswers: [
      "Posterior longitudinal ligament",
      "Tentorium cerebelli",
      "Ligamentum flavum",
    ],
    correctAnswer: "Denticulate ligaments",
    explanation:
      "The denticulate ligaments are lateral extensions of pia mater that attach to the dura mater between the dorsal and ventral roots of the spinal nerves. These ligaments function to keep the spinal cord in the midline position. The posterior longitudinal ligament supports the posterior aspect of the vertebrae within the vertebral canal. The tentorium cerebelli is a layer of dura mater that supports the occipital lobes of the cerebral hemispheres and covers the cerebellum. The ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The nuchal ligament is a thickening of the supraspinous ligaments extending from the C7 vertebra to the external occipital protuberance.",
    image: "",
  },
  {
    question:
      "A 6-year-old boy is admitted to the hospital with coughing and dyspnea. During taking of the history, he complains that it feels like there is glass in his lungs. Auscultation reveals abnormal lung sounds. The abnormal lung sounds are heard most clearly during inhalation with the scapulae protracted. Which of the following form the borders of a triangular space where one should place the stethoscope in order to best hear the lung sounds?",
    incorrectAnswers: [
      "Deltoid, levator scapulae, trapezius",
      "Latissimus dorsi, external abdominal oblique, iliac crest",
      "Quadratus lumborum, internal abdominal oblique, inferior border of the twelfth rib",
    ],
    correctAnswer: "Latissimus dorsi, trapezius, medial border of scapula",
    explanation:
      "The region bounded by the upper border of the latissimus dorsi, the lateral border of the trapezius, and the medial border of the scapula is known as the triangle of auscultation. Lung sounds can be heard most clearly from this location because minimal tissue intervenes between the skin of the back and the lungs. The deltoid, levator scapulae, and trapezius do not form the borders of the so-called “triangle of auscultation.” The latissimus dorsi, external abdominal oblique, and iliac crest form the border of Petit’s inferior lumbar triangle. The quadratus lumborum, internal abdominal oblique, and inferior border of the twelfth rib form the border of the Grynfeltt’s superior lumbar triangle. The rectus abdominis, inguinal ligament, and inferior epigastric vessels form the border of the inguinal triangle (of Hesselbach).",
    image: "",
  },
  {
    question:
      "A 45-year-old woman is admitted to the outpatient clinic for shoulder pain. During physical examination Fig. 1-2 she presents with weakened shoulder movements. Radiologic examination reveals signs of quadrangular space syndrome, causing weakened shoulder movements. Which of the following nerves is most likely affected?",
    incorrectAnswers: ["Suprascapular", "Subscapular", "Radial"],
    correctAnswer: "Axillary",
    explanation:
      "The weakness in shoulder movement results from denervation of the teres minor and deltoid by the axillary nerve, which passes through the quadrangular space. Quadrangular space syndrome occurs when there is hypertrophy of the muscles that border the quadrangular space or fibrosis of portions of the muscles that are in contact with the nerve.",
    image: "",
  },
  {
    question:
      "A 29-year-old female elite athlete was lifting heavy weights during an intense training session. The athlete felt severe pain radiate suddenly to the posterior aspect of her right thigh and leg. The patient was taken to the hospital where an MRI was performed (Fig. 1-3). Which nerve was most probably affected?",
    incorrectAnswers: ["L3", "L4", "L2"],
    correctAnswer: "L5",
    explanation:
      "In this MRI a posterolateral herniation between L4/L5 exists. In the lumbar region, spinal nerves exit the vertebral column below their named vertebrae. In an L4/L5 intervertebral disc herniation, the L5 spinal nerve would be affected as it descends between L4/L5 vertebrae to exit below the L5 level.",
    image: "back-question3.jpg",
  },
  {
    question:
      "A 58-year-old man in the intensive care ward exhibited little voluntary control of urinary or fecal activity following repair of an abdominal aortic aneurysm. In addition, physical examination revealed widespread paralysis of his lower limbs. These functions were essentially normal prior to admission to the hospital. The most likely cause of this patient's problems is which of the following?",
    incorrectAnswers: [
      "Injury to the left vertebral artery",
      "Ligation of the posterior spinal artery",
      "Transection of the conal segment of the spinal cord",
    ],
    correctAnswer: "Injury of the great radicular artery (of Adamkiewicz)",
    explanation:
      "The (great radicular) artery of Adamkiewicz is important for blood supply to anterior and posterior spinal arteries. The location of this artery should be noted during surgery because damage to it can result in dire consequences, including paraplegia (loss of all sensation and voluntary movement inferior and at the level of the injury). Injury to the left vertebral artery would not be likely due its superior location to the surgical site. Ligation of the posterior spinal artery would not occur because of its protected location inside the vertebral canal. Transection of the conus medullaris of the spinal cord would not occur as this structure is located at L1, L2 levels and is, again, protected inside the vertebral canal. Division of the thoracic sympathetic chain would not be likely as the symptoms described include limb paralysis, which would not be a consequence of sympathetic disruption (GAS Fig. 2-49A).",
    image: "",
  },
  {
    question:
      "A 23-year-old woman is admitted to the hospital due to back pain. Radiologic examination reveals that she suffers from a clinical condition affecting her vertebral column. Her history reveals that she suffered from polio and has a muscular dystrophy. Which of the following conditions of the vertebral column will most likely be present in this patient?",
    incorrectAnswers: ["Hyperlordosis", "Hyperkyphosis", "Spina bifida"],
    correctAnswer: "Scoliosis",
    explanation:
      "Scoliosis can be a secondary condition in such disorders as muscular dystrophy and polio in which abnormal muscle does not keep the normal alignment of the vertebral column and results in a lateral curvature. Hyperlordosis is increased secondary curvature of the lumbar region. It can be caused by stress on the lower back and is quite common during late pregnancy. Hyperkyphosis is increased primary curvature of the thoracic regions and produces a hunchback deformity. It can be secondary to tuberculosis, producing a “gibbus deformity,” which results in angulated kyphosis at the lesion site. Spinabifida is a congenital defect and would not present as a result of muscular dystrophy or polio. Osteoarthritis most commonly presents with age from normal “wear and tear.” It is highly unlikely in a 23-year-old woman.",
    image: "",
  },
  {
    question:
      "A 26-year-old competitive football player has been complaining of pain, weakness, numbness, and tingling for the past 2 months in his upper limb. Imaging studies reveal a cervical disc herniation compressing the nerve roots and a portion of the spinal cord. An anterior cervical discectomy and fusion (ACDF) surgery is performed. The intervertebral disc is examined upon removal and the anulus fibrosus and nucleus pulposus are severely damaged posterolaterally. What type of cartilage most likely gives the tensile strength of the intervertebral disc?",
    incorrectAnswers: ["Hyaline", "Elastic", "Epiphysial"],
    correctAnswer: "Fibrous",
    explanation:
      "The intervertebral disc consists of an outer anulus fibrosus and inner nucleus pulposus. The tensile strength comes from the anulus fibrosus, which limits rotation between vertebrae. Hyaline cartilage is found in the joint capsule and epiphysial plate. Elastic cartilage is found in, for example, the epiglottis.",
    image: "",
  },
  {
    question:
      "A 26-year-old competitive football player has been complaining of pain, weakness, numbness, and tingling for the past 2 months in his upper limb. Imaging studies reveal a cervical disc herniation compressing the nerve roots and a portion of the spinal cord. An ACDF surgery is performed. The intervertebral disc is examined upon removal and the nucleus and anulus and nucleus pulposus are severely damaged posterolaterally. What is the embryologic origin of the anulus fibrosus and nucleus pulposus, respectively?",
    incorrectAnswers: [
      "Neural crest cells and ectoderm",
      "Sclerotome and myotome",
      "Mesenchymal cells from sclerotome and neural crest cells",
    ],
    correctAnswer: "Notochord and neural crest cells",
    explanation:
      "Notochord remnant forms the gelatinous nucleus pulposus and the surrounding mesenchyme which is derived from the adjacent sclerotome forms the concentric fibrous anulus fibrosus. There is no direct neural crest or ectoderm involvement.",
    image: "",
  },
  {
    question:
      "A 55-year-old woman has suffered from a middle ear infection for the past month. She recently developed right-sided miosis, partial ptosis, anhydrosis, and redness of the conjunctiva. Biopsy examination of which of the following structures would show the cell bodies of neurons affected by this disease?",
    incorrectAnswers: [
      "Anterior gray horn of the spinal cord",
      "Lateral gray horn of the spinal cord",
      "Spinal ganglia",
    ],
    correctAnswer: "Lateral gray horn of the spinal cord",
    explanation:
      "Horner’s syndrome is characterized by, among other things, constricted pupils, sunken eyes, partially drooping eyelid (ptosis), and dryness of the skin on the face. It is caused by problems in sympathetic autonomic pathways such as damage to the lateral horn. Horner’s syndrome is a result of disruption to the sympathetic nerves whose cell bodies are located in the lateral gray horn of the spinal cord. The anterior gray horn has cell bodies for somatic efferent fibers whereas the posterior gray serves as a location for the axons of sensory fibers whose cell bodies are located in the spinal ganglion. There are no cell bodies located in the white matter of the spinal cord.",
    image: "",
  },
  {
    question:
      "A 62-year-old man is admitted to the emergency department after a severe car crash resulting in a whiplash injury. MRI examination reveals several hairline vertebral fractures in the cervical region impinging the dorsal primary rami of the same levels. Two months after the injury the patient recovered well, however, there is still some weakness in the function of a muscle. Which of the following muscles is most likely affected?",
    incorrectAnswers: ["Rhomboid major", "Levator scapulae", "Rhomboid minor"],
    correctAnswer: "Semispinalis capitis",
    explanation:
      "Semispinalis capitis is the only muscle among the choices that is supplied by the dorsal rami. All of the other muscles are supplied by the ventral rami. The rhomboid major and minor are innervated by the ventral primary rami of the dorsal scapular nerve. The levator scapulae is innervated by branches of C4 and C5, as well as from branches of dorsal scapular nerve. The latissimus dorsi is innervated by thoracodorsal nerve.",
    image: "",
  },
  {
    question:
      "A 22-year-old man has suffered from headaches and some muscle weakness to his upper muscles of the back for the last 6 months. An MRI shows a large tumor compressing the suboccipital and greater occipital nerves. Which of the following muscles will most likely still be functioning normally?",
    incorrectAnswers: [
      "Rectus capitis posterior major and minor",
      "Semispinalis capitis",
      "Obliquus capitis superior",
    ],
    correctAnswer: "Splenius capitis",
    explanation:
      "The splenius capitis is supplied by the dorsal rami. The obliquus capitis muscles are innervated by branches of the suboccipital nerve which also supplies the rectus capitus posterior major and minor. The greater occipital nerve supplies the semispinalis capitis.",
    image: "",
  },
  {
    question:
      "A 36-year-old man was found guilty of first-degree murder and sentenced to death by judicial hanging. The radiological image below shows the vertebra that is fractured as a result of the hanging. The mechanism of injury resulting in death is forcible hyperextension resulting in a fracture of which of the following structures?",
    incorrectAnswers: [
      "Odontoid process",
      "Transverse process",
      "Lateral mass",
    ],
    correctAnswer: "Pedicle (pars articularis)",
    explanation:
      "Following judicial hanging the pedicles of C2 are fractured and the cruciform ligament is torn which results in the upper spinomedullary junction being crushed by the odontoid process, killing the victim. The odontoid process is typically not fractured in such cases. The C1 vertebra is not necessarily involved so there may be no lateral mass involvement. Similarly, there is no transverse or spinous process involvement.",
    image: "",
  },
  {
    question:
      "A 72-year-old woman presented to her primary care physician after sustaining a fall in her bathroom. Her vital signs were normal and routine blood work was obtained for analysis. As part of her work up, a radiograph of her vertebral column was performed and revealed a wedge fracture at the fourth thoracic vertebra and thin cortical bone showing signs of osteoporotic changes. What will be the most likely type of abnormal spinal curvature in such a patient?",
    incorrectAnswers: ["Scoliosis", "Hyperlordosis", "Normal"],
    correctAnswer: "Hyperkyphosis",
    explanation:
      "The thoracic vertebrae contribute to the primary curvature and wedge fracture here from osteoporosis, infection or trauma leads to kyphosis. Hyperlordosis occurs when the above changes occur in the lumbar region. Scoliosis is an abnormal lateral curvature of the vertebrae, which also involves rotation of the vertebrae on one another.",
    image: "",
  },
  {
    question:
      "A 65-year-old woman who has been otherwise well presents to her physician with complaints of a group of painful blisters over her back in the distribution of the T9 dermatome. She noticed that a few days prior to the eruption of the blisters she experienced an intense burning sensation over her skin. She was diagnosed with herpes zoster (shingles). Where are the neural cell bodies located that are responsible for the pain sensation?",
    incorrectAnswers: [
      "Dorsal horn",
      "Lateral horn",
      "Sympathetic chain ganglia",
    ],
    correctAnswer: "Dorsal root ganglia",
    explanation:
      "Somatic afferent fibers convey localized pain, typically from the body wall and limbs and the cell bodies are found in the dorsal root ganglia. The dorsal horn is found at all spinal cord levels and is comprised of sensory nuclei that receive and process incoming somatosensory information. The lateral horn comprises autonomic neurons innervating visceral and pelvic organs. The sympathetic chain ganglia deliver the sympathetic information to the body. White rami communicans carry preganglionic sympathetic fibers and are called white because the fibers it contains are myelinated.",
    image: "",
  },
  {
    question:
      "A 53-year-old man was in a head-on collision resulting in the dens crushing the spinal cord. Which ligament was most likely torn for the dens to crush the spinal cord?",
    incorrectAnswers: [
      "Anterior and posterior longitudinal ligaments",
      "Interspinous ligament",
      " Supraspinous ligament",
    ],
    correctAnswer: "Transverse ligament of the atlas",
    explanation:
      "The transverse ligament of the atlas anchors the dens laterally to prevent posterior displacement of the dens, which has been torn in this injury. The anterior longitudinal ligament runs on the anterior aspect of the vertebrae and is not affected. The ligamentum flavum is found on the posterior aspect of the vertebral canal and does not contact the anteriorly placed dens. The supraspinous ligament is located along the spinous processes of the vertebrae. The nuchal ligament is a longitudinal extension of the supraspinous and interspinous ligaments above the level of C7.",
    image: "",
  },
  {
    question:
      "A 16-year-old girl is sent for a presports physical examination prior to the beginning of her school year. She has no medical complaints or any clinical past history. On physical examination, the physician notices one shoulder is higher than the other. The student is then asked to bend forward at the waist to touch her toes. This maneuver results in a posterior bulging of the ribs on the right side. Which one of the following is most likely diagnosis?",
    incorrectAnswers: ["Kyphosis", "Spondylosis", "Spondylolisthesis"],
    correctAnswer: "Scoliosis",
    explanation:
      "Scoliosis is defined as a lateral deviation of the spinal column to either side and is often associated with a “rib-hump” as seen on examination when bending forward to touch the toes. Hyperkyphosis is an increased primary curvature of the spinal column. This curvature is associated with thoracic and sacral regions and is most likely this patient’s clinical condition. Hyperlordosis is the increased secondary curvature affecting the cervical and lumbar regions.",
    image: "",
  },
  {
    question:
      "A 60-year-old man has been feeling sharp pains over his left lower chest and back for several days. A rash of red erupted vesicles is seen at the left border of the sternum just at the level of the xiphoid process. Antiviral treatment is given for herpes zoster. Which of the following locations will contain the neural cell bodies responsible for the painful sensation?",
    incorrectAnswers: [
      "Ventral horn of T6 spinal cord segment",
      "Lateral horn of T6 spinal cord segment",
      "Dorsal root ganglion of T4 spinal nerve",
    ],
    correctAnswer: "Dorsal root ganglion of T6 spinal nerve",
    explanation:
      "Cells from a specific somite develop into the dermis of the skin in a precise location, somatic sensory fibers originally associated with that somite enter the posterior region of the spinal nerve. The somatic sensory (afferent) fibers convey localized pain, typically from the body wall and limbs and the cell bodies are found in the dorsal root ganglia. The lateral horn comprises autonomic neurons innervating visceral and pelvic organs. The lateral horn comprises autonomic neurons innervating visceral and pelvic organs. The anterior horn contains motor neurons that supply muscles of the body wall and the limbs.",
    image: "",
  },
  {
    question:
      "A 70-year-old man with prostate cancer is experiencing sharp shooting pains radiating from his neck into the upper limb. An MRI of his spine demonstrates a small metastatic mass in the cervical region extending into the left intervertebral foramen between C6 and C7. The intervertebral discs appear normal. Which neural structure is most likely being compressed by the metastatic mass to account for the pain?",
    incorrectAnswers: [
      "C8 spinal nerve",
      "Dorsal horn of C6 spinal cord segment",
      "C6 spinal nerve",
    ],
    correctAnswer: "C7 spinal nerve",
    explanation:
      "In the cervical region, spinal nerves exit the vertebral column above their named vertebrae. From the thoracic region and below the spinal nerves exit the vertebral column below their named vertebrae.",
    image: "",
  },
  {
    question:
      "A 3-day-old girl develops a fever. She is irritable and not feeding. As part of the workup for fever of unknown origin, a lumbar puncture is performed. This puncture must be done below the spinal cord which usually ends at which vertebral level in a patient of this age?",
    incorrectAnswers: ["L1", "S1", "S3"],
    correctAnswer: "L3",
    explanation:
      "Lumbar puncture is generally performed at the level of L4, L5. The spinal cord ends at the level of L1/L2 in adults and at the level of L2/L3 in newborns.",
    image: "",
  },
  {
    question:
      "During a surgical procedure to debride an abscess involving the erector spinae muscle at vertebral level T8, the nerve branch supplying the skin and this muscle is unavoidably severed. What are the anatomical locations of the cell bodies of the nerve fibers normally found in this branch?",
    incorrectAnswers: [
      "Ventral horn and dorsal horn",
      "Ventral horn, dorsal horn, and lateral horn",
      "Ventral horn, dorsal horn, and dorsal root ganglion",
    ],
    correctAnswer:
      "Ventral horn, dorsal root ganglion, and sympathetic paravertebral ganglion",
    explanation:
      "The erector spinae muscle is supplied by the dorsal rami, which carry motor, sensory, and autonomic fibers. The cell bodies of the motor part are found in the anterior horn, while the cell bodies of the sensory fibers are found in the dorsal root ganglia. The cell bodies of the sympathetic fibers are found in the paravertebral ganglia.",
    image: "",
  },
  {
    question:
      "While waiting in his car at a stop sign, a 28-yearold man was rear-ended by a van, resulting in neck hyperextension. He was admitted to the emergency department and a whiplash injury was diagnosed. The next day his neck was stiff and painful. Which structure was most likely damaged to cause the pain?",
    incorrectAnswers: [
      "Posterior longitudinal ligament",
      "Ligamentum flavum",
      "Supraspinous ligament",
    ],
    correctAnswer: "Anterior longitudinal ligament",
    explanation:
      "The anterior longitudinal ligament is a strong fibrous band that covers and connects the anterolateral aspect of the vertebrae and intervertebral discs; it maintains stability and prevents hyperextension. It can be torn by cervical hyperextension. The ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The posterior longitudinal ligament runs within the vertebral canal supporting the posterior aspect of the vertebrae and prevents hyperflexion. The anulus fibrosus is the outer fibrous part of an intervertebral disc. The interspinous ligament connects adjacent spinous processes.",
    image: "",
  },
  {
    question:
      "A 38-year-old man who is a professional golfer complains of chronic lower back pain with radiating pain to the heel. The pain is so debilitating that he now has trouble ambulating. MRI of the lower back reveals severe narrowing of an intervertebral foramen (IVF), which has caused compression of the exiting nerve root. Surgery is required to correct the problem. During surgery the neurosurgeon carefully accesses the IVF using a lateral approach and shaves bone off the superior margin (roof) of the IVF to decompress the exiting nerve root. Which of the following vertebral bony features is the neurosurgeon most likely shaving off?",
    incorrectAnswers: [
      "Superior articular process",
      "Lamina",
      "Inferior articular process",
    ],
    correctAnswer: "Pedicle",
    explanation:
      "The boundaries of an intervertebral foramen (clockwise) include the following: the superior margin (roof) is formed by the inferior vertebral notch of the vertebra above, the anterior margin by the intervertebral disc between the vertebral bodies of the adjacent vertebrae, the inferior margin (floor) by the superior vertebral notch of the vertebra below, and the posterior margin by the zygapophysial (facet) joint of the adjacent vertebrae. Each pedicle contains superior and inferior vertebral notches.",
    image: "",
  },
  {
    question:
      "The following statement was found in the radiology report of a magnetic resonance imaging scan of the cervical spine: “An acute posterolateral herniation of the most superiorly located intervertebral disc is located within the corresponding intervertebral foramen and compressing the exiting nerve.” Which of the following nerves was the radiologist most likely referring to in the report?",
    incorrectAnswers: ["C1", "C2", "C4"],
    correctAnswer: "C3",
    explanation:
      "The most superiorly positioned intervertebral disc is between the C2 to C3 vertebrae. In the cervical region the spinal nerves exit superior to their corresponding vertebrae and take a somewhat horizontal path. The C3 nerve therefore exits through the C2 to C3 intervertebral foramen and would be affected by a posterolateral disc herniation at this level. The C1 nerve exists between the C1 vertebra and the occipital bone of the cranium and would not be affected. The C2 nerve passes superior to the second vertebra and would not be affected by a herniated disc between C2 and C3. C4 and C5 both exit superior to their corresponding vertebrae which is below the level of the herniated disc and will therefore not be affected.",
    image: "",
  },
  {
    question:
      "A 14-year-old girl accidentally flipped her bicycle off a curb, fell, and landed on her face. Although she was wearing a helmet, she landed in such a way that her neck was forced into hyperextension. Which of the following ligaments of the cervical spine was stretched to the greatest degree during her injury?",
    incorrectAnswers: [
      "Posterior longitudinal ligament",
      "Ligamentum nuchae",
      "Ligamenta flava",
    ],
    correctAnswer: "Anterior longitudinal ligament",
    explanation:
      "Ligaments serve to restrict movement. The anterior longitudinal ligament courses downward on the anterior surface of the vertebral bodies attaching to the intervertebral discs along its way. It is stretches from the base of the skull inferiorly to the anterior surface of the sacrum. The anterior longitudinal ligament is the most anteriorly positioned ligament of the vertebral column and limits its extension. The posterior longitudinal ligament travels on the posterior surface of the vertebral bodies attaching to the intervertebral discs along the way. This ligament serves to prevent excessive flexion of the vertebral column and extends from C2 to the sacrum. The supraspinous ligament attaches the tips of the spinous processes to each other from C7 to the sacrum. Superiorly the ligament broadens becoming more distinct and triangular and is termed the ligamentum nuchae. Ligamentum nuchae limits excessive flexion of the cervical spine and serves as an attachment for muscles. Ligamentum flava attach the internal surfaces of adjacent lamina to each other and prevent them from pulling apart during flexion.",
    image: "",
  },
  {
    question:
      "An orthopedic surgeon was teaching two residents during a workshop. For the purpose of learning, one resident acted as the patient and the other as the clinician. The surgeon asked the resident-clinician to use a marker and draw a horizontal line connecting the highest points of the iliac crests on the skin of the resident-patient. The surgeon then asked the resident clinician to palpate the midline area on the skin where the subarachnoid space terminates inferiorly. Which of the following most likely represents the area on the skin where the resident-physician palpated?",
    incorrectAnswers: [
      "Three spinous processes superior to the horizontal line",
      "Two spinous processes inferior to the horizontal line",
      "Two spinous processes superior to the horizontal line",
    ],
    correctAnswer: "Three spinous processes inferior to the horizontal line",
    explanation:
      "A horizontal line that connects the highest points of the iliac crests typically bisects the spinous process of the L4 vertebra or L4-L5 interspace (Tuffier’s line). The lumbar cistern, which represents the subarachnoid space, terminates at the level corresponding to the S2 spinous process. Three spinous processes inferiorly from the drawn line between the iliac crests would correspond to S2 spinous processes. Two and three spinous processes above the drawn line would be at the vertebral level L2 and L1, respectively, which would correspond to the approximate location where the spinal cord ends and therefore the pia mater.",
    image: "",
  },
  {
    question:
      "An MRI scan of the thoracic spine of a 68-year-old man with acute midback pain revealed a large tumor arising from the anterior median fissure of the spinal cord at the level of the T3 vertebra. The artery compressed by the tumor is most likely formed superiorly by direct branches from which of the following arteries?",
    incorrectAnswers: [
      "Ascending cervical",
      "Segmental medullary",
      "Segmental spinal",
    ],
    correctAnswer: "Vertebral",
    explanation:
      "The anterior spinal artery lies in the anterior median fissure and would likely be compressed by the tumor. This artery is formed superiorly by the union of two branches that directly arise from the vertebral arteries. Ascending cervical artery is not found within the vertebral canal and does not contribute to the blood supply of the spinal cord. The segmental spinal arteries follow the spinal nerves and provide the segmental medullary vessels which run along the dorsal and ventral roots to supply the lateral aspect of the spinal cord. There are two posterior spinal arteries, each are located in the posterolateral sulcus on the posterior aspect and have only small branches to the direct area.",
    image: "",
  },
  {
    question:
      "Radiographs of a 12-year-old girl with midback pain reveal a hemivertebra of the lower thoracic spine. Which additional finding would most likely be demonstrated on the radiographs?",
    incorrectAnswers: ["Osteoporosis", "Hyperlordosis", "Spondylolisthesis"],
    correctAnswer: "Scoliosis",
    explanation:
      "Hemivertebra is a condition where part of one or more vertebrae does not develop. This causes an abnormal lateral bending of the spinal column known as scoliosis, which may also include rotational deformities. Osteoporosis is a condition where bones become gradually less dense and may cause fractures even in minor traumas. Hyperlordosis is characterized by an increase in the anterior curvature of the lumbar or cervical spines. It is a result of an increase in thickness anterior, or a decrease in thickness posterior, on the vertebral bodies. Spondylolisthesis is an anterior displacement of a portion of the vertebra consequent to a fracture of the pars interarticularis (spondylolysis). Sacralization is when the fifth lumbar vertebra fuses to the sacrum.",
    image: "",
  },
  {
    question:
      "In a report of a radiograph of the cervical spine the radiologist wrote the following: “Severe narrowing of the C7-T1 intervertebral foramen (IVF) on the left.” Which nerve was most likely compressed as a result of this finding?",
    incorrectAnswers: ["C6", "C7", "T1"],
    correctAnswer: "C8",
    explanation:
      "There are seven (7) cervical vertebrae and eight (8) cervical spinal nerves. Nerves C1 to C7 exit superior to their corresponding vertebrae, whereas nerve C8 exits inferiorly to the C7 vertebra. The nerves of the thoracic and subsequent regions all exit inferior to their corresponding vertebrae.",
    image: "",
  },
  {
    question:
      "A mother brought her 15-month-old previously healthy child to the pediatrician and nervously told the physician that her child now had “a curvature in her low back.” The mother stated that this curvature was not present previously and that she noticed it when the child started standing and walking. The physician examined the child and then reassured the mother that the spinal curvature was normal. Which curvature did the mother most likely observe?",
    incorrectAnswers: [
      "Thoracic kyphosis",
      "Cervical lordosis",
      "Cervical kyphosis",
    ],
    correctAnswer: "Lumbar lordosis",
    explanation:
      "When a child is born only one curvature is present in the vertebral column, the primary curvature, which is concave anteriorly and termed kyphosis. During postnatal development two additional curvatures form, secondary curvatures, which are convex anteriorly and termed lordosis. The first forms in response to the child lifting its head and is in the cervical spine, the second forms once the child is sitting and completes once the child starts to walk. Thoracic kyphosis is the normal curvature with which we are born and cervical lordosis is associated with the neck and develops much earlier on. Cervical kyphosis and thoracic lordosis would both be considered abnormal curvatures in a child of this age.",
    image: "",
  },
  {
    question:
      "During a gross anatomy laboratory session, a professor demonstrates a large back muscle that inserts onto the floor of the intertubercular sulcus of the humerus. Which of the following structures is most likely the vertebral origin of the muscle that the professor is demonstrating?",
    incorrectAnswers: [
      "Spinous processes of C7 to T12",
      "Transverse processes of C1 to C4",
      "Spinous processes of T2 to T5",
    ],
    correctAnswer: "Spinous processes of T7 to L5",
    explanation:
      "The muscle that was demonstrated by the professor was the latissimus dorsi, which attaches to the spinous processes of vertebrae T7 to L5 and the floor of the intertubercular sulcus. None of the other options describes attachments sites for muscles attaching to the upper limb.",
    image: "",
  },
  {
    question:
      "A drug that preferentially destroys sclerotomes during embryogenesis would most likely result in underdevelopment of which of the following structures?",
    incorrectAnswers: [
      "Nucleus pulposus of intervertebral disc",
      "Dorsal root ganglion",
      "Spinal cord",
    ],
    correctAnswer: "Vertebral bodies",
    explanation:
      "Sclerotomes are the derivatives of somites that develop into bone and if eliminated will result in underdevelopment of the vertebrae. The nucleus pulposus is a remnant of the notochord. The dorsal root ganglion is formed by neural crest cells that migrate during development. The neural tube is the precursor for the spinal cord and the anulus fibrosus develops from the sclerotome component of the somite.",
    image: "",
  },
  {
    question:
      "Which of the following muscles is most likely located immediately deep to the semispinalis muscles, pass from a lateral point of origin in a superomedial direction to attach to spinous processes, and cross between 2 and 4 vertebrae?",
    incorrectAnswers: ["Rotatores", "Longissimus", "Iliocostalis"],
    correctAnswer: "Multifidus",
    explanation:
      "Multifidus is a deep muscle, which attaches from the transverse processes to the spinous processes usually crossing four to six segments. Longissimus, iliocostalis, and spinalis are not deep to semispinalis but are superficial. The rotators typically attach between the spinous processes or lamina of vertebrae and the transverse processes of the vertebra one or two segments below.",
    image: "",
  },
  {
    question:
      "A 32-year-old construction worker falls from a scaffold and is brought to the emergency department with severe lower back pain. Radiographs of the lumbar spine reveal bilateral pars interarticularis fractures of the L5 vertebra. Which of the following radiographic views would most likely reveal these fractures?",
    incorrectAnswers: ["Anteroposterior", "Lateral", "Posteroanterior"],
    correctAnswer: "Oblique",
    explanation:
      "The oblique radiographic view is ideal to show the pars interarticularis. In this projection a “Scottie dog” can be seen; the neck of the dog is the pars interarticularis, where the fracture may be seen. In the lateral view, the pedicles are superimposed on the pars interarticularis and so it cannot be easily seen. In the anteroposterior and posteroanterior views, the vertebral bodies make it difficult to see the pars interarticularis. The anteroposterior open mouth is a radiographic view of the upper cervical region.",
    image: "",
  },
  {
    question:
      "A radiology report of a cervical spine MRI scan contains the following statement: “A small 1-cm tumor is located within a muscle on the lateral border of the right suboccipital triangle.” The muscle to which the radiologist is most likely referring inserts on which of the following bony features?",
    incorrectAnswers: [
      " Lateral portion of occipital bone below inferior nuchal line",
      "Occipital bone between superior and inferior nuchal lines",
      " Medial portion of occipital bone below inferior nuchal line",
    ],
    correctAnswer: "Transverse process of atlas",
    explanation:
      "The muscle that forms the lateral border of the suboccipital triangle is the obliquus capitis superior. This muscle originates from the transverse process of the atlas and inserts untoon the occipital bone between superior and inferior nuchal lines. The muscle that inserts at the transverse process of the atlas is the obliquus capitis inferior which forms the inferior border of the suboccipital triangle. The rectus capitis posterior major inserts on the lateral portion of occipital bone below the inferior nuchal line and the rectus capitis posterior minor inserts on the medial portion of occipital bone below the inferior nuchal line. These muscles form the medial border of the triangle. The rectus capitis posterior minor originates from the posterior tubercle of the atlas.",
    image: "",
  },
  {
    question:
      "Radiographs of the lumbar spine of a 68-year-old woman with lower back pain were taken and in the radiology report the following was written: “The anteroposterior view demonstrates marked bilateral enlargement of the transverse processes of a single vertebra. The length and width of both transverse processes of this single vertebra are enlarged and the inferior aspects of these bony features appear to be articulating with the bone immediately below it, so much so that the single vertebra appears to have morphologic characteristics similar to the bone immediately below it.” The single vertebra referred to by the radiologist in the report is most likely which of the following?",
    incorrectAnswers: ["L1 vertebra", "L4 vertebra", "S2 vertebra"],
    correctAnswer: "L5 vertebra",
    explanation:
      "Sacralization is a process where the L5 vertebra completely or incompletely fuses with the sacrum. This vertebra adapts the characteristics of the sacrum with an increase in the length and width of both transverse processes.",
    image: "",
  },
  {
    question:
      "A 45-year-old man was injured in a motor vehicle crash and brought to the emergency department. Radiographs of the upper cervical spine revealed a type III dens fracture demonstrated by a horizontal radiolucent line on the superior half of the posterior aspect of the C2 vertebral body. Which of the following ligaments most likely has direct attachment to the bony area where the fracture was located?",
    incorrectAnswers: [
      "Apical ligament of dens",
      "Superior longitudinal band of cruciform ligament",
      "Transverse ligament of atlas",
    ],
    correctAnswer: "Inferior longitudinal band of cruciform ligament",
    explanation:
      "The inferior longitudinal band of the cruciform ligament runs inferiorly from the transverse ligament of the atlas and attaches to the posterosuperior aspect of the vertebral body of the axis (C2). The transverse ligament of the atlas spans the distance between the medial aspects of the lateral masses, holding the dens in place. The superior longitudinal band of the cruciform ligament runs from the transverse cervical ligament superiorly to attach to the occiput. The apical ligament runs from the tip of the dens to the anterior margin of the foramen magnum. The ligamentum flavum is located in the vertebral canal and connects the laminae of adjacent vertebrae.",
    image: "",
  },
  {
    question:
      "A 35-year-old man underwent a laminectomy of the T8 to T9 vertebrae. During the surgery, the neurosurgeon observed that the posterior roots were compressed at that level due to a space-occupying lesion. Which of the following arteries was most likely directly compressed by the lesion?",
    incorrectAnswers: [
      "Segmental spinal",
      "Segmental medullary",
      "Anterior spinal",
    ],
    correctAnswer: "Radicular",
    explanation:
      "The radicular arteries are branches of the segmental spinal arteries. They occur at every vertebral level and follow and provide blood supply to the anterior and posterior roots. A space occupying lesion that compresses the posterior roots will also compress the arteries that supply them. The segmental spinal arteries are feeder arteries that reinforce the blood supply to the spinal cord and arise from the vertebral and deep cervical arteries in the neck, the posterior intercostals in the thorax, and the lumbar arteries in the abdomen. The anterior and posterior spinal arteries arise from the vertebral artery and supply the spinal cord directly. The segmental medullary arteries are also branches of the segmental spinal arteries that anastomose directly with the anterior and posterior spinal arteries.",
    image: "",
  },
  {
    question:
      "An 8-year-old girl was brought to a pediatrician for a routine physical examination. The figure associated with this question is a photograph of the child (Fig. 1-4). Which of the following best describes the embryologic basis for this child’s condition?",
    incorrectAnswers: [
      "Underdevelopment of the secondary ossification center in the vertebral body",
      "Underdevelopment of the primary ossification center in the vertebral body",
      "Underdevelopment of the primary ossification center in the spinous process",
    ],
    correctAnswer:
      "Underdevelopment of the primary ossification center in the vertebral arch",
    explanation:
      "The patient in the figure above has spina bifida occulta. This is a developmental condition resulting from incomplete ossification and failure of fusion of the vertebral arches. Three primary ossification centers should be present in the fetus by the eighth week: one in the centrum (to form the vertebral body) and one in each half of the vertebral arch. Five secondary ossification centers develop in the vertebrae after puberty: one at the tip of the spinous processes, the tips of the transverse processes, and on the inferior and superior rims of the vertebral body.",
    image: "back-question4.jpg",
  },
  {
    question:
      "The following statement is written in the radiology report of an MRI scan of the cervical spine: “A large osteophyte is emanating from the posterolateral area of the vertebral body of the vertebra immediately above the C3 nerve root and is severely compressing the C3 nerve root.” The osteophyte is most likely emanating from which of the following vertebrae?",
    incorrectAnswers: ["C3", "C4", "C5"],
    correctAnswer: "C2",
    explanation:
      "In the cervical region, the spinal nerve exits in the intervertebral foramen above the correspondingly named vertebrae. Therefore, the C3 spinal nerve exits above the C3 vertebrae and lies directly below the C2 vertebrae.",
    image: "",
  },
  {
    question:
      "A 38-year-old woman has been in labor for 14 hours and has agreed to have an epidural anesthetic injection for pain control. Which of the following structures is most likely to be the last penetrated by the needle before it reaches the epidural space?",
    incorrectAnswers: [
      "Posterior longitudinal ligament",
      "Anterior longitudinal ligament",
      "Interspinous ligament",
    ],
    correctAnswer: "Ligamenta flava",
    explanation:
      "The ligamentum flavum lies within the vertebral canal on the anterior aspect of the vertebral arches connecting the lamina of adjacent vertebrae. Puncturing this ligament allows the needle to enter into the epidural/extradural space for the injection of the anesthetic. Although the posterior longitudinal ligament lies within the spinal canal, it will not be punctured during the procedure. The supraspinous ligament connects and passes along the tips of the vertebral spinous processes. The interspinous ligament lies between adjacent spinous processes. The anterior longitudinal ligament connects the anterior aspect of the vertebral body. These ligaments do not lie within the vertebral canal.",
    image: "",
  },
  {
    question:
      "A 48-year-old man underwent suboccipital surgery whereby the surgeon made a midline incision through the ligamentum nuchae that began 1-cm inferior to the external occipital protuberance and ended at the level of the C2 vertebra. The surgeon then placed self-retaining retractors into the incision to forcibly separate the tissue so that an adequate surgical field existed for the duration of the surgery which lasted for 3 hours. During recovery, the patient complained of severe occipital pain and was diagnosed with postsurgical occipital neuralgia. Which of the following nerves was most likely directly stretched by the retractors during the surgery and resulted in this patient’s post-surgical pain?",
    incorrectAnswers: ["Suboccipital", "Greater occipital", "Lesser occipital"],
    correctAnswer: "Third occipital",
    explanation:
      "The third occipital nerve is the medial branch of the dorsal ramus of C3. It pierces the trapezius muscle medially in the neck below the external occipital protuberance and supplies the skin of the nuchal region. The greater occipital and lesser occipital nerves lie lateral to the midline and are less likely to be affected in this patient. The suboccipital nerve lies within and supplies the muscles of the suboccipital triangle. The spinal accessory nerve supplies the trapezius and sternocleidomastoid muscles and has no cutaneous supply in the neck (GAS Fig. 2-46).",
    image: "",
  },
  {
    question:
      "A 7-year-old boy is undergoing a surgery to remove a tumor from his spinal cord. During surgery of the spinal cord, which of the following structures is used as a landmark to identify anterior rootlets from posterior rootlets?",
    incorrectAnswers: [
      "Filum terminale",
      "Conus medullaris",
      "Posterior longitudinal ligament",
    ],
    correctAnswer: "Denticulate ligament",
    explanation:
      "The denticulate ligament is a sheet of pia mater running longitudinally on either side of the spinal cord, connecting it to the dura mater. Medially, the denticulate ligament lies between the origin of the anterior and posterior rootlets serving as a landmark to differentiate between them. The conus medullaris is the terminal end of the spinal cord and the filum terminale is an extension of the pia mater that connects the conus medullaris to the dural sac. The posterior longitudinal ligament lies posterior to the vertebral bodies, while the ligamentum flavum connects the lamina of adjacent vertebrae.",
    image: "",
  },
  {
    question:
      "A 45-year-old male driver involved in a motor vehicle crash was taken to the emergency department and MRI revealed a complete tear of the right alar ligament. None of the other ligaments of the upper cervical spine were torn. Upon physical examination, which of the following cervical spine movements will be most likely increased as a result of the tear?",
    incorrectAnswers: ["Abduction", "Flexion", "Extension"],
    correctAnswer: "Rotation",
    explanation:
      "The alar ligament connects the dens to the medial surface of the occipital condyles. It limits excessive rotation of the atlanto-axial joints. Flexion and extension of the upper cervical spine occur at the atlanto-occipital joints and the zygapophysial joints. Lateral flexion (abduction) as a combination movement at the uncovertebral joints (of Luschka). These are not limited by the alar ligament (GAS Fig. 2-20B).",
    image: "",
  },
  {
    question:
      "A 25-year-old male bodybuilder complains of difficulty moving his right shoulder for the past 2 weeks. Upon physical examination, the muscles of the left upper back and shoulder were notably larger than the right side. There was a notable decrease of muscle power on his right sided upper back and shoulder muscles when he was asked to pull the shoulder blades toward the middle of his back against resistance. Nerve conduction examination confirmed neurapraxia of the nerves supplying the rhomboid major and minor muscles. In which of the following functions will the bodybuilder most likely also demonstrate weakness?",
    incorrectAnswers: [
      "Abduction of the right arm above the horizontal level and protraction of the scapula",
      "Medial rotation and adduction of the right arm",
      " Extensions, adduction, and medial rotation of the right arm",
    ],
    correctAnswer:
      "Elevation of the scapula and inferior rotation of the right shoulder",
    explanation:
      "The rhomboid major and minor are supplied by the dorsal scapular nerve which also supplies the levator scapulae. The function of levator scapulae is elevation and inferior rotation of the scapulae. Abduction of the arm above 90 degrees and protraction of the scapula are possible due to the action of serratus anterior, which is supplied by the long thoracic nerve. Medial rotation and adduction of the arm is performed mainly by the pectoralis major and latissimus dorsi, which also extends the arm. These are supplied by the medial and lateral pectoral nerves and thoracodorsal, respectively. Abduction of the arm through 0 to 15 degrees is produced by supraspinatus, which is supplied by the suprascapular nerve.",
    image: "",
  },
  {
    question:
      "A 38-year-old woman with a history of carcinoma of the left breast and who had had a lumpectomy 2 years previously, presents to her surgeon with complaints of a hard mass in the left breast. On ultrasound examination, a 3 cm × 4 cm hard mass is discovered in the upper outer quadrant extending in the axillary tail (of Spence). A radical mastectomy is performed successfully and the tumor is removed. Three weeks postoperatively the patient complains of difficulty raising her left arm above her head. Which of the following is most likely expected to be found during physical examination?",
    incorrectAnswers: [
      "Protraction of the both scapulae",
      "Weak retraction of the scapula",
      "Weak adduction of the humerus",
    ],
    correctAnswer:
      "Protrusion of the medial border of the left scapula when hands are pushed against the wall",
    explanation:
      'During surgery the long thoracic nerve was damaged which supplies the serratus anterior muscle. During abduction of the arm, serratus anterior elevates and laterally rotates the scapulae to allow for full abduction, such as when the ability to lift the hand above the head. The serratus anterior is responsible for protracting the scapula and therefore holding it against the thoracic wall. If the nerve supply to this muscle is damaged this will not be achieved when the patient pushes her hands against the wall, resulting in what is called a “winged scapula."',
    image: "",
  },
  {
    question:
      "A 2-month-old infant is admitted to the emergency department with symptoms of meningitis. A lumbar puncture is performed in order to examine the CSF to confirm the diagnosis. The needle is inserted into the lumbar cistern (dural sac). At which vertebral level will the conus medullaris typically be found in this patient?",
    incorrectAnswers: ["L4", "L5", "S1"],
    correctAnswer: "L3",
    explanation:
      "During development the spinal cord fills the vertebral canal entirely. Due to differential growth of the vertebral column and the spinal cord, the cord ends at L3 in an infant. It gradually changes its position to the level of L1/L2, which is the adult level. S2 is the level at which the dural sac normally terminates.",
    image: "",
  },
  {
    question:
      "Examination of a 3-day-old male infant reveals a large cystic of approximately 15 cm × 10 cm in the sacrococcygeal region. The mass was removed and histopathological studies identified tissue from all three embryological germ layers. Which of the following embryonic tissues is most likely responsible for this condition?",
    incorrectAnswers: [
      "Chorionic villi",
      "Neural folds",
      "Intraembryonic coelom",
    ],
    correctAnswer: "Remnants of the primitive streak",
    explanation:
      "The primitive streak aids in the development of the mesoderm resulting in the trilaminar disc which contains all three germ layers. Chorionic villi do not contribute to the formation of the embryo itself but the membranes of the embryo and therefore does not contain cells that would give rise to the germ layers. Neural folds are formed from ectoderm and gives rise to neural crest cells. The intraembryonic coelom forms the embryonic cavities and is therefore a space.",
    image: "",
  },
  {
    question:
      "A 53-year-old man is admitted to the emergency department with severe back pain. MRI examination reveals fracture of the pars interarticularis and normal alignment of the body of the L5 vertebra upon the sacrum. What is the most likely diagnosis?",
    incorrectAnswers: [
      "Spondylolisthesis",
      "Herniation of intervertebral disc",
      "Lordosis",
    ],
    correctAnswer: "Spondylolysis",
    explanation:
      "A fracture of the pars interarticularis is termed spondylolysis. Spondylolisthesis is when the anterior portion of the vertebra is displaced after fracture of the pars interarticularis. A herniated disc is when the nucleus pulposus protrudes through the anulus fibrosus. Lordosis is the normal curvature of the cervical and lumbar spine. Scoliosis is an abnormal lateral curvature of the spine which usually also has a degree of rotation of the vertebrae.",
    image: "",
  },
  {
    question:
      "A 22-year-old pregnant woman underwent epidural anesthesia in anticipation of labor. After delivery she developed back pain and right lower extremity weakness. Imaging revealed a hematoma in the epidural space resulting in compression of the nerve that exits at the level of L2 to L3. Which of the following vessels is most likely responsible for the hematoma?",
    incorrectAnswers: [
      ". Great radicular artery (of Adamkiewicz)",
      "Anterior spinal artery",
      "Posterior spinal artery",
    ],
    correctAnswer: "Internal vertebral plexus",
    explanation:
      "An epidural anesthetic procedure is performed in the epidural space which contains fat and the internal vertebral (Batson’s) plexus. A hematoma in this region would cause compression on the spinal nerves and possibly the cord resulting in severe pain and deficits. The great anterior medullary artery of Adamkiewicz is the largest of the spinal segmental arteries and is usually located at around T10, much higher than L2 to L3. The anterior and posterior spinal arteries are located in the anterior median and posterolateral fissures of the spinal cord, respectively, and are not located in the epidural space. The external vertebral plexus is located external to the vertebral canal and a hematoma of this plexus will not produce the symptoms of this patient.",
    image: "",
  },
  {
    question:
      "Idling at a stoplight in his vintage car without headrests, a 71-year-old-man’s car is struck from behind by a truck. The man is brought to the emergency department suffering from a severe hyperextension neck injury due to the crash. The T2-weighted MRI shows a rupture of the anterior anulus fibrosus of the C4 to C5 intervertebral disc and a prevertebral hematoma which compromised his airway and required intubation. Which of the following ligaments is most likely disrupted in this injury?",
    incorrectAnswers: [
      "Posterior longitudinal ligament",
      "Ligamentum flavum",
      "Interspinous ligament",
    ],
    correctAnswer: "Anterior longitudinal ligament",
    explanation:
      "Ligaments serve to restrict movement. The anterior longitudinal ligament courses downward on the anterior surface of the vertebral bodies attaching to the intervertebral discs along its way. It is stretches from the base of the skull inferiorly to the anterior surface of the sacrum. The anterior longitudinal ligament is the most anteriorly positioned ligament of the vertebral column and limits its extension. The posterior longitudinal ligament travels on the posterior surface of the vertebral bodies attaching to the intervertebral discs along the way. This ligament serves to prevent excessive flexion of the vertebral column and extends from C2 to the sacrum. The interspinous ligaments attach adjacent spinous processes to each other from C2 to the sacrum, it restricts the degree of separation of the spinous processes during flexion. Ligamentum flava attaches the internal surfaces of adjacent laminae to each other and prevents them from pulling apart during flexion. Intertransverse ligaments connect adjacent transverse processes and prevent excessive rotation.",
    image: "",
  },
  {
    question:
      "An anesthesiologist administers epidural anesthetic immediately lateral to the spinous processes of vertebrae L3 and L4 of a pregnant woman in labor. During this procedure, what would be the last ligament perforated by the needle in order to access the epidural space?",
    incorrectAnswers: [
      "Anterior longitudinal ligament",
      "Posterior longitudinal ligament",
      "Interspinous ligament",
    ],
    correctAnswer: "Ligamentum flavum",
    explanation:
      "The order of structures pierced during an epidural procedure is skin, subcutaneous tissue, muscle, supraspinous ligament, interspinous ligament, and ligamentum flavum (there is often a midline gap in the ligamentum flavum). The anterior longitudinal ligament is anterior to the vertebral body and cannot be reached by this approach. The posterior longitudinal ligament is posterior to the vertebral body and can also not be reached by this procedure. The intertransverse ligaments are too lateral and may not be perforated by this technique.",
    image: "",
  },
  {
    question:
      "A 38-year-old man presents to the emergency department with complaints of lower back pain during the past 5 days. Examination revealed tenderness of the spine over the L5 vertebra with an obvious “step-off” defect at that level. There was some weakness of the limbs. An MRI examination revealed an anterior displacement of the L5 vertebral body and narrowing of the vertebral canal. This pathology will most likely be associated with which of the following?",
    incorrectAnswers: [
      "Compression of the spinal cord and bilateral lower limb weakness",
      "Compression of the spinal cord and unilateral lower limb weakness",
      "Compression of the spinal nerve roots and L5 with unilateral lower limb weakness",
    ],
    correctAnswer:
      "Compression of the cauda equina and bilateral lower limb weakness",
    explanation:
      "The spinal cord ends at the level between the L1/L2 vertebra but the spinal nerves continue as the caudal equina below this level. As a result, narrowing of the canal at the level of L5 will impact on all of the nerves resulting in bilateral lower limb weakness.",
    image: "",
  },
  {
    question:
      "A 62-year-old man visits his physician for his annual medical check-up. During physical examination it is noted that the patient has noticeable pulsations on palpation of the lower abdomen. Ultrasound examination reveals a large abdominal aortic aneurysm. The patient is operated on and during the repair his aorta is temporarily clamped. Which of the following arterial anastomoses will most likely prevent ischemia of the spinal cord if the blood pressure drops dangerously low?",
    incorrectAnswers: [
      "Segmental arteries from the vertebral, intercostals, superficial epigastric, lumbar, and medial sacral arteries",
      "Anterior and posterior spinal arteries",
      "Segmental arteries from vertebral and intercostals",
    ],
    correctAnswer:
      "Segmental arteries from the vertebral, intercostal, lumbar, spinal anterior, and posterior and lateral sacral arteries",
    explanation:
      "The anterior and posterior spinal arteries do not provide sufficient blood supply to the spinal cord below cervical levels and will receive additional supply segmentally along its course from multiple sources. The largest of these vessels are usually termed the artery of Adamkiewicz and arises at the lower thoracic or upper lumbar region.",
    image: "",
  },
  {
    question:
      "A 22-year-old woman is diagnosed with the presence of a chondroma at her index finger. Which of the following structures are sharing the same embryologic with the tumor?",
    incorrectAnswers: [
      "Nucleus pulposus",
      "Dentate ligament",
      "Denticulate ligament",
    ],
    correctAnswer: "Apical ligament of the atlas",
    explanation:
      "A chondroma is typically a benign tumor of cartilaginous origin, which is encapsulated. It has the same origin as the apical ligament of the atlas which is considered as a rudimentary intervertebral fibrocartilage derived from the notochord.",
    image: "",
  },
  {
    question:
      "A 40-year-old woman survived a car crash in which her neck was hyperextended when her vehicle was struck from behind. At the emergency department a plain radiograph of her cervical spine is shown below (Fig. 1-5). Which of the following was also most likely injured?",
    incorrectAnswers: [
      "Posterior tubercle of the atlas",
      "Atlanto-occipital joint",
      "Inferior articular process of the axis",
    ],
    correctAnswer: "Anterior arch of the atlas",
    explanation:
      "The odontoid process, or the dens, projects superiorly from the body of the axis and articulates with the anterior arch of the atlas. The posterior and anterior tubercles of the atlas are bony eminences on the outer surface. The inferior articular facet is where the axis joins to the C3 vertebra. A, Lateral radiograph shows that this patient has only mild prevertebral swelling, which is centered at the odontoid (see arrowheads in Fig. 1-5, p. 20). The odontoid is displaced posteriorly relative to the C2 body (arrow) and is angled posteriorly. These findings indicate a fracture. B, The fracture is extremely subtle on the openmouth odontoid radiograph (arrows). C, Sagittal CT reconstruction shows the fracture.",
    image: "back-question5.jpg",
  },
  {
    question:
      "A 32-year-old man was lifting heavy weights during an intense training session. He felt severe pain radiating to the posterior aspect of his right thigh and leg. He was taken to hospital where an MRI scan (see Fig. 1-3) revealed a ruptured intervertebral disc. Which of the following nerves was most likely affected?",
    incorrectAnswers: ["L2", "L3", "L4"],
    correctAnswer: "L5",
    explanation:
      "The herniated disc is between vertebrae L4 and L5. In the lumbar region spinal nerves exit below their corresponding vertebrae in which case the L4 nerve would pass superior to the herniation. As the L5 nerve crosses the intervertebral disc to exit below the fifth lumbar vertebra it will be compressed by the herniation. Compression of nerves L2, L3, and S1 would produce symptoms different to those seen in this patient.",
    image: "back-question3.jpg",
  },
];

export default data;
