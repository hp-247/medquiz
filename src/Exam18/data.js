const data = [
  {
    id: "1",
    question:
      "A patient displays increasing muscle weakness and delayed muscle relaxation. He shows a slack jaw and drooping eyelids. The physician has noted a loss of muscle mass in the calves over the years. A molecular analysis by Southern blot using a probe against the sus- pected disease gene shows the following. The molecular reason for the difference between the normal and dis- ease gene is which of the following?",
    incorrectAnswers: [
      "There is a mutation in trans with the operon",
      "Inducer can no longer bind to the repressor",
      "Inducer binds too tightly to the repressor",
      "The transactivation domain of the repressor is mutated",
    ],
    correctAnswer: "There is a mutation in cis with the operon",
    explanation:
      "The answer is C: Triplet repeat expansion. The patient has the symptoms of myotonic dystrophy, an auto- somal dominant disorder brought about by a triplet repeat expansion in the myotonic dystrophy gene. The presence of this expansion increases the size of DNA observed in Southern blots, and since it is autosomal dominant, only one of the two chromosomes has to contain this expansion for the patient to have the dis- ease. Myotonic dystrophy is due to a CTG triplet repeat expansion in the 3′ untranslated region of the DM1 gene. The DM1 gene codes for a serine/threonine kinase and is located on chromosome 19, band q13. Myotonic dystrophy is not caused by a gene duplication, gene deletion (as would by muscular dystrophy), a change in SNP patterns, or differences in restriction length poly- morphisms (although one may be created by the triplet repeat expansion).",
    image: "",
  },
  {
    id: "2",
    question:
      "If this vector plus insert were to be cleaved to comple- tion with enzymes S and X simultaneously, what size bands would be observed?",
    incorrectAnswers: [
      "To prevent vaso-occlusive episodes through hydroxy- urea induced protein degradation",
      "To reduce synthesis of a defective protein",
      "To enhance oxygen levels in the blood",
      "To activate the enzyme that produces 2,3-bisphos- phoglycerate",
    ],
    correctAnswer: "To induce synthesis of a functional protein",
    explanation:
      "The answer is E: 800 bp, 900 bp, 1,000 bp, 1,500 bp. Starting with the S site at the “top” of the fi gure, the next restriction cut would be at the X site in the insert, gen- erating a DNA fragment of 1,000 bp (700 + 300). The next site is the S site in the insert, which is 800 bp long. Moving along the DNA the next cut site is the X site in the vector, 900 bp from the previous S site. This leaves, then, a 1,500 bp piece of the vector. The total size of the vector plus insert is 4,200 bp, and the pieces generated, 800 bp, 900 bp, 1,000 bp, and 1,500 bp, add up to the total, 4,200 bp.",
    image: "",
  },
  {
    id: "3",
    question:
      "Which labeled DNA fragment would work best for a Northern blot analysis?",
    incorrectAnswers: [
      "Reduced alpha chain synthesis",
      "Reduced sickle chain synthesis",
      "Increased zeta chain synthesis",
      "Increased delta chain synthesis",
    ],
    correctAnswer: "Increased gamma chain synthesis",
    explanation:
      "The answer is C: The 500 bp HS restriction fragment. Since the probe is going to be used in a Northern blot, the DNA for the probe must be obtained from an exon, as mRNA will only contain sequences which are com- plementary to exonic DNA. The exonic DNA is repre- sented by the black box in the fi gure, which is within the 500 bp SH restriction fragment of the insert. The other parts of the insert represent introns and would not hybridize to mRNA in a Northern blot.",
    image: "",
  },
  {
    id: "4",
    question:
      "You are studying a family that exhibits a rare autosomal recessive disease. The disease is caused by a point muta- tion which abolishes an EcoR1 restriction site in the genome. To genotype the family, one can amplify a 1.8 kb region of this area of the genome using polymerase chain reaction (PCR), restrict the PCR products with EcoR1, and then separate the restricted DNA on an agarose gel. The results of such an experiment are shown below, using DNA obtained from each of the fi ve family mem- bers. Which family members have the disease?",
    incorrectAnswers: [
      "Overall increased expression of all transcription factors",
      "Overall reduced expression of all transcription factors",
      "Deletions in the locus control region of the α-globin gene cluster",
      "Inappropriate looping of chromosomal DNA, allow- ing transcription of previously inaccessible genes to occur ",
    ],
    correctAnswer:
      "Deletions in the locus control region of the β-globin gene cluster",
    explanation:
      "The answer is B: C and E. Since the disease is auto- somal recessive, both chromosomes must carry a mutated gene for the person to have the disease, so only one band should be seen on the gel. Since the mutation which leads to the disease destroys a restric- tion endonuclease site, the disease-carrying allele will have a larger size on the gel than the normal allele, which will be cleaved by the restriction enzyme. Thus, for individual A, for example, the 1.8 kb band corre- sponds to the mutant allele, while the 1.2 kb and 0.6 kb bands correspond to the normal allele, which contains the restriction site that enables the DNA to be cut into two pieces. Individual A is a carrier of the disease, as is individual B. Individual D has two normal copies of the gene and is not a carrier of the disease.",
    image: "",
  },
  {
    id: "5",
    question:
      "A diffi cult step in the engineering of recombinant insu- lin was which of the following?",
    incorrectAnswers: [
      "Inhibition of apolipoprotein B transcription",
      "Inhibition of apolipoprotein B folding",
      "Enhanced degradation of apolipoprotein B",
      "RNA editing of the apolipoprotein B mRNA",
    ],
    correctAnswer: "Inhibition of apolipoprotein B translation",
    explanation:
      "The answer is D: Allowing the A and B chains to come together appropriately. Expression of cDNA in bac- teria does not allow for posttranslational events to occur (bacteria do not carry out such events). Thus, the cleavage of insulin (removal of the C-peptide) to form mature insulin would not occur in bacte- ria. Thus, in making recombinant insulin, the A and B chains are produced separately in bacteria, purifi ed, and then mixed together under appropriate condi- tions to allow the disulfi de bonds to form between the chains to form mature insulin. One cannot express the entire insulin gene in bacteria, as bacteria do not splice mRNA. It has been less expensive to synthesize insulin in bacteria than to try and fi nd a eukaryotic cell line which would process insulin appropriately, and at high levels.",
    image: "",
  },
  {
    id: "6",
    question:
      "A 6-month-old has had recurrent bouts of pneumonia, and a chest X-ray shows a greatly reduced thymus. Gene therapy would successfully treat this disorder if the gene is placed in which cell type or organ?",
    incorrectAnswers: [
      "eIF4",
      "eEF2",
      "Ribosomal subunit S6",
      "Steroid hormone receptor",
    ],
    correctAnswer: "CREB",
    explanation:
      "The answer is D: Bone marrow. The child has adenosine deaminase (ADA) defi ciency, or SCID (severe combined immunodefi ciency disease). The circulating blood cells pick up deoxyadenosine, which is toxic in the absence of adenosine deaminase, a necessary enzyme for the metabolism of deoxyadenosine. By incorporating func- tional ADA in bone marrow cells, the stem cells for the production of the circulating blood cells now express ADA, and the mature cells produced from the stem cells will now express ADA, and be resistant to the toxic effects of deoxyadenosine. Placing the gene in other tis- sues will not address the problem of the death of blood cells.",
    image: "",
  },
  {
    id: "7",
    question:
      "A patient has been diagnosed with a particular form of cancer. Appropriate treatment of this cancer, however, requires knowledge of which molecular markers are being expressed by the tumor as compared to normal cells of the same tissue. This is most easily accomplished by which of the following techniques?",
    incorrectAnswers: [
      "Enhanced gene transcription",
      "Impaired protein synthesis",
      "Enhanced protein synthesis",
      "Altered chromosomal structure",
    ],
    correctAnswer: "Impaired gene transcription",
    explanation:
      "The answer is D: Microarray analysis. Microarray experiments allow for rapid screening of many genes in one experiment. The technique is based on hybrid- izing cDNA samples from cells to an array of known DNA sequences, which correspond to a battery of genes (about 1,000 can fi t on one DNA chip; this is further explained in the fi gure on page 59). Thus, in a single experiment, one can determine the expression levels of 1,000 genes in both the disease and normal state. South- ern blots cannot do this, as one would have to probe the blot with 1,000 different probes to try to obtain simi- lar results. Southwestern blot, in which protein binding to DNA is measured, is not relevant to this situation. MicroRNAs regulate gene transcription, but will not tell you about the expression of the bulk of genes in the cell (and microarray genes can also be analyzed in a microar- ray experiment). ELISAs examine one protein through A typical microarray experiment. Note how DNA sequences corre- sponding to known genes (actin, cyclin D1, etc.) are spotted in an array on a microscope slide. Labeled cDNA from cell samples will be hybridized to the DNA on the slide, and the results analyzed by computer to determine the level of gene expression at each spot of DNA.",
    image: "",
  },
  {
    id: "8",
    question:
      "A patient was given an initial ELISA screening test for HIV, which was positive. A second, more specifi c test was then undertaken, which consisted of a Western blot. The samples that were run through the poly- acrylamide gel for this test consisted of which of the following?",
    incorrectAnswers: [
      "Amplification of the gene for degrading metho trexate",
      "Reduced transcription of the gene allowing metho- trexate entry into the cell",
      "Increased transcription of the gene allowing metho- trexate effl ux from the cell",
      "An inactivating mutation in the gene for DHFR",
    ],
    correctAnswer: "Amplification of the dihydrofolate reductase (DHFR) gene",
    explanation:
      "The answer is D: HIV proteins. The HIV tests are looking for the presence of antibodies in the patient’s sera against HIV proteins. So, in the confi rming Western blot, HIV proteins are separated by size on a polyacrylamide gel, the proteins transferred to fi lter paper, and the fi lter paper treated with the sera sample. If the sera contain antibodies to HIV proteins, they will bind to the proteins on the fi lter paper, and the presence of antibodies on the fi lter paper is then detected using second antibodies. None of the other answers are appropriate for this type of test.",
    image: "",
  },
  {
    id: "9",
    question:
      "A patient has been diagnosed with abetalipoproteine- mia. Such a disorder can be determined by which of the following techniques using samples obtained from the blood?",
    incorrectAnswers: [
      "Increased transcription of ferritin mRNA",
      "Reduced transcription of the transferrin receptor mRNA",
      "Increased translation of the ferritin mRNA",
      "Increased degradation of the transferrin receptor mRNA",
    ],
    correctAnswer: "Increased translation of the transferrin receptor mRNA",
    explanation:
      "The answer is A: Western blot. Abetalipoproteinemia results from the absence of apolipoprotein B in chylomi- crons and very low density lipoprotein (VLDL), caused by a mutation in MTTP, the microsomal triglyceride transfer protein. If one isolates plasma (removing the cells), and performs a Western blot for the presence of apolipoprotein B, one would see greatly reduced levels as compared to normal individuals. As apoB is made either in the intestine (apoB48) or the liver (apoB100), apoB mRNA would not be present in blood cells, so a Northern blot would not be informative. Southern blot of DNA would only work if there was a specifi c probe for MTTP which would distinguish a disease gene from a normal gene. Microarray, which measures mRNA lev- els, would not show any difference between normal and disease states, as the apoB protein is still made in the liver and intestine; however, it cannot be incorporated into chylomicrons or VLDL due to the lack of functional MTTP activity. PCR analysis suffers from the same prob- lem as Southern blotting.",
    image: "",
  },
  {
    id: "10",
    question:
      "The DNA sequence represented by the gel shown below, which was generated using the Sanger dideoxy sequenc- ing technique, is which of the following?",
    incorrectAnswers: [
      "More efficient splice site recognition",
      "Beneficial amino acid replacement derived from the missense mutation",
      "Increased amount of sigma factor binding",
      "Reduced energy need to melt the DNA helix at this position",
    ],
    correctAnswer:
      "Increased opportunity for hydrogen bonding to a transacting factor",
    explanation:
      "The answer is B: ATTCGCAATCA. In the Sanger technique, the sequence is read from the bottom of the gel to the top of the gel (5′ to 3′), going from one size of DNA to the next largest size. This is due to the way in which the frag- ments are generated, as indicated in the figure below.",
    image: "",
  },
  {
    id: "11",
    question:
      "A patient has seen her physician for a variety of complaints over the past several years. These include fevers which come and go, fatigue, joint pain and stiff- ness, a rash on the face (see the fi gure below), sores in her mouth, easy bruising, and increased feelings of anx- iety and depression. A molecular technique to provide a confi rmation of the suspected diagnosis is which of the following?",
    incorrectAnswers: [
      "The activated gene has a TATA box mutation",
      "The locus control region for the gene is deleted",
      "A transcriptional activator sustained a missense mutation, which reduces its affi nity for DNA",
      "A variant promoter region is formed owing to a splice site mutation",
    ],
    correctAnswer:
      "A gene encoding a transcriptional repressor has been mutated",
    explanation:
      "The answer is A: Western blot. The patient has lupus, which is an autoimmune disorder. To test for the pres- ence of antibodies in the patient’s sera, one can use a Western blot, and run typical antigens (such as splice- some proteins) on the gel, and then determine if the patient’s sera contain antibodies against the proteins. ELISAs will also work for this assay. All of the other techniques mentioned require examining nucleic acids, which would not help in determining if autoimmune antibodies were being generated in the patient.",
    image: "",
  },
  {
    id: "12",
    question:
      "Two-dimensional PAGE gels were run on cells from nor- mal tissue, and also on the same tissue which has been affected by a certain disease. Which of the following best describes spot A in the disease state, as compared to spot B in the normal state?",
    incorrectAnswers: [
      "Blocking translation of cytokine genes",
      "Activating transcription of cytokine receptors",
      "Stimulating the phosphorylation of transcription factors",
      "Stimulating translation of cytokine genes",
    ],
    correctAnswer:
      "Blocking the dephosphorylation of specifi c tran- scription factors",
    explanation:
      "The answer is C: Higher molecular weight, more basic pro- tein. In two-dimensional electrophoresis, proteins are separated fi rst by charge (they are run through a pH gradi- ent, and when they reach their isoelectric point, they stop migrating), and then by size. As indicated in the fi gure to the question, larger sizes migrate more slowly and would be closer to the “top” of the fi gure. Thus, spot A is of a larger molecular weight than spot B, as spot B migrates farther in the sizing portion of the two-dimensional electrophoresis. The horizontal positions are related to the isoelectric points of the proteins, and spot A reaches its isoelectric point at a higher pH than does spot B. This means that protein B is more acidic than protein A. Overall, then, the protein expressed by spot A is larger and more basic than the protein represented by spot B.",
    image: "",
  },
  {
    id: "13",
    question:
      "The region of DNA shown below is to be amplifi ed by PCR. The appropriate pair of primers to use is which of the following?",
    incorrectAnswers: [
      "Inability of glucocorticoids to enter target cells",
      "Reduction of levels of transactivating factors in the nucleus",
      "Cytokine induction of protein kinases",
      "Increased dimerization of the glucocorticoid receptor",
    ],
    correctAnswer: "Inability to induce histone acetylation",
    explanation:
      "The answer is A: B and C. For a PCR experiment, one requires primers that will allow DNA synthesis to occur across the region of DNA to be amplifi ed. Since DNA polymerase always synthesizes DNA in the 5′ to 3′ direction, the 3′ ends of the primers must face each other and bracket the region of DNA to be amplifi ed. Primers A and D will only allow DNA synthesis away in the opposite direction from the region of interest, due to their orientation on the DNA template strand. The prin- cipal behind PCR reactions is shown in the fi gure below.",
    image: "",
  },
  {
    id: "14",
    question:
      "Having cloned the cDNA for mouse gene X, one wants to use this cDNA as a probe to screen a human cDNA library and isolate the human homolog of this gene. Hybridization conditions should be which of the fol- lowing for the initial screening of the library?",
    incorrectAnswers: [
      "Decreasing the rate of RNA polymerase catalyzed phosphodiester bond formation",
      "Inducing the synthesis of a protein that posttran- scriptionally edits mRNA such that translation ini- tiation is blocked",
      "Through stimulation of proteins with HAT activity",
      "Increasing enhancer binding to DNA",
    ],
    correctAnswer:
      "By decreasing the rate of RNA polymerase binding to the promoter",
    explanation:
      "The answer is D: Low temperature, high salt. Since the probe is from mouse DNA, and the sample is human DNA, low stringency conditions need to be used to allow slight mismatches in hybridization to be tolerated. Thus, low temperature reduces thermal motion, and allows for mismatches, and high salt will reduce the potential disruptive ionic interactions that might result from mis- matches and alterations in backbone structure. The com- bination of low temperature and high salt will provide the highest probability of hybridization between mouse and human DNA.",
    image: "",
  },
  {
    id: "15",
    question:
      "A researcher has isolated the cDNA for gene Y. He per- forms the following Northern blot experiment using samples prepared from different tissues. A potential explanation for this fi nding is which of the following?",
    incorrectAnswers: [
      "The ability to reduce the risk of losing transcrip- tional control via mutation in this region",
      "Promoting looping of this DNA region",
      "Providing a target for interfering RNAs",
      "Providing ribosome binding sites for translation ini- tiation",
    ],
    correctAnswer:
      "The ability to modulate the binding of positive, or negative, transacting factors to the DNA",
    explanation:
      "The answer is A: Alternative splicing. Since a Northern blot is being run, RNA from the various tissues is run through the gel to be separated based on size. Seeing different sizes of hybridizing bands, depending on the tissue of origin, with the same probe, and from the same animal, indicates that alternative splicing of the mRNA has occurred between the tissues. mRNA instability would lead to reduced levels of signal and not differ- ences in sizes. RNA editing would not alter the overall size of the mRNA; it would just alter the sequence of the mRNA. Start codons are within the mRNA; utiliz- ing different start codons would not alter the size of the mRNA. Differential polyadenylation is only correct if it is a part of differential splicing, which is the best answer.",
    image: "Gene-15.png",
  },
  {
    id: "16",
    question:
      "Two babies were born at the same time in the hos- pital, but their nametags may have been mixed up. DNA fi ngerprinting was done to determine the parent- age of the children, using Southern blots of restricted DNA and a specifi c probe. The basis for seeing differences between individuals using this technique is which of the following?",
    incorrectAnswers: [
      "Transferrin",
      "Transferrin receptor",
      "Transcobalamin",
      "Ceruloplasmin",
    ],
    correctAnswer: "Iron response element binding protein",
    explanation:
      "The answer is B: RFLPs. RFLPs can be detected with a straightforward Southern blot. Chromosomal trans- locations are too rare in the population to be used for general DNA fi ngerprinting. DNA methylation patterns are epigenetic and can be variable amongst individuals, so they are not suffi ciently reliable to be used for DNA fi ngerprinting. Deletions and triplet repeat expansions are too rare and variable in the population to be used as a general screen for DNA identifi cation purposes.",
    image: "",
  },
  {
    id: "17",
    question:
      "A microarray experiment looking at genes expressed by a cell line both before and after differentiation of the line indicated 15 potential genes which were upregu- lated. A simple technique to enable the scientist to determine the temporal order of induced gene expres- sion is which of the following?",
    incorrectAnswers: [
      "Loss of ionic interactions between the transcription factor and DNA",
      "Increase in hydrogen bonding between transcrip- tion factor and DNA",
      "Increase in ionic interactions between the transcrip- tion factors and DNA",
      "Inability of the transcription factor to bind to the DNA",
    ],
    correctAnswer:
      "Decrease in hydrogen bonding between the tran- scription factor and DNA",
    explanation:
      "The answer is B: Northern blot. Once individual genes have been identifi ed as being either upregulated or down- regulated after differentiation, the DNA corresponding to the gene can be used as a probe in Northern blots using mRNA obtained at various times after differentiation is induced. In this manner, the time course of increase, or decrease, in mRNA expression can be determined. None of the other techniques will allow this information to be easily obtained. Western blots require antibodies to the proteins produced from the genes identifi ed, which most likely are not available. A microarray analysis is too complex to easily determine the temporal order of gene expression. RFLP analysis does not address the question of temporal gene expression.",
    image: "",
  },
  {
    id: "18",
    question:
      "A genomic clone has been isolated and is going to be used for chromosome walking to obtain more clones of the gene. The regions of the clone to be used as probes in chromosome walking are which of the following?",
    incorrectAnswers: ["A", "C", "D", "E"],
    correctAnswer: "B",
    explanation:
      "The answer is C: A and E. Chromosome walking involves taking the “ends” of a probe (the DNA at the 5′ and 3′ ends of a probe) and using those as new probes in another library screen. The clones identifi ed in this second screening of the library will hybridize to the “end” of the already identifi ed clone, and should extend the DNA both in the 5′ and 3′ directions from that already represented by the fi rst clone, as indicated in the fi gure below.",
    image: "Gene-18.png",
  },
  {
    id: "19",
    question:
      "One studies a disease caused by a single point muta- tion in which a restriction enzyme site is gained by the mutation. To determine if someone is a carrier of the disease, PCR primers were generated which allowed a 1.8 kb fragment to be amplifi ed across both X restric- tion sites in the normal gene. After treatment of the amplifi ed DNA by enzyme X, a carrier of the disease would be expected to exhibit which size fragments, as determined by ethidium bromide staining of an agarose gel?",
    incorrectAnswers: ["A", "B", "D", "E"],
    correctAnswer: "C",
    explanation:
      "The answer is D: 0.6, 0.9, and 1.5 kb. A carrier would have one normal gene, and one disease gene, which contains the new restriction enzyme site. After amplifying this area of DNA by PCR, and then cutting with the appropriate restriction enzyme, this indi- vidual would show a 1.5 kb band from the normal gene, and both 0.6 and 0.9 kb bands from the disease gene.",
    image: "Gene-18.png",
  },
  {
    id: "20",
    question:
      "Consider the following map of a genomic region of DNA, showing restriction endonuclease sites for enzymes X and Y. You have a probe to this region (as indicated on the fi gure). A certain disease maps to this region of DNA, and creates a new restriction site, Z, which is cut with restriction enzyme Z. As a diagnostic tool, a carrier would exhibit which bands when DNA that has been completely restricted with enzyme X is run through a gel and a Southern blot is performed utilizing the indi- cated probe?",
    incorrectAnswers: [
      "Cytochrome degradation",
      "Ubiquinone biosynthesis",
      "Ubiquinone degradation",
      "Dolichol synthesis",
    ],
    correctAnswer: "Cytochrome synthesis",
    explanation:
      "The answer is A: 5.0 kb. This would be a noninforma- tive result. Enzyme X would not cut at site Z, so there would be no difference between the normal and dis- ease gene when the DNA is cut with enzyme X, so both genes would give rise to a 5 kb piece of DNA. In order to distinguish between the normal and the disease gene, one needs to cut with two enzymes, X and Z; using the probe indicated in a Southern blot, the disease gene would then show a piece of DNA that is 1.2 kb in size, while the normal gene would show a piece of DNA that is 5.0 kb in size.",
    image: "",
  },
];

export default data;
