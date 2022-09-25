const data = [
  {
    id: "1",
    question:
      "A researcher has discovered a temperature-sensitive cell line that displays an overall reduction in protein synthesis. Analysis of the mRNA produced at the non- permissive temperature indicated that a key structural feature, normally present on mRNA, was missing. Such a structure is most likely which one of the following?",
    incorrectAnswers: [
      "Intron–exon secondary structure",
      "Pseudouridine",
      "Thymine",
      "The poly-A tail",
    ],
    correctAnswer: "The 5′ cap",
    explanation:
      "The 5' cap of mRNA is recognized by initiation factors (specifically eIF4E) to allow ribosome assembly on the mRNA. The absence of a cap would not allow a translation initiation complex to form.",
    image: "",
  },
  {
    id: "2",
    question:
      "Under conditions of active exercise, protein synthesis is reduced in the muscle. Under these conditions, which aspect of translation is inhibited?",
    incorrectAnswers: [
      "Inability to elongate during translation",
      "Inability to synthesize mRNA",
      "Inability to terminate translation",
      "Inability to produce rRNA",
    ],
    correctAnswer: "Inability to initiate translation",
    explanation:
      "Inability to initiate translation. As muscle works, and AMP levels rise, the muscle wants to preserve its ATP for muscle contraction, and not to use it for new protein synthesis. The increase in AMP levels leads to the activation of AMP-activated protein kinase, which will phosphorylate and inactivate eIF4E (eukary- otic initiation factor 4E), which is a necessary compo- nent in recognizing the 5′ cap structure of the mRNA to allow ribosome assembly on the mRNA (see the fi gure in the answer to the previous question). The activa- tion of the AMP-activated protein kinase does not alter elongation or the termination of translation. It does not block overall transcription, either of mRNA or rRNA (although it may lead to an inhibition of ribosomal bio- genesis as well as the transcription of certain specifi c genes).",
    image: "",
  },
  {
    id: "3",
    question:
      "A young child exhibits the following symptoms: Coarse facial features, congenital hip dislocation, inguinal hernias, and severe developmental delay. These symptoms are fully evident at the child’s age of 1. Cellular analysis demonstrated the presence of inclusion bodies within the cytoplasm of liver cells. The inclusion bodies are the result of which of the following?",
    incorrectAnswers: [
      "Enhanced lysosomal enzyme activity",
      "Enhanced peroxisomal enzyme activity",
      "Reduced peroxisomal enzyme activity",
      "Enhanced protein secretion",
    ],
    correctAnswer: "Reduced lysosomal enzyme activity",
    explanation:
      "Reduced lysosomal enzyme activity. The child has I-cell disease (mucolipidosis type II), which is a defi ciency in protein sorting, particularly of sending lyso- somal enzymes to the lysosome (a lysosomal storage dis- ease). The I of I-cell disease stands for inclusion bodies. If the child develops these clinical and radiologic symptoms later in life, one would consider the diagnosis of Hurler syndrome (mucopolysaccharidosis). Lysosomal enzymes are tagged with mannose-6-phosphate (M6P) during post- translational modifi cation. Enzymes containing M6P then bind to a M6P receptor, which transports the enzymes to the lysosomes. Lacking such a signal, patients with I-cell disease secrete their lysosomal contents into the plasma and interstitial fl uids. This leads to lysosomal dysfunction and cellular and tissue destruction. The enzyme that is defective is shown on page 41. This disease is not peroxi- somal, nor does it enhance protein secretion.",
    image: "",
  },
  {
    id: "4",
    question:
      "A eukaryotic cell line contains an aberrant, temper- ature-sensitive ribonuclease that specifically cleaves the large rRNA molecule into many pieces, destroy- ing its secondary structure and its ability to bind to ribosomal proteins. This cell line, at the nonpermis- sive temperature, has greatly reduced the rates of protein synthesis. This rate-limiting step is which of the following?",
    incorrectAnswers: [
      "Initiation",
      "Termination",
      "Elongation",
      "tRNA activation and charging",
    ],
    correctAnswer: "Peptide bond formation",
    explanation:
      "Peptide bond formation. It is the large ribosomal RNA that catalyzes peptide bond formation, using peptides and amino acids in the “A” and “P” sites on the ribosome. Destroying the secondary structure of this rRNA via the aberrant ribonuclease will limit the ability of the ribosome to create peptide bonds. The large, ribosomal RNA molecule is not essential for the initiation, termination, elongation (moving the ribo- some along the mRNA after peptide bond formation has occurred), or tRNA activation and charging.",
    image: "",
  },
  {
    id: "5",
    question:
      "A cell contains a mutated alanine-tRNAala synthetase that recognizes glycine instead of alanine as its substrate. The anticodon of the tRNA recognized by this enzyme is IGC. When the cell translates the following portion of an mRNA molecule (presented in frame beginning with the 5′ nucleotide), what will be the amino acid sequence of the protein produced from this stretch of mRNA? -AUGGCGGACUCGGCUAUG-",
    incorrectAnswers: [
      "M-G-S-D-G-M",
      "M-A-D-S-A-M",
      "M-A-S-D-A-M",
      "M-G-D-S-A-M",
    ],
    correctAnswer: "M-A-D-S-G-M",
    explanation:
      "The variant cell line will mischarge a tRNAala with glycine, but only the tRNAala that has, as its anticodon, IGC. IGC will recognize three codons: GCA, GCU, and GCC. Thus, when these codons are present in the mRNA, glycine will replace alanine. Thus, reading the RNA from the 5′ end (as translation reads the mRNA 5′ to 3′) provided in a series of 3, we have AUG (which is methionine), GCG (which is alanine—the anti- codon for this codon is CGC; IGC will not recognize the GCG codon), GAC (which is aspartic acid), UCG (which is serine), GCU (which, in this cell line, is glycine and not alanine, since the IGC anticodon will recognize the GCU codon), and AUG (methionine). The answer choices uti- lize the single-letter codes to represent the amino acids.",
    image: "",
  },
  {
    id: "6",
    question:
      "A necessary cofactor for allowing these symptoms to appear in the child is which of the following?",
    incorrectAnswers: ["ATP", "FAD", "Acetyl-CoA", "UDP-glucose"],
    correctAnswer: "NAD+",
    explanation:
      "NAD+. Diphtheria toxin, after entering cells, is cleaved by a protease to form an active enzyme, which, utilizing NAD+ as a substrate, ADP-ribosylates eEF2, thereby inhibiting protein translation. ATP, FAD, acetyl-CoA, and UDP-glucose are not required for the ADP-ribosylation reaction. The fi nal modifi ed product, an arginine with an ADP-ribose attached, is shown below.",
    image: "",
  },
  {
    id: "7",
    question:
      "The molecular mechanism responsible for these physi- cal observations in the boy is which of the following?",
    incorrectAnswers: [
      "Inhibition of protein kinase A",
      "Glycosylation of a G protein",
      "Activation of an elongation factor for translation",
      "Activation of protein kinase A",
    ],
    correctAnswer: "Inhibition of an elongation factor for translation",
    explanation:
      "Inhibition of an elongation factor for translation. The child has diphtheria, which is caused by a bacterium (Corynebacterium diphtheriae), which produces a toxin that leads to the inhibition of eEF2 (eukaryotic elongation factor 2), which is required for the movement of tRNA from the “A” site to the “P” site. The toxin catalyzes the ADP-ribosy- lation (using NAD+ as a substrate) of eEF2 to bring about this inhibition. If one treats such a child with nicotinamide (the reaction product resulting from the loss of ADP-ribose from NAD+ ), one can reverse and block the ADP-ribosylation reaction catalyzed by the toxin. The toxin has no effect on protein kinase A, nor does it glycosylate a G protein. Diphtheria causes sore throat, fever, swollen nodes (bull neck), weak- ness, hoarseness, painful swallowing, and chills. The hallmark of the disease is a thick, gray membrane cov- ering the pharynx.",
    image: "",
  },
  {
    id: "8",
    question:
      "A 2-year-old girl exhibits a very high fever of sudden onset and complains of a stiff neck. Physical exam reveals a positive Brudzinski and Kernig sign and petechiae on the extremities. The pediatrician, in addition to rushing the child to the hospital, prescribes a drug that blocks prokaryotic peptide bond formation, even though it can have serious side effects. That drug is which of the following?",
    incorrectAnswers: ["Rifampin", "Rapamycin", "Cycloheximide", "Puromycin"],
    correctAnswer: "Chloramphenicol",
    explanation:
      "Chloramphenicol. Chloramphenicol blocks peptide bond formation in prokaryotic ribo- somes (with no effect on eukaryotic ribosomes). This concept is the basis of certain antibiotic therapy; the differences in ribosome structure between eukaryotic and prokaryotic cells allow selective drug inhibition. The child has meningococcal meningitis, and chloram- phenicol, despite its side effects of inhibiting mito- chondrial protein synthesis, is a very effective agent for this disorder. Cycloheximide has the same effect as chloramphenicol in eukaryotic cells but has no effect on prokaryotes. Rapamycin leads to the blockage of trans- lation initiation, not peptide bond formation. Puromy- cin is a chain terminator, stopping protein synthesis but not directly inhibiting peptide bond formation. Rifampin inhibits prokaryotic mRNA synthesis and has no direct effect on translation. Rifampin might be used as prophylaxis for household contacts of meningococ- cal meningitis but is not as effective a treatment for the actual disease.",
    image: "RNA-78.png",
  },
  {
    id: "9",
    question:
      "A Russian youngster was prescribed erythromycin for a bacterial infection, but he developed hearing loss due to use of this drug. This occurred due to which of the following?",
    incorrectAnswers: [
      "Inhibition of mitochondrial RNA synthesis",
      "Inhibition of mitochondrial DNA replication",
      "Weakening and tearing of the eardrum",
      "Increased neuronal signaling in the inner ear",
    ],
    correctAnswer: "Inhibition of mitochondrial protein synthesis",
    explanation:
      "Inhibition of mitochondrial protein synthesis. Ototoxicity (hearing loss) occurs with a subset of antibiotics because, in addition to affecting prokaryotic ribosomes, the drugs also have an effect on mitochondrial ribosomes. Mitochondria con- tain their own DNA, RNA polymerase, and protein synthesizing apparatus (recall that it is thought that during evolution, bacteria invaded eukaryotic cells and formed a symbiotic relationship, with the bac- teria eventually becoming the mitochondria), which is very similar to the prokaryotic apparatus. Thus, certain drugs will affect mitochondrial protein syn- thesis, and the effects seem to be greatest on those organs that have high energy needs (such as neuronal tissue). Erythromycin does not affect mitochondrial RNA synthesis or DNA replication. It does not affect the ear drum, nor does it increase neuronal signaling in the inner ear.",
    image: "",
  },
  {
    id: "10",
    question:
      "While investigating structure–function studies in a membrane transport protein, a researcher discovered a single nucleotide mutation that led to the loss of a key α-helical segment of the protein. The mutation that led to this fi nding is most likely which of the following?",
    incorrectAnswers: ["GUU to GCU", "UUG to CUG", "AUC to GUC", "GUG to UUG"],
    correctAnswer: "CUC to CCC",
    explanation:
      "CUC to CCC. The most effi cient way to destroy an α-helix is to insert a proline into the middle of it, as proline cannot form an α-helix due to the restriction of rotation of certain bond angles. Choice (A) has a leucine going to proline; all of the other substitutions (val to ala, leu to leu, ile to val, and val to leu) would still allow α-helix formation after the substitution took effect as these are conservative sub- stitutions.",
    image: "",
  },
  {
    id: "11",
    question:
      "An adult male is diagnosed with a typical pneumonia. His physician prescribes clarithromycin, which is spe- cifi c for prokaryotic cells. Which of the following best explains the mechanism of prokaryotic specifi city?",
    incorrectAnswers: [
      "The drug binds to the 50S ribosomal subunit of bacteria and inhibits f-met-tRNAi binding",
      "The drug binds to the 30S ribosomal subunit of bacteria and blocks initiation of protein synthesis",
      "The drug binds to the 30S ribosomal subunit of bacteria and blocks peptide bond formation",
      "The drug binds to both ribosomal subunits and prevents bacterial ribosome assembly",
    ],
    correctAnswer:
      "The drug binds to the 50S ribosomal subunit of bacteria and blocks translocation",
    explanation:
      "The drug binds to the 50S ribosomal subunit of bacteria and blocks translocation. Clarithro- mycin (an antibiotic in the macrolide family with erythromycin and azithromycin) is specifi c for the large ribosomal subunit of prokaryotes (it will not bind to eukaryotic ribosomes). When this drug binds to the large ribosomal subunit, translocation of the ribosome (movement along the mRNA) is blocked, which blocks overall protein synthesis. tRNA binding is not affected by clarithromycin, nor is there a blockage of the forma- tion of an initiation complex. It is the large subunit (50S) that contains the peptidyl transferase activity, which is also not blocked by this agent.",
    image: "",
  },
  {
    id: "12",
    question:
      "A patient underwent a kidney transplant and among the many drugs she received poststransplant was rapamycin. Rapamycin aids in preventing an immune response to the transplant via which of the following mechanisms?",
    incorrectAnswers: [
      "The drug inhibits ribosome subunit assembly",
      "The drug inhibits cap formation",
      "The drug specifi cally inhibits RNA polymerase III",
      "The drug inhibits antibody-specifi c transcription factors from binding to DNA",
    ],
    correctAnswer: "The drug inhibits initiation of protein synthesis",
    explanation:
      "The drug inhibits initiation of protein synthesis. Rapamycin inhibits the mammalian tar- get of rapamycin (mTOR), which is a protein kinase. One of the many targets of mTOR is eIF4E binding protein (eIF4E is a required initiation factor for pro- tein synthesis). When not phosphorylated, the binding protein binds tightly to eIF4E and prevents it from par- ticipating in the formation of the translational initiation complex, thereby blocking protein synthesis. When phosphorylated at multiple locations by mTOR, the binding protein falls off the initiation factor and allows translational initiation complexes to form. In the pres- ence of rapamycin, mTOR has no kinase activity, and the binding protein remains bound to eIF4E, thereby inhibiting protein synthesis. The drug does not affect ribosome assembly. The drug also has no effect on tran- scription or RNA processing.",
    image: "",
  },
  {
    id: "13",
    question:
      "You see a very sick patient (vomiting and bloody diarrhea, dehydration, and mental status changes) in the emergency department, who, you are told, was an amateur chef trying out a new creation in which he wanted to experiment with the extracts of castor beans. This person’s symptoms are all due to which of the following?",
    incorrectAnswers: [
      "Inhibition of RNA polymerase I",
      "Inhibition of RNA polymerase II",
      "Ribosomal disassembly due to covalent modifi cation",
      "Inhibition of amino-acyl tRNA synthetases",
    ],
    correctAnswer: "Ribosomal inactivation by covalent modifi cation",
    explanation:
      "Ribosomal inactivation by covalent modifi cation. Ricin, a toxin found in castor oil beans, specifi cally cleaves an N-glycosidic bond in the 28S rRNA of the large ribosomal subunit (an adenine base is removed, but the phosphodiester backbone remains intact). The sequence of the rRNA that is altered is required for binding elongation factors during protein synthesis. As ribosomes become inactivated by ricin, protein synthesis in cells stops, leading to cell death. Ricin does not inhibit RNA polymerases or amino- acyl tRNA synthetases. Ricin does not initially affect ribosome assembly. The LD50 for ricin is 30 mg/kg body weight.",
    image: "",
  },
  {
    id: "14",
    question:
      "A 2-year-old boy with an ear infection was given amoxi- cillin, but it did not clear up the problem. Switching to azithromycin successfully eradicated the infection, and subsequent laboratory work indicated that the offending bacterium was resistant to amoxicillin. Bacte- rial resistance to antibiotics is often due to which of the following?",
    incorrectAnswers: [
      "Altered ribosome structure",
      "Altered cell wall",
      "Inability to transport the drug into the bacteria",
      "A mutation in RNA polymerase",
    ],
    correctAnswer: "Enzymatic destruction of the antibiotic",
    explanation:
      "The answer is C: Enzymatic destruction of the antibi- otic. Bacteria that develop resistance to antibiotics usually do so by containing an enzymatic activity that destroys the structure of the antibiotic so that it cannot effectively inhibit its target within the cell. Amoxicillin works by destroying the bacterial cell wall, by being incorporated into the growing cell wall, which leads to a cessation of cell wall synthesis. It does not alter ribo- some structure. Mutations in RNA polymerase will not lead to resistance to drugs. Azithromycin was effective because the bacteria did not produce an enzyme that destroyed the drug.",
    image: "",
  },
  {
    id: "15",
    question:
      "A young boy exhibits myopathy, encephalopathy, lactic acidosis, and strokelike episodes. All of his siblings have some aspects of the same symptoms. The boy most likely has which type of mutation?",
    incorrectAnswers: [
      "A defect in mRNA synthesis",
      "A defect in mitochondrial rRNA production",
      "A defect in cytoplasmic tRNA",
      "A defect in cytoplasmic rRNA",
    ],
    correctAnswer: "A defect in mitochondrial tRNA production",
    explanation:
      "A defect in mitochondrial tRNA production. The boy has MELAS (Mitochondrial myopathy, encephalopathy, lactic acidosis, and stroke), a neurodegenerative disorder due to a mutation in mitochondrial tRNA, leading to defective protein synthesis within the mitochondria. The component most often affected is complex 1 of the respiratory chain. The severity of the disease will be dependent on the extent of heteroplasmy (what percentage of the mitochondria codes for the altered tRNA). The more mutant mitochondria present, the more severe the symptoms.",
    image: "",
  },
  {
    id: "16",
    question:
      "Given the serine codons shown below, what is the minimum number of tRNAs which is required to bind to them? UCU, UCC, UCA, UCG, AGU, AGC",
    incorrectAnswers: ["1", "2", "4", "5"],
    correctAnswer: "3",
    explanation:
      "A tRNA with the anticodon IGA will bind to UCU, UCC, and UCA (with wobbling at the third position of the codon). A tRNA with the anti- codon CGA will bind to UCG. And the third tRNA, with an anticodon of ICU, can base-pair with both AGU and AGC. Recall that I will base-pair with A, C, or U in the wobble position.",
    image: "",
  },
  {
    id: "17",
    question:
      "A young boy has edema, protruding abdomen, and very thin arms and legs. The edema has its origins which of the following?",
    incorrectAnswers: [
      "Lack of muscle protein synthesis",
      "Lack of intestinal protein synthesis",
      "Excessive water production due to protein hydrolysis",
      "Excessive water production due to triglyceride hydrolysis",
    ],
    correctAnswer: "Lack of liver protein synthesis",
    explanation:
      "Lack of liver protein synthesis. The boy is displaying kwashiorkor due to a calorie- defi cient diet low in protein. Since the boy is tak- ing in less protein than he needs, he is becoming defi cient in the essential amino acids. Thus, to syn- thesize new proteins, existing proteins need to be degraded such that a pool of essential amino acids is available for the new protein synthesis. This protein degradation occurs in the muscles, leaving the boy with very thin arms and legs. The liver, despite the increased muscle protein turnover, is still defi cient in essential amino acids and reduces its level of protein synthesis, including those proteins normally found in the blood, such as serum albumin. The reduced pro- tein content in the blood reduces the osmotic strength of the blood such that when the blood fl ows through the body, the osmotic strength of the tissues is higher, and fl uid leaves the blood and enters the interstitial space around the tissues. This leads to the protruding abdomen seen in these starving individuals. The prob- lem is not related to reduced muscle protein synthe- sis (which does occur, but does not affect the osmotic strength of the blood), or reduced intestinal protein synthesis, for the same reason as the muscle. Both protein hydrolysis and triglyceride hydrolysis require water; water is not produced when these molecules are broken down.",
    image: "",
  },
  {
    id: "18",
    question:
      "A patient taking lovastatin and Zetia® for elevated cho- lesterol was found to produce lower levels of glycosy- lated proteins. This is most likely due to the unintended consequence of blocking the synthesis of which of the following compounds?",
    incorrectAnswers: ["Coenzyme Q", "Cholesterol", "HMG-CoA", "Ketone bodies"],
    correctAnswer: "Dolichol",
    explanation:
      "Dolichol. The biosynthesis of both coenzyme Q and dolichol is dependent on isoprene units, specifi cally isopentenylpyrophosphate, which is derived from mevalonic acid in the de novo pathway of cholesterol biosynthesis. Lovastatin inhibits HMG- CoA reductase, which reduces mevalonate production. This can have, then, the unintended consequence of a reduction in dolichol production, thereby leading to underglycosylation of processed proteins. A reduction of coenzyme Q synthesis can lead to muscle weakness (a side effect of the statin class of drugs), but coenzyme Q is not involved in protein glycosylation. Cholesterol, HMG-CoA, and ketone bodies are not required for pro- tein glycosylation as well. The structure of dolichol, in which the isoprene building block is highlighted, is shown below.",
    image: "",
  },
  {
    id: "19",
    question:
      "A patient with type 2 diabetes has been prescribed recombinant insulin to help control his disease. Three months after starting this regime, a blood test is done, which indicates that the patient is still producing endo- genous insulin, in addition to the recombinant insulin the patient is taking. The blood test has, at its basis, which of the following?",
    incorrectAnswers: [
      "Posttranslational glycosylation",
      "Posttranslational modifi cation of amino acid side chains",
      "Posttranslational acylation",
      "Posttranslational quaternary structure formation",
    ],
    correctAnswer: "Posttranslational proteolytic processing",
    explanation:
      "Posttranslational proteolytic processing. As shown on page 44, insulin is synthesized as a prepro- insulin. The pre sequence is the signal sequence, which is cleaved when the protein enters the endoplasmic reticulum. Proinsulin contains the C-peptide, which is removed to form mature insulin, and disulfi de bonds that hold the A and B chains together. The modifi ca- tion is thus proteolytic processing, and not glycosyla- tion, modifi cation of side chains, acylation, or altered quaternary structure. The test is a C-peptide level. If a person is producing insulin, a C-peptide level can show this. This is also a way to see if a person has type 1 dia- betes mellitus (no C-peptide, since they cannot produce endogenous insulin) or type 2 (normal or high C-peptide levels, since this disease is a reduced response to nor- mally produced insulin).",
    image: "",
  },
  {
    id: "20",
    question:
      "A hospital laboratory made an error and mistyped a patient’s blood as AB, instead of B. When given type A blood, the patient had an adverse reaction. The major difference between individuals with AB and B type blood is due to which of the following?",
    incorrectAnswers: [
      "The presence of a specifi c acyl transferase",
      "The presence of a specifi c peptidase",
      "The lack of dolichol pyrophosphate",
      "Increased levels of dolichol pyrophosphate",
    ],
    correctAnswer: "The presence of a specifi c glycosyl transferase",
    explanation:
      "The presence of a specifi c glycosyl trans- ferase. As shown below, type A and B blood differ by the presence of one sugar on glycosylated proteins. Individuals with type A blood add one type of sugar (N-acetylgalactosamine), while individuals with type B blood add a different sugar (galactose) due to differences in the specifi city of a glycosyl transferase that recognizes the base carbohydrate structure. The differences in blood group antigens are not due to acylation or proteolytic processing on the cell surface. As these carbohydrates are O-linked, dolichol (which is required for N-linked glycosylation) is not required for their synthesis.",
    image: "",
  },
];

export default data;
