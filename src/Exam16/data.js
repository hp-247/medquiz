const data = [
  {
    id: "1",
    question:
      "A researcher has discovered a temperature-sensitive cell line that displays an overall reduction in protein synthesis. Analysis of the mRNA produced at the non- permissive temperature indicated that a key structural feature, normally present on mRNA, was missing. Such a structure is most likely which one of the fol- lowing?",
    incorrectAnswers: [
      "Lack of error checking in DNA polymerase",
      "Lack of DNA repair enzyme systems in HIV-infected cells",
      "Incorporation of uracil in the RNA genome of HIV",
      "Incorporation of thymine in the RNA genome of HIV",
    ],
    correctAnswer: "Lack of error checking in RNA polymerase",
    explanation:
      "Lack of error checking in RNA poly- merase. As part of the life cycle of the virus (see the figure below), the RNA genome of the virus is con- verted to DNA, which integrates randomly into the host chromosome. Host cell RNA polymerase II then transcribes the viral DNA, producing viral RNA, which is translated to produce viral proteins, and which is also utilized as the genome for new viral particles. RNA polymerase does not contain 3′–5′ exonuclease activ- ity (which DNA polymerase does), so RNA polymerase cannot check its work and cannot fix errors when a mismatch is made. The accumulated effect of these errors increases the mutation rate of the virus much more than organisms containing DNA genomes. Since the enzyme that creates the viral DNA is reverse tran- scriptase, which also has no error-checking capability, the risk for mutations is greatly enhanced. DNA poly- merase does check its work but is not used in the viral life cycle. The DNA repair enzymes are not altered by HIV infection. Uracil is a normal component of the viral RNA genome, whereas thymine is not, but neither of these facts results in an increase in mutation rate.",
    image: "",
  },
  {
    id: "2",
    question:
      "Under conditions of active exercise, protein synthesis is reduced in the muscle. Under these conditions, which aspect of translation is inhibited?",
    incorrectAnswers: [
      "Separate by size on agarose gel electrophoresis",
      "Run the RNA through an oligo-dA affinity column",
      "Separate by size on polyacrylamide gel electrophoresis",
      "Perform a phenol extraction of the total RNA",
    ],
    correctAnswer: "Run the RNA through an oligo-dT affinity column",
    explanation:
      "Run the RNA through an oligo-dT affin- ity column. Mature mRNA from eukaryotes has a poly-A tail, which is added posttranscriptionally by poly-A polymerase (see the figure below for an overview of eukaryotic mRNA synthesis). The poly-A tail will hybridize to the oligo-dT on a column, thereby allow- ing the mRNA to bind to the column and other types of RNA to pass through the column. Altering the salt conditions (through a reduction of salt concentration) can then elute the mRNA specifically from the column. Phenol extraction is required for nucleic acid isolation, but it is not specific for mRNA. Electrophoresis, either agarose or polyacrylamide, will separate nucleic acids by size but does not by itself lead to mRNA isolation. An oligo-dA column will not hybridize to the poly-A tail of mRNA.",
    image: "",
  },
  {
    id: "3",
    question:
      "A young child exhibits the following symptoms: Coarse facial features, congenital hip dislocation, inguinal hernias, and severe developmental delay. These symptoms are fully evident at the child’s age of 1. Cellular analysis demonstrated the presence of inclusion bodies within the cytoplasm of liver cells. The inclusion bodies are the result of which of the following?",
    incorrectAnswers: [
      "Codon degeneracy within the genetic code",
      "Tissue-specific posttranslational modifications",
      "Polyadenylation is lacking in certain tissues",
      "Differences in location of 5′-cap formation in the tissues",
    ],
    correctAnswer:
      "Tissue-specific alternative splicing of the primary transcript",
    explanation:
      "Tissue-specific alternative splicing of the primary transcript. Tissue-specific alternative splicing of one primary transcript can give rise to a number of dis- tinct mature mRNAs, each of which gives rise to a variant of the parent protein (but all separate proteins in their own right) (see the figure below). Posttranslational modifica- tions are made primarily to membrane bound or targeted proteins, but not cytosolic proteins. Polyadenylation and cap formation do not alter the reading frame of the pro- tein and are required to fully mature the mRNA. Codon degeneracy will allow a number of different codons to specify the same amino acid in the protein’s primary sequence; it will not alter the sequence of amino acids in the final protein as will alternative splicing.",
    image: "RNA-3.png",
  },
  {
    id: "4",
    question:
      "A eukaryotic cell line contains an aberrant, temper- ature-sensitive ribonuclease that specifically cleaves the large rRNA molecule into many pieces, destroy- ing its secondary structure and its ability to bind to ribosomal proteins. This cell line, at the nonpermis- sive temperature, has greatly reduced the rates of protein synthesis. This rate-limiting step is which of the following?",
    incorrectAnswers: [
      "The presence of a nonsense mutation in the DNA",
      "A lack of capping of the mRNA",
      "An extended poly-A tail",
      "A loss of AUG codons",
    ],
    correctAnswer: "A mutation which creates an alternative splice site",
    explanation:
      "A mutation which creates an alterna- tive splice site. The patient has developed a mutation in an intron which acts, only a small percentage of the time, as a splice donor site instead of the normal site at the intron/exon boundary. Thus, when this site is uti- lized by the splicesome, a piece of the intron is incorpo- rated into the mRNA product, producing a longer than normal mRNA. This is an infrequent event, however, as judged by the finding that the density of the normal sized mRNA band on the gel is darker than this abnor- mal band. A nonsense mutation in the DNA will not affect transcription (although it does affect the protein product made from the mRNA). The lack of a cap would result in an unstable mRNA that perhaps would not be translated but would not significantly change the size of the mRNA. Poly-A polymerase adds the poly-A tail and would add the same size tail to both species of mRNA. If the polyadenylation signal were mutated, then the overall mRNA size would be larger, but there would not be two different proteins produced. Since the patient has a β-thalassemia, defective β-globin protein is being produced from the larger mRNA. Loss of methionine codons will affect translation, but not transcription.",
    image: "",
  },
  {
    id: "5",
    question:
      "A careful analysis of cellular components discovers short-lived RNA species in which an adenine nucleotide is found with three phosphodiester bonds (linked to the 2′, 3′, and 5′ carbons). This transient structure is formed during which of the following processes?",
    incorrectAnswers: [
      "mRNA cap formation",
      "mRNA polyadenylation",
      "Transcription of microRNAs",
      "Transcription of rRNA",
    ],
    correctAnswer: "Splicing of hnRNA",
    explanation:
      "Splicing of hnRNA. As seen on page 34, an adenine nucleotide in the middle of the intron is a required component for splicing to occur, and the sugar residue attached to this adenine is involved in three phosphodiester linkages; the normal 3′ and 5′ and also 2′ to the splice site. The resulting structure resembles a lariat. Such a structure does not form during capping, polyadenylation, or the normal transcription of genes. It is unique to the splicing mechanism.",
    image: "",
  },
  {
    id: "6",
    question:
      "A patient suffering from chills, vomiting, and cramping was rushed to the emergency department. He had eaten wild mushrooms for dinner that he had picked earlier in the day. His symptoms are due to an inhibition of which of the following enzymes?",
    incorrectAnswers: [
      "RNA polymerase I",
      "RNA polymerase III",
      "Telomerase",
      "DNA primase",
    ],
    correctAnswer: "RNA polymerase II",
    explanation:
      "RNA polymerase II. The patient has ingested α-amanitin, a toxin that, at very low concentra- tions, inhibits RNA polymerase II and blocks the tran- scription of single-copy genes. RNA polymerase I and III are more resistant to the effects of amanitin, and this toxin has no effect on telomerase or any type of DNA polymerase. The inability to synthesize new proteins in all cells leads to the symptoms observed. The structure of amanitin is shown below. Amanitin poisoning initially causes gastrointestinal disturbances, then electrolyte imbalance and fever, followed by liver and kidney dys- function. Death can follow 2 to 3 days after ingestion.",
    image: "",
  },
  {
    id: "7",
    question:
      "The message identical strand is best represented by which letter on the diagram?",
    incorrectAnswers: ["Id-A", "Id-C", "Id-D", "Id-E"],
    correctAnswer: "Id-B",
    explanation:
      "The message-identical strand of DNA is the one that has the same sequence of bases as the mRNA product (with the exception that when there is a U in RNA, there is a T in DNA). Thus, this is the strand that is complementary to the strand that is being used as the template for RNA synthesis (which is designated as C in the figure).",
    image: "RNA-78.png",
  },
  {
    id: "8",
    question:
      "The 3′ end of the newly synthesized RNA is best repre- sented by which letter on the above diagram?",
    incorrectAnswers: ["Id-A", "Id-B", "Id-C", "Id-"],
    correctAnswer: "Id-D",
    explanation:
      "The newly synthesized RNA strand is made in the 5′–3′ direction, so letter A represents the 5′ end of the newly synthesized RNA and letter D repre- sents the 3′ end. The DNA template is being read in the 3′–5′ direction (letter C would represent the 3′ end of the template strand).",
    image: "RNA-78.png",
  },
  {
    id: "9",
    question:
      "A 22-year-old woman (see the figure below) sees her physician for a variety of complaints over the past year. These include fevers that come and go, fatigue, joint pain and stiffness, a butterfly rash on the face, sores in her mouth, easy bruising, and increased feelings of anxiety and depression. A diagnostic blood test is likely to show autoimmune antibodies directed against which class of molecules?",
    incorrectAnswers: [
      "DNA polymerases",
      "Carbohydrates",
      "tRNA complexes",
      "Peroxisomal proteins",
    ],
    correctAnswer: "Ribonuclear protein complexes",
    explanation:
      "Ribonuclear protein complexes. The woman has lupus, an autoimmune disorder. One class of antibodies developed is against the snurps, small ribonuclear protein complexes, which are involved in mRNA splicing. Autoantibodies are not developed against DNA polymerase (although antibodies against DNA are often found), carbohydrates, tRNA complexes, or peroxisomal proteins.",
    image: "",
  },
  {
    id: "10",
    question:
      "When first discovered, introns were not thought to code for a functional product. Recently, however, introns have been found to code for products that can regulate the expression of a large number of genes. This regula- tion occurs at which stage of gene expression?",
    incorrectAnswers: [
      "Transcription of mRNA",
      "Posttranscriptional processing",
      "Export of mRNA into the cytoplasm",
      "Ribosome biogenesis",
    ],
    correctAnswer: "Degradation of the mRNA",
    explanation:
      "Degradation of the mRNA. Introns have been shown to contain genes for microRNAs, which are processed to small, interfering RNAs, which can regu- late gene expression either by binding to and initiating degradation of a particular mRNA or by binding to a particular mRNA and blocking translation of the mRNA. These small RNA molecules do not affect the transcrip- tion of the target mRNA, nor posttranscriptional pro- cessing (capping and polyadenylation). They also do not affect the export of mRNA into the cytoplasm, nor do they alter ribosome biogenesis. As an example, the miR- 17-92 cluster encodes seven microRNAs and resides within an intron of the C13 or F25 gene on chromo- some 13. These miRNAs are upregulated in lung cancer, and may contribute to the progression of the disease by downregulating their target genes.",
    image: "",
  },
  {
    id: "11",
    question:
      "A researcher, while studying a liver cell line, found the following anomalous result. He was studying protein X production within the liver cell. Western blot analysis using a polyclonal antibody showed a normal size, and amount, for protein X. Enzyme assays demonstrated normal levels of activity for protein X. Northern blot analysis, however, yielded two bands of equal intensity: one the expected size and the other 237 nucleotides longer. One possible explanation for this finding is which of the following?",
    incorrectAnswers: [
      "A nonsense mutation in the DNA",
      "A loss of an intron/exon junction",
      "Inefficient transcription initiation",
      "Gain of an alternative splice site",
    ],
    correctAnswer: "Loss of a transcription termination site",
    explanation:
      "Loss of a transcription termination site. One of the genes that encoded protein X had a mutation at the transcription termination site, which enabled the mRNA to be transcribed into a longer form (237 nucleotides longer). The reading frame of the mRNA was intact, as was the start and stop codons, so the protein produced from this lengthened mRNA was normal. If a nonsense mutation had been created in gene X, a truncated, likely inactive, protein would have been produced. The loss of an intron/exon junction would alter the splicing pattern of the mRNA, and would most likely alter the reading frame of the protein and create a nonfunctional protein. Another possibility is that the loss of an intron/exon junction would produce an elon- gated protein (due to intronic DNA being transcribed as part of the mRNA), with a concomitant loss of activity. Gaining an alternative splice site would potentially lead to two forms of the final protein being produced, yet only one is seen by Western blot. Inefficient transcrip- tion initiation would not produce two distinct mRNAs.",
    image: "",
  },
  {
    id: "12",
    question:
      "A young child of Mediterranean parents was brought to the pediatrician due to lethargy, tiredness, and pallor. Blood analysis revealed a microcytic anemia, although iron levels were normal (see the figure below). What test should be run to determine that the child has a variant of thalassemia?",
    incorrectAnswers: [
      "PCR of the gene for RNA polymerase",
      "Western blot of snurps in the child",
      "Western blot of TFIID",
      "PCR of the gene for γ-globin in the child",
    ],
    correctAnswer: "Westernblottingofthepeptidechainsinhemoglobin",
    explanation:
      "Western blotting of the peptide chains in hemoglobin. Thalassemias are the result of an imbalance in the synthesis of α- and β-globin genes. If this were to occur, a Western blot analysis of the α and β chains would show a difference in the amount of each in the red blood cells, suggesting either an α- or β-thalassemia (in an α-thalassemia, one would see less α chains or variants of α chains being pro- duced, as compared to just one, normal β chain. The opposite would be true for a β-thalassemia). As many α-thalassemias are caused by gene deletions, FISH might be another way to determine this condition, using a probe specific for the α-globin gene. Most β-thalassemias are not due to gene deletions. PCR for γ-globin (fetal Hb) or RNA polymerase will not address an imbalance in α- and/or β-globin chain synthesis. Similarly, Western blots of snurps or TFIID will not address an imbalance in synthesis (if there was a prob- lem with snurps, all RNA splicing would be affected, not just the α or β-globin gene; similarly, if TFIID were altered, all mRNA synthesis would be altered). Clinical labs will also use hemoglobin electrophoresis to quanti- tate the levels of globin chains in a patient. The illustra- tion used in the question was obtained from a patient with β-thalassemia.",
    image: "",
  },
  {
    id: "13",
    question:
      "An intestinal cell line was being studied for its ability to produce lipid-containing particles. Surprisingly, a mutated variant of this cell line was unable to do so. Western blot analysis yielded a protein with the same size as apolipoprotein B100. A potential mutation in this cell line, which would lead to this result, is which of the following?",
    incorrectAnswers: [
      "Splicing defect",
      "Cap formation altered",
      "Inefficient poly-A tail addition",
      "Promoter alteration",
    ],
    correctAnswer: "RNA editing defect",
    explanation:
      "C. The intestine con- tains an RNA editing complex that alters one base in the apo B100 mRNA, which creates a stop codon, such that when the mRNA is translated, protein synthesis stops after 48% of the codons have been translated. This is a unique type of posttranscriptional modification. The ini- tial transcripts for both apo B48 and apo B100 are the same. Mutations that alter splicing, cap formation, or polyadenylation would not produce the full size protein in place of apo B48. Mutations in the promoter would alter initiation of transcription, but not the end product formed. RNA editing in this case is shown in the figure below.",
    image: "",
  },
  {
    id: "14",
    question:
      "A patient displays tiredness and lethargy, and blood work demonstrates an anemia. Western blot analysis indicates significantly greater levels of α-globin than β-globin. Molecular analysis indicates a single nucleotide change in an intron of the β-globin gene. How does such a mutation lead to this clinical finding?",
    incorrectAnswers: [
      "A microRNA is produced, which is targeted against the β-globin mRNA, thereby reducing β-globin production",
      "Creation of a new transcription initiation site, such that the mRNA for β-globin is now out of framea",
      "Creation of a stop codon in the β-globin mRNA",
      "Elimination of the polyadenylation signal, thereby reducing β-globin production",
    ],
    correctAnswer:
      "Creation of an alternative splice site, such that β-globin levels are decreased",
    explanation:
      "Creation of an alternative splice site, such that b-globin levels are decreased. If an intronic mutation created an alternative splice site, the splice- some would utilize this site for splicing a certain percent- age of the time, forming an mRNA that would not code for functional β-globin protein. This would lead to a reduction in β-globin synthesis relative to α-globin syn- thesis, thereby creating a β-thalassemia. If a microRNA were created which targeted the β-globin mRNA, then there would be a drastic reduction in β-globin synthesis as all β-globin mRNA would be targeted for destruction, which is not observed. Since the introns would be nor- mally spliced from the mature mRNA, the creation of a transcription initiation site would have no effect on the mature mRNA. Similarly, the creation of a stop codon in an intron would have no effect on the mature mRNA. The polyadenylation signal is not found in introns, so the mutation could not be at this location within the gene.",
    image: "",
  },
  {
    id: "15",
    question:
      "Consider two individuals, each with some form of thala- ssemia. Patient X has a deletion of the α genes on one chromosome but normal expression of all other α and β genes. This person has a mild form of the disease. Patient Y has a normal complement of α genes but has a homozygous mutation in the β genes in which an abnor- mal splice site is used 80% of the time, producing a tran- script with a premature stop codon. Patient Y has a more severe disease than patient X. Why is patient Y’s disease more severe than patient X’s?",
    incorrectAnswers: [
      "The ratio of α/β in patient X is 1:2, whereas in patient Y it is 1:5",
      "The ratio of α/β in patient X is 2:1, whereas in patient Y it is 1.2:1",
      "The ratio of α/β in patient X is 2:1, whereas in patient Y it is 1:1.2",
      "The ratio of α/β in patient X is 1:2, whereas in patient Y it is 1.2:1",
    ],
    correctAnswer:
      "The ratio of α/β in patient X is 1:2, whereas in patient Y it is 5:1",
    explanation:
      "The ratio of a/b in patient X is 1:2, whereas in patient Y it is 5:1. An individual with the genotype of patient X is producing 50% normal α chain (two normal genes, two deleted) and 100% β-globin for a ratio of 1:2 of α to β(each chromosome 11 contains two α-genes, for a total of four α-genes per cell). Such a ratio would lead to little, if any, clinical symptoms. Patient Y is producing 100% α chain and 20% β chain for a 5:1 ratio of α to β. This ratio is big enough to lead to clinical symptoms. Recall, the major biochemi- cal problem in thalassemia is the imbalance in synthe- sis of α and β chains, leading to nonfunctional α4 and β4 tetramers forming from the excess chains produced. The other ratios presented as answers do not represent the mutations present in the patients.",
    image: "",
  },
  {
    id: "16",
    question:
      "Dideoxynucleotides are effective agents against DNA synthesis, but appear to have little, or no, effect on RNA synthesis. This is most likely due to which of the following?",
    incorrectAnswers: [
      "Lack of a 3′-OH group",
      "Presence of a 5′-phosphodiester bond",
      "Presence of an N-glycosidic bond at carbon 1",
      "Factor TFIID does not recognize deoxyribonucleotides",
    ],
    correctAnswer: "Lack of a 2′-OH group",
    explanation:
      "Lack of a 2′-OH group. RNA polymerase is looking for substrates that contain a 2′-hydroxyl group (recall, DNA polymerase utilized dNTPs, which normally lack a hydroxyl group at the 2′ position). As this substrate lacks a 2′-hydroxyl group, therefore the binding affinity of this drug for RNA polymerase is very low, such that the likelihood that this chain termina- tor will be incorporated into a growing RNA chain is minimal. DNA polymerase, however, utilizes substrates lacking a 2′-hydroxyl group, and can bind and utilize this substrate.",
    image: "",
  },
  {
    id: "17",
    question:
      "TFIIIA is a necessary transcription factor for the synthe- sis of which class of molecules?",
    incorrectAnswers: ["mRNA", "rRNA", "hnRNA", "microRNAs"],
    correctAnswer: "tRNA",
    explanation:
      "tRNA. RNA polymerase III requires transcription factors to bind to promoters, which are labeled as TFIIIx, where x is a variable letter. Polymerase III will synthesize tRNA molecules and 5S rRNA. RNA polymerase II synthesizes mRNA while RNA polymerase I synthesizes primarily rRNA. Accessory factors for the polymerases are labeled TFIIx or TFIx, respectively. MicroRNAs are synthesized by polymerase II. hnRNA is the precursor for mature mRNA, also synthesized by RNA polymerase II.",
    image: "",
  },
  {
    id: "18",
    question:
      "A 2-year-old has been diagnosed with a rhabdomyo- sarcoma and is placed on chemotherapy, including the drug dactinomycin. Dactinomycin exerts its effects by which of the following mechanisms?",
    incorrectAnswers: [
      "Binding of the drug to ribosomes, thereby blocking translation",
      "Binding of the drug to transcription factors, thereby blocking RNA synthesis",
      "Binding of the drug to RNA polymerase II, thereby blocking RNA synthesis",
      "Binding of the drug to DNA, thereby blocking DNA synthesis",
    ],
    correctAnswer: "Binding of the drug to DNA, thereby blocking RNA synthesis",
    explanation:
      "Binding of the drug to DNA, thereby blocking RNA synthesis. Dactinomycin binds to DNA and blocks the ability of RNA polymerase to transcribe genes, thereby blocking transcription. The drug does not bind specifically to ribosomes, transcription factors, or RNA polymerase II. It also does not interfere with DNA synthesis.",
    image: "",
  },
  {
    id: "19",
    question:
      "A man with a bacterial infection was prescribed rifampin to resolve the infection. Rifampin does not affect eukary- otic cells due to which of the following?",
    incorrectAnswers: [
      "Differences in ribosome structure between eukary- otes and prokaryotes",
      "Differences in transcription factors between eukaryotes and prokaryotes",
      "Inability of the drug to bind to DNA containing nucleosomes",
      "Differences in snurp structure between eukaryotes and prokaryotes",
    ],
    correctAnswer:
      "Structural differences in RNA polymerase between eukaryotes and prokaryotes",
    explanation:
      "Structural differences in RNA polymerase between eukaryotes and prokaryotes. Rifampin binds to prokaryotic RNA polymerase but cannot bind (due to the different structures of the RNA polymerase between prokaryotic and eukaryotic cells) to eukaryotic RNA polymerase. The drug does not bind to ribosomes, DNA, snurps, or transcription factors. Snurps are not present in prokaryotic cells.",
    image: "",
  },
  {
    id: "20",
    question:
      "A cell line was derived, which was temperature sensitive for splicing hnRNA. At the nonpermissive temperature, splicing was unable to occur. A potential activity that is mutated in the splicesome is which of the following?",
    incorrectAnswers: [
      "Ability to carry out RNA synthesis",
      "Ability to carry out DNA synthesis",
      "Loss of 3′–5′ exonuclease activity",
      "Loss of ability for transcription-coupled DNA repair",
    ],
    correctAnswer: "Loss of endonuclease activity",
    explanation:
      "Loss of endonuclease activity. The act of splicing requires the breakage of internal phos- phodiester bonds, which is the job of an endonuclease. Splicing does not require new RNA synthesis, DNA syn- thesis, error-checking (the 3′–5′ exonuclease activity), or DNA repair. The process of splicing is shown again below.",
    image: "",
  },
];

export default data;
