
import Quiz from '../components/Quiz';

function Test() {
  const questions = [
    {
      question: 'What type of epithelial tissue lines the inner surface of blood vessels?',
      answers: [
        { text: 'Simple squamous epithelium', isCorrect: true },
        { text: 'Stratified squamous epithelium', isCorrect: false },
        { text: 'Simple cuboidal epithelium', isCorrect: false },
        { text: 'Stratified columnar epithelium', isCorrect: false },
      ],
    },
    {
      question: 'Which connective tissue cell produces collagen fibers?',
      answers: [
        { text: 'Fibroblasts', isCorrect: true },
        { text: 'Osteoblasts', isCorrect: false },
        { text: 'Chondrocytes', isCorrect: false },
        { text: 'Adipocytes', isCorrect: false },
      ],
    },
    {
      question: 'What is the basic functional unit of the kidney?',
      answers: [
        { text: 'Nephron', isCorrect: true },
        { text: 'Glomerulus', isCorrect: false },
        { text: 'Renal corpuscle', isCorrect: false },
        { text: 'Collecting duct', isCorrect: false },
      ],
    },
    {
      question: 'Which type of muscle tissue is striated and voluntary?',
      answers: [
        { text: 'Smooth muscle', isCorrect: false },
        { text: 'Cardiac muscle', isCorrect: false },
        { text: 'Skeletal muscle', isCorrect: true },
        { text: 'Visceral muscle', isCorrect: false },
      ],
    },
    {
      question: 'What is the primary function of adipose tissue?',
      answers: [
        { text: 'Energy storage', isCorrect: true },
        { text: 'Contraction', isCorrect: false },
        { text: 'Secretion', isCorrect: false },
        { text: 'Support', isCorrect: false },
      ],
    },
    {
      question: 'Which type of cartilage is found in the external ear?',
      answers: [
        { text: 'Hyaline cartilage', isCorrect: false },
        { text: 'Fibrocartilage', isCorrect: false },
        { text: 'Elastic cartilage', isCorrect: true },
        { text: 'Fibrous cartilage', isCorrect: false },
      ],
    },
    {
      question: 'Which type of bone tissue contains osteocytes within lacunae?',
      answers: [
        { text: 'Compact bone', isCorrect: true },
        { text: 'Spongy bone', isCorrect: false },
        { text: 'Dense bone', isCorrect: false },
        { text: 'Irregular bone', isCorrect: false },
      ],
    },
    {
      question: 'What is the main component of extracellular matrix in connective tissue?',
      answers: [
        { text: 'Collagen', isCorrect: true },
        { text: 'Elastin', isCorrect: false },
        { text: 'Keratin', isCorrect: false },
        { text: 'Fibrin', isCorrect: false },
      ],
    },
    {
      question: 'Which cell type is responsible for myelination in the central nervous system?',
      answers: [
        { text: 'Astrocytes', isCorrect: false },
        { text: 'Microglia', isCorrect: false },
        { text: 'Oligodendrocytes', isCorrect: true },
        { text: 'Schwann cells', isCorrect: false },
      ],
    },
    {
      question: 'What type of epithelial tissue is found in the lining of the urinary bladder?',
      answers: [
        { text: 'Simple squamous epithelium', isCorrect: false },
        { text: 'Stratified squamous epithelium', isCorrect: false },
        { text: 'Transitional epithelium', isCorrect: true },
        { text: 'Simple cuboidal epithelium', isCorrect: false },
      ],
    },
    {
      question: 'Which structure in the skin is responsible for producing sweat?',
      answers: [
        { text: 'Sebaceous gland', isCorrect: false },
        { text: 'Hair follicle', isCorrect: false },
        { text: 'Sudoriferous gland', isCorrect: true },
        { text: 'Arrector pili muscle', isCorrect: false },
      ],
    },
    {
      question: 'Which type of gland produces hormones that regulate metabolic activities?',
      answers: [
        { text: 'Exocrine gland', isCorrect: false },
        { text: 'Endocrine gland', isCorrect: true },
        { text: 'Apocrine gland', isCorrect: false },
        { text: 'Sebaceous gland', isCorrect: false },
      ],
    },
    {
      question: 'What is the function of osteoclasts in bone tissue?',
      answers: [
        { text: 'Bone deposition', isCorrect: false },
        { text: 'Bone resorption', isCorrect: true },
        { text: 'Bone formation', isCorrect: false },
        { text: 'Bone mineralization', isCorrect: false },
      ],
    },
    {
      question: 'Which type of muscle tissue is found in the walls of blood vessels?',
      answers: [
        { text: 'Skeletal muscle', isCorrect: false },
        { text: 'Smooth muscle', isCorrect: true },
        { text: 'Cardiac muscle', isCorrect: false },
        { text: 'Striated muscle', isCorrect: false },
      ],
    },
    {
      question: 'What type of tissue is responsible for transmitting electrical impulses in the nervous system?',
      answers: [
        { text: 'Neuroglia', isCorrect: false },
        { text: 'Neurons', isCorrect: true },
        { text: 'Dendrites', isCorrect: false },
        { text: 'Axons', isCorrect: false },
      ],
    },
    {
      question: 'Which type of connective tissue is found in tendons and ligaments?',
      answers: [
        { text: 'Adipose tissue', isCorrect: false },
        { text: 'Areolar tissue', isCorrect: false },
        { text: 'Dense regular connective tissue', isCorrect: true },
        { text: 'Dense irregular connective tissue', isCorrect: false },
      ],
    },
    {
      question: 'What type of cell junction forms a waterproof barrier in epithelial tissues?',
      answers: [
        { text: 'Tight junction', isCorrect: true },
        { text: 'Gap junction', isCorrect: false },
        { text: 'Desmosome', isCorrect: false },
        { text: 'Hemidesmosome', isCorrect: false },
      ],
    },
    {
      question: 'Which structure is responsible for producing cerebrospinal fluid in the brain?',
      answers: [
        { text: 'Arachnoid villi', isCorrect: false },
        { text: 'Choroid plexus', isCorrect: true },
        { text: 'Dura mater', isCorrect: false },
        { text: 'Falx cerebri', isCorrect: false },
      ],
    },
    {
      question: 'Which type of cell is responsible for bone remodeling?',
      answers: [
        { text: 'Osteoblast', isCorrect: false },
        { text: 'Osteocyte', isCorrect: false },
        { text: 'Osteoclast', isCorrect: true },
        { text: 'Chondrocyte', isCorrect: false },
      ],
    },
    {
      question: 'What is the main function of goblet cells in epithelial tissues?',
      answers: [
        { text: 'Secretion of mucus', isCorrect: true },
        { text: 'Cellular respiration', isCorrect: false },
        { text: 'Absorption of nutrients', isCorrect: false },
        { text: 'Synthesis of hormones', isCorrect: false },
      ],
    },
  ];


  return (
    <div>
      <h1 style={{textAlign:"center"}}>Histology</h1>
      <h2 style={{marginTop: 30}}>Quiz</h2>
          <Quiz questions={questions} />
      <div>
    
        </div>
      </div>
    
  );
}

export default Test;
