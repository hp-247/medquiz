const data = [
  {
    id: "1",
    question:
      "Patients with Hurler’s syndrome (252800) are known to have mutations at the L-iduronidase locus. The diagnosis of Hurler’s syndrome is most efficiently made by analyzing a patient’s DNA for",
    incorrectAnswers: [
      "A region of DNA that does not encode RNA",
      "The entire set of genes in one leukocyte",
      "A nucleotide substitution in the L-iduronidase gene",
      "The position of the L-iduronidase gene on a chromosome",
    ],
    correctAnswer: "Alternative forms of the L-iduronidase gene",
    explanation:
      "The most efficient DNA diagnosis would involve analy- sis of the two L-iduronidase genes in an individual, looking for any change in DNA sequence (nucleotide substitutions, deletions, duplications) that would alter function of the L-iduronidase protein. Alternative forms of a gene are called alleles, and an allele that has changed during transmission from parent to child may be called a mutant allele. Many human charac- teristics are encoded by genes, each occupying a particular address or locus on a chromosome. Genes consist of DNA segments that encode RNA along with flanking DNA sequences that regulate gene expression (see the figures below). Within the coding regions are DNA segments that are transcribed and then translated into protein (exons), and those that are transcribed but removed by RNA splicing (introns). If a DNA mutation produces a disease through its altered protein, as with L-iduronidase gene mutations in Hurler’s syndrome, the mutant gene (strictly, the mutant allele) may be called abnormal. Human autosomes (chromosomes 1 through 22) and X chromosomes in females have two homologous loci in each individual, harboring two identical (homozygous) or different (heterozygous) alleles. Males have only one X chromosome and often only one allele per sex chro- mosome locus because the Y has minimal coding material. The complete set of genetic material (all the genes and loci) in each biological species is called the genome.",
    image: "",
  },
  {
    id: "2",
    question:
      "Which of the following statements regarding a double-helical molecule of DNA is true?",
    incorrectAnswers: [
      "All hydroxyl groups of pentoses are involved in linkages",
      "Each strand is identical",
      "Each strand has parallel, 5′ to 3′ direction",
      "Each strand replicates itself",
    ],
    correctAnswer: "Bases are perpendicular to the axis",
    explanation:
      "In the classic double-helical model of DNA proposed by Watson and Crick, the purine (adenosine and guanine) and pyrimidine (cytosine and thymine) bases (see the figure above) attached to the sugar backbone are perpendicular to the axis and parallel to each other. They are paired (A to G or T to C) and held together by hydrogen bonds. The DNA strands (nucleotide polymers) are joined by linkages between the 3′-hydroxyl of each pentose (deoxyribose) and the 5′-phosphate of its deoxyribose neighbor. Each strand composing the double helix is different and antiparallel. The 3′ end of one strand is opposite the 5′ end of its com- plement and vice versa (see the figure above). It is this complementary nature of DNA that allows the strands to be templates for one another dur- ing DNA replication.",
    image: "",
  },
  {
    id: "3",
    question:
      "A sample of human DNA is subjected to increasing temperature until the major fraction exhibits optical density changes due to disruption of its helix (melting or denaturation). A smaller fraction is atypical in that it requires a much higher temperature for melting. This smaller, atypical fraction of DNA must contain a higher content of",
    incorrectAnswers: [
      "Adenine plus cytosine",
      "Adenine plus thymine",
      "Cytosine plus thymine",
      "Adenine plus guanine",
    ],
    correctAnswer: "Cytosine plus guanine",
    explanation:
      "The melting temperature Tm of duplex DNA is the temperature at which half the base pairs are denatured. Adenine-thymine (A-T) base pairs have two hydrogen bonds, in contrast to cytosine- guanine (C-G) base pairs, which have three hydrogen bonds. Duplex DNA molecules rich in A-T base pairs have a much lower Tm than those rich in C-G base pairs. As DNA is heated, fractions with a higher A-T content melt or denature before those with a higher C-G content. Most mammals, including humans, have satellite DNA fractions that are highly repetitive and clustered in particular chromosome regions. Satellite DNAs are named for their altered density (satellite band) on centrifugation, caused by higher G-C content. Their function is unknown.",
    image: "",
  },
  {
    id: "4",
    question:
      "A newborn baby has a sibling with sickle cell anemia (141900) and is at risk for the disease. The appropriate diagnostic test for sickle cell anemia in this baby will include",
    incorrectAnswers: [
      "Hemoglobin antibodies",
      "DNA restriction",
      "Red cell counting",
      "DNA fingerprinting",
    ],
    correctAnswer: "DNA amplification",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Sufficient DNA for analysis can be obtained by ampli- fication of leukocyte DNA using the polymerase chain reaction (PCR). Short segments of DNA (oligonucleotide primers) are designed to be com- plementary to areas flanking the DNA region of interest—in this case, the portion of the β-globin gene that may harbor the sickle cell anemia (141900) mutation. Some 20 to 30 cycles of cooling (to anneal the primers), synthesis (with heat-stable DNA polymerase), and heating (to melt the DNA and allow the next cycle) can amplify the targeted DNA seg- ment over 1 million-fold. Hybridization in duplicate to allele-specific oligonucleotides (ASOs; one ASO for the hemoglobin A mutation, one ASO for the S mutation) can establish the diagnosis of normal (AA alleles), sickle trait (AS alleles), or sickle cell anemia (SS alleles). Newborns have fetal hemoglobin (α- and γ-globin) with little expression of hemoglobin A (α- and β-globin genes) until 3 to 6 months of life, so testing for anemia or for abnormal hemoglobin with antibodies would not be helpful. DNA polymorphisms (nucleotide sequence variations) occur approxi- mately once per 200 to 500 base pairs (bp) of human DNA. If the sequence variation affects the recognition site for a restriction endonuclease, the altered segment sizes produced by endonuclease digestion allow detection of the sequence change [restriction fragment length polymorphism (RFLP)]. If the nucleotide change causing the RFLP is adjacent to (linked with) or coincident with a disease mutation, then one size variant of the RFLP may be diagnostic. However, mutations of known sequence (such as that for sickle cell anemia) are better detected by PCR and ASOs. The use of several highly variable RFLPs produces a pattern of restriction fragments that is highly distinctive for each individual (DNA fingerprinting) but not diagnostic for a particular disease.",
    image: "",
  },
  {
    id: "5",
    question: "A polymorphism is best defined as",
    incorrectAnswers: [
      "One phenotype, multiple genotypes",
      "Nonrandom allele association",
      "One locus, multiple abnormal alleles",
      "One locus, multiple normal alleles",
    ],
    correctAnswer: "Cosegregation of alleles",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Polymorphic loci have multiple alleles because of DNA sequence variation, including one or more with frequencies greater than 1%. This higher frequency and benign connotation differentiate polymor- phic loci from those that harbor multiple disease-causing alleles. The DNA sequence changes may alter restriction sites [producing restriction frag- ment length polymorphisms (RFLPs)], change the numbers of repeated segments [producing variable numbers of tandem repeats (VNTRs)], or alter the genetic code (producing variant proteins, or protein polymor- phisms). Polymorphisms may cosegregate (be inherited together) with dis- ease alleles, allowing diagnosis by linkage analysis or estimates of risk through allele association (a.k.a. linkage disequilibrium, as with certain HLA alleles and diabetes mellitus). Different mutant alleles may cause indistinguishable phenotypes (allelic heterogeneity), as may mutations at different loci (genetic heterogeneity).",
    image: "",
  },
  {
    id: "6",
    question:
      "The process that occurs at the 5 position of cytidine and often correlates with gene inactivation is",
    incorrectAnswers: [
      "Gene rearrangement",
      "Pseudogene",
      "Sister chromatid exchange",
      "Gene conversion",
    ],
    correctAnswer: "DNA methylation",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) DNA methylation occurs mainly at CpG dinucleotides that often cluster in at the upstream promoter regions of genes (CpG islands). While these are generally correlated with gene inactivation, there are many exceptions. Double crossovers at meiosis can substitute a normal allele for a mutant allele (conversion), and reverse transcriptases can copy intronless mRNA into complementary DNAs (cDNAs) that integrate into the genome as pseudogenes. Immunoglobulin genes undergo gene rearrangement to unite variable, joining, and constant regions for expres- sion of a unique antibody. Unequal crossing over between sister chromatids is thought to be an important mechanism for variation in copy number within gene clusters.",
    image: "",
  },
  {
    id: "7",
    question: "The average size of a human gene is",
    incorrectAnswers: ["1,000 bp", "2×106bp", "1.5 × 108 bp", "3×109bp"],
    correctAnswer: "40,000 bp",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The 6 × 109 bp of DNA in each human diploid cell are apportioned among 46 chromosomes. Even with the highest-resolution karyotype, the average chromosome band equals about 2 × 106 bp. These measurements emphasize the vastly greater precision of molecular analysis in detecting gene deletions (each gene averages 40,000 bp in size) or codon (3 bp) deletions, as in the ∆F508 mutation [the deletion of a phenylalanine codon that is common in cystic fibrosis (219700)].",
    image: "",
  },
  {
    id: "8",
    question:
      "Restriction fragment length polymorphism (RFLP) analysis can only be used to follow the inheritance of a genetic disease if",
    incorrectAnswers: [
      "mRNA probes are used in combination with antibodies",
      "Proteins of mutated and normal genes migrate differently upon gel electrophoresis",
      "Mutations are outside of restriction sites so that cleaving still occurs",
      "Restriction fragments remain the same size but their charge changes",
    ],
    correctAnswer:
      "The disease-causing mutation is at or closely linked to an altered restriction site",
    explanation:
      "(Murray, pp 488–504. Scriver, pp 3–45. Sack, pp 41–45. Wilson, pp 151–186.) A variety of genetic diseases, such as sickle cell anemia (141900), Huntington’s chorea (143100), and cystic fibrosis (219700), can be detected by restriction fragment length polymorphism (RFLP) analysis. In order for RFLP to be able to detect and follow the inher- itance of these genes, the detected mutation must be at or closely linked to an altered restriction site. Mutations within the restriction sites change the size of restriction fragments. The different-sized fragments migrate in dif- ferent positions during electrophoresis of bands visualized by Southern blot analysis, which utilizes fluorescent or radiolabeled DNA probes.",
    image: "",
  },
  {
    id: "9",
    question:
      "It is well known that DNA polymerases synthesize DNA only in the 5′ to 3′ direction. Yet, at the replication fork, both strands of parental DNA are being replicated with the synthesis of new DNA. How is it possible that while one strand is being synthesized in the 5′ to 3′ direction, the other strand appears to be synthesized in the 3′ to 5′ direction? This apparent paradox is explained by",
    incorrectAnswers: [
      "3′ to 5′ DNA repair enzymes",
      "3′ to 5′ DNA polymerase",
      "Replication and immediate crossover of the leading strand",
      "Lack of RNA primer on one of the strands",
    ],
    correctAnswer: "Okazaki fragments",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Since both strands of parental DNA serve as templates for the synthesis of new DNA, it appears that DNA synthesis must be 5′ to 3′ for one daughter strand and 3′ to 5′ for the other daughter strand at the replication fork. Despite the apparent need for 3′ to 5′ synthesis, all DNA polymerases and repair enzymes can only synthesize DNA in the 5′ to 3′ direction. The apparent contradiction is solved by understanding that one strand of DNA is synthesized continuously in the 5′ to 3′ direction while the other strand is made up of small fragments known as Okazaki frag- ments. The small Okazaki fragments are, in fact, synthesized in a 5′ to 3′ direction and then joined together by DNA ligase. Each Okazaki fragment is about 1000 nucleotides long. Thus, while the overall direction of growth of the lagging strand that is made up of small fragments is in fact in the 3′ to 5′ direction, the actual polymerization of individual nucleotides is in the 5′ to 3′ direction. Crossing over of the DNA strands does not occur during replication.",
    image: "",
  },
  {
    id: "10",
    question:
      "Given that the chromosomes of mammalian cells may be 20 times as large as those of Escherichia coli, how can replication of mammalian chromosomes be carried out in just a few minutes?",
    incorrectAnswers: [
      "Eukaryotic DNA polymerases are extraordinarily fast compared with prokary- otic polymerases",
      "The higher temperature of mammalian cells allows for an exponentially higher replication rate",
      "A great many different RNA polymerases carry out replication simultaneously on chromosomal DNA",
      "The presence of histones speeds up the rate of chromosomal DNA replication",
    ],
    correctAnswer:
      "Hundreds of replication forks work simultaneously on each piece of chromoso- mal DNA",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Despite the great length of the chromosomes of eukaryotic DNA, the actual replication time is only minutes. This is because eukaryotic DNA is replicated bidirectionally from many points of origin. The hundreds of initiation sites for DNA replication on chromo- somes share a consensus sequence called an autonomous replication sequence (ARS). Thus, while the process of DNA replication in mammals is similar to that in bacteria, with DNA polymerases of similar optimal tem- peratures and speed, the many replication forks allow for a rapid synthesis of chromosomal DNA. Proteins such as histones, which are bound to mam- malian chromosomes, inhibit DNA replication or transcription. Dissocia- tion of the protein-DNA complex (chromatin) and unwinding of DNA supercoils (followed by chromatin reassembly) is part of the replication process.",
    image: "",
  },
  {
    id: "11",
    question:
      "A farming couple in Northern Michigan consult their physician about severe skin rashes and ulcers noted over the past year. They also have lost many cattle over the past year, and claim that their cattle feed changed in consistency and smell about 1 year ago. Chemical analysis of the feed shows high concentrations of polychlorinated biphenyls, a fertilizer related to known carcinogens. The physician sends the chemical to a laboratory for carcinogen testing, which is performed initially and rapidly by",
    incorrectAnswers: [
      "Eukaryotic DNA polymerases are extraordinarily fast compared with prokary- otic polymerases",
      "Hundreds of replication forks work simultaneously on each piece of chromoso- mal DNA",
      "A great many different RNA polymerases carry out replication simultaneously on chromosomal DNA",
      "The presence of histones speeds up the rate of chromosomal DNA replication",
    ],
    correctAnswer:
      "The higher temperature of mammalian cells allows for an exponentially higher replication rate",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The Ames test is a rapid and relatively inexpen- sive bacterial assay for determining mutagenicity of potential toxic chemi- cals. Since many chemical carcinogens are mutagenic, it seems obvious that damage to DNA is a central event in carcinogenesis as well as mutagenesis. Dr. Bruce Ames developed a tester strain of Salmonella that has been modified not to grow in the absence of histidine because of a mutation in one of the genes for the biosynthesis of histidine. Toxic chemicals that are muta- gens are placed in the center of the plate and result in reversions of the original mutations, so that histidine is synthesized and the mutated rever- tants multiply in histidine-free media. Since many carcinogens are con- verted to active forms by metabolism in the liver, preliminary incubation with liver homogenates may precede the bacterial assay. Essentially all chemicals known as carcinogens in humans cause mutagenesis in the Ames test. The other options—carcinogenicity screening in immunosuppressed (nude) mice, computer modeling, or incubation with mammalian cell cul- tures—may provide some information, but are less efficient and validated than the Ames test. Contamination of Michigan cattle feed with polychlo- rinated biphenyls (PCBs) did occur through an industrial mistake.",
    image: "",
  },
  {
    id: "12",
    question:
      "A child presents with severe growth failure, accelerated aging that causes adult complications such as diabetes and coronary artery disease, and microcephaly (small head) due to increased nerve cell death. In vitro assay of labeled thymidine incorporation reveals decreased levels of DNA synthesis compared to controls, but normal-sized labeled DNA fragments. The addition of protein extract from normal cells, gently heated to inactivate DNA polymerase, restores DNA synthesis in the child’s cell extracts to normal. Which of the enzymes used in DNA replication is likely to be defective in this child?",
    incorrectAnswers: [
      "DNA-directed DNA polymerase",
      "DNA polymerase I",
      "DNA-directed RNA polymerase",
      "DNA ligase",
    ],
    correctAnswer: "Unwinding proteins",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Before DNA replication can actually begin, unwinding protein must open segments along the DNA double helix. A defective unwinding protein slows the overall rate of DNA synthesis, but does not alter the size of replicated DNA fragments. Defects in DNA syn- thesis or transcription may produce a phenotype of accelerated aging, as in Cockayne’s syndrome [216400 (usually defective in a transcription fac- tor)]. After unwinding, DNA-directed RNA polymerase (primase) catalyzes the synthesis of a complementary RNA primer of approximately 50 to 100 bases on each DNA strand. Then DNA-directed DNA polymerase III adds deoxyribonucleotides to the 3′ end of the primer RNA, which replicates a segment of DNA, the Okazaki fragment. DNA polymerase I then removes the primer RNA and adds deoxyribonucleotides to fill the gaps between adjacent Okazaki fragments. The fragments are finally joined together by DNA ligase to create a continuous DNA chain.",
    image: "",
  },
  {
    id: "13",
    question:
      "Patients with hereditary nonpolyposis colon cancer [HNPCC (114500)] have genes with microsatellite instability, that is, many regions containing abnormal, small loops of unpaired DNA. This is a result of a mutation affecting",
    incorrectAnswers: [
      "Chain break repair",
      "Base excision repair",
      "Depurination repair",
      "Nucleotide excision repair",
    ],
    correctAnswer: "Mismatch repair",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 769–784. Sack, pp 3–29. Wilson, pp 99–121.) One of the most common types of inherited can- cers is nonpolyposis colon cancer [HNPCC (114500)]. Most cases are asso- ciated with mutations of either of two genes that encode proteins critical in the surveillance of mismatches. Mismatches are due to copying errors lead- ing to one- to five-base unmatched pieces of DNA. Two- to five-base-long unmatched bases form miniloops. Normally, specific proteins survey newly formed DNA between adenine methylated bases within a GATC sequence. Mismatches are removed and replaced. First, a GATC endonuclease nicks the faulty strand at a site complementary to GATC, then an exonuclease digests the strand from the GATC site beyond the mutation. Finally, the excised faulty DNA is replaced. In HNPCC, the unrecognized mismatches accumulate, leading to malignant growth of colon epithelium. The other forms of DNA repair are important for rectifying damage from ultraviolet light.",
    image: "",
  },
  {
    id: "14",
    question:
      "If a completely radioactive double-stranded DNA molecule undergoes two rounds of replication in a solution free of radioactive label, what is the radioactivity status of the resulting four double-stranded DNA molecules?",
    incorrectAnswers: [
      "All should contain radioactivity",
      "Half should contain radioactivity in both strands",
      "One should contain radioactivity in both strands",
      "None should contain radioactivity",
    ],
    correctAnswer: "Half should contain no radioactivity",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The replication of double-stranded DNA is semi- conservative, meaning that each strand separates and serves as a template for synthesis of a new complementary strand. The first round of replication of a labeled DNA helix in a cold (unlabeled) solution will yield two daugh- ter double-stranded molecules, each with one labeled and one unlabeled strand. The second round of replication will yield four double-stranded DNA molecules. Two of these will have one original labeled strand and one unlabeled strand; the other two will have two unlabeled strands and con- tain no radioactivity.",
    image: "",
  },
  {
    id: "15",
    question:
      "Sickle cell anemia (141900) is the clinical manifestation of homozygous genes for an abnormal hemoglobin molecule. The mutation in the β chain is known to produce a single amino acid change. The most likely mechanism for this mutation is",
    incorrectAnswers: [
      "Nondisjunction",
      "Three-base deletion",
      "Two-base insertion",
      "Crossing over",
    ],
    correctAnswer: "Single-base substitution (point mutation)",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) In the β-globin chain of hemoglobin S (141900), a valine residue replaces a glutamic acid at the sixth amino acid position from the N-terminus. The amino acid substitution is the result of a single- base change (point mutation) from thymine to adenine at the second posi- tion of the sixth codon. Crossing over among homologous β-globin genes might exchange alleles, if equal, or generate mutant alleles with dupli- cated/deficient nucleotides, if unequal. Two-base insertions would change the reading frame of the genetic code (frame-shift mutation) and produce a nonsense peptide after the point of insertion. Three-base deletions could also cause frame shifts or, if one codon were removed, delete one amino acid. Nondisjunction involves abnormal segregation of chromosomes at meiosis or mitosis, and would produce nonviable individuals or somatic cells with additional or missing copies of chromosome 11 and its β-globin locus.",
    image: "",
  },
  {
    id: "16",
    question:
      "Parents bring their newborn daughter to you for consultation about diagnosis and management. Their first two children, a boy and a girl, have a complete form of albinism (203100) with pink irides, blond hair, and pale skin. Which of the following represents your correct advice concerning the newborn child?",
    incorrectAnswers: [
      "A 1/4 risk for albinism and skin cancer from DNA deletions",
      "A 1/4 risk for albinism and skin cancer from DNA point mutations",
      "A 1/8 risk for albinism and skin cancer from DNA cross-linkage",
      "A 1/8 risk for albinism and skin cancer from DNA deletions",
    ],
    correctAnswer:
      "A 1/4 risk for albinism and skin cancer from DNA cross-linkage",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 5587–5628. Sack, pp 3–29. Wilson, pp 99–121.) Normal parents having two affected children, male and female, is suggestive of autosomal recessive inheritance. This interpretation fits with the usual inheritance of oculocutaneous albinism (203100), implying a 1/4 risk for a newborn in whom signs and symptoms of albinism are not yet evident. The defect in melanin synthesis in albinism decreases the amount of this protective pigment in skin and increases the exposure of DNA in skin cells to sunlight. Ultraviolet rays from sunlight cause DNA cross-linkage between at least two bases in the same or oppo- site strands of DNA. Cross-linking occurs through the formation of thymine-thymine dimers. The DNA cross-links cause higher rates of muta- tion and skin cancer in albinism, mandating the wearing of protective clothing, sunglasses, and sunscreens by affected individuals. DNA dele- tions and point mutations are less common than DNA cross-links after sun- light exposure.",
    image: "",
  },
  {
    id: "17",
    question:
      "A culture of bacteria not resistant to tetracycline develops an infection from a virus that is derived from the lysis of tetracycline-resistant bacteria. Most of the bacterial progeny of the original culture is found to have become resistant to tetracycline. What phenomenon has occurred?",
    incorrectAnswers: [
      "Conjugation",
      "Colinearity",
      "Recombination",
      "Transformation",
    ],
    correctAnswer: "Transduction",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The process of transduction involves the transfer of a portion of DNA from one bacterium to the chromosome of another bacterium by means of a viral infection. Conjugation is the transfer of a so- called male chromosomal DNA to the DNA of an acceptor, or female, bac- terial cell. Colinearity defines the relationship between genes and proteins in that the sequence of amino acids in proteins is a result of the sequence of base triplets in template genes. Recombination is simply the exchange of sequences between two molecules of DNA. Transformation results when exogenous DNA fragments are incorporated into the chromosome of another organism, as in the transformation of pneumococcal bacteria that led Avery and McLeod to recognize the genetic significance of DNA.",
    image: "",
  },
  {
    id: "18",
    question: "Following ultraviolet damage of DNA in skin",
    incorrectAnswers: [
      "Purine dimers are formed",
      "Both strands are cleaved",
      "Endonuclease removes the strand",
      "DNA hydrolysis does not occur",
    ],
    correctAnswer: "A specific excinuclease detects damaged areas",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Ultraviolet irradiation causes thymine dimers to form in DNA. Replication is inhibited in cells until the pyrimidine dimers are removed. Removal of the damaged areas occurs in two ways. The process can be simply reversed by a photoreactivating enzyme that cleaves the dimers and yields the original bases. Blue light is required for this. Alternatively, the dimer is removed. A UV-specific excinuclease nicks the dimer on its 5′ side. DNA polymerase I replicates the damaged sequence, while the damaged sequence swings out. Finally, the damaged piece is hydrolyzed by the 5′ to 3′ exonuclease activity of the DNA polymerase I. DNA ligase then joins the new piece to the original DNA at the cleavage site.",
    image: "",
  },
  {
    id: "19",
    question:
      "Which of the following statements correctly describes eukaryotic nuclear chromosomal DNA?",
    incorrectAnswers: [
      "Each discontinuous piece making up the chromosomes of eukaryotes is about the same size as each prokaryotic chromosome",
      "Unlike bacterial DNA, no histones are associated with it",
      "It is not replicated semiconservatively",
      "It is not associated with a specific membranous organelle",
    ],
    correctAnswer: "It is a linear and unbranched molecule",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Like bacterial DNA, eukaryotic DNA is replicated in a semiconservative manner. However, in contrast to most bacterial DNA, which is circular in structure, nuclear chromosomal DNA is a single, unin- terrupted molecule that is linear and unbranched. A eukaryotic chromo- some contains a strand of DNA at least 100 times as large as the DNA molecules found in prokaryotes. Eukaryotic, but not prokaryotic, DNA molecules are bound to small basic proteins called histones. The histone- DNA complex formed is referred to as chromatin.",
    image: "",
  },
  {
    id: "20",
    question:
      "Xeroderma pigmentosum (278700) is an inherited human skin disease that causes a variety of phenotypic changes in skin cells exposed to sunlight. The molecular basis of the disease appears to be",
    incorrectAnswers: [
      "The inability of the cells to synthesize carotenoid-type compounds",
      "The induction of a virulent provirus on ultraviolet exposure",
      "The inactivation of temperature-sensitive transport enzymes in sunlight",
      "Rapid water loss caused by defects in the cell membrane permeability",
    ],
    correctAnswer:
      "A defect in an excision-repair system that removes thymine dimers from DNA",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 677–704. Sack, pp 3–29. Wilson, pp 99–121.) Xeroderma pigmentosum (278700) appears to be due to the inability of an excision-repair system to remove thymine dimers, which are formed on exposure of DNA to ultraviolet radiation. This results in a deficiency in the ability to repair the damaged DNA. Muta- genesis by this mechanism is presumably the basis for the multiple neo- plasms that occur in patients who have this disease.",
    image: "",
  },
  {
    id: "21",
    question:
      "Which of the following statements describes both the spiral structure of double-stranded DNA and the spiral structure found in certain segments of protein?",
    incorrectAnswers: [
      "They are α-helical",
      "They are held together by hydrogen bonding",
      "They have four alternative units arranged in polymeric chains",
      "They are repeating spiral structures with intervals of pleated sheets",
    ],
    correctAnswer: "They have covalently linked backbones",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Double-stranded DNA is arranged in a double helix as originally deduced by Watson and Crick. The double-helical structure of duplex DNA is different than the α-helical structure of por- tions of proteins. The α-helical structure of proteins is formed of one chain of proteins stabilized by individual hydrogen bonds between com- ponents of the amide bonds, that is, between the carbonyl oxygens and the amide nitrogens. In contrast, the hydrogen bonding in double- stranded DNA is important to allow each strand to act as a template for the other complementary strand, with adenine bonding to thiamine and cytosine bonding to guanine. Hydrophobic stacking between bases in the hydrophobic interior of the double strand actually makes a greater con- tribution to the stability of the DNA double helix than does hydrogen bonding. DNA and protein helices are both composed of polymers of subunits (amino acids and nucleotides) held together by a covalently linked backbone. As pointed out above, hydrogen bonding is important to both the double helix of DNA and the α-helix of proteins. Finally, both are, in fact, spiral structures, although only the helix of proteins is an α helix.",
    image: "",
  },
  {
    id: "22",
    question:
      "Which of the following descriptions of DNA replication is not common to the synthesis of both leading and lagging strands?",
    incorrectAnswers: [
      "RNA primer is synthesized",
      "DNA polymerase III synthesizes DNA",
      "Helicase (rep protein) continuously unwinds duplex DNA at the replication fork during synthesis",
      "Nucleoside monophosphates are added in a 5′ to 3′ direction along the grow- ing DNA chain",
    ],
    correctAnswer:
      "DNA ligase repeatedly joins the ends of DNA along the growing strand",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) In the leading strand, DNA is synthesized con- tinuously in the 5′ to 3′ direction by DNA polymerase. In contrast, in the lagging strand, which is in the 3′ to 5′ direction, DNA polymerase III syn- thesizes small (approximately 1000 nucleotides) Okazaki fragments. For the synthesis of these small fragments, all the same roles and steps apply except that additional enzymes are needed to fill the gap between the frag- ments and join the fragments. Consequently, DNA ligase is repeatedly needed to join the ends of the DNA fragments along the growing lagging strand. DNA ligase catalyzes the formation of a phosphodiester bond between the 3′ hydroxyl group at the end of one DNA chain and the 5′ DNA phosphate group at the end of the other. DNA ligase is only func- tional when double-helical DNA molecules are the substrate. It does not work on single-stranded DNA. DNA ligase effects the joining of strands of DNA not only during the normal synthesis of DNA, but during the splicing of DNA chains in genetic recombination as well as the repair of damaged DNA.",
    image: "",
  },
  {
    id: "23",
    question:
      "Which of the following statements describing restriction endonucleases is true?",
    incorrectAnswers: [
      "They always yield blunt ends",
      "They recognize triplet repeats",
      "They recognize methylated DNA sequences",
      "They always yield overhanging single-stranded ends",
    ],
    correctAnswer: "They cleave both strands in duplex DNA",
    explanation:
      "(Murray, pp 488–504. Scriver, pp 3–45. Sack, pp 41–45. Wilson, pp 151–186.) Restriction endonucleases are produced by prokaryotes for cleaving both strands of foreign DNA. The host cell’s DNA is not degraded because the recognition sites are specifically methylated. The endonucleases recognize specific short symmetrical sequences known as palindromes. These cleavage sites contain twofold rotational symmetry in that the sequence is identical but antiparallel in the complementary strands. In some cases, single-stranded cohesive ends on each of the com- plementary strands are produced, while in other cases double-stranded blunt ends are formed. Modern analysis of DNA structure is highly depen- dent upon the use of different restriction endonucleases that permit the specific hydrolysis of DNA into large polynucleotides.",
    image: "",
  },
  {
    id: "24",
    question:
      "DNA fingerprinting is used for paternity testing and forensic identification of suspects. Which of the following is the most accurate description of DNA fingerprinting?",
    incorrectAnswers: [
      "DNA is copied from blood, skin, or sperm RNA using reverse transcriptase and analyzed for the pattern of complementary DNAs",
      "DNA is isolated from blood, skin, or sperm and its fragment size distribution is analyzed by gel electrophoresis",
      "DNA is isolated from blood, skin, or sperm and hybridized with probes from the HLA locus to visualize HLA gene patterns",
      "DNA is isolated from blood, skin, or sperm, centrifuged to separate satellite DNA fractions, and analyzed by gel electrophoresi",
    ],
    correctAnswer:
      "DNA can be isolated from blood, skin, or sperm and analyzed for variable pat- terns of restriction fragments arising from tandemly repeated sequences (microsatellites)",
    explanation:
      "(Murray, pp 488–504. Scriver, pp 3–45. Sack, pp 41–45. Wilson, pp 151–186.) Restriction fragment length polymorphisms (RFLPs) arising from variable numbers of tandem repeats (VNTRs) are the basis of the DNA fingerprinting technique. The process is: (1) isola- tion of DNA from parent/child or forensic specimens using blood, skin, or semen; (2) PCR amplification and radioactive labeling of DNA from variable regions in each sample; (3) separation of the variable DNA frag- ments by gel electrophoresis; and (4) comparison of the DNA fragment patterns among samples. Since numbers of arrays of repeats of two, three, or four base pairs (microsatellites) may vary from 5 to 100 at a particular chromosome locus, particular alleles may occur in less than 1% of the population. As a result, analysis of three loci, each with two alleles, can produce odds as high as (100)6 that the pattern matches a putative father or suspect as compared to a random person from the general population. Reverse transcription based upon RNA-directed DNA synthesis is not uti- lized in DNA fingerprinting, and the size distribution of undigested DNA reflects its integrity during isolation rather than individual identify. HLA typing uses antibodies to define the constellation of alleles from various loci in the HLA region on chromosome 6. The tendency for certain HLA alleles to occur together (associate) on the same chromosome as haplo- types greatly reduces their odds of identity when compared to DNA fin- gerprinting.",
    image: "",
  },
  {
    id: "25",
    question:
      "The first drug to be effective against AIDS, including the reduction of maternal-to-child AIDS transmission by 30%, was AIDS drug azidothymidine (AZT). Which of the following describes its mechanism of action?",
    incorrectAnswers: [
      "It stimulates DNA provirus production",
      "It inhibits viral DNA polymerase",
      "It inhibits RNA synthesis",
      "It inhibits viral protein synthesis",
    ],
    correctAnswer: "It inhibits viral reverse transcriptase",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The AIDS treatment drug azidothymidine (AZT) exerts its effect by inhibiting viral reverse transcriptase. Thus, it prevents replication of the human immunodeficiency virus. Reverse transcriptase is an RNA-directed DNA polymerase. The RNA of retroviruses utilizes reverse transcriptase to synthesize DNA provirus, which in turn synthesizes new viral RNA. AZT inhibits DNA provirus production, but does not directly inhibit synthesis of new viral RNA.",
    image: "",
  },
  {
    id: "26",
    question:
      "Which of the following enzymes can polymerize deoxyribonucleotides into DNA?",
    incorrectAnswers: [
      "Primase",
      "DNA ligase",
      "DNA gyrase",
      "RNA polymerase III",
    ],
    correctAnswer: "Reverse transcriptase",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Reverse transcriptase is an RNA-dependent DNA polymerase that can synthesize first a single strand and then a double- stranded DNA from a single-strand RNA template. It was originally found in animal retroviruses. Primase is a DNA-dependent RNA polymerase enzyme that synthesizes an RNA molecule 10 to 200 nucleotides in length that initiates or “primes” DNA synthesis. DNA ligase joins DNA fragments and DNA gyrase winds or unwinds DNA. Transfer RNA, 5SRNA, and other small RNAs are synthesized by RNA polymerase III (RNA polymerase I syn- thesizes ribosomal RNA and RNA polymerase II synthesizes messenger RNA).",
    image: "",
  },
  {
    id: "27",
    question:
      "Which of the following statements correctly describes the recombinant DNA tool known as plasmids?",
    incorrectAnswers: [
      "They are found more commonly in viruses than in bacteria",
      "They are single-stranded circles",
      "They sometimes enhance bacterial susceptibility to antibiotics",
      "They are too small to be useful as vectors for the cloning of mammalian DNA segments",
    ],
    correctAnswer: "They sometimes enhance bacterial resistance to antibiotics",
    explanation:
      "(Murray, pp 488–504. Scriver, pp 3–45. Sack, pp 41–45. Wilson, pp 151–186.) Plasmids are duplex DNA circles that may carry genes determining antibiotic resistance (R factors), sex (F factors), or toxin production (colicinogenic factors) in their bacterial hosts. They can replicate independently of the host chromosome or insert into the host chromosome. Plasmids are one class of mobile genetic elements (trans- posons) that are normally found in bacteria. Restriction of plasmid vector DNA and mammalian DNA with the same endonuclease produces cohesive ends that may be joined together with DNA ligase. The ligated molecules, which consist of one or more mammalian DNA segments inserted between plasmid DNA ends, are recombinant DNA molecules that can be replicated in the host bacteria. Isolation of the recombinant plasmid DNA by cen- trifugation and excision of the inserted mammalian DNA segment(s) then provides a pure and abundant sample of the mammalian gene segment that is separated from all other DNA segments in the mammalian genome. Plas- mid vectors are useful for gene segments under about 10 kilobases (kb) in size, but bacteriophage and recently yeast artifical chromosomes (YACs) can incorporate DNA segments up to 1000 kb or 1 megabase (Mb) in size. These larger vectors allow genomes like those of humans or mice (3000 Mb in size) to be entirely represented in a collection (library) of about 3000 recombinant molecules.",
    image: "",
  },
  {
    id: "28",
    question: "Which of the following molecules is found in a nucleoside?",
    incorrectAnswers: [
      "A pyrophosphate group",
      "A 5′-phosphate group linked to a pentose sugar",
      "A 3′-phosphate group linked to a pentose sugar",
      "A terminal triphosphate",
    ],
    correctAnswer: "A 1′ base linked to a pentose sugar",
    explanation:
      "(Murray,pp412–434.Scriver,pp3–45.Sack,pp3–29. Wilson, pp 99–121.) A nucleoside consists of a purine or pyrimidine base linked to a pentose sugar. The 1′ carbon of the pentose is linked to the nitro- gen of the base. In DNA, 2′-deoxyribose sugars are used; in RNA, ribose sugars are used. Nucleotides are phosphate esters of nucleosides with one to three phosphate groups, such as adenosine monophosphate (AMP), adeno- sine diphosphate (ADP), or adenosine triphosphate (ATP). The nitrogenous bases are adenine, thymine, guanine, and cytosine in DNA, with thymine replaced by uridine in RNA. Nucleotide polymers are chains of nucleotides with single phosphate groups, joined by bonds between the 3′-hydroxyl of the preceding pentose and the 5′-phosphate of the next pentose. Polymer- ization requires high-energy nucleotide triphosphate precursors that liber- ate pyrophosphate (broken down to phosphate) during joining. The polymerization reaction is given specificity by complementary RNA or DNA templates and rapidity by enzyme catalysts called polymerases.",
    image: "",
  },
  {
    id: "29",
    question:
      "Which is the most correct sequence of events in gene repair mechanisms in patients without a mutated repair process?",
    incorrectAnswers: [
      "Nicking, excision, replacement, sealing, recognition",
      "Sealing, recognition, nicking, excision, replacement",
      "Nicking, sealing, recognition, excision, replacement",
      "Nicking, recognition, excision, sealing, replacement",
    ],
    correctAnswer: "Recognition, nicking, excision, replacement, sealing",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) In all of the forms of DNA repair in normal cells, a common sequence of events occurs. 1. The single or multiple base abnormality is surveyed and detected by a specific protein or proteins. 2. The DNA is nicked on one side of the damaged DNA. 3. A specific enzyme excises the damaged portion (steps 2 and 3 can be combined if an excinuclease cuts on both sides of the damaged DNA). 4. The damaged portion of the strand is replaced by resynthesis catalyzed by DNA polymerase I. 5. A ligase seals the final gap. With some variability, these general principles apply in nucleotide excision repair (segments of about 30 nucleotides), base excision repair of single bases, and mismatch repair of copying errors (one to five bases).",
    image: "",
  },
  {
    id: "30",
    question:
      "Which of the following enzymes can be described as a DNA-dependent RNA polymerase?",
    incorrectAnswers: [
      "DNA ligase",
      "DNA polymerase III",
      "DNA polymerase I",
      "Reverse transcriptase",
    ],
    correctAnswer: "Primase",
    explanation:
      "(Murray, pp 435–451. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) Primase is a DNA-dependent RNA polymerase located in the primosome at the replication fork of DNA. Primase initiates DNA synthesis by synthesizing a 10-base RNA primer. The DNA-RNA helix formed binds DNA polymerase III, which synthesizes a DNA frag- ment (the Okazaki fragment) in a 5′ to 3′ direction. When the RNA primer of the previous Okazaki fragment is met, DNA polymerase I replaces III and digests the RNA primer, replacing it with appropriate DNA bases. When the RNA primer is completely removed, DNA ligase synthesizes the last phosphodiester bond, thereby sealing the space. What is left is a new lagging strand extended by the new Okazaki fragment with the 10-base RNA primer at its 5′ end. Reverse transcriptase is a DNA polymerase that uses RNA as a template found in retroviruses as well as normal eukaryotic cells. Unlike DNA polymerase I and III, which proofread for errors during normal synthesis, reverse transcriptase has no proofreading capabilities. Hence, it has an exceedingly high error rate that contributes to the high rate of mutation in retroviruses like HIV.",
    image: "",
  },
  {
    id: "31",
    question:
      "Radiation therapy is employed for many cancers, including irradiation of the central nervous system to destroy lymphoblasts in leukemia. Which of the following accounts for the destruction of rapidly growing cells?",
    incorrectAnswers: [
      "Cross-linking of DNA",
      "Demethylation of DNA",
      "Cleavage of DNA double strands",
      "Disruption of DNA-RNA transcription complexes",
    ],
    correctAnswer: "Disruption of purine rings in DNA",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) The major effects of radiation are to damage cel- lular DNA by opening purine rings and rupturing phosphodiester bonds. Chemical agents such as formaldehyde can cross-link DNA, and inhibitors of DNA methylation, such as methotrexate (an inhibitor of folic acid), were the first anticancer drugs. Experimental gene therapies for cancer include the inhibition of oncogene expression and the enhancement of tumor sup- pressor gene activity. These therapies target particular DNA-RNA tran- scription complexes or signal transduction cascades that are active in cancer cells.",
    image: "",
  },
  {
    id: "32",
    question:
      "Mammalian chromosomes have specialized structures with highly repetitive DNA at their ends (telomeres). Which aspect of telomeric DNA replication is different from that of other chromosomal regions?",
    incorrectAnswers: [
      "The DNA polymerase uses an RNA primer but does not degrade it",
      "The DNA polymerase must cross-link the 5′ and 3′ termini",
      "The DNA polymerase has a σ subunit that facilitates binding to repetitive DNA",
      "The DNA polymerase does not use an RNA template or primer",
    ],
    correctAnswer:
      "The DNA polymerase contains an RNA molecule that serves as template for DNA synthesis",
    explanation:
      "(Murray, pp 412–434. Scriver, pp 3–45. Sack, pp 3–29. Wilson, pp 99–121.) A special DNA polymerase called telomerase is responsible for replication of the telomeric DNA. Telomerase contains an RNA molecule that guides the synthesis of complementary DNA. Telom- erase is therefore an RNA-dependent DNA polymerase in a category with reverse transcriptase. Telomerase does not require an RNA primer, initiat- ing synthesis of the leading strands at 3′ ends within the telomeric DNA. Synthesis of the lagging strands uses primase, DNA polymerase III, and DNA polymerase I, as with the replication of other chromosomal regions.",
    image: "",
  },
];

export default data;
