const data = [
  {
    id: "1",
    question:
      "While studying the lac operon in bacteria, a scientist isolates mutants of Escherichia coli, which always express the genes of the lac operon (constitutive synthesis). The scientist creates partial diploids of the regulatory elements of the lac operon in these mutants of E. coli. In one partial diploid, expression of the lac operon is still constitutive (synthesis of the genes is observed even in the absence of an inducer). A likely explanation for this result is which of the following?",
    incorrectAnswers: [
      "There is a mutation in trans with the operon",
      "Inducer can no longer bind to the repressor",
      "Inducer binds too tightly to the repressor",
      "The transactivation domain of the repressor is mutated",
    ],
    correctAnswer: "There is a mutation in cis with the operon",
    explanation:
      "There is a mutation in cis with the operon. Constitutive synthesis can occur by either of the two mechanisms. The fi rst is an inability to synthe- size lac repressor; the second is to have a mutation in the operator region that renders repressor binding impos- sible (an oc mutation; see the fi gure below). An inability to synthesize lac repressor can be repaired in trans; if the partial diploid contains a functional lac repressor gene, functional protein will be synthesized from the gene, which can bind to the chromosomal operator region, and regulate lac gene expression. If, however, an oc mutation occurred, the operator region is in cis with the operon and can only regulate regions of DNA that are adjacent to the operator. Thus, if a partial diploid contains a normal operator region on the extrachro- mosomal region of DNA, that operator region cannot regulate the operon on the chromosomal DNA. Thus, the constitutive mutant that was not rescued in a par- tial diploid is most likely an oc mutation. If the inducer could no longer bind to the repressor, then no expres- sion would occur, as the repressor would not leave the operator region. In addition, if this were the case, then adding normal repressor to the cell (via the partial dip- loid) should allow expression of the operon. Similarly, if inducer bound too tightly to the repressor, the introduc- tion of normal repressor should reverse the effects of the mutated repressor. The lac repressor does not contain a transactivation domain.",
    image: "",
  },
  {
    id: "2",
    question:
      "An African American patient has displayed vaso- occlusive episodes for most of his life. The incidents are more prevalent under conditions in which blood oxygen levels are low, such as during exercise or taking trips to locations at high altitudes. The patient has been placed on hydroxyurea. The rationale behind this treatment is which of the following?",
    incorrectAnswers: [
      "To prevent vaso-occlusive episodes through hydroxy- urea induced protein degradation",
      "To reduce synthesis of a defective protein",
      "To enhance oxygen levels in the blood",
      "To activate the enzyme that produces 2,3-bisphos- phoglycerate",
    ],
    correctAnswer: "To induce synthesis of a functional protein",
    explanation:
      "To induce synthesis of a functional protein. The patient has sickle cell anemia, and hydroxyurea treatment is designed to activate tran- scription of the γ-globin chain, which is normally only expressed during development (fetal hemoglobin). When expressed, the γ-globin gene will form func- tional hemoglobin tetramers with the α-globin chains, thereby reducing the effects of the mutated β-globin chain. Hydroxyurea does not bind to hemoglobin and denature it; it does not reduce the synthesis of the β-chains, nor does it alter oxygen levels in the blood or 2,3-bisphosphoglycerate levels in the eryth- rocyte. The γ-chain is normally turned off at birth as part of the hemoglobin-switching pathway (see the fi gure on page 49). The challenge to scientists at this time is to understand how to reactivate γ-chain syn- thesis in patients with both sickle cell disease and β-thalassemias.",
    image: "",
  },
  {
    id: "3",
    question:
      "A hematologist is studying an African American family as one of the children was recently diagnosed with sickle cell disease. His sibling shows no symptoms of the disease, although genetic tests showed homozygos- ity for the HbS gene. An analysis of his red blood cells is likely to show which of the following?",
    incorrectAnswers: [
      "Reduced alpha chain synthesis",
      "Reduced sickle chain synthesis",
      "Increased zeta chain synthesis",
      "Increased delta chain synthesis",
    ],
    correctAnswer: "Increased gamma chain synthesis",
    explanation:
      "Increased gamma-chain synthesis. The sibling has, in addition to sickle cell disease, hereditary persistence of fetal hemoglobin (HPFH). Individuals with HPFH express the γ-globin chain throughout their life, and it can be at high levels. Since this child is express- ing both the HbS protein and the γ-protein, some nor- mal fetal hemoglobin can be formed in this child, with reduced levels of HbS formed. This reduces the level of sickling and allows oxygen delivery to the tissues. Thus, the HPFH protects against the effects of homozygous HbS expression, and the sibling shows few, if any, symp- toms of his HbS mutations. Alterations in the expression of the δ-chain have not been observed. Reduced α-chain synthesis would lead to an anemia, and there is no effec- tive way to reduce the synthesis of HbS chain. Increased ζ-synthesis has also not been observed.",
    image: "",
  },
  {
    id: "4",
    question:
      "A healthy teenage girl has come to her pediatrician for a presports physical. Results of hemoglobin electrophore- sis indicated an elevation of fetal hemoglobin. This can come about via which of the following mechanisms?",
    incorrectAnswers: [
      "Overall increased expression of all transcription factors",
      "Overall reduced expression of all transcription factors",
      "Deletions in the locus control region of the α-globin gene cluster",
      "Inappropriate looping of chromosomal DNA, allow- ing transcription of previously inaccessible genes to occur ",
    ],
    correctAnswer:
      "Deletions in the locus control region of the β-globin gene cluster",
    explanation:
      "Deletions in the locus control region of the b-globin gene cluster. The girl is expressing HPFH (hereditary persistence of fetal hemoglobin). This can come about by deletions on the locus control region of the β-globin gene cluster (since fetal hemo- globin is α2 γ2 , and adult hemoglobin is α2 β2 , mutations in the locus control region of the α-gene cluster will not affect fetal hemoglobin synthesis). A general loss of transcription factors would not lead to increased tran- scription of the γ-chains, nor would a general increase in all transcription factor expression in the cell. While inappropriate looping may help to lead to γ-globin gene expression, the looping needs to be modulated by tran- scription factors for gene expression to occur.",
    image: "",
  },
  {
    id: "5",
    question:
      "In a study with mice exhibiting hypercholesterolemia, cholesterol was affi xed to double-stranded RNA, which targeted the dsRNA to enter cells through cholesterol diffusion through the plasma membrane. The dsRNA was targeted to bind to mRNA that encoded the apoli- poprotein B gene and resulted in a lowering of circulat- ing cholesterol levels. This result occurs due to which of the following?",
    incorrectAnswers: [
      "Inhibition of apolipoprotein B transcription",
      "Inhibition of apolipoprotein B folding",
      "Enhanced degradation of apolipoprotein B",
      "RNA editing of the apolipoprotein B mRNA",
    ],
    correctAnswer: "Inhibition of apolipoprotein B translation",
    explanation:
      "Inhibition of apolipoprotein B trans- lation. The cholesterol tag on the dsRNA allowed cells to take up the dsRNA, which was processed by intracellular ribonucleases to make a specifi c silenc- ing RNA for the apolipoprotein B mRNA. Binding of the processed dsRNA to the apoB mRNA will lead to either the destruction of the mRNA or the blockage of translation of the mRNA. In either event, there will be a reduction in apoB translation such that cells can no longer produce apoB100 or apoB48. The dsRNA does not affect the transcription of the apoB gene, nor does it interfere with apoB folding once it becomes transcribed and translated. The dsRNA does not affect the turnover of the apoB protein, nor does it edit the apoB mRNA (other systems in the cell will do that). This situation was fi rst reported in Soutschek J et al. Nature. 2004 Nov 11;432(7014):173–178.",
    image: "",
  },
  {
    id: "6",
    question:
      "A woman with a BMI of 16.5 visits her family physician because she always feels tired. The history indicates that the woman is always on a diet, exercises over 3 h/day, and perceives herself as fat. Blood work indicates that her glucose levels are only slightly below normal under fasting conditions. The patient’s ability to maintain her blood glucose levels near normal results, in part, from activation of which of the following proteins?",
    incorrectAnswers: [
      "eIF4",
      "eEF2",
      "Ribosomal subunit S6",
      "Steroid hormone receptor",
    ],
    correctAnswer: "CREB",
    explanation:
      "CREB. CREB (cyclic AMP response element binding protein) is a transcription factor that is activated by protein kinase A and that regulates, in part, the expression of phosphoenolpyruvate carboxykinase (PEPCK), a necessary protein for gluconeogenesis. Since the patient is anorexic, her blood glucose levels are being maintained primarily by gluconeogenesis, and the enzymes for that pathway need to be upregulated. The release of glucagon and epinephrine, both of which would be elevated in this patient, leads to the activation of protein kinase A and an increase in gene transcription for those genes regulated by CREB. Under these conditions, protein synthesis will be limited, so factors necessary for protein synthesis would not be generally activated (eIF4, eEF2, and ribosomal protein S6). Neither glucagon nor epineph- rine works through steroid hormone receptors (they both utilize serpentine receptors on the cell membrane).",
    image: "",
  },
  {
    id: "7",
    question:
      "The molecular mechanism responsible for these physi- cal observations in the boy is which of the following?",
    incorrectAnswers: [
      "Enhanced gene transcription",
      "Impaired protein synthesis",
      "Enhanced protein synthesis",
      "Altered chromosomal structure",
    ],
    correctAnswer: "Impaired gene transcription",
    explanation:
      "Impaired gene transcription. Indi- viduals with Li–Fraumeni syndrome inherit a mutated copy of p53, the product of the TP53 gene (on chromo- some 17). p53 is a transcription factor whose major job is to monitor the health of DNA; if DNA alterations are found, p53, acting as a transcription factor, will initiate new gene transcription to arrest the cell cycle until the DNA damage is repaired and to also induce genes neces- sary for DNA repair. If the DNA cannot be repaired, p53 will initiate gene transcription leading to cellular death (apoptosis). In the absence of p53 activity, damaged DNA will be replicated, which increases the probability of errors, eventually causing a mutation that leads to a can- cer. Thus, the initial inactivating event is impaired gene transcription by p53, which is the trigger for all other events that follow. Mutations in p53 do not lead, directly, to enhanced gene transcription (this may occur as a result of secondary mutations, but not directly from the mutations in p53) or to alterations in protein synthesis. p53 mutations also do not alter chromosome structure.",
    image: "",
  },
  {
    id: "8",
    question:
      "A patient has been prescribed methotrexate for che- motherapy. After an initial success in reducing tumor growth, the tumor resumes its rapid growth. One poten- tial mechanism for this is which of the following?",
    incorrectAnswers: [
      "Amplification of the gene for degrading metho trexate",
      "Reduced transcription of the gene allowing metho- trexate entry into the cell",
      "Increased transcription of the gene allowing metho- trexate effl ux from the cell",
      "An inactivating mutation in the gene for DHFR",
    ],
    correctAnswer: "Amplification of the dihydrofolate reductase (DHFR) gene",
    explanation:
      "Amplification of the dihydrofolate reductase (DHFR) gene. Methotrexate resistance most often occurs due to amplifi cation of the gene for DHFR, the target for methotrexate treatment. Through overpro- duction of DHFR, there is suffi cient enzyme available to overcome the effects of the drug given to the patient. Resistance does not come about by altering the rate of entry of the drug into the cell, by inactivating DHFR, or by inducing an enzyme that can degrade methotrexate.",
    image: "",
  },
  {
    id: "9",
    question:
      "A 16-year-old girl has been losing weight and feeling lethargic over the past 4 months and is taken to the physician by her parents. During the history, the par- ents expressed concern that their daughter had seemed to eat very little during the day, a claim denied by the patient. Laboratory results indicated an iron defi ciency and a microcytic anemia. The cells of the patient have adapted to the iron defi ciency in which one of the following ways?",
    incorrectAnswers: [
      "Increased transcription of ferritin mRNA",
      "Reduced transcription of the transferrin receptor mRNA",
      "Increased translation of the ferritin mRNA",
      "Increased degradation of the transferrin receptor mRNA",
    ],
    correctAnswer: "Increased translation of the transferrin receptor mRNA",
    explanation:
      "Increased translation of the transfer- rin receptor mRNA. Since the patient has an iron defi ciency, leading to a microcytic anemia, cells will upregulate their mechanism for acquiring iron, which is through the transferrin receptor. Ferritin is the iron storage protein within cells, and if intracellular iron levels are low, there is no need to upregulate the syn- thesis of ferritin (its synthesis is actually downregulated under these conditions). The iron travels in the circu- lation bound to transferrin, so increasing the number of transferrin receptors on the cell surface will enable a more effi cient transport of iron and transferrin into the cells. The regulation of transferrin receptor synthe- sis is at the level of translation, as is the regulation of ferritin synthesis. Thus, cells under these conditions will increase their translation of the transferrin receptor mRNA. This translational regulation is shown below.",
    image: "",
  },
  {
    id: "10",
    question:
      "Theoretically, a disease could result from an increased expression of a particular gene. This can occur in eukary- otes through a single-nucleotide mutation in a promoter- proximal element. This is best explained by which one of the following?",
    incorrectAnswers: [
      "More efficient splice site recognition",
      "Beneficial amino acid replacement derived from the missense mutation",
      "Increased amount of sigma factor binding",
      "Reduced energy need to melt the DNA helix at this position",
    ],
    correctAnswer:
      "Increased opportunity for hydrogen bonding to a transacting factor",
    explanation:
      "Increased opportunity for hydrogen bonding to a transacting factor. A single nucleotide substitution in a promoter-proximal region has the capability of increasing hydrogen bonding to a transact- ing factor, thereby increasing the interaction between the factor and DNA and enhancing recruitment of RNA polymerase to the promoter. Since the mutation is in the promoter region, it is not involved in splicing (which occurs at exon–intron borders), it does not code for an amino acid (since exons are not in the promoter region), it is not related to sigma (which is prokaryotic specifi c), and the DNA helix does not have to be signifi - cantly melted in this area to allow transcription factor binding.",
    image: "",
  },
  {
    id: "11",
    question:
      "A human genetic condition in which too much of a gene is routinely expressed has been mapped to a locus on a different chromosome from where the gene in ques- tion is located. Which one of the following is a potential explanation for the condition?",
    incorrectAnswers: [
      "The activated gene has a TATA box mutation",
      "The locus control region for the gene is deleted",
      "A transcriptional activator sustained a missense mutation, which reduces its affi nity for DNA",
      "A variant promoter region is formed owing to a splice site mutation",
    ],
    correctAnswer:
      "A gene encoding a transcriptional repressor has been mutated",
    explanation:
      "A gene encoding a transcriptional repres- sor has been mutated. For the sake of this answer, let us assume that the overexpressed gene (named A) is located on chromosome X and the mutated gene (named B) is located on chromosome Y. The gene on chromosome Y is producing a transcriptional repressor that binds to the promoter region of the gene A on chromosome X. When the repressor is expressed, gene A transcription is reduced. The protein product of gene B is acting in trans in regulating gene A expression. A mutation that inactivates the protein product of gene B, then, would be unable to repress gene A transcription, and lead to overexpression of gene A. If the promoter for gene A had a TATA box mutation, one would expect reduced expression (due to an inability of the basal transcrip- tion complex to bind), rather than enhanced expres- sion. Similarly, if the locus control region of the gene is deleted, then reduced expression for gene A would be expected, not enhanced expression. If a transcrip- tional activator (gene B) suffered a missense mutation that reduced its affi nity for DNA, there would be less transcription of gene A, not enhanced expression. And, fi nally, promoter regions do not undergo splicing.",
    image: "",
  },
  {
    id: "12",
    question:
      "A patient is taking cyclosporin A after receiving a kidney transplant. Cyclosporin A protects against organ rejec- tion by which of the following mechanisms?",
    incorrectAnswers: [
      "Blocking translation of cytokine genes",
      "Activating transcription of cytokine receptors",
      "Stimulating the phosphorylation of transcription factors",
      "Stimulating translation of cytokine genes",
    ],
    correctAnswer:
      "Blocking the dephosphorylation of specifi c tran- scription factors",
    explanation:
      "Blocking the dephosphorylation of specific transcription factors. Cyclosporin A binds to the protein cyclophilin in immunocompetent lymphocytes, and this protein complex leads to the inactivation of cal- cineurin. Calcineurin, in response to increases in cyto- plasmic calcium, will activate its phosphatase activity and dephosphorylate cytoplasmic nuclear factor of activated T-lymphocytes (NF-AT), a transcription factor. When dephosphorylated NF-AT will translocate to the nucleus, it will interact with nuclear factors and bind to DNA, initiating new gene transcription. When calcineurin is inactivated via cyclosporin–cyclophilin binding, NF-AT cannot translocate to the nucleus, and cytokine synthesis by the cell (second messengers) is compromised. Immu- nocompetent cells have very low levels of calcineurin, which make them susceptible to cyclosporin treatment.",
    image: "",
  },
  {
    id: "13",
    question:
      "A patient has asthma, but has become resistant to glucocorticoid inhalation. A potential mechanism for this resistance is which of the following?",
    incorrectAnswers: [
      "Inability of glucocorticoids to enter target cells",
      "Reduction of levels of transactivating factors in the nucleus",
      "Cytokine induction of protein kinases",
      "Increased dimerization of the glucocorticoid receptor",
    ],
    correctAnswer: "Inability to induce histone acetylation",
    explanation:
      "Inability to induce histone acetyla- tion. Glucocorticoids bind to a cytoplasmic recep- tor and translocate to the nucleus, where they bind to glucocorticoid response elements on the DNA, leading to a complex of proteins at this site. A number of trans- activating factors recruited to the DNA contain histone acetyl transferase (HAT) activity, which leads to further unwinding of the DNA from the nucleosome, enabling gene transcription. Patients who become resistant to glucocorticoid treatment show a reduction in histone acetylation in response to the drug for a variety of rea- sons. The resistance does not appear to be due to inabil- ity of the drug to enter target cells. Once inside the cell, the drug will bind to the receptor, and dimerization of the receptor is normal. In some resistant individu- als, the dimerized receptor has trouble translocating to the nucleus, which leads to the reduction in HAT activ- ity. In other patients, however, translocation is normal, and the reduction in HAT activity appears to be due to an inability to recruit transactivating factors to the complex, which contain the HAT activity. The levels of transactivating factors are normal, but it has been hypothesized that the receptor is phosphorylated under resistance conditions, leading to an inability to attract the transactivating factors.",
    image: "",
  },
  {
    id: "14",
    question:
      "Induction of certain transcription factors leads to a decrease in the expression of certain genes. This occurs through which of the following mechanisms?",
    incorrectAnswers: [
      "Decreasing the rate of RNA polymerase catalyzed phosphodiester bond formation",
      "Inducing the synthesis of a protein that posttran- scriptionally edits mRNA such that translation ini- tiation is blocked",
      "Through stimulation of proteins with HAT activity",
      "Increasing enhancer binding to DNA",
    ],
    correctAnswer:
      "By decreasing the rate of RNA polymerase binding to the promoter",
    explanation:
      "By decreasing the rate of RNA poly- merase binding to the promoter. Transcription factors can be either positive or negative acting. In either event, to exert an effect on transcription, the factor must bind to the DNA and then either promote RNA polymerase binding to DNA (in which case, it is a positive-acting factor) or inhibit RNA polymerase binding to DNA (in which case it is a negative-acting factor). Negative acting factors can do so by blocking the binding of positively acting factors to the DNA or by blocking necessary trans- activating factors from binding to other factors already bound to the DNA. In either event, the net result is a reduction in the rate at which RNA polymerase binds to the promoter region to initiate transcription. Once initiated, the rate of phosphodiester bond formation is constant. RNA editing is a rare event, and is not used to regulate gene transcription. If HAT activity were stimulated, gene transcription would be increased, as the acetylated histones would have a reduced affi nity for DNA, and it would be easier for RNA polymerase to bind to the promoter region. Increasing enhancer bind- ing to DNA would also increase the rate at which RNA polymerase would bind to the promoter, as enhancers increase the association of positive-acting transactiva- tion factors, which would promote RNA polymerase binding to the promoter and transcription.",
    image: "",
  },
  {
    id: "15",
    question:
      "Shown below is a partial map of the promoter region, and promoter-proximal region, for the γ-globin gene. The overlapping binding sites for transcription factors allow for which of the following to occur?",
    incorrectAnswers: [
      "The ability to reduce the risk of losing transcrip- tional control via mutation in this region",
      "Promoting looping of this DNA region",
      "Providing a target for interfering RNAs",
      "Providing ribosome binding sites for translation ini- tiation",
    ],
    correctAnswer:
      "The ability to modulate the binding of positive, or negative, transacting factors to the DNA",
    explanation:
      "The ability to modulate the binding of positive, or negative, transacting factors to the DNA. The recognition of overlapping sequences on DNA by differ- ent factors allows either positive-acting or negative-acting effects, depending on which transcription factor is pres- ent in higher concentration. The γ-globin gene is turned off after birth, and this has to do, in part, with factors bound to the promoter. When stage selector protein (SSP) is bound, γ-globin synthesis is favored, but when SP1 binds to this area instead, γ-globin synthesis is repressed. A similar story occurs at the CAAT sites; when CP1 is bound, γ-globin synthesis is favored, but when CAAT displacement protein binds, CP1 can no longer bind, and gene transcription is inhibited. Thus, γ-globin expression is regulated by the concentrations of both positive-acting and negative-acting factors available in the cell. The over- lapping binding sites were not designed for redundancy in case of mutation, to provide ribosome binding sites (the ribosomes bind to RNA produced from exons, not from the promoter region), or to provide a target for interfering RNAs (the siRNAs are targeted to mRNA). The multiple binding sites, by themselves, do not promote looping of DNA, but once transcription factors have bound to the DNA, looping may occur as the transactivating factors bind to the proteins bound to DNA.",
    image: "Gene-15.png",
  },
  {
    id: "16",
    question:
      "A hypothetical patient was suffering from excessive free iron in the blood, yet a cellular analysis indicated low intracellular levels of iron, despite high intracellular lev- els of ferritin, and normal transferrin levels in the blood. The disease was shown to be caused by a single base change in the DNA that led to a dysfunctional protein. The mutation is likely to be in which of the following proteins?",
    incorrectAnswers: [
      "Transferrin",
      "Transferrin receptor",
      "Transcobalamin",
      "Ceruloplasmin",
    ],
    correctAnswer: "Iron response element binding protein",
    explanation:
      "The answer is D: Iron response element binding protein. As shown in the fi gure below, the iron- response element binding protein (IRE-BP) binds to loops in RNA (RNA secondary structure), and in the case of ferritin mRNA, the IRE-BP blocks translation when iron levels are low. In the case of the transferrin receptor mRNA, the IRE-BP stabilizes the mRNA when iron levels are low, allowing effi cient translation of the mRNA such that transferrin receptors can be synthe- sized and placed in the membrane. If a patient had a mutated IRE-BP, which could no longer bind to its target sequence in mRNA, then the transferrin receptor mRNA would be unstable and degraded, and cells would not be able to take up iron from the circulation, leading to higher than normal iron levels in the blood yet still would result in cellular depletion of iron. However, the lack of IRE-BP binding would allow ferritin translation and synthesis, leading to high levels of ferritin inside the cell despite the low levels of intracellular iron. Ceru- loplasmin is involved in copper transport, not iron. A mutation in transferrin would lead to lower circulat- ing iron levels in the blood as the iron carrier would be mutated. Mutations in the transferrin receptor would not lead to high intracellular levels of ferritin (intracel- lular iron levels would be low, the IRE-BP would remain bound to the ferritin mRNA, and translation would be blocked). Mutations in transcobalamin would affect vitamin B12 transport, not iron.",
    image: "",
  },
  {
    id: "17",
    question:
      "A cell is producing a certain transcription factor that contains a single point mutation, such that N is con- verted to V. Circular dichroism experiments show that this altered factor has the same secondary structure as the nonmutated factor. Under normal conditions, serum stimulation of quiescent cultures shows strong induction of fi ve genes. When quiescent cells harbor- ing the mutant transcription factor are exposed to serum, the level of expression of those fi ve genes stays at basal levels (there is no increase in mRNA produc- tion). This fi nding is most likely due to which of the following?",
    incorrectAnswers: [
      "Loss of ionic interactions between the transcription factor and DNA",
      "Increase in hydrogen bonding between transcrip- tion factor and DNA",
      "Increase in ionic interactions between the transcrip- tion factors and DNA",
      "Inability of the transcription factor to bind to the DNA",
    ],
    correctAnswer:
      "Decrease in hydrogen bonding between the tran- scription factor and DNA",
    explanation:
      "Decrease in hydrogen bonding between the transcription factor and DNA. The necessary tran- scription factor is not binding as well to the DNA, leading to reduced effi ciency of transcription. The side chain of aspartic acid can participate in hydrogen bond- ing with DNA bases, but the side chain of valine (com- pletely carbon–hydrogen bonds) cannot (see the fi gure below). Transcription factors do not bind to DNA via ionic interactions. An increase in hydrogen bonding between the factor and DNA would lead to enhanced transcription (not reduced transcription). An inability of the transcription factor to bind to DNA would lead to no transcription of the gene; since there is a low level of expression, binding of this factor to the DNA must be occurring, although the affi nity for the factor and DNA has been reduced.",
    image: "",
  },
  {
    id: "18",
    question:
      "Indicate which region (as designated by the letters A, B, C, D, and E) binds an inhibitory transcription factor.",
    incorrectAnswers: ["A", "C", "D", "E"],
    correctAnswer: "B",
    explanation:
      "When region B is deleted from the promoter region, there is an increase in overall expression of the reporter gene (the second and last lines of the fi gure indicate this). Removal of any other region leads to a decrease in expression, indicating that positive- acting transcription factors bind to those regions of DNA.",
    image: "Gene-18.png",
  },
  {
    id: "19",
    question:
      "Referring to the fi gure above, which region binds stimu- latory transcription factors?",
    incorrectAnswers: ["A", "B", "D", "E"],
    correctAnswer: "C",
    explanation:
      "When region C is removed from the DNA, there is a tremendous reduction in the expres- sion of the reporter gene, indicating that this region of the DNA binds important positively-acting transcription factors for the expression of the reporter gene.",
    image: "Gene-18.png",
  },
  {
    id: "20",
    question:
      "A woman developed the following symptoms after tak- ing certain drugs such as barbiturates. The symptoms included severe pain in the abdomen, hallucinations, disorientation, and a reddish tint to the urine. These symptoms appeared due to the induction of genes involved in which of the following pathways?",
    incorrectAnswers: [
      "Cytochrome degradation",
      "Ubiquinone biosynthesis",
      "Ubiquinone degradation",
      "Dolichol synthesis",
    ],
    correctAnswer: "Cytochrome synthesis",
    explanation:
      "Cytochrome synthesis. The woman has a form of porphyria, an inborn error in the biosyn- thesis of heme. The buildup of heme intermediates is what generates the symptoms observed. Barbiturates are degraded through the cytochrome P450 series of enzymes, which are induced by the drug. The enzymes require heme, so heme synthesis is also induced, and whenever heme synthesis is induced, the toxic inter- mediates get accumulated. The end product of heme degradation is bilirubin, and if excessive bilirubin accumulates, jaundice is the result. Both dolichol and ubiquinone synthesis are from isoprenoids, and not related to the heme pathway.",
    image: "",
  },
];

export default data;
