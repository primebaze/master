
import Quiz from '../components/Quiz';

function TestE() {
  const questions = [
    {
        question: 'What is the term for the initial cell formed after fertilization?',
        answers: [
            { text: 'Zygote', isCorrect: true },
            { text: 'Blastocyst', isCorrect: false },
            { text: 'Morula', isCorrect: false },
            { text: 'Gastrula', isCorrect: false },
        ],
    },
    {
        question: 'Which germ layer gives rise to the nervous system?',
        answers: [
            { text: 'Ectoderm', isCorrect: true },
            { text: 'Mesoderm', isCorrect: false },
            { text: 'Endoderm', isCorrect: false },
            { text: 'All of the above', isCorrect: false },
        ],
    },
    {
        question: 'During which week of development does the heart begin to beat?',
        answers: [
            { text: 'Week 2', isCorrect: false },
            { text: 'Week 4', isCorrect: true },
            { text: 'Week 6', isCorrect: false },
            { text: 'Week 8', isCorrect: false },
        ],
    },
    {
        question: 'What is the process of forming the three germ layers called?',
        answers: [
            { text: 'Neurulation', isCorrect: false },
            { text: 'Gastrulation', isCorrect: true },
            { text: 'Organogenesis', isCorrect: false },
            { text: 'Cleavage', isCorrect: false },
        ],
    },
    {
        question: 'Which structure connects the developing embryo to the placenta?',
        answers: [
            { text: 'Umbilical cord', isCorrect: true },
            { text: 'Yolk sac', isCorrect: false },
            { text: 'Amnion', isCorrect: false },
            { text: 'Chorion', isCorrect: false },
        ],
    },
    {
        question: 'What is the term for the formation of organs and organ systems?',
        answers: [
            { text: 'Gastrulation', isCorrect: false },
            { text: 'Neurulation', isCorrect: false },
            { text: 'Organogenesis', isCorrect: true },
            { text: 'Fertilization', isCorrect: false },
        ],
    },
    {
        question: 'Which developmental stage is characterized by the formation of a hollow ball of cells?',
        answers: [
            { text: 'Zygote', isCorrect: false },
            { text: 'Morula', isCorrect: false },
            { text: 'Blastocyst', isCorrect: true },
            { text: 'Gastrula', isCorrect: false },
        ],
    },
    {
        question: 'What is the name of the process by which the neural tube is formed?',
        answers: [
            { text: 'Gastrulation', isCorrect: false },
            { text: 'Neurulation', isCorrect: true },
            { text: 'Organogenesis', isCorrect: false },
            { text: 'Cleavage', isCorrect: false },
        ],
    },
    {
        question: 'Which extraembryonic membrane is responsible for gas exchange and waste removal?',
        answers: [
            { text: 'Amnion', isCorrect: false },
            { text: 'Chorion', isCorrect: true },
            { text: 'Yolk sac', isCorrect: false },
            { text: 'Allantois', isCorrect: false },
        ],
    },
    {
        question: 'What is the term for the process of cell division that occurs after fertilization?',
        answers: [
            { text: 'Gastrulation', isCorrect: false },
            { text: 'Cleavage', isCorrect: true },
            { text: 'Organogenesis', isCorrect: false },
            { text: 'Neurulation', isCorrect: false },
        ],
    },
    {
        question: 'From which germ layer does the lining of the digestive tract develop?',
        answers: [
            { text: 'Ectoderm', isCorrect: false },
            { text: 'Mesoderm', isCorrect: false },
            { text: 'Endoderm', isCorrect: true },
            { text: 'None of the above', isCorrect: false },
        ],
    },
    {
        question: 'What is the name of the structure that implants into the uterine wall?',
        answers: [
            { text: 'Morula', isCorrect: false },
            { text: 'Zygote', isCorrect: false },
            { text: 'Blastocyst', isCorrect: true },
            { text: 'Gastrula', isCorrect: false },
        ],
    },
    {
        question: 'Which hormone is primarily responsible for maintaining pregnancy?',
        answers: [
            { text: 'Estrogen', isCorrect: false },
            { text: 'Progesterone', isCorrect: true },
            { text: 'Testosterone', isCorrect: false },
            { text: 'FSH (Follicle-Stimulating Hormone)', isCorrect: false },
        ],
    },
    {
        question: 'During which trimester does the fetus undergo the most rapid growth?',
        answers: [
            { text: 'First trimester', isCorrect: false },
            { text: 'Second trimester', isCorrect: false },
            { text: 'Third trimester', isCorrect: true },
            { text: 'Growth is consistent throughout pregnancy', isCorrect: false },
        ],
    },
    {
        question: 'What is the name of the process where the sperm and egg nuclei fuse?',
        answers: [
            { text: 'Syngamy', isCorrect: true },
            { text: 'Meiosis', isCorrect: false },
            { text: 'Mitosis', isCorrect: false },
            { text: 'Differentiation', isCorrect: false },
        ],
    },
    {
        question: 'Which extraembryonic membrane is involved in the formation of blood cells?',
        answers: [
            { text: 'Yolk sac', isCorrect: true },
            { text: 'Amnion', isCorrect: false },
            { text: 'Chorion', isCorrect: false },
            { text: 'Allantois', isCorrect: false },
        ],
    },
    {
        question: 'What is the term for the birth defect where the spinal cord fails to close properly?',
        answers: [
            { text: 'Anencephaly', isCorrect: false },
            { text: 'Spina bifida', isCorrect: true },
            { text: 'Cleft palate', isCorrect: false },
            { text: 'Gastroschisis', isCorrect: false },
        ],
    },
    {
        question: 'Which embryonic structure gives rise to the central nervous system?',
        answers: [
            { text: 'Notochord', isCorrect: false },
            { text: 'Neural crest', isCorrect: false },
            { text: 'Neural tube', isCorrect: true },
            { text: 'Somites', isCorrect: false },
        ],
    },
    {
        question: 'What is the normal gestation period (length of pregnancy) in humans?',
        answers: [
            { text: '36 weeks', isCorrect: false },
            { text: '40 weeks', isCorrect: true },
            { text: '44 weeks', isCorrect: false },
            { text: '48 weeks', isCorrect: false },
        ],
    },
    {
        question: 'Which developmental stage is characterized by the presence of a primitive streak?',
        answers: [
            { text: 'Blastocyst', isCorrect: false },
            { text: 'Gastrula', isCorrect: true },
            { text: 'Neurula', isCorrect: false },
            { text: 'Fetus', isCorrect: false },
        ],
    },
  ];


  return (
    <div>
     <h1 style={{marginTop:30}}>Embryology</h1>
      <h2 style={{marginTop: 30}}>Quiz</h2>
          <Quiz questions={questions} />
      <div>
    
        </div>
      </div>
    
  );
}

export default TestE;
