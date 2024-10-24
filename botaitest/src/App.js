import React, { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Chat from './components/Chat';
import PastConversations from './components/PastConversations';
import FeedbackView from './components/FeedbackView';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [view, setView] = useState('chat'); // 'chat' or 'conversations'
  const [conversations, setConversations] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleNewConversation = () => setView('chat');
  const handlePastConversations = () => setView('conversations');

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Box sx={{ bgcolor: darkMode ? 'background.default' : 'background.paper', height: '100vh' }}>
        <Header onNewConversation={handleNewConversation} onPastConversations={handlePastConversations} />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        {view === 'chat' ? (
          <Chat conversations={conversations} setConversations={setConversations} />
        ) : (
          <PastConversations conversations={conversations} />
        )}
        <FeedbackView feedback={feedback} />
      </Box>
    </Container>
  );
};

export default App;
