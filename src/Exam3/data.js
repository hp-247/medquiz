const data = [
  {
    question:
      "The neuron that receives stimuli from the environment and transmits it to CNS is known as",
    incorrectAnswers: ["motor neurons", "interneurons", "neuron stimulus"],
    correctAnswer: "sensory neuron",
  },

  {
    question:
      "At the end of nerve fiber, the chemical which is secreted in response to the arrival of the nerve impulse, named as",
    incorrectAnswers: ["glands", "hormones", "enzymes"],
    correctAnswer: "neurotransmitter",
  },
  {
    question:
      "The synapse between the cell body and axon of the neuron is called",
    incorrectAnswers: ["Axodendritic synapse", "Axoaxonix synapse", "synapse"],
    correctAnswer: "Axosomatic synapse",
  },
  {
    question: "Perikaryon composed of",
    incorrectAnswers: ["nucleus only", "cytoplasm only", "golgi apparatus"],
    correctAnswer: "nucleus and cytoplasm",
  },
  {
    question: "The synapse between two axons is named as",
    incorrectAnswers: ["Axosomatic synapse", "Axodendritic synapse", "synapse"],
    correctAnswer: "Axoaxonix synapse",
  },
  {
    question: "The innermost layer of the meninges is named as",
    incorrectAnswers: ["Arachnoi mater", "covering", "none of above"],
    correctAnswer: "pia",
  },
  {
    question: "Ruffini's corpuscles are",
    incorrectAnswers: [
      "encapsulated nerve endings only",
      "fusiform structures only",
      "non active",
    ],
    correctAnswer: "encapsulated nerve endings and fusiform structures",
  },
  {
    question: "The tough and thick outermost layer of the meninges, named as",
    incorrectAnswers: ["tunica intima", "tunica media", "intima"],
    correctAnswer: "dura mater",
  },
  {
    question:
      "The capability of responding to chemical and physical stimuli by the generation of electric impulse is called.",
    incorrectAnswers: ["conductivity", "reactivity", "activity"],
    correctAnswer: "excitability",
  },
  {
    question: "The axoplasm of the axon, containing",
    incorrectAnswers: [
      "mitochondria",
      "microtubules",
      "Neurofliment and smooth endoplasmic reticulum",
    ],
    correctAnswer: "all of above",
  },
  {
    question:
      "The innermost layer of the dura mater, surrounding the brain, known as",
    incorrectAnswers: [
      "spinal dura mater",
      "posterior dura mater",
      "dura mater",
    ],
    correctAnswer: "menigeal dura mater",
  },
  {
    question: "The diameter of the presynaptic knob, approximately",
    incorrectAnswers: ["20-30 nm", "10-40 nm", "40-80 nm"],
    correctAnswer: "40-60 nm",
  },
  {
    question:
      "The neurons that transfer impulses from the central nervous system to the effector is called",
    incorrectAnswers: ["sensory neurons", "interneurons", "neuron stimulus"],
    correctAnswer: "motor neurons",
  },
  {
    question: "The nerve cell body is also called",
    incorrectAnswers: ["nerves", "nerves network", "nerves cells"],
    correctAnswer: "Perikaryon",
  },
  {
    question: "In the nerve fibers, the axons are covered by",
    incorrectAnswers: ["myelin sheath only", "neurilemma only", "meninges"],
    correctAnswer: "myelin sheath and neurilemma",
  },
  {
    question: "The neurons, be composed of",
    incorrectAnswers: ["cell body", "axons", "dendrites"],
    correctAnswer: "all of above",
  },
  {
    question: "The length of the Pacinian corpuscles is nearly",
    incorrectAnswers: ["1-3 mm", "1-5 mm", "1-6 mm"],
    correctAnswer: "1-2 mm",
  },
  {
    question:
      "The two types of the tissues that are especially present in the central nervous system, included",
    incorrectAnswers: ["grey matter only", "white matter only", "soft tissues"],
    correctAnswer: "grey and white matter",
  },
  {
    question:
      "The proportion of lipids and protein in the myelin is approximately",
    incorrectAnswers: [
      "20% and 80% respectively",
      "30% and 40% respectively",
      "100% and 90% respectively",
    ],
    correctAnswer: "80% and 20% respectively",
  },
  {
    question:
      "The subsidiary nerve centers that send and receive nerve fibers is formed by",
    incorrectAnswers: ["glia", "ganglia", "mesoglea"],
    correctAnswer: "neuroglia",
  },
  {
    question:
      "The synapse that forms between the axon of one neuron and dendrites of another neuron, referred to as",
    incorrectAnswers: ["Axosomatic synapse", "Axoaxonix synapse", "synapse"],
    correctAnswer: "Axodendritic synapse",
  },
  {
    question: "The cytoplasm of an axon is term as",
    incorrectAnswers: ["cytoplasm", "neoplasm", "Axonoplasm"],
    correctAnswer: "axoplasm",
  },
  {
    question: "The myelin sheath is composed of lipoprotein named as",
    incorrectAnswers: [
      "chylomicrons",
      "high-density lipoproteins",
      "low-density lipoproteins",
    ],
    correctAnswer: "myelin",
  },
  {
    question: "The dura mater is composed of",
    incorrectAnswers: [
      "collagen fibers only",
      "elastic fibers only",
      "filaments",
    ],
    correctAnswer: "collagen and elastic fibers",
  },
  {
    question: "The supporting cells of the central nervous system are",
    incorrectAnswers: ["ganglia", "mesoglea", "glial cells"],
    correctAnswer: "neuroglia",
  },
  {
    question: "The color of white matter is due to presences of",
    incorrectAnswers: ["nerves network", "soft tissues", "neurons"],
    correctAnswer: "myelinated nerve fibers",
  },
  {
    question:
      "The cluster of the nerve cell bodies outside the central system, regarded as",
    incorrectAnswers: ["neuroglia", "glia", "glial cells"],
    correctAnswer: "ganglia",
  },
  {
    question: "The afferent extensions of the neurons are named as",
    incorrectAnswers: ["axons", "cell body", "Perikaryon"],
    correctAnswer: "dendrites",
  },
  {
    question: "The diameter of the Pacinian corpuscles is about",
    incorrectAnswers: ["0.1-1 mm", "0.3-4 mm", "0.5-7 mm"],
    correctAnswer: "0.5-1 mm",
  },
  {
    question: "Another name for the neurilemma is",
    incorrectAnswers: ["mesoglea", "ganglion", "schwann cells"],
    correctAnswer: "sheath of schwann",
  },
  {
    question:
      "The intercellular gap between the presynaptic knob of one neuron and the postsynaptic membrane of second neuron, named as",
    incorrectAnswers: ["gap", "junction", "cleft"],
    correctAnswer: "synapse",
  },
  {
    question:
      "The neurons that form the integrating and communicating circuits between sensory and motor neurons are called",
    incorrectAnswers: ["junctions", "synapses", "dendrites"],
    correctAnswer: "interneurons",
  },
  {
    question: "The length of the Ruffini's corpuscles is",
    incorrectAnswers: ["2-3 mm", "3-6 mm", "3-8 mm"],
    correctAnswer: "1-2 mm",
  },
  {
    question:
      "During electric synapses, the movement of ions from neuron to neuron depends upon",
    incorrectAnswers: ["axons", "dendrites", "ganglia"],
    correctAnswer: "gap junctions",
  },
  {
    question: "The grey matter composed of",
    incorrectAnswers: ["nerves", "nerves network", "neuron"],
    correctAnswer: "nerve cell bodies",
  },
  {
    question: "At the synapse, the impulse transmission occurs",
    incorrectAnswers: ["electrically only", "chemically only", "automatically"],
    correctAnswer: "electrially and chemically",
  },
  {
    question: "The neuroglia are commonly named as",
    incorrectAnswers: ["nerves", "pia", "mesoglea"],
    correctAnswer: "glia",
  },
  {
    question: "The diameter of the Ruffini's corpuscles is",
    incorrectAnswers: ["0.1 mm", "0.3 mm", "0.4 mm"],
    correctAnswer: "0.2 mm",
  },
  {
    question: "The presynaptic knob contains a large number of",
    incorrectAnswers: ["nuclei", "vacuole", "granules"],
    correctAnswer: "mitochondria",
  },
];

export default data;
