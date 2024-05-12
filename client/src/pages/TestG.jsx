
import Quiz from '../components/Quiz';

function TestG() {
  const questions = [
    {
      question: 'What is the largest organ in the human body?',
      answers: [
        { text: 'Skin', isCorrect: true },
        { text: 'Liver', isCorrect: false },
        { text: 'Brain', isCorrect: false },
        { text: 'Heart', isCorrect: false },
      ],
    },
    {
      question: 'Which bone is the longest in the human body?',
      answers: [
        { text: 'Humerus', isCorrect: false },
        { text: 'Tibia', isCorrect: false },
        { text: 'Femur', isCorrect: true },
        { text: 'Fibula', isCorrect: false },
      ],
    },
    {
      question: 'What are the four lobes of the human brain?',
      answers: [
        { text: 'Frontal, parietal, temporal, occipital', isCorrect: true },
        { text: 'Frontal, parietal, sagittal, occipital', isCorrect: false },
        { text: 'Frontal, temporal, occipital, cerebellar', isCorrect: false },
        { text: 'Frontal, parietal, temporal, cerebellar', isCorrect: false },
      ],
    },
    {
      question: 'What are the two major divisions of the nervous system?',
      answers: [
        { text: 'Central and peripheral', isCorrect: true },
        { text: 'Somatic and autonomic', isCorrect: false },
        { text: 'Sympathetic and parasympathetic', isCorrect: false },
        { text: 'Sensory and motor', isCorrect: false },
      ],
    },
    {
      question: 'Which chamber of the heart pumps oxygenated blood to the body?',
      answers: [
        { text: 'Right atrium', isCorrect: false },
        { text: 'Right ventricle', isCorrect: false },
        { text: 'Left atrium', isCorrect: false },
        { text: 'Left ventricle', isCorrect: true },
      ],
    },
    {
      question: 'What is the largest artery in the human body?',
      answers: [
        { text: 'Pulmonary artery', isCorrect: false },
        { text: 'Carotid artery', isCorrect: false },
        { text: 'Femoral artery', isCorrect: false },
        { text: 'Aorta', isCorrect: true },
      ],
    },
    {
      question: 'Name the three parts of the small intestine.',
      answers: [
        { text: 'Cecum, colon, rectum', isCorrect: false },
        { text: 'Duodenum, jejunum, ileum', isCorrect: true },
        { text: 'Esophagus, stomach, duodenum', isCorrect: false },
        { text: 'Liver, gallbladder, pancreas', isCorrect: false },
      ],
    },
    {
      question: 'Which organ is responsible for insulin production?',
      answers: [
        { text: 'Liver', isCorrect: false },
        { text: 'Kidneys', isCorrect: false },
        { text: 'Spleen', isCorrect: false },
        { text: 'Pancreas', isCorrect: true },
      ],
    },
    {
      question: 'What are the three layers of the heart wall?',
      answers: [
        { text: 'Epicardium, myocardium, endocardium', isCorrect: true },
        { text: 'Pericardium, myocardium, endocardium', isCorrect: false },
        { text: 'Epicardium, mesocardium, endocardium', isCorrect: false },
        { text: 'Epicardium, myocardium, pericardium', isCorrect: false },
      ],
    },
    {
      question: 'Name the five regions of the vertebral column.',
      answers: [
        { text: 'Cervical, thoracic, lumbar, sacral, coccygeal', isCorrect: true },
        { text: 'Cervical, thoracic, sacral, lumbar, coccygeal', isCorrect: false },
        { text: 'Cervical, lumbar, thoracic, sacral, coccygeal', isCorrect: false },
        { text: 'Thoracic, cervical, lumbar, sacral, coccygeal', isCorrect: false },
      ],
    },
    {
      question: 'What is the function of the liver?',
      answers: [
        { text: 'Produces bile, detoxifies blood, stores glycogen', isCorrect: true },
        { text: 'Produces insulin, regulates blood sugar, stores fat', isCorrect: false },
        { text: 'Filters waste from blood, produces urine', isCorrect: false },
        { text: 'Produces hormones, regulates metabolism', isCorrect: false },
      ],
    },
    {
      question: 'Name the three major salivary glands.',
      answers: [
        { text: 'Parotid, submandibular, sublingual', isCorrect: true },
        { text: 'Parathyroid, submandibular, sublingual', isCorrect: false },
        { text: 'Parotid, sublingual, pituitary', isCorrect: false },
        { text: 'Parotid, submandibular, thyroid', isCorrect: false },
      ],
    },
    {
      question: 'What is the function of the kidneys?',
      answers: [
        { text: 'Produce bile, detoxify blood', isCorrect: false },
        { text: 'Filter waste from blood, produce urine', isCorrect: true },
        { text: 'Produce hormones, regulate metabolism', isCorrect: false },
        { text: 'Store glycogen, regulate blood sugar', isCorrect: false },
      ],
    },
    {
      question: 'Name the two main branches of the trachea.',
      answers: [
        { text: 'Left and right primary bronchi', isCorrect: true },
        { text: 'Left and right secondary bronchi', isCorrect: false },
        { text: 'Left and right tertiary bronchi', isCorrect: false },
        { text: 'Left and right bronchioles', isCorrect: false },
      ],
    },
    {
      question: 'Which part of the brain is responsible for coordination and balance?',
      answers: [
        { text: 'Cerebrum', isCorrect: false },
        { text: 'Brainstem', isCorrect: false },
        { text: 'Cerebellum', isCorrect: true },
        { text: 'Hypothalamus', isCorrect: false },
      ],
    },
    {
      question: 'Name the three types of blood vessels.',
      answers: [
        { text: 'Arteries, veins, capillaries', isCorrect: true },
        { text: 'Arteries, venules, capillaries', isCorrect: false },
        { text: 'Arterioles, veins, capillaries', isCorrect: false },
        { text: 'Arterioles, venules, capillaries', isCorrect: false },
      ],
    },
    {
      question: 'What is the function of the diaphragm?',
      answers: [
        { text: 'Digestion of food', isCorrect: false },
        { text: 'Primary muscle for breathing', isCorrect: true },
        { text: 'Circulation of blood', isCorrect: false },
        { text: 'Filtering waste products', isCorrect: false },
      ],
    },
    {
      question: 'Name the three bones that make up the pelvic girdle.',
      answers: [
        { text: 'Femur, tibia, fibula', isCorrect: false },
        { text: 'Humerus, radius, ulna', isCorrect: false },
        { text: 'Ilium, ischium, pubis', isCorrect: true },
        { text: 'Sacrum, coccyx, ilium', isCorrect: false },
      ],
    },
    {
      question: 'What are the two main types of bone tissue?',
      answers: [
        { text: 'Cortical and cancellous', isCorrect: false },
        { text: 'Dense and spongy', isCorrect: false },
        { text: 'Compact and spongy', isCorrect: true },
        { text: 'Hard and soft', isCorrect: false },
      ],
    },
    {
      question: 'Which type of muscle tissue is found in the walls of the stomach?',
      answers: [
        { text: 'Skeletal muscle', isCorrect: false },
        { text: 'Smooth muscle', isCorrect: true },
        { text: 'Cardiac muscle', isCorrect: false },
        { text: 'All of the above', isCorrect: false },
      ],
    },
  ];  


  return (
    <div>
      <h1 style={{marginTop: 30}}>Gross Anatomy</h1>
      <h2 style={{marginTop: 30}}>Quiz</h2>
          <Quiz questions={questions} />
      <div>
    
        </div>
      </div>
    
  );
}

export default TestG;
