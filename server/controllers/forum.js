import { db } from "../db.js";


export const getConversationsByCourse = (req, res) => {
    const { course } = req.params;
    db.query(
      'SELECT * FROM conversations WHERE course = ?',
      [course],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        } else {
          res.json(results);
        }
      }
    );
  };
  

  export const addConversation = (req, res) => {
    const { course, topic, content, author } = req.body; 
    db.query(
      'INSERT INTO conversations (course, topic, content, author) VALUES (?, ?, ?, ?)',
      [course, topic, content, author], 
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        } else {
          res.status(201).json({ id: results.insertId, course, topic, content, author }); 
        }
      }
    );
  };
  



export const deleteConversation = (req, res) => {
  const {author } = req.params;
  db.query(
    'DELETE FROM conversations WHERE author = ?',
    [author],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        if (results.affectedRows > 0) {
          res.json({ message: 'Conversation deleted successfully' });
        } else {
          res.status(403).json({ message: 'Unauthorized to delete this conversation' });
        }
      }
    }
  );
};

