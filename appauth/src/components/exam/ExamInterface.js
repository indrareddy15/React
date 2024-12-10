import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const mockQuestions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  }
];

const ExamInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <ExamContainer>
      <Header>
        <Title>Mathematics Final Exam</Title>
        <Timer>{formatTime(timeLeft)}</Timer>
      </Header>
      <Content>
        <QuestionSection>
          <QuestionText>
            {mockQuestions[currentQuestion].question}
          </QuestionText>
          <OptionsGrid>
            {mockQuestions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                selected={answers[currentQuestion] === option}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </OptionButton>
            ))}
          </OptionsGrid>
        </QuestionSection>
        <Navigation>
          <NavButton
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
          >
            Previous
          </NavButton>
          <NavButton
            disabled={currentQuestion === mockQuestions.length - 1}
            onClick={() => setCurrentQuestion(prev => prev + 1)}
          >
            Next
          </NavButton>
        </Navigation>
      </Content>
    </ExamContainer>
  );
};

const ExamContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2d3436;
  font-size: 1.5rem;
`;

const Timer = styled.div`
  background: #6c5ce7;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
`;

const Content = styled.main`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionSection = styled.div`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  color: #2d3436;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const OptionButton = styled.button`
  padding: 1rem;
  border: 2px solid ${props => props.selected ? '#6c5ce7' : '#ddd'};
  border-radius: 4px;
  background: ${props => props.selected ? '#6c5ce7' : 'white'};
  color: ${props => props.selected ? 'white' : '#2d3436'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #6c5ce7;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:disabled {
    background: #b2bec3;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #5f3dc4;
  }
`;

export default ExamInterface;