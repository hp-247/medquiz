const data = [
  {
    id: "33",
    question: "Which statement about the “genetic code” is most accurate?",
    incorrectAnswers: [
      "Information is stored as sets of dinucleotide repeats called codons",
      "Information is stored as sets of trinucleotide repeats called codons",
      "There are 64 codons, all of which code for amino acids",
      "The sequence of codons that make up a gene exhibits an exact linear correspondence to the sequence of amino acids in the translated protein",
    ],
    correctAnswer:
      "The code is degenerate (i.e., more than one codon may exist for a single amino acid)",
    explanation:
      "The “genetic code” uses three-nucleotide “words,” or codons, to specify the 20 different amino acids (see the chart below). There are 64 different three–base pair codons (three positions with four possible nucleotides at each). It follows that the genetic code must be degenerate, i.e., different codons can specify the same amino acid. Three codons are reserved as “stop” signals that result in peptide chain termina- tion. The linear correspondence of codons in DNA and of amino acids in protein domains is interrupted by the presence of introns in DNA. Codons differ from the dinucleotide tandem repeats that provide useful DNA poly- morphisms, or the trinucleotide repeats that can be responsible for disease. The genetic code is universal in the sense that codon–amino acid relation- ships are the same in all organisms.",
    image: "",
  },
  {
    id: "34",
    question:
      "Sickle cell anemia (141900) is caused by a point mutation in the hemoglobin gene, resulting in the substitution of a single amino acid in the β-globin peptides of hemoglobin. This mutation is best detected by which of the following?",
    incorrectAnswers: [
      "Isolation of DNA from red blood cells followed by polymerase chain reaction (PCR) amplification and restriction enzyme digestion",
      "Isolation of DNA from blood leukocytes followed by Southern blot analysis to detect globin gene exon sizes",
      "Isolation of DNA from blood leukocytes followed by DNA sequencing of globin gene introns",
      "Western blot analysis of red blood cell extracts",
    ],
    correctAnswer:
      "Isolation of DNA from blood leukocytes followed by polymerase chain reaction (PCR) amplification and allele-specific oligonucleotide (ASO) hybridization",
    explanation:
      "Sickle cell anemia (141900) is an autosomal recessive hemoglobinopathy with an incidence of 1 in 500 African Ameri- can births. It is caused by a single-nucleotide substitution in codon 6 of the β-globin gene. This mutation abolishes an enzyme site so that a larger DNA fragment is obtained after Southern blot analysis with the appropriate enzyme. Single-nucleotide substitutions do not change the length of cod- ing regions (exons). The amplification of DNA segments using the poly- merase chain reaction (PCR) allows more sensitive detection of restriction enzyme differences, and can be followed by allele-specific oligonucleotide (ASO) hybridization to determine the presence of normal versus sickle al- leles. The equivalence of DNA in most tissues (with the exception of red blood cells that extrude their nucleus) makes DNA diagnosis a powerful technique that is independent of gene or protein expression. Western blot- ting is a technique that uses antibodies to highlight the size and amount of mutant protein in cell extracts. Since single-nucleotide changes in the gene may not affect protein size or conformation, western blotting is generally less sensitive and specific than DNA diagnosis.",
    image: "",
  },
  {
    id: "35",
    question:
      "The DNA sequence M, shown below, is the sense strand from a coding region known to be a mutational “hot spot” for a gene. It encodes amino acids 21 to 25. Given the genetic and amino acid codes CCC = proline (P), GCC = alanine (A), TTC = phenylalanine (F), and TAG = stop codon, which of the following sequences is a frame-shift mutation that causes ter- mination of the encoded protein?",
    incorrectAnswers: [
      "-CCA-CCT-AGG-TTC-AGG-",
      "-GCC-CCT-AGG-TTC-AGG-",
      "-CCC-CTA-GGT-TCA-GG—",
      "-CCC-CCT-AGG-AGG——",
    ],
    correctAnswer: "-CCA-CCC-TAG-GTT-CAG-",
    explanation:
      "Insertion (choice c) or deletion (choice d) of nucleotides shifts the reading frame unless the change is a multiple of 3 (choice e). Frame shifts may create unintended stop codons as in choice c. Point mutations resulting in nucleotide or amino acid substitutions are conveniently named by their position in the protein, i.e., P21A (choice b). The protein change P21A could also be denoted by the corresponding change in the DNA reading frame, i.e., C63A. Deletions may be prefixed by the letter delta, as with ∆F25 (choice e).",
    image: "",
  },
  {
    id: "36",
    question:
      "Which of the following results is provided by northern blot analysis?",
    incorrectAnswers: [
      "Detects specific base pairs",
      "Detects DNA molecules",
      "Detects proteins",
      "Determines chromosome structure",
    ],
    correctAnswer: "Detects RNA molecules",
    explanation:
      "Northern blotting is analogous to Southern blotting, a technique that was first described by Edward Southern. DNA fragments are separated on agarose gels by electrophoresis and then trans- ferred to nitrocellulose filters. The filters are then exposed to labeled probes, which hybridize to the DNA fragments. Northern blotting is an analogous procedure that uses more powerful denaturing substances to extend the RNA molecules and ensure that their electrophoretic migration is inversely proportional to their length. Labeled RNA or DNA segments (probes) are used to identify particular RNA species within the size- separated array. Western blotting is a technique for detecting proteins. It uses a different type of denaturing gel and labeled antibodies as probes to detect specific proteins.",
    image: "",
  },
  {
    id: "37",
    question:
      "The hypothetical “stimulin” gene contains two exons that encode a protein of 100 amino acids. They are separated by an intron of 100 bp beginning after the codon for amino acid 10. Stimulin messenger RNA (mRNA) has 5′ and 3′ untranslated regions of 70 and 30 nucleotides, respectively. A complementary DNA (cDNA) made from mature stimulin RNA would have which of the following sizes?",
    incorrectAnswers: ["500 bp", "300 bp", "100 bp", "70bp"],
    correctAnswer: "400 bp",
    explanation:
      "Exons are the coding portions of genes and con- sist of trinucleotide codons that guide the placement of specific amino acids into protein. Introns are the noncoding portions of genes that may function in evolution to provide “shuffling” of exons to produce new pro- teins. The primary RNA transcript contains both exons and introns, but the latter are removed by RNA splicing. The 5′ (upstream) and 3′ (down- stream) untranslated RNA regions remain in the mature RNA and are thought to regulate RNA transport or translation. A poly(A) tail is added to the primary transcript after transcription, which facilitates transport and processing from the nucleus. The discovery of introns complicated Mendel’s idea of the gene as the smallest hereditary unit; a modern defini- tion might be the colinear sequence of exons, introns, and adjacent regula- tory sequences that accomplish protein expression. Using these principles, one can determine the size of the stimulin gene. It contains a coding region of 300 bp (100 amino acids × 3 bp per amino acid), plus 100 bp in the intron, plus 70 + 30 = 100 bp in the untranslated regions (total = 500 bp). The mature RNA contains the same number of bp except for the 100 bp in the intron (500 − 100 = 400 bp). Transcription begins at the start of the 5′ untranslated region (70 bp) and the splice site occurs 30 bp (10 × 3) into the coding region at the beginning of the intron.",
    image: "",
  },
  {
    id: "38",
    question:
      "Thehypothetical“stimulin”genewithtwoexonsencodingaproteinof 100 amino acids is found to have abnormal expression in cell culture. Which of the following mutations would produce a 500-bp stimulin mRNA and a 133–amino acid peptide that reacts with antibodies to stim- ulin protein?",
    incorrectAnswers: [
      "Frame-shift mutation in codon #2",
      "Silent point mutation in the third nucleotide of codon #50",
      "Nonsense mutation at codon #2",
      "Deletion of exon 1",
    ],
    correctAnswer: "Splice junction mutation preventing RNA splicing",
    explanation:
      "The answer is a. (Murray, pp 452–467. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) Splice junction mutations will theoretically pro- duce a larger mRNA unless the mRNA is unstable; the larger protein may have abnormal function but retain peptide regions that react with antibody to the authentic protein. Nucleotide insertions or deletions other than mul- tiples of 3 alter the reading frame of the code and scramble the amino acid sequence distal to the frame-shift mutation. Such altered mRNAs may be of increased or smaller size, depending on their stability, as may the translated protein, depending on the presence of stop codons within the shifted read- ing frame. Only the protein upstream of the frame-shift mutation retains immune cross-reactivity and normal function. Point mutations (nucleotide substitutions) may have substantial functional impact if the altered codon results in an amino acid substitution. If no amino acid substitution occurs, they are called silent mutations.",
    image: "",
  },
  {
    id: "39",
    question: "In contrast to DNA polymerase, RNA polymerase",
    incorrectAnswers: [
      "Fills in the gap between Okazaki fragments",
      "Works only in a 5′ to 3′ direction",
      "Edits as it synthesizes",
      "Adds nucleoside monophosphates to the growing polynucleotidess",
    ],
    correctAnswer: "Synthesizes RNA primer to initiate DNA synthesis",
    explanation:
      "DNA synthesis cannot occur until an RNA primer is made. A specific type of RNA polymerase called primase synthe- sizes a short stretch of RNA of about five nucleotides that is complementary to the template DNA strand in duplex DNA near the replication fork. This function cannot be carried out by DNA polymerase. In contrast, both DNA polymerase and RNA polymerase work in the 5′ to 3′ direction and add nucleoside monophosphates from nucleotide triphosphates to the growing polynucleotide chains of DNA or RNA. Only DNA polymerase edits as it synthesizes DNA and fills the gap between Okazaki fragments.",
    image: "",
  },
  {
    id: "40",
    question:
      "The removal of introns and subsequent self-splicing of adjacent exons occurs in some portions of primary ribosomal RNA transcripts. The splic- ing of introns in messenger RNA precursors is",
    incorrectAnswers: [
      "RNA-catalyzed in the absence of protein",
      "Self-splicing",
      "Regulated by RNA helicase",
      "Controlled by RNA polymerase",
    ],
    correctAnswer: "Carried out by spliceosomes",
    explanation:
      "The answer is c. (Murray, pp 435–451. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) Self-splicing of the introns of some primary ribosomal RNA transcripts occurs because of the presence of catalytic RNAs (ribozymes) generated from the introns. This occurs in the absence of protein catalysis. In contrast, the splicing of messenger RNA is carried out by spliceosomes. Spliceosomes are large complexes of three kinds of small ribonucleoprotein particles (snRNPs) and the messenger RNA pre- cursor. The snRNPs are involved in recognizing the 5′ splice site and the 3′ splice site and then binding to these sites. Once the spliceosome is bound, it mediates excision of the intron and splicing of the two adjacent exons.",
    image: "",
  },
  {
    id: "41",
    question: "A promoter site on DNA",
    incorrectAnswers: [
      "Translates specific proteins",
      "Regulates termination",
      "Codes for RNA polymerase",
      "Transcribes repressor",
    ],
    correctAnswer: "Initiates transcription",
    explanation:
      "Promoter sites are initiation sites for transcrip- tion. Transcription starts when RNA polymerase binds to the promoter. It then unwinds the closed promoter complex, where DNA is in the form of a double helix, to form the open promoter complex in which about 17 base pairs of template DNA are unwound. RNA synthesis then begins with either a pppA or a pppG inserted at the beginning 5′-terminus of the new RNA chain, which is synthesized in the 5′ to 3′ direction.",
    image: "",
  },
  {
    id: "42",
    question: "The σ factor found in many bacteria is best described as a",
    incorrectAnswers: [
      "Subunit of DNA polymerase that allows for synthesis in both 5' to 3' and 3' to 5' directions",
      "Subunit of the 50S ribosome that catalyzes peptide bond synthesis",
      "Subunit of the 30S ribosome to which mRNA binds",
      "Factor that forms the bridge between the 30S and 50S particles constituting the 70S ribosome",
    ],
    correctAnswer:
      "Subunit of RNA polymerase responsible for the specificity of the initiation of transcription of RNA from DNA",
    explanation:
      "σ factor is a bacterial protein that can associate with and become a subunit of bacterial RNA polymerase. σ factor confers specificity of initiation on the core enzyme. In the presence of σ factor, RNA polymerase chooses the correct strand of duplex DNA for transcrip- tion and initiates transcription at the appropriate promoter region. In some bacteria, such as Bacillus subtilis, a specific σ factor is synthesized to change transcriptional selectivity and effect cellular changes like sporulation.",
    image: "Molecular-10.png",
  },
  {
    id: "43",
    question:
      "An immigrantfromeasternEuropeisrushedintotheemergencyroom with nausea, vomiting, diarrhea, and abdominal pain. His family indicates he has eaten wild mushrooms. They have brought a bag of fresh, uncooked mushrooms from a batch he had not yet prepared. You note the presence of Amanita phalloides, the death-cap mushroom. A liver biopsy indicates mas- sive hepatic necrosis. Care is supportive. A major toxin of the death-cap mushroom is the hepatotoxic octapeptide α-amanitin, which inhibits",
    incorrectAnswers: [
      "DNA primase",
      "RNA nuclease",
      "DNA ligase",
      "RNA/DNA endonuclease",
    ],
    correctAnswer: "RNA polymerase",
    explanation:
      "The deadly mushroom A. phalloides has several toxins. A major toxin is α-amanitin, an octapeptide that inhibits mRNA synthesis by very tightly binding RNA polymerase II (DNA-dependent RNA polymerase). As little as one of the mushrooms (know as the death- cap, death-cup, or avenging angel) delivers a lethal dose of about 10 mg α-amanitin. Severe, irreversible liver damage occurs quickly, leading to death. At higher concentrations, the toxin can inhibit RNA polymerase III and tRNA synthesis. Polymerase I is unaffected. Since α-amanitin is effec- tive at concentrations of 10−9 to 10−8 M, it has been useful as a research tool for studying RNA polymerase function.",
    image: "",
  },
  {
    id: "44",
    question:
      "The consensus sequence 5′ TATAAAA 3′ found in eukaryotic genes is quite similar to a consensus sequence observed in prokaryotes. It is impor- tant as the",
    incorrectAnswers: [
      "Allow tRNA to be processed",
      "Occur at the 3′ end of tRNA",
      "Are composed of poly A",
      "Major binding site of RNA polymerase I",
    ],
    correctAnswer:
      "First site of binding of a transcription factor for RNA polymerase II",
    explanation:
      "The first event that occurs in mRNA synthesis is the binding of transcription factor TFIID to the TATA box. This consensus sequence portion of virtually all eukaryotic genes coding for mRNA is cen- tered at about −25 and is similar to a 10-sequence promoter box found in prokaryotes. TFIID contains a TATA box–binding protein. The following sequence occurs in the initiation of mRNA synthesis: 1. TFIID binding to the TATA box 2. TFIIA binding 3. TFIIB binding 4. RNA polymerase II binding 5. TFIIE binding When all these elements are bound to DNA, the basal transcription appa- ratus complex is formed and can transcribe DNA slowly. Other factors are required for fast, efficient mRNA synthesis.",
    image: "",
  },
  {
    id: "45",
    question: "The so-called caps of RNA molecules",
    incorrectAnswers: [
      "Allow correct translation of prokaryotic mRNA",
      "Are composed of poly A",
      "Occur at the 3′ end of tRNA",
      "Allow tRNA to be processed",
    ],
    correctAnswer: "Are unique to eukaryotic mRNA",
    explanation:
      "The primary transcripts of all eukaryotic mRNAs are capped at the 5′ end. Prokaryotic RNAs and eukaryotic tRNA and rRNA are not capped. The cap is composed of 7-methylguanylate attached by a pyrophosphate linkage to the 5′ end. This is known as cap 0. One of the adjacent riboses is methylated in cap 1, and both of the adjacent riboses are methylated in cap 2. The cap protects the 5′ ends of mRNAs from nucleases and phosphatases and is essential for the recognition of eukaryotic mRNAs in the protein-synthesizing system. When prokaryotic monocistronic mRNAs are artificially capped, translation occurs in a eukaryotic, in vitro translation system.",
    image: "",
  },
  {
    id: "46",
    question: "In bacterial RNA synthesis, the function of factor ρ is to",
    incorrectAnswers: [
      "Bind catabolite repressor to the promoter region",
      "Increase the rate of RNA synthesis",
      "Eliminate the binding of RNA polymerase to the promoter",
      "Allow proper initiation of transcription",
    ],
    correctAnswer: "Participate in the proper termination of transcription",
    explanation:
      "The answer is d. (Murray, pp 435–451. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) Bacterial DNA contains stop signals, some of which require ρ protein. This has been demonstrated by examining the synthesis of mRNA in the presence and absence of ρ protein. In the absence of ρ protein, longer RNA molecules are often synthesized. This would seem to indicate that mRNA length can be controlled by the cell. In addition, antiterminator proteins are needed to allow certain genes to be properly expressed. Mammalian mechanisms for transcription termination, and the likely presence of factors regulating termination, are not yet characterized.",
    image: "",
  },
  {
    id: "47",
    question:
      "Which of the following statements correctly describes the nucleolus of a mammalian cell?",
    incorrectAnswers: [
      "It differs from that found in bacterial cells in that histones are present",
      "It synthesizes 5S ribosomal RNA",
      "It synthesizes 60S and 40S ribosomal subunits",
      "It synthesizes all ribosomal RNA primary transcripts",
    ],
    correctAnswer:
      "It may contain hundreds of copies of genes for different types of ribosomal RNAs",
    explanation:
      "The nucleolus is an organelle unique to eukary- otic cells. It is the site where hundreds of copies of genes repeated in tan- dem for three of the four ribosomal RNAs are transcribed by RNA polymerase I to give a 45S primary transcript. Enzymatic modification and cleavage remove spacer regions to yield 28S, 18S, and 5.8S ribosomal RNA. The 5S subunit is synthesized by RNA polymerase III in the nucleoplasm rather than in the nucleolus. Ribosomal proteins combine with the riboso- mal subunits to assemble into a 60S subunit containing the 5S, 5.8S, and 28S RNAs and a 40S subunit containing the 18S RNA. Combined, the two subunits produce a functional eukaryotic ribosome with a sedimentation coefficient of 80S.",
    image: "",
  },
  {
    id: "48",
    question:
      "Which one of the following statements correctly describes the synthe- sis of mammalian messenger RNA (mRNA)?",
    incorrectAnswers: [
      "Each mRNA often encodes several different proteins",
      "There is colinearity of the RNA sequence transcribed from a gene and the amino acid sequence of its encoded protein",
      "The RNA sequence transcribed from a gene is virtually identical to the mRNA that exits from nucleus to cytoplasm",
      "Mammalian mRNA undergoes minimal modification during its maturation",
    ],
    correctAnswer:
      "Several different genes may produce identical mRNA molecules",
    explanation:
      "About 30% of the DNA of humans and other mammals consists of repeated sequences. Repetitive DNA includes numer- ous families of genes like those for histones. Some families of repeated genes make identical mRNA molecules, suggesting that their multiple gene copies are needed to make adequate amounts of protein. Although many genes in bacteria produce a polycistronic mRNA that encodes several dif- ferent peptides, all mRNAs in mammals encode a single peptide and are monocistronic. In addition, RNA is initially transcribed from protein- encoding genes as larger molecules called heterogenous nuclear RNA (hnRNA). These immature hnRNA molecules must be spliced to remove introns and chemically modified with 5′ caps and 3′-polyA sequences before reaching the cytoplasm as functional mRNA. The initial HnRNA transcript is colinear with its encoded protein within exons but not within introns. Mature mRNAs also have 5′ and 3′ untranslated regions that are not colinear with the encoded peptide.",
    image: "",
  },
  {
    id: "49",
    question: "Studies of the genetic code in bacteria have revealed that",
    incorrectAnswers: [
      "Messenger RNA (mRNA) molecules specify only one polypeptide chain",
      "Many triplets can be “nonsense” triplets",
      "Gene sequence and encoded proteins are not colinear",
      "The nucleotide on the 5′ end of a triplet has the least specificity for an amino acid",
    ],
    correctAnswer:
      "No signal exists to indicate the end of one codon and the beginning of another",
    explanation:
      "In the mRNAs of bacteria and the exonic mRNA regions of mammals, the triplet nucleotides comprising codons are contin- uous, without “spacers” to mark the end of one codon and the beginning of another. These RNA regions and their product peptides are also colinear with the gene (DNA) sequence. Bacterial mRNA molecules are poly- cistronic and code for more than one polypeptide chain or enzyme, allow- ing their coordinate regulation in response to metabolic or environmental signals. There are only three “nonsense” or chain-terminating codons and 61 “sense” codons that encode for 20 amino acids. Redundancy of the code (several codons code for the same amino acid) is compensated for by the “wobble” hypothesis of Crick. The complementary anticodons of charged transfer RNAs hybridize stringently at the first two positions of the codon but weakly (“wobbly”) at the third position. One aminoacyl–transfer RNA can thus recognize several different codons, each identical at the first two positions but different at the third.",
    image: "",
  },
  {
    id: "50",
    question:
      "Which one of the following binds to specific nucleotide sequences that are upstream of the start site of transcription?",
    incorrectAnswers: [
      "Primase",
      "Helicase",
      "Histone protein",
      "Restriction endonuclease",
    ],
    correctAnswer: "RNA polymerase",
    explanation:
      "In mammals, RNA polymerase binds to pro- moter sites upstream from the start site. These include the TATA box (TATAAT), the CAAT box, and the GC box. DNA primase and helicase are involved in DNA replication and do not bind specifically to sequences upstream of genes. Restriction endonucleases recognize specific sequences in double-helical DNA and cleave both strands. Histones nonspecifically bind to chromosomal DNA and constitute about half the mass of mam- malian chromosomes.",
    image: "",
  },
  {
    id: "51",
    question:
      "Template-directed RNA synthesis occurs in which of the following?",
    incorrectAnswers: [
      "Point mutation",
      "Triplet repeat expansion",
      "Initiation of the polymerase chain reaction",
      "Repair of thymine dimers",
    ],
    correctAnswer: "Expression of oncogenes",
    explanation:
      "Oncogenes are cancer-producing genes. They are closely related to normal cellular genes and are often tyrosine kinases, growth factors, or receptors for growth factors. The expression of onco- genes leads to the translation and eventual transcription of the protein product of the oncogene. Thus, template-directed RNA synthesis but not DNA synthesis occurs during the expression of oncogenes. In contrast, template-directed DNA synthesis rather than RNA synthesis occurs during the repair of thymine dimers, the polymerase chain reaction, the function- ing of the replication fork, and the growth of RNA tumor viruses. In the final stages of the repair of thymine dimers, once the dimer has been excised, DNA polymerase I enters the gap to carry out template-directed synthesis. In functioning of the replication fork, DNA polymerase III holoenzyme carries out synthesis of DNA during replication. Template- directed DNA synthesis is required for the growth of RNA tumor viruses (retroviruses). Once released into the host cytoplasm, retroviral RNA syn- thesizes both the positive and minus strands of DNA, using reverse tran- scriptase. This unique enzyme catalyzes the initial RNA-directed DNA synthesis, hydrolysis of RNA, and then DNA-directed DNA synthesis. The newly formed viral DNA duplex integrates into the host cell DNA prior to transcription. In this form, the retrovirus is inherited by daughter host cells. The polymerase chain reaction is a method of amplifying the amount of DNA in a sample or of enriching particular DNA sequences in a popula- tion of DNA molecules. In the polymerase chain reaction, oligonucleotides complementary to the ends of the desired DNA sequence are used as primer for multiple rounds of template-directed DNA synthesis.",
    image: "",
  },
  {
    id: "52",
    question:
      "Which of the following most correctly describes mammalian messen- ger RNAs?",
    incorrectAnswers: [
      "They are usually transcribed from both DNA strands",
      "They are normally double-stranded",
      "Their content of uridine equals their content of adenine",
      "Their ratio of ribose to purine bases equals 1",
    ],
    correctAnswer: "They have an overall negative charge at neutral pH",
    explanation:
      "At a physiologic pH of 7.4, mRNAs (like DNA) are polyanionic owing to the negatively charged phosphate hydroxyl groups. Mammalian mRNAs are synthesized from DNA as single-stranded linear molecules. Because they are not double-stranded, the concentrations of the different bases in mRNA are variable rather than exhibiting the A = T and G = C pattern of double-stranded DNA (A does not equal U in mRNA). The hybridization of RNA with its complementary template DNA is antiparallel. In both DNA and RNA, sugar units equal base units equal phosphate units. However, their bases consist of pyrimidines as well as purines.",
    image: "",
  },
  {
    id: "53",
    question: "The western blot use what type of probe?",
    incorrectAnswers: [
      "mRNA",
      "Products of polymerase chain reaction (PCR)",
      "tRNA",
      "Mutant and normal oligonucleotides",
    ],
    correctAnswer: "Antibody",
    explanation:
      "In an expression library, cDNA clones are screened on the basis of their ability to direct bacterial synthesis of a foreign protein of interest. Radioactive antibodies specific to this protein can be used to identify the colonies of bacteria that contain the cDNA vector. As was the case for probing genomic libraries, bacteria grown on a master plate are blotted onto a nitrocellulose replica plate and then lysed. The released proteins may then be labeled with 125I antibodies. In contrast, northern blotting can be used to identify RNA molecules separated by gel electrophoresis. In northern blotting, RNA molecules separated by gel elec- trophoresis can be identified by hybridization with probe DNA following transfer to nitrocellulose. Mutant and wild-type oligonucleotides can be used as probes to analyze polymerase chain reaction products. Conversely, the products of polymerase chain reaction can be used to analyze cDNA libraries.",
    image: "",
  },
  {
    id: "54",
    question:
      "What is the correct order of the following steps in protein synthesis?",
    incorrectAnswers: ["1,2,5,4,3", "2,3,4,5,1", "4,5,1,2,3", "3,2,4,5,1"],
    correctAnswer: "2,4,5,1,3",
    explanation:
      "Despite some differences, protein synthesis in prokary- otes and eukaryotes is quite similar. The small ribosomal subunit is 30S in prokaryotes and 40S in eukaryotes. The large ribosomal subunit is 50S in prokaryotes and 60S in eukaryotes. The intact ribosome is consequently larger in eukaryotes (80S) and smaller in prokaryotes (70S). At the start of translation, initiation factors, mRNA, and initiation aminoacyl-tRNA bind to the dissociated small ribosomal subunit. The initiation tRNA in prokaryotes is N-formyl methionine in prokaryotes and simply methionine in eukary- otes. Only after the small ribosomal subunit is primed with mRNA and ini- tiation aminoacyl-tRNA does the large ribosomal subunit bind to it. Once this happens, elongation factors bring the first aminoacyl-tRNA of the nascent protein to the A site. Then peptidyl transferase forges a peptide bond between the initiation amino acid and the first amino acid of the form- ing peptide. The now uncharged initiation tRNA leaves the P site and the peptidyl-tRNA from the A site moves to the now vacant P site with the two amino acids attached. The ribosome advances three bases to read the next codon and the process repeats. When the stop signal is reached after the complete polypeptide has been synthesized, releasing factors bind to the stop signal, causing peptidyl transferase to hydrolyze the bond that joins the polypeptide at the A site to the tRNA. Factors prevent the reassociation of ribosomal subunits in the absence of new initiation complex.",
    image: "",
  },
  {
    id: "55",
    question: "New proteins destined for secretion are synthesized in the",
    incorrectAnswers: [
      "Golgi apparatus",
      "Smooth endoplasmic reticulum",
      "Free polysomes",
      "Nucleus",
    ],
    correctAnswer: "Rough endoplasmic reticulum",
    explanation:
      "Protein synthesis occurs in the cytoplasm, on groups of free ribosomes called polysomes, and on ribosomes associated with membranes, termed the rough endoplasmic reticulum. However, pro- teins destined for secretion are only synthesized on ribosomes of the endo- plasmic reticulum and are synthesized in such a manner that they end up inside the lumen of the endoplasmic reticulum. From there the secretory proteins are packaged in vesicles. The Golgi apparatus is involved in the glycosylation and packaging of macromolecules into membranes for secre- tion.",
    image: "",
  },
  {
    id: "56",
    question:
      "Which of the following statements regarding eukaryotic cells is true?",
    incorrectAnswers: [
      "Formylated methionyl-tRNA is important for initiation of translation",
      "Single mRNAs specify more than one gene product",
      "Cytosolic ribosomes are smaller than those found in prokaryotes",
      "Erythromycin inhibits elongation during translation",
    ],
    correctAnswer: "Cycloheximide blocks elongation during translation",
    explanation:
      "In a general sense, the mechanism of protein synthesis in eukaryotic cells is similar to that found in prokaryotes; how- ever, there are significant differences. Cycloheximide inhibits elongation of proteins in eukaryotes, while erythromycin causes the same effect in prokaryotes. Thus, one is an antibiotic beneficial to humans, while the other is a poison. Cytoplasmic ribosomes of eukaryotes are larger, sedi- menting at 80S instead of 70S. While eukaryotic cells utilize a specific tRNA for initiation, it is not formylated as in bacteria. Finally, eukaryotic mRNA always specifies only one polypeptide, as opposed to prokaryotic mRNA, which may specify the synthesis of more than one gene product per mRNA.",
    image: "",
  },
  {
    id: "57",
    question:
      "Modification of mRNA so that a signal sequence is added to the amino terminus of the cytosolic protein, α-globin, results in",
    incorrectAnswers: [
      "No change in physiology of the protein",
      "Proteolytic cleavage within the cytosol",
      "Cytosolic localization of the protein",
      "Signal recognition particle synthesis",
    ],
    correctAnswer: "Translocation across the endoplasmic reticulum",
    explanation:
      "By using recombinant DNA techniques, mRNAs can be produced that yield chimeric proteins. By forming mRNAs that pro- duce otherwise cytosolic proteins, as when α-globin is engineered with a cleavable amino terminal signal sequence, this otherwise cytosolic protein becomes a secretory protein and is translocated into the lumen of endo- plasmic reticulum. The signal sequence thus contains all the information needed to direct the translocation of protein across endoplasmic reticulum. These experiments were performed by adding chimeric mRNA to an in vitro system of protein synthesis composed of endoplasmic reticulum vesi- cles, ribosomes, tRNAs, and other factors required for protein synthesis. Without the modified amino terminal signal sequence, the α-globin is released into the experimental solution, and with the signal sequence it is synthesized into the lumen of the endoplasmic reticulum vesicles.",
    image: "",
  },
  {
    id: "58",
    question:
      "How many high-energy phosphate-bond equivalents are utilized in the process of activation of amino acids for protein synthesis?",
    incorrectAnswers: [
      "Stop codons",
      "Peptidyl transferase",
      "Dissociation of ribosomes",
      "UAA",
    ],
    correctAnswer: "Release factors",
    explanation:
      "ATP is required for the esterification of amino acids to their corresponding tRNAs. This reaction is catalyzed by the class of enzymes known as aminoacyl-tRNA synthetases. Each one of these enzymes is specific for one tRNA and its corresponding amino acid. amino acid + tRNA + ATP → aminoacyl-tRNA + AMP + PPi .As with most ATP hydrolysis reactions that release pyrophosphate, pyro- phosphatase quickly hydrolyzes the product to Pi, which makes the reac- tion essentially irreversible. Since ATP is hydrolyzed to AMP and PPi during the reaction, by convention the equivalent of two high-energy phosphate bonds is utilized.",
    image: "",
  },
  {
    id: "59",
    question:
      "The hydrolytic step leading to the release of a polypeptide chain from a ribosome is catalyzed by",
    incorrectAnswers: [
      "UAA",
      "Dissociation of ribosomes",
      "Release factors",
      "Stop codons",
    ],
    correctAnswer: "Peptidyl transferase",
    explanation:
      "During the course of protein synthesis on a ribosome, peptidyl transferase catalyzes the formation of peptide bonds. However, when a stop codon such as UAA, UGA, or UAG is reached, aminoacyl-tRNA does not bind to the A site of a ribosome. One of the pro- teins, known as a release factor, binds to the specific trinucleotide sequence present. This binding of the release factor activates peptidyl transferase to hydrolyze the bond between the polypeptide and the tRNA occupying the P site. Thus, instead of forming a peptide bond, peptidyl transferase cat- alyzes the hydrolytic step that leads to the release of newly synthesized pro- teins. Following release of the polypeptide, the ribosome dissociates into its major subunits.",
    image: "",
  },
  {
    id: "60",
    question: "The function of signal recognition particles is to",
    incorrectAnswers: [
      "Detect cytosolic proteins",
      "Direct the signal sequences to ribosomes",
      "Cleave signal sequences",
      "Bind mRNA to ribosomes",
    ],
    correctAnswer: "Bind ribosomes to endoplasmic reticulum",
    explanation:
      "The answer is d. (Murray, pp 452–467. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) The directing of nascent polypeptide chains to the endoplasmic reticulum is regulated by signal recognition particles (SRPs). The signal sequence of a nascent protein is recognized by an SRP, which complexes with the ribosome, mRNA, and the nascent protein. The complexed SRP then binds to an SRP receptor on the surface of the endoplasmic reticulum. After the ribosome is transferred to ribophorins and the translocation begins, SRP is released back into the cytosol. Ribo- somes with nascent protein without a signal sequence do not participate in this process and instead synthesize proteins that are released into the cytosol.",
    image: "Molecular-20.png",
  },
  {
    id: "61",
    question: "Which of the following statements about ribosomes is true?",
    incorrectAnswers: [
      "Aminoacyl-tRNA synthetase activation of amino acids",
      "Attachment of mRNA to ribosomes",
      "Translocation of tRNA–nascent protein complex from A to P sites",
      "Attachment of signal recognition protein to ribosomes",
    ],
    correctAnswer: "Attachment of ribosomes to endoplasmic reticulum",
    explanation:
      "The two subunits of ribosomes are composed of proteins and rRNA. Ribosomes are found in the cytoplasm, in mitochon- dria, and bound to the endoplasmic reticulum. Transcription refers to the synthesis of RNA complementary to a DNA template and has nothing immediately to do with ribosomes.",
    image: "",
  },
  {
    id: "62",
    question:
      "Guanosine triphosphate (GTP) is required by which of the following steps in protein synthesis?",
    incorrectAnswers: [
      "Aminoacyl-tRNA synthetase activation of amino acids",
      "Attachment of ribosomes to endoplasmic reticulum",
      "Attachment of mRNA to ribosomes",
      "Attachment of signal recognition protein to ribosomes",
    ],
    correctAnswer:
      "Translocation of tRNA–nascent protein complex from A to P sites",
    explanation:
      "Two molecules of GTP are used in the formation of each peptide bond on the ribosome. In the elongation cycle, binding of aminoacyl-tRNA delivered by EF-Tu to the A site requires hydrolysis of one GTP. Peptide bond formation then occurs. Translocation of the nascent peptide chain on tRNA to the P site requires hydrolysis of a second GTP. The activation of amino acids with aminoacyl-tRNA synthetase requires hydrolysis of ATP to AMP plus PPi.",
    image: "",
  },
  {
    id: "63",
    question:
      "Erythromycin is the antibiotic of choice when treating respiratory tract infections in legionnaire’s disease, whooping cough, and Mycoplasma-based pneumonia because of its ability to inhibit protein synthesis in certain bacteria by",
    incorrectAnswers: [
      "Acting as an analogue of mRNA",
      "Causing premature chain termination",
      "Inhibiting initiation",
      "Mimicking mRNA binding",
    ],
    correctAnswer:
      "Inhibiting translocation by binding to 50S ribosomal subunits",
    explanation:
      "The answer is a. (Murray, pp 452–467. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) Virulent strains of bacteria that cause severe, life- threatening respiratory tract infections can often be successfully treated with erythromycin. These include Mycoplasma pneumoniae, various Legionella species, and Bordetella pertussis. The mechanism of action of erythromycin is to specifically bind the 50S subunit of bacterial ribosomes. Under normal conditions, after mRNA attaches to the initiation site of the 30S subunit, the 50S subunit binds to the 30S complex and forms the 70S complex that allows protein chain elongation to go forward. Elongation is prevented in the presence of erythromycin.",
    image: "",
  },
  {
    id: "64",
    question:
      "An immigrant family from rural Mexico brings their 3-month-old child to the emergency room because of whistling inspiration (stridor) and high fever. The child’s physician is perplexed because the throat examina- tion shows a gray membrane almost occluding the larynx. A senior physi- cian recognizes diphtheria, now rare in immunized populations. The child is intubated, antitoxin is administered, and antibiotic therapy is initiated. Diphtheria toxin is often lethal in unimmunized persons because it",
    incorrectAnswers: [
      "nhibits initiation of protein synthesis by preventing the binding of GTP to the 40S ribosomal subunit",
      "Binds to the signal recognition particle receptor on the cytoplasmic face of the endoplasmic reticulum receptor",
      "Shuts off signal peptidase",
      "Causes deletions of amino acid by speeding up the movement of peptidyl-tRNA from the A site to the P site",
    ],
    correctAnswer:
      "Blocks elongation of proteins by inactivating elongation factor 2 (EF-2, or translocase)",
    explanation:
      "The answer is d. (Murray, pp 452–467. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) The gene that produces the deadly toxin of Corynebac- terium diphtheriae comes from a lysogenic phage that grows in the bacteria. Prior to immunization, diphtheria was the primary cause of death in chil- dren. The protein toxin produced by this bacterium inhibits protein synthe- sis by inactivating elongation factor 2 (EF-2, or translocase). Diphtheria toxin is a single protein composed of two portions (A and B). The B portion enables the A portion to translocate across a cell membrane into the cytoplasm. The A portion catalyzes the transfer of the adenosine diphosphate ribose unit of NAD1 to a nitrogen atom of the diphthamide ring of EF-2, thereby blocking translocation. Diphthamide is an unusual amino acid residue of EF-2.",
    image: "",
  },
  {
    id: "65",
    question:
      "A potent inhibitor of protein synthesis that acts as an analogue of aminoacyl-tRNA is",
    incorrectAnswers: [
      "Mitomycin C",
      "Streptomycin",
      "Nalidixic acid",
      "Rifampicin",
    ],
    correctAnswer: "Puromycin",
    explanation:
      "Puromycin is virtually identical in structure to the 3′-terminal end of tyrosinyl-tRNA. In both eukaryotic and prokaryotic cells, it is accepted as a tyrosinyl-tRNA analogue. As such, it is incorporated into the carboxy-terminal position of a peptide at the aminoacyl (A) site on ribosomes, causing premature release of the nascent polypeptide. Thus, puromycin inhibits protein synthesis in both human and bacterial cells. Streptomycin, like tetracycline and chloramphenicol, inhibits ribosomal activity. Mitomycin covalently cross-links DNA, which prevents cell repli- cation. Rifampicin is an inhibitor of bacterial DNA-dependent RNA poly- merase.",
    image: "",
  },
  {
    id: "66",
    question: "Ribosomes similar to those of bacteria are found in",
    incorrectAnswers: [
      "Plant nuclei",
      "Cardiac muscle cytoplasm",
      "Liver endoplasmic reticulum",
      "Neuronal cytoplasm",
    ],
    correctAnswer: "Pancreatic mitochondria",
    explanation:
      "Prokaryotic ribosomes have a sedimentation coeffi- cient of 70S and are composed of 50S and 30S subunits. Eukaryotic cyto- plasmic ribosomes, either free or bound to the endoplasmic reticulum, are larger—60S and 40S subunits that associate to an 80S ribosome. Nuclear ribosomes are attached to the endoplasmic reticulum of the nuclear mem- brane. Ribosomes in chloroplasts and mitochondria of eukaryotic cells are more similar to prokaryotic ribosomes than to eukaryotic cytosolic ribo- somes. Like bacterial ribosomes, chloroplast and mitochondrial ribosomes use a formylated tRNA. In addition, they are sensitive to many of the inhibitors of protein synthesis in bacteria.",
    image: "",
  },
  {
    id: "67",
    question:
      "Which of the following statements is true of all transfer (t) RNAs?",
    incorrectAnswers: [
      "The 3′ end is phosphorylated",
      "They are duplex chains",
      "No methylated bases are found",
      "The anticodon loop is identical",
    ],
    correctAnswer: "The 3′ end base sequence is CCA",
    explanation:
      "For transfer RNAs, the 5′ end is often guanosine and is always phosphorylated, while the 3′ end is CCA. Although transfer (t) RNA molecules have many features in common, the primary feature that sets them apart is their specificity for different amino acids and the correspond- ing specific differences of their anticodons. Each tRNA is an L-shaped single chain composed of up to 93 ribonucleotides. Each contains up to 15 meth- ylated bases, and about half of the nucleotides are base-paired into double helices. Activated amino acids attach to the terminal 3′-hydroxyl group of the adenosine.",
    image: "",
  },
  {
    id: "68",
    question:
      "Methionyl–transfer (t) RNA is used for initiation of protein synthesis by which of the following?",
    incorrectAnswers: [
      "Chloroplast ribosomes",
      "Eukaryotic mitochondrial ribosomes",
      "Bacterial ribosomes",
      "Bacterial cytoplasm",
    ],
    correctAnswer: "Eukaryotic cytoplasmic ribosomes",
    explanation:
      "Methionyl-tRNA is the special tRNA used in eukaryotes for initiation. Initiation of protein synthesis by bacterial, mitochondrial, and chloroplast ribosomes requires N-formylmethionyl-tRNA. The mitochondria of eukaryotic cells are similar to bacteria in the size of their ribosomal RNAs (23S and 16S) and their mechanisms for protein syn- thesis. Mitochondrial and prokaryotic ribosomes (including those of chloroplasts and bacteria) use formylmethionyl-tRNA for initiation of pro- tein synthesis and are sensitive to inhibitors like streptomycin, tetracycline, and chloramphenicol that have little effect on eukaryotic cells. The latter drugs are useful as antibiotics in animals and humans since they inhibit bacteria but do not gain entry into mitochondria.",
    image: "",
  },
  {
    id: "69",
    question:
      "Which of the following is required for certain types of eukaryotic pro- tein synthesis but not for prokaryotic protein synthesis?",
    incorrectAnswers: [
      "Ribosomal RNA",
      "Messenger RNA",
      "Peptidyl transferase",
      "GTP",
    ],
    correctAnswer: "Signal recognition particle",
    explanation:
      "The answer is c. (Murray, pp 452–467. Scriver, pp 3–45. Sack, pp 1–40. Wilson, pp 101–120.) Signal recognition particles (SRPs) recognize the signal sequence on the N-terminal end of proteins destined for the lumen of the endoplasmic reticulum (ER). SRP binding arrests translation and an SRP receptor facilitates import of the SRP, ribosome, and nascent protein into the ER lumen. A signal peptidase removes the signal sequence from the protein, which may remain in the membrane or be routed for secretion. Common to both eukaryotic and prokaryotic protein synthesis is the requirement for ATP to activate amino acids. The activated aminoacyl- tRNAs then interact with ribosomes carrying mRNA. Peptidyl transferase catalyzes the formation of peptide bonds between the free amino group of activated aminoacyl-tRNA on the A site of the ribosome and the esterified carboxyl group of the peptidyl-rRNA on the P site; the liberated rRNA remains on the P site.",
    image: "",
  },
  {
    id: "70",
    question:
      "An older man with severe emphysema is found to have decreased amounts and abnormal mobility of α1 antitrypsin (AAT) protein in his serum when analyzed by serum protein electrophoresis. Liver biopsy dis- closes mild scarring (cirrhosis) and demonstrates microscopic inclusions due to an engorged endoplasmic reticulum (ER). The most likely explana- tion for these findings is",
    incorrectAnswers: [
      "Defective energy metabolism causing deficiency of GTP",
      "A mutation affecting the N-terminal methionine and blocking initiation of protein synthesis",
      "A mutation affecting the signal sequence",
      "Defective structure of the signal recognition particles",
    ],
    correctAnswer: "Defective transport from hepatic ER to the serum",
    explanation:
      "(Murray, pp 452–467. Scriver, pp 5559–5628. Sack, pp 1–40. Wilson, pp 101–120.) The decreased amount of AAT protein, its abnormal mobility, and the engorgement of liver ER suggest a mutant AAT that is inefficiently transported from the ER to serum. Since other serum protein abnormalities were not mentioned, general deficiencies of protein synthesis arising from defective energy metabolism or defective signal recognition particles are unlikely. A mutation affecting the N-terminal methionine of AAT or its signal sequence should drastically decrease its synthesis and import to the ER lumen. This would not explain the engorge- ment of liver ER. The usual binding of the signal recognition particle to the signal sequence of AAT, followed by import into the ER lumen, seems intact. An altered amino acid necessary for signal peptidase cleavage of the signal sequence of AAT might be invoked, but a general deficiency of the signal peptidase should disrupt many secreted proteins and be an embry- onic lethal mutation. AAT deficiency (107400) is a well-characterized auto- somal dominant disease with common ZZ, SZ, and SS genotypes that can cause childhood liver disease and adult emphysema. The Z and S mutations alter AAT conformation and interfere with its secretion from ER to serum. Lack of AAT protection from proteases in lung is thought to cause the thin- ning of alveolar walls and dysfunctional “air sacs” of emphysema. The figure below illustrates how changes in the DNA code can effect protein products.",
    image: "",
  },
];

export default data;
