const data = [
  {
    question:
      "A 19-year-old woman was thrown while riding a bicycle. She attempted to break her fall with an outstretched hand and suffered a fracture. In the emergency room, an examination reveals an inability to extend the hand at the wrist. What might have been the site of a fracture that caused the muscle weakness?",
    incorrectAnswers: ["Clavicle", "Hook of the hamate", "Scaphoid"],
    correctAnswer: "Midshaft of the humerus",
    explanation:
      "The radial nerve is commonly lesioned as a result of a spiral fracture of the midshaft of the humerus.",
    image: "",
  },

  {
    question:
      "A 19-year-old woman was thrown while riding a bicycle. She attempted to break her fall with an outstretched hand and suffered a fracture. In the emergency room, an examination reveals an inability to extend the hand at the wrist. What blood vessel might have also been lacerated at the fracture site?",
    incorrectAnswers: [
      "Subscapular artery",
      "Posterior circumflex humeral artery",
      "Radial artery",
    ],
    correctAnswer: "Profunda brachial artery",
    explanation:
      "The deep brachial artery courses with the radial nerve around the humerus.",
    image: "",
  },
  {
    question:
      "A 35-year-old woman comes to the clinic complaining of pain radiating down the medial aspect of the left forearm and into medial aspect of the left hand. She states that her left hand is weaker that her right hand. You note that her thenar and hypothenar eminences are smaller in the left hand compared with the right, her radial pulse is diminished on the left. Compressio of what neural structures might account for the patient's symptoms?",
    incorrectAnswers: [
      "Upper trunk of the brachial plexus",
      "Median nerve",
      "Ulnar nerve",
    ],
    correctAnswer: "Lower trunk of the brachial plexus",
    explanation:
      "Klumpke's paralysis results from compression of the C8 and T1 ventral rami in the inferior trunk of the plexus at the level of the first rib.",
    image: "",
  },
  {
    question:
      "Your patient suffers from compression of a nerve. The patient has weakness of pronation and flexion at the index and middle fingers at the distal interphalangeal joints and an inability to form the letter 0 by touching the tip of the dumb to the tip of the index finger. What nerve may have been compressed?",
    incorrectAnswers: [
      "Recurrent branch of the median nerve",
      "Deep branch of the median nerve",
      "Deep branch of the ulnar nerve",
    ],
    correctAnswer: "Anterior interosseous branch of the median nerve",
    explanation:
      "A lesion of the anterior interosseous branch of the median nerve would account for the symptoms.",
    image: "",
  },
  {
    question:
      "The ulnar nerve has been compressed in the canal of Guyon. What might you expect to observe in the patient as a result of the compression?",
    incorrectAnswers: [
      "Radial deviation of the hand at the wrist",
      "An ape hand",
      "Weakness in flexion at the elbow",
    ],
    correctAnswer: "Inability to adduct the thumb",
    explanation:
      "The patient is unable to adduct the thumb because of weakness of the adductor pollicis.",
    image: "",
  },
  {
    question:
      "Your patient has been thrown from a motorcycle and suffers trauma to the upper limb. In the hospital , the left arm of the patient hangs at his side upper limb becasue of a loss of abduction and a weakness of flexion and lateral rotation at the glenohumeral joint. What else might you expect to observe in the patient?",
    incorrectAnswers: [
      "Atrophy of the hypothenar eminence",
      "Weakness in the ability to protract the scapula",
      "Altered sensation in skin in the medial aspect of the forearm",
    ],
    correctAnswer: "Weakness in supination",
    explanation:
      "Weakness in supination may result from compression of the C5 and C6 fibers in the upper trunk. These fibers innervate the biceps brachii by way of the musculocutaneous nerve.",
    image: "",
  },
  {
    question:
      "A patient suffers a fracture of the supracondylar part of the humerus, which compresses a nerve and an accompanying artery. What might you observe in the patient?",
    incorrectAnswers: [
      "Clawing of the ring and little fingers",
      "Altered sensation in skin over the anatomic snuffbox",
      "Inability to extend the thumb",
    ],
    correctAnswer: "A hand of benediction",
    explanation:
      'Patients with a lesion of the median nerve in a supracondylar fracture may have a "hand of benediction," in which the index and middle fingers remain extended when the patient attempts to flex those digits while making a fist.',
    image: "",
  },
  {
    question:
      "Your patient suffers from a progressive compression of the axillary artery posterior to the pectoralis minor. Collateral circulation develops, bypassing the blockage by way of anastomosis between the suprascapular artery and what other artery?",
    incorrectAnswers: [
      "Dorsal scapular artery",
      "Profunda brachial artery",
      "Thoracoacromial artery",
    ],
    correctAnswer: "Subscapular artery",
    explanation:
      "Anastomoses develop superior and posterior to the scapula between the thoracodorsal and circumflex scapular branches of the subscapular aterty and the suprascapular, dorsal scapular, and posterior interostal arteries.",
    image: "",
  },
  {
    question:
      "Your patient has radial deviation of the hand at the wrist when he attempts to flex the wrist and altered sensation in the skin covering the hypothenar eminence. What might acount for the symptoms?",
    incorrectAnswers: [
      "Fracture of surgical neck of the humerus",
      "Fracture of the distal end of the radius",
      "Anterior and inferior dislocation of the head of the humerus",
    ],
    correctAnswer: "Fracture of the medial epicondyle of the humerus",
    explanation:
      "Fracture of the medial epicondyle of the humerus may result in a lesion to the ulnar nerve, causing the symptoms in this patient.",
    image: "",
  },
  {
    question:
      'Your patient has radial deviation of the hand at the wrist when he attempts to flex the wrist and altered sensation in the skin covering the hypothenar eminence. The patient develops a significant "clawing" of the fifth digit secondary to the nerve injury. What muscle has been weakened that causes the clawing?',
    incorrectAnswers: [
      "Dorsal interosseous",
      "Extensor digitorum",
      "Flexor digiti minimi",
    ],
    correctAnswer: "Lumbrical",
    explanation:
      "Weakness of the lumbricals innervated by the ulnar nerve results in the clawing of the digits. A dorsal interosseous muscle does not act on the fifth digit.",
  },
  {
    question:
      "A patient has suffered a fracture of the surgical neck of the humerus. What muscle might be weakened?",
    incorrectAnswers: ["Supraspinatus", "Biceps brachii", "Teres major"],
    correctAnswer: "Deltoid",
    explanation: "The deltoid is innervated by the axillary nerve.",
    image: "",
  },
  {
    question:
      "A man who works as a cartoonist for a living begins to develop pain and paresthesia in his right hand at night. The altered sensation is most evident on the palmar aspects of the index and middle fingers. What else might you expect to see in the patient?",
    incorrectAnswers: [
      "Weakness in ability to extend the thumb",
      "Altered sensation in skin over the anatomic snuffbox",
      "Radial deviation of the hand at the wrist during wrist flexion",
    ],
    correctAnswer: "Atrophy of the thenar eminence",
    explanation:
      "The patient has carpel tunnel syndrome. Choices 'Weakness in the ability to extend the thumb' and 'Altered sensation in skin over teh anatomic snuffbox' result from radial nerve lesions. Choice 'Inability to spread and oppose the fingers' results fromm an ulnar nerve lesion. Choice 'Radial deviation of the hand at the wrist during wrist flexion' results from a median nerve lesion at the wrist.",
    image: "",
  },
];

export default data;
