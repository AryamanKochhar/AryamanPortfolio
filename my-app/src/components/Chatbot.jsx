import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const config = {
  initialMessages: [
    { id: 1, message: 'Hello! I’m Aryaman’s assistant. How can I help you?', type: 'bot' },
  ],
  botName: 'AryamanBot',
};

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes('hello')) {
      actions.handleHello();
    } else {
      actions.handleDefault();
    }
  };

  return <div>{React.Children.map(children, child => React.cloneElement(child, { parse }))}</div>;
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi! Nice to meet you. What can I do for you?');
    setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage('I’m not sure how to respond to that. Try asking about Aryaman’s projects!');
    setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
  };

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { actions: { handleHello, handleDefault } })
      )}
    </div>
  );
};

function ChatbotComponent() {
  return (
    <section id="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </section>
  );
}

export default ChatbotComponent;