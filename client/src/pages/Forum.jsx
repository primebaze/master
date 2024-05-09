import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/authSlice';

const Forum = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('histology');
  const [newContent, setNewContent] = useState('');
  const [author, setAuthor] = useState('');
  const { fullname } = useSelector(selectAuth);
  const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
  useEffect(() => {
    fetchConversations(selectedCourse);
  }, [selectedCourse]);

  const fetchConversations = async (course) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/forum/get-conversation/${course}`);
      setConversations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddConversation = async () => {
    try {
      await axios.post('http://localhost:8000/api/forum/add-conversation', {
        course: selectedCourse,
        content: newContent,
        author: fullname,
      });
      setNewContent('');
      setAuthor('');
      fetchConversations(selectedCourse);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteConversation = async (author) => {
    try {
      await axios.delete(`http://localhost:8000/api/forum/delete-conversation/${author}`);
      fetchConversations(selectedCourse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' ,marginTop:20}}>
      <h1 style={{fontWeight: 'bold', marginBottom: '50px' }}>Forum</h1>
      <div>
        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }} onClick={() => setSelectedCourse('histology')}>Histology</button>
        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }} onClick={() => setSelectedCourse('embryology')}>Embryology</button>
        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }} onClick={() => setSelectedCourse('gross_anatomy')}>Gross Anatomy</button>
      </div>
      <div>
        {conversations.map((conversation, index) => (
          <div key={conversation.id} style={{ marginTop:40,marginBottom: '20px', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.5', backgroundColor: index % 2 === 0 ? 'grey' : '#55565b', padding: '10px', borderRadius: '10px' }}>{conversation.content} - posted by {conversation.author}</p>
            {conversation.author === fullname && (
            <button onClick={() => handleDeleteConversation(conversation.author)}>Delete</button>
          )}
          </div>
        ))}
      </div>
      <div>
        <h2 style={{ marginBottom: '20px' }}>Add Conversation</h2>
        <textarea style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', height: '150px' }} placeholder="Content" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
        <input type="text" style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px' }} placeholder="Your Name" value={userDetails?.fullname}  />
        <button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} onClick={handleAddConversation}>Add Conversation</button>
      </div>


    </div>
  );
};

export default Forum;
