const data = [
  {
    id: "1",
    question:
      "A clinic was studying patients with xeroderma pigmen- tosum and ran experiments to determine how many different complementation groups were represented in their patient sample. Fibroblast cell lines were created from five different patients and fused with each other (all possible fusions were examined, as shown in Table 3-1). The resultant heterodikaryons were then examined for their resistance to UV light, as indicated below (a “+” indicates resistance to UV damage, while a “−” indicates sensitivity to UV damage). The number of complementation groups represented by these patients is which of the following?",
    incorrectAnswers: ["1", "2", "4", "5"],
    correctAnswer: "3",
    explanation:
      "Cell lines complement each other if their mutations are in different genes. For the pur- pose of this question, let us assume there are three genes involved, lettered x, y, and z. Cell line 1 is deficient in gene x, but since it can complement every other cell line, cell lines 2 through 5 cannot be deficient in gene x. When fused, the other cell lines (2 through 5) produce normal x protein, which complements the deficiency in cell line 1. Similarly, cell line 1 produces normal copies of the genes that are deficient in cell lines 2 through 5. This indicates that there are at least two complementa- tion groups available. Cell line 2 complements cell lines 1, 4, and 5, but not 3. Thus, the mutation in cell line 2 (call it gene y) is also present in cell line 3 (since the two cell lines cannot complement each other), but not in cell lines 4 and 5. Thus, at this point, cell line 1 is deficient in gene x, and cell lines 2 and 3 are deficient in gene y. Cell line 4 complements cell lines 1, 2, and 3, but not 5. Thus, cell lines 4 and 5 have similar mutations, but in a gene distinct from genes x and y. Thus, cell lines 4 and 5 can be deficient in gene z. The cell lines are thus 1 (x−), 2 and 3 (y−) and 4 and 5 (z−). So, as an example, when cell line 1 is fused with cell line 2, cell line 1 is x− y+, and cell line 2 is x+ y−, so the fused cell (x− y+/x+/y−) produces both normal x and y.",
    image: "DNA-1.png",
  },
  {
    id: "2",
    question:
      "Analysis of a cell line that rapidly transforms into a tumor cell line demonstrated an increased mutation rate within the cell. Further analysis indicated that there was a muta- tion in the DNA polymerase enzyme that synthesizes the leading strand. This inactivating mutation is likely to be in which of the following activities of this DNA poly- merase?",
    incorrectAnswers: [
      "5′–3′ exonuclease activity",
      "Phosphodiester bond making capability",
      "Uracil-DNA glycosylase activity",
      "Ligase activity",
    ],
    correctAnswer: "3′–5′ exonuclease activity",
    explanation:
      "3'–5' exonuclease activity. merase rarely makes mistakes when inserting bases into a newly synthesized strand and base-pairing with the template strand. However, mistakes do occur at a fre- quency of about one in a million bases synthesized, but DNA polymerase has an error checking capability which enables it to remove the mispaired base before proceed- ing with the next base insertion. This is due to the 3′–5′ exonuclease activity of DNA polymerase by which, prior to adding the next nucleotide to the growing DNA chain, the base put into place in the previous step is examined for correct base-pairing properties. If it is incorrect, the enzyme goes “backwards” and removes the incorrect base, then replaces it with the correct base. The 5′–3′ exonuclease activity of DNA polymerase moves ahead, and is used to remove RNA primers from newly synthe- sized DNA. If the enzyme could no longer synthesize phosphodiester bonds (the primary responsibility of the enzyme), DNA synthesis would halt. A loss of uracil-DNA glycosylase activity is not a property of DNA polymerase, but that of a separate enzyme system which repairs spon- taneous deamination of cytosine bases to uracil within DNA strands. If these were left intact, mutations would increase in DNA. A loss of ligase activity would lead to unstable DNA, as the Okazaki fragments would not be able to be sealed together to form one continuous piece of DNA, and this would most likely lead to cell death, not an increased mutation rate.",
    image: "",
  },
  {
    id: "3",
    question:
      "A 13-year-old exhibited developmental delay, learning disabilities, mood swings, and at times, autistic behav- ior when he was younger. His current physical exam shows a long face, large ears, and large, fleshy hands. His fingers exhibit hyperextensible joints. Examination of fibroblasts cultured from the boy showed abnormal DNA damage, but only in the absence of folic acid. This disorder has, at the genetic level, which one of the following?",
    incorrectAnswers: [
      "A single missense mutation",
      "A large deletion",
      "A nonsense mutation",
      "Gene inactivation via methylation",
    ],
    correctAnswer: "An extended triplet nucleotide repeat",
    explanation:
      "An extended triplet nucleotide repeat. The boy is displaying the symptoms of fragile X syn- drome. Fragile X contains a triplet nucleotide repeat (CGG) on the X chromosome in the 5′ untranslated region of the FMR1 gene. The triplet repeat expan- sion leads to no expression of the FMR1 gene, which produces a protein required for brain development. Its function appears to be that of an mRNA shuttle, moving mRNA from the nucleus to appropriate sites in the cytoplasm for translation to occur. Depending on the level of expression of FMR1 (which is depen- dent on the number of repeats), the symptoms can vary from mild to severe. Less than 1% of cases of fragile X are due to missense or nonsense mutations; the vast majority are due to the expansion of the triplet repeat at the 5' end of the gene. Gene inactivation by methyla- tion, or deletion, are not causes of fragile X syndrome. The syndrome was called fragile X because the X chro- mosome that carries the repeat expansion is subject to DNA strand break under certain conditions (such as lack of folic acid), which does not occur with normal X chromosomes. The area containing the repeat alters the staining pattern of the X chromosome, allowing this to be seen in a karyotype (as seen below). Fragile X is the most common inheritable cause of mental retardation. Males are more severely affected. In early childhood, developmental delay, speech and language problems, and autisticlike behavior are noticeable. After puberty, the classic physical signs develop (large testicles, long-thin face, mental retardation, large ears, and prominent jaw).",
    image: "",
  },
  {
    id: "4",
    question:
      "An 8-month-old child is brought to the pediatrician’s office due to excessive sensitivity to the sun. Skin areas exposed to the sun for only a brief period of time were reddened with scaling. Irregular dark spots have also appeared. The pediatrician suspects a genetic disorder in which of the following processes?",
    incorrectAnswers: [
      "DNA replication",
      "Transcription",
      "Base excision repair",
      "Translation",
    ],
    correctAnswer: "Nucleotide excision repair",
    explanation:
      "Nucleotide excision repair. The child is suffering from a form of xeroderma pigmentosum, a disorder in which thymine dimers (created by exposure to UV light) cannot be appropriately repaired in DNA. Nucleotide excision repair enzymes recognize bulky dis- tortions in the helix, whereas base excision repair recog- nizes only specific lesions of a small, single, damaged base. The mechanism whereby thymine dimers are removed from DNA is nucleotide excision repair in which entire nucleotides are removed from the damaged DNA. In base excision repair, only a single base is removed; the sugar phosphate backbone is initially left intact (see the figure below for comparisons between these two systems for repairing DNA). This disorder is not due to alterations in transcription (synthesizing RNA from DNA), DNA repli- cation, or translation (synthesizing proteins from mRNA). Another example of a disease resulting from a defect in nucleotide excision repair is Cockayne syndrome. Neu- rological diseases (such as Alzheimer’s) may also have a deficiency in nucleotide excision repair.",
    image: "",
  },
  {
    id: "5",
    question:
      "Spontaneous deamination of certain bases in DNA occurs at a constant rate under all conditions. Such deamination can lead to mutations if not repaired. Which deamination indicated below would lead to a mutation in a resulting protein if not repaired?",
    incorrectAnswers: ["T to U", "G to A", "A to G", "U to C"],
    correctAnswer: "C to U",
    explanation:
      "C to U. Cytosine spontaneously deaminates to form uracil while in DNA. This error is repaired by the uracil-DNA glycosylase system, which recognizes this abnormal base in DNA and initiates the process of base excision repair to correct the mistake. Neither thymine nor uracil contains an amino group to deaminate (thus, answers A and E are incorrect). When adenine deaminates, the base hypoxanthine is formed (inosine as part of a nucleoside), and guanine deamination will lead to xanthine production. The deamination of cytosine and conversion to uridine is shown below.",
    image: "",
  },
  {
    id: "6",
    question:
      "A couple sees an obstetrician due to difficulties of the woman keeping a pregnancy to term. She has had three miscarriages over the past 6 years, and the couple is searching for an answer. Karyotype analysis of the woman gave the result of 45,XX,der(14;21). A likely potential cause of the miscarriages may be which of the following?",
    incorrectAnswers: [
      "Imbalance of DNA in polyploid conceptions",
      "Triple X conceptions",
      "Zero X conceptions",
      "Trisomy 21 conceptions",
    ],
    correctAnswer: "Imbalance of DNA in euploid conceptions",
    explanation:
      "The answer is B: Imbalance of DNA in euploid concep- tions. The woman has a Robertsonian translocation between chromosomes 14 and 21 (the two chromo- somes are fused together at their stalks; see the figure on page 23). When she creates her eggs, there is an imbalance in the amount of DNA representing chro- mosomes 14 and 21 in the eggs, such that fertilization of the eggs will lead to either monosomy or trisomy with these chromosomes, most of which are incompat- ible with life. The figure below indicates these potential outcomes. Polyploid outcomes would be three or more times the normal number of chromosomes, which does not occur here; and the Robertsonian translocation will not affect the distribution of the X chromosome. Trisomy 21 will lead to a live birth, Down syndrome, although there is still a risk of miscarriage with trisomy 21 conceptions. The risk is lower, however, than an imbalance of DNA brought about by the segregation of the chromosomes containing the Robertsonian translo- cation. Euploid cells have a number of chromosomes which are exact multiples of the haploids (in humans haploid is 23, diploid is 46, and polyploid is 69 or 92 chromosomes).",
    image: "",
  },
  {
    id: "7",
    question:
      "A 32-year-old woman exhibited a high fever, malaise, generalized lymphadenopathy, weight loss, and esophageal candidiasis. She had a history of drug abuse and needle sharing. Blood analysis indicated a CD4 lym- phocyte count of less than 200. Which of the following compounds would be a drug of choice for this patient?",
    incorrectAnswers: ["Id-A", "Id-B", "Id-C", "Id-E"],
    correctAnswer: "Id-D",
    explanation:
      "The woman is suffering from AIDS, and one class of drugs used to stop the spread of the virus is the dideoxynucleosides (the compound shown in answer D is dideoxyadenosine). The dideoxynu- cleosides interfere with DNA synthesis after they are activated to the triphosphate level through purine sal- vage pathway enzymes. Since these compounds lack a 3′-hydroxyl group, once they are incorporated into a growing DNA strand, they cannot form a phospho- diester bond with the next nucleotide, and synthesis stops. Reverse transcriptase, an enzyme carried by HIV but not found in eukaryotic cells, appears to have a higher affinity for these drugs than does normal cellular DNA polymerase, so the agents have a greater ability to preferentially stop virus synthesis and not cellular DNA synthesis, although it does occur to a small extent. Structure A is adenosine, a ribonucleoside which when activated may be used for primer synthesis in DNA rep- lication, but not as part of the DNA structure. Structure B is methotrexate, an agent which inhibits dihydrofolate reductase and blocks the synthesis of thymidine, thereby blocking DNA synthesis. It is used as a treatment for psoriasis and was used, in the past, as a chemothera- peutic agent. Structure C is deoxyadenosine, which is a normal substrate for DNA polymerase after activa- tion. Structure E is 5-fluorouracil (5FU), an inhibitor of thymidylate synthase. 5FU blocks thymidine synthesis and stops overall DNA synthesis. It is used for certain tumors as an anticancer drug, but is not used for HIV infections.",
    image: "DNA-7.png",
  },
  {
    id: "8",
    question:
      "The high mutation rate of the human immunodeficiency virus (HIV) is due in part to a property of which of the following host cell enzymes?",
    incorrectAnswers: [
      "DNA polymerase",
      "DNA primase",
      "Telomerase",
      "DNA ligase",
    ],
    correctAnswer: "RNA polymerase",
    explanation:
      "RNA polymerase. During the life cycle of the HIV, the double-stranded DNA which was pro- duced from the genomic RNA integrates randomly into the host chromosome (see the figure below). Cellular RNA polymerase then transcribes the viral DNA to pro- duce viral RNA, which is used in the translation of viral proteins, and as the genomic material for new virions. RNA polymerase lacks 3′–5′ exonuclease activity, thus the enzyme cannot correct any errors it may make while transcribing the viral DNA. The RNA produced, which carries errors in transcription, is then packaged into a new virus particle, and this mutation may lead to a change that confers a growth advantage to this strain of virus. The lack of proofreading by RNA polymerase is not usually a problem in eukaryotic cells, as many mes- sages are produced from a single gene, and if 1% of those messages produce a mutated protein it will be compen- sated by the 99% of the messages which produce a nor- mal protein. In the viral case, however, the mRNA turns into the genomic material, which will lead to mutations in all future descendants of that virus. This is why HIV is treated with multiple, different antivirals simultaneously, to destroy any virus which mutates to be resistant to the antiviral agents. DNA polymerase has error-checking capabilities, and will not significantly increase the muta- tion rate of the integrated viral DNA. DNA primase may make errors, but they are corrected when the RNA primer is removed from the DNA. Telomerase only works on the ends of chromosomes, and the viral DNA does not usu- ally integrate at those positions. DNA ligase activity is not required for viral RNA production.",
    image: "",
  },
  {
    id: "9",
    question:
      "Consider the DNA replication fork shown below. DNA ligase will be required to finish synthesis at which labeled points on the figure?",
    incorrectAnswers: ["A and B", "C and D", "A and C", "D and B"],
    correctAnswer: "B and C",
    explanation:
      "The areas labeled B and C are lagging strand synthesis in these two replication forks (see the figure below). This means that the DNA is syn- thesized in the direction opposite to that of the direc- tion in which the replication fork is moving. Because of this, the DNA must be synthesized in short pieces (as DNA polymerase can only synthesize DNA in the 5′ to 3′ direction, reading the template in the 3′ to 5′ direction) known as Okazaki fragments. These Okazaki fragments need to be sealed together, which occurs with DNA ligase (after the RNA primers have been removed by a DNA polymerase with a 5′–3′ exonuclease activity). The vertical line refers to the origin of replication, and labels A and D are the leading strands of DNA synthesis, which, since synthesis is occurring in the direction that the replication fork is moving, can be synthesized as one continuous piece of DNA.",
    image: "DNA-9.png",
  },
  {
    id: "10",
    question:
      "The sequence of part of a DNA strand is the following: –ATTCGATTGCCCACGT–. When this strand is used as a template for DNA synthesis, the product will be which one of the following?",
    incorrectAnswers: [
      "TAAGCTAACGGGTGCA",
      "UAAGCUAACGGGUGCA",
      "ACGUGGGCAAUCGAAU",
      "TGCACCCGTTAGCTTA",
    ],
    correctAnswer: "ACGTGGGCAATCGAAT",
    explanation:
      "The product of DNA replication will be complementary to the tem- plate, and antiparallel. Reading from the 5′ end of the template, the product will be 3′-TAAGCTAACGGGT- GCA-. When written 5′–3′ (standard notation) one has -ACGTGGGCAATCGAAT-. Recall that uracil (U) is not placed into DNA by DNA polymerase.",
    image: "",
  },
  {
    id: "11",
    question:
      "ou have been following a newborn who first presented with hypotonia and trouble sucking. Special feeding techniques were required for the child to gain nourish- ment. As the child aged, there appeared to be develop- mental delay, and the child then gained a great interest in eating, and rapidly became obese. Developmental delay was still evident, as was hypotonia. A karyotype analysis of this patient would indicate which of the following?",
    incorrectAnswers: [
      "A chromosomal inversion",
      "A duplication",
      "A trisomy",
      "A monosomy",
    ],
    correctAnswer: "A deletion",
    explanation:
      "The answer is E: A deletion. The child has Prader- Willi syndrome, which is due to a deletion of a cluster of genes on chromosome 15, on the long arm. When this deletion is inherited from the father, Prader-Willi syndrome is observed. If the same deletion is inher- ited from the mother, an entirely different syndrome is observed, termed Angelmann syndrome. The diagnosis can be confirmed by FISH analysis using a probe spe- cific for the 15q11–13 region.",
    image: "",
  },
  {
    id: "12",
    question:
      "You see a 2-year-old child of Ashkenazi Jewish descent who is very small for her age. The patient exhibits a long, narrow face, small lower jaw, and prominent eyes and ears. The child is very sensitive to being outdoors in the sun, often burning easily, with butterfly-shaped patches of redness on her skin. Upon testing, the child is also slightly developmentally delayed. The defective protein in this child is which of the following?",
    incorrectAnswers: [
      "DNA polymerase",
      "DNA ligase",
      "RNA polymerase",
      "Reverse transcriptase",
    ],
    correctAnswer: "DNA helicase",
    explanation:
      "DNA helicase. The child has the symptoms of Bloom syndrome, a disease in which DNA helicase is defective, and DNA replication is compro- mised. The DNA helicase is necessary to help stabilize the unwinding of the DNA as the replication fork passes through a stretch of DNA. With reduced helicase activity, genomic instability occurs, with increased risk of muta- genic effects and chromosome damage, including chro- mosome breaks and translocations. These secondary effects lead to the symptoms observed in the patients. The patients also have a higher than normal risk for various malignancies, due to the increased genomic instability. The mutation is in the BLM gene, which is on chromosome 15. This mutation does not alter, in a direct fashion, DNA polymerase or ligase activity nor RNA polymerase activity. Reverse transcriptase is not a normal component of eukaryotic cells (it is introduced to cells when they are infected by a retrovirus).",
    image: "",
  },
  {
    id: "13",
    question:
      "Concerned parents are referred to a specialty clinic by their family physician due to abnormalities in their 18-month-old child’s development. The child displays delayed psychomotor development, and is mentally retarded. The child is photosensitive, and also appears to be aging prematurely, with a stooped posture and sunken eyes. The altered process in this autosomal recessive disorder is which of the following?",
    incorrectAnswers: [
      "Base excision repair",
      "DNA replication",
      "Proofreading by DNA polymerase",
      "Sealing nicks in DNA",
    ],
    correctAnswer: "Transcription-coupled DNA repair",
    explanation:
      "Transcription-coupled DNA repair. The child is exhibiting the symptoms of Cockayne syndrome (CS), a defect in transcription-coupled DNA repair. Transcription-coupled DNA repair occurs only on actively transcribed genes; if RNA polymerase is halted due to damage to DNA on an actively transcribed gene, this repair system fixes the DNA such that transcription can continue. Cells derived from patients with CS have a reduction in RNA synthesis in response to UV irradia- tion, as transcription-coupled DNA repair is reduced, thereby reducing the rate of RNA produced from genes which did contain thymine dimers. There are at least two forms of CS: CS 1 (or A), the form present at birth, and CS 2 (or B), one that occurs later in life, during early childhood. The two forms are due to mutations in two different genes (ERCC8, on chromosome 5, is responsible for CS-A, and ERCC6, on chromosome 10, is responsible for CS-B). The child’s symptoms are not due to defects in base excision repair or in DNA ligase (sealing nicks in DNA). DNA replication is normal in these children, as is the proofreading capability of DNA polymerase.",
    image: "",
  },
  {
    id: "14",
    question:
      "A woman visits her physician due to fever and pain upon urination. Urinary analysis shows bacteria, leukocytes, and leukocyte esterase in the urine, and the physician places the woman on a quinolone antibiotic (ciprofloxacin). The mammalian counterpart to the bacterial enzyme inhibited by this drug is which of the following?",
    incorrectAnswers: ["DNA polymerase α", "Ligase", "Primase", "Helicase"],
    correctAnswer: "Topoisomerase",
    explanation:
      "Topoisomerase. The quinolone family of antibiotics is targeted toward the bacterial enzyme DNA gyrase, which is the bacterial counterpart of the mammalian topoisomerases. These are the enzymes which break the phosphodiester backbone to allow relief of torsional strain as the DNA helix is unwinding to allow replication to proceed. Through an inhibition of gyrase, DNA replication in the bacteria is inhibited, which leads to bacterial cell death. Since the topoi- somerases are not affected by these drugs, there is no effect on eukaryotic DNA synthesis. DNA polymerase α is unique to eukaryotic cells (the bacteria have DNA polymerases I, II, or III). DNA ligase, primase, and DNA helicase are not targets of this class of drugs. The helicase is the enzyme which allows the DNA strands to unwind; however, it needs to work with gyrase (or topoisomerase) such that the tension created by unwinding can be relieved.",
    image: "",
  },
  {
    id: "15",
    question:
      "Which answer below best predicts the effect of the fol- lowing drug on the pathways indicated?",
    incorrectAnswers: ["Id-B", "Id-A", "Id-D", "Id-E"],
    correctAnswer: "Id-C",
    explanation:
      "The answer is C. The drug is 3′-deoxyadenosine. This nucleoside will be activated when it enters cells (to the triphosphate level), and will be recognized by RNA polymerase and incorporated into growing RNA chains. Since the compound lacks a 3′-hydroxy group, RNA synthesis is terminated, as the next phosphodiester bond cannot be created. This drug is not recognized by DNA polymerase because it contains a 2′-hydroxy group, and DNA polymerase will only recognize nucle- otides which lack 2′-hydroxy groups. This drug does not resemble tRNA, or mRNA, or rRNA, so it will not have a direct effect on protein synthesis. Protein synthe- sis may be decreased, however, if no mRNA is present to translate. However, the drug does not directly inhibit the mechanisms of translation.",
    image: "DNA-15.png",
  },
  {
    id: "16",
    question:
      "A new patient visits your practice due to his concern of developing colon cancer. A large number of relatives have had premature (less than the age of 45) colon can- cer, and all cases were right-sided, with the only visible polyps being found on that side. The molecular basis for this form of colon cancer is which of the following?",
    incorrectAnswers: [
      "A defect in base excision repair",
      "A defect in the Wnt signaling pathway",
      "A defect in repairing double-strand DNA breaks",
      "A defect in telomerase",
    ],
    correctAnswer: "A defect in DNA mismatch repair",
    explanation:
      "A defect in DNA mismatch repair. The patient is concerned about HNPCC, hereditary nonpolyposis colon cancer, which is due to mutations in genes which are involved in DNA mismatch repair. This colon tumor does not form large numbers of polyps within the intestine, as does the other form of inherited colon can- cer, adenomatous polyposis coli (APC). HNPCC is also a right-sided colon cancer. Defects in base excision repair do not lead to HNPCC. A defect in the Wnt signaling pathway, which controls the action of β-catenin, an important transcription factor, may play a role in APC. Defects in repairing double-strand breaks in DNA are linked to breast cancer. Mutations in telomerase would lead to earlier cell senescence and death due to an inabil- ity to maintain the proper length of the chromosomes.",
    image: "",
  },
  {
    id: "17",
    question:
      "Over 50% of human tumors have developed an inacti- vating mutation in p53 activity. The lack of this activity contributes to tumor cell growth via which one of the following mechanisms?",
    incorrectAnswers: [
      "Loss of Wnt signaling",
      "Activation of MAP kinases",
      "Increase in apoptotic events",
      "Increase in transcription-coupled DNA repair",
    ],
    correctAnswer: "Increase in DNA mutation rates",
    explanation:
      "Increase in DNA mutation rates. p53 is a protein which scans the genome for damage, and when damage is spotted, it induces the synthesis of genes which will stop the cell from continuing through the cell cycle. p53 will also lead to the synthesis of genes involved in repairing the DNA damage. Once the dam- age has been repaired, the cell will resume its passage through the cell cycle. If the damage cannot be repaired, apoptosis will be initiated in the cell. If p53 is miss- ing, or mutated such that its functions are lost, damaged DNA will be replicated, and at times, the replisome will make errors repairing the damage. This will increase the overall mutation rate of the cell such that eventually mutations will appear in genes which regulate cell pro- liferation, and a cancer will develop. p53 is not involved in Wnt signaling or activation of MAP kinases. Func- tional p53 can increase apoptotic events, but the lack of p53 will actually decrease the frequency of apoptosis in cells. This protein is also not involved in transcription- coupled DNA repair.",
    image: "",
  },
  {
    id: "18",
    question:
      "The isolation of nascent Okazaki fragments during DNA replication led to the surprising discovery of uracil in the fragment. The uracil is present due to which of the following?",
    incorrectAnswers: [
      "Failure of mismatch repair",
      "An error in DNA polymerase",
      "Deamination of cytosine",
      "Chemical modification of thymine",
    ],
    correctAnswer: "The need for a primer",
    explanation:
      "The need for a primer. DNA poly- merase requires a primer in order to synthesize DNA. The primer is provided by a small piece of RNA, synthe- sized by DNA primase (an RNA-polymerase). RNA syn- thesis does not require a primer. Once a small piece of RNA is synthesized, DNA polymerase will begin to add deoxyribonucleotides to the end of the RNA. Later, dur- ing DNA replication, another DNA polymerase will come along and remove the RNA, replacing the RNA bases with deoxyribonucleotides. However, as initially syn- thesized, Okazaki fragments will contain uracil. While the deamination of cytosine can produce uracil, this is much more frequent in the more stable DNA than RNA. Thymine cannot be easily converted to uracil in DNA (it would require a demethylation), and does not contribute to uracil content in Okazaki fragments. Mismatch repair does not operate on DNA:RNA hybrids (which form when the primer is synthesized), and DNA polymerase does not recognize uracil, so it would not make the type of mistake in which uracil were placed into DNA.",
    image: "",
  },
  {
    id: "19",
    question:
      "You have a patient with an elevated white blood cell count and a feeling of malaise. Molecular analysis of the white cells detects the presence of the following karyotype. The molecular basis of this disease is which of the following?",
    incorrectAnswers: [
      "Loss of an essential tumor suppressor activity",
      "Increased rate of DNA mutation due to loss of DNA repair enzymes",
      "Loss of a critical tyrosine kinase activity",
      "Gain of a critical ser/thr kinase activity",
    ],
    correctAnswer: "Creation of a fusion protein not normally found in cells",
    explanation:
      "Creation of a fusion protein not normally found in cells. The patient exhibits the Philadelphia chromosome (a translocation between chromosomes 9 and 22), which creates the bcr–abl protein, a fusion pro- tein of two normal cellular proteins. The abl protein is a tyrosine kinase; when the gene is moved from chromo- some 9 to 22 and put under the control of the bcr gene, it is misexpressed and constitutively active and leads to cellular growth in the blood cells in which the protein is expressed. The patient has chronic myelogenous leu- kemia (CML). Since this is a dominant activity, there is no loss of a tumor suppressor gene. The transloca- tion does not interfere with DNA repair, so there is no direct increase in mutation rate due to this transloca- tion. There is no loss of tyrosine kinase activity (there is actually a gain of activity), nor is there gain of a ser/thr kinase (as abl is a tyrosine kinase).",
    image: "",
  },
  {
    id: "20",
    question:
      "A scientist is replicating human DNA in a test tube and has added intact DNA, the replisome complex, and the four deoxyribonucleoside triphosphates. To the surprise of the scientist, there was no DNA synthesized, as deter- mined by the incorporation of radio-labeled precursors into acid-precipitable material. The scientist’s failure to synthesize DNA is most likely due to a lack of which of the following in his reaction mixture?",
    incorrectAnswers: [
      "Reverse transcriptase",
      "Templates",
      "Dideoxynucleoside triphosphates",
      "Sigma factor",
    ],
    correctAnswer: "Ribonucleoside triphosphates",
    explanation:
      "Ribonucleoside triphosphates. DNA synthesis requires the synthesis of primers upon which deoxyribonucleotides will be added. The primers are composed of ribonucleotides (DNA primase is a DNA- dependant RNA polymerase), and the scientist forgot to add NTPs to the reaction mixture (deoxyribonucle- otides are not recognized by DNA primase, and cannot be used to synthesize a primer). Reverse transcriptase is not required for DNA synthesis from a DNA template (as in this situation). Sigma factor is a required factor for bacterial RNA synthesis; it is not a required factor for eukaryotic DNA synthesis.",
    image: "",
  },
];

export default data;
