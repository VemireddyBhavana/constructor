import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Skyview Estates. I am your personal luxury property assistant. How may I guide you today?", sender: "bot" }
  ]);

  const quickActions = [
    "Explore Villas",
    "Book a Private Tour",
    "Investment Advice",
    "Contact Agent"
  ];

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes("villa")) return "We have an exclusive collection of villas starting from $2.5M. Many feature private pools and panoramic views. Would you like to see the 'Villa' category?";
    if (text.includes("price") || text.includes("cost")) return "Our properties range from $500k for luxury apartments to over $10M for signature estates. I can provide specific pricing for any ID you're interested in.";
    if (text.includes("book") || text.includes("tour") || text.includes("viewing")) return "I can certainly help you schedule a private tour. You can use the 'Schedule a Tour' calendar on any property page, or I can take your details here.";
    if (text.includes("location") || text.includes("where")) return "Skyview Estates represents prime properties in the most sought-after coastal and metropolitan areas. Our current featured estates are in the Skyview District.";
    if (text.includes("hello") || text.includes("hi")) return "Greetings. How can I assist your property search today?";
    return "That's an interesting inquiry. As a Skyview Assistant, I recommend speaking with one of our human advisors for a bespoke consultation. Shall I notify them for you?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: getBotResponse(inputValue), sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleAction = (action) => {
    const userMsg = { id: Date.now(), text: action, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: getBotResponse(action), 
        sender: "bot" 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
          >
            <div className="chat-header">
              <div className="bot-info">
                <div className="bot-dot"></div>
                <span>Skyview AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <div className="chat-body">
              {messages.map(msg => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-bubble">{msg.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot">
                  <div className="message-bubble typing">...</div>
                </div>
              )}
            </div>

            <div className="chat-footer">
              <div className="quick-actions">
                {quickActions.map(action => (
                  <button key={action} onClick={() => handleAction(action)}>{action}</button>
                ))}
              </div>
              <form className="chat-input-wrapper" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  placeholder="Inquire about a property..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "↓" : "💬"}
      </motion.button>
    </div>
  );
};

export default Chatbot;
