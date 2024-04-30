
import Quiz from '../components/Quiz';

const questions = [
  {
    question: 'Which of the following is not a bone in the human body?',
    answers: [
      { text: 'Femur', isCorrect: false },
      { text: 'Humerus', isCorrect: false },
      { text: 'Fibula', isCorrect: false },
      { text: 'Cornea', isCorrect: true },
    ],
  },
  {
    question: 'Which organ is responsible for filtering blood?',
    answers: [
      { text: 'Liver', isCorrect: false },
      { text: 'Heart', isCorrect: false },
      { text: 'Kidney', isCorrect: true },
      { text: 'Lung', isCorrect: false },
    ],
  },
  {
    question: 'What is the largest organ in the human body?',
    answers: [
      { text: 'Liver', isCorrect: false },
      { text: 'Brain', isCorrect: false },
      { text: 'Skin', isCorrect: true },
      { text: 'Heart', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following bones is part of the axial skeleton?',
    answers: [
      { text: 'Radius', isCorrect: false },
      { text: 'Femur', isCorrect: false },
      { text: 'Vertebra', isCorrect: true },
      { text: 'Fibula', isCorrect: false },
    ],
  },
  {
    question: 'What is the name of the muscle that allows you to smile?',
    answers: [
      { text: 'Biceps', isCorrect: false },
      { text: 'Deltoid', isCorrect: false },
      { text: 'Zygomaticus', isCorrect: true },
      { text: 'Triceps', isCorrect: false },
    ],
  },
  {
    question: 'Which part of the brain controls balance and coordination?',
    answers: [
      { text: 'Cerebrum', isCorrect: false },
      { text: 'Cerebellum', isCorrect: true },
      { text: 'Medulla', isCorrect: false },
      { text: 'Hypothalamus', isCorrect: false },
    ],
  },
  {
    question: 'What is the main function of the respiratory system?',
    answers: [
      { text: 'Pumping blood', isCorrect: false },
      { text: 'Digesting food', isCorrect: false },
      { text: 'Filtering waste', isCorrect: false },
      { text: 'Breathing', isCorrect: true },
    ],
  },
  {
    question: 'Which of the following is not a type of muscle?',
    answers: [
      { text: 'Cardiac', isCorrect: false },
      { text: 'Smooth', isCorrect: false },
      { text: 'Skeletal', isCorrect: false },
      { text: 'Adrenal', isCorrect: true },
    ],
  },
  {
    question: 'What is the scientific term for the collarbone?',
    answers: [
      { text: 'Scapula', isCorrect: false },
      { text: 'Clavicle', isCorrect: true },
      { text: 'Femur', isCorrect: false },
      { text: 'Tibia', isCorrect: false },
    ],
  },
  {
    question: 'Which part of the eye controls the amount of light entering?',
    answers: [
      { text: 'Cornea', isCorrect: false },
      { text: 'Pupil', isCorrect: true },
      { text: 'Retina', isCorrect: false },
      { text: 'Lens', isCorrect: false },
    ],
  },
  {
    question: 'What is the name of the largest artery in the human body?',
    answers: [
      { text: 'Aorta', isCorrect: true },
      { text: 'Femoral artery', isCorrect: false },
      { text: 'Carotid artery', isCorrect: false },
      { text: 'Pulmonary artery', isCorrect: false },
    ],
  },
  {
    question: 'What is the smallest bone in the human body?',
    answers: [
      { text: 'Femur', isCorrect: false },
      { text: 'Patella', isCorrect: false },
      { text: 'Stapes', isCorrect: true },
      { text: 'Radius', isCorrect: false },
    ],
  },
  {
    question: 'Which organ produces insulin?',
    answers: [
      { text: 'Liver', isCorrect: false },
      { text: 'Pancreas', isCorrect: true },
      { text: 'Stomach', isCorrect: false },
      { text: 'Kidney', isCorrect: false },
    ],
  },
  {
    question: 'What is the main function of the small intestine?',
    answers: [
      { text: 'Absorbing nutrients', isCorrect: true },
      { text: 'Filtering blood', isCorrect: false },
      { text: 'Storing bile', isCorrect: false },
      { text: 'Producing hormones', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is not a function of the skin?',
    answers: [
      { text: 'Regulating body temperature', isCorrect: false },
      { text: 'Producing vitamin D', isCorrect: false },
      { text: 'Producing insulin', isCorrect: true },
      { text: 'Protecting against pathogens', isCorrect: false },
    ],
  },
  {
    question: 'What is the main function of red blood cells?',
    answers: [
      { text: 'Carrying oxygen', isCorrect: true },
      { text: 'Fighting infection', isCorrect: false },
      { text: 'Producing antibodies', isCorrect: false },
      { text: 'Digesting food', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is not part of the digestive system?',
    answers: [
      { text: 'Liver', isCorrect: false },
      { text: 'Heart', isCorrect: true },
      { text: 'Stomach', isCorrect: false },
      { text: 'Small intestine', isCorrect: false },
    ],
  },
  {
    question: 'What is the longest bone in the human body?',
    answers: [
      { text: 'Femur', isCorrect: true },
      { text: 'Humerus', isCorrect: false },
      { text: 'Tibia', isCorrect: false },
      { text: 'Radius', isCorrect: false },
    ],
  },
  {
    question: 'What is the function of the hypothalamus?',
    answers: [
      { text: 'Regulating body temperature', isCorrect: true },
      { text: 'Pumping blood', isCorrect: false },
      { text: 'Digesting food', isCorrect: false },
      { text: 'Producing hormones', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following bones is not part of the human skull?',
    answers: [
      { text: 'Mandible', isCorrect: false },
      { text: 'Clavicle', isCorrect: true },
      { text: 'Maxilla', isCorrect: false },
      { text: 'Frontal bone', isCorrect: false },
    ],
  },
];




const App = () => {
  return (
    <div className="app">
      <h1>Quiz </h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
