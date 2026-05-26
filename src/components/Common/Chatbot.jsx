import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messageIdRef = useRef(100);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Sun Bright Properties. I am your personal luxury property assistant. How may I guide you today?", sender: "bot" }
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
    
    // 1. Greetings & Small Talk
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      return "Greetings from Sun Bright Properties. I am your AI assistant, dedicated to finding your perfect luxury sanctuary. How may I assist your search today?";
    }
    if (text.includes("how are you")) {
      return "I am functioning perfectly and ready to help you find your dream home! How are you doing today?";
    }
    if (text.includes("thank")) {
      return "You're most welcome. It is my pleasure to assist you. Do you have any other questions about our properties?";
    }

    // 2. Pricing & Currency (Rupees)
    if (text.includes("price") || text.includes("cost") || text.includes("budget") || text.includes("how much") || text.includes("crore") || text.includes("lakh")) {
      return "Our collection starts from ₹1.25 Cr for luxury apartments and goes up to ₹25 Cr+ for exclusive mansions. We cater specifically to high-net-worth individuals looking for premium value. What is your preferred budget range?";
    }

    // 3. Property Types (Specifics)
    if (text.includes("villa")) {
      return "Our villas (1BHK to 4BHK) are architectural masterpieces starting at ₹1.25 Cr. They feature private pools, home automation, and Italian marble flooring. Would you like to see our latest Villa listings?";
    }
    if (text.includes("apartment") || text.includes("flat") || text.includes("studio")) {
      return "We offer ultra-luxury apartments in prime business districts, starting at ₹1.25 Cr. These include concierge services, 24/7 security, and world-class gyms. Shall I guide you to the Apartment section?";
    }
    if (text.includes("penthouse")) {
      return "Our signature Penthouses are the crown jewels of the skyline, offering private elevators, sky-decks, and 360° views. They start at ₹1.25 Cr. Are you looking for a specific floor level?";
    }
    if (text.includes("house") || text.includes("bungalow")) {
      return "We have a select range of independent luxury bungalows and houses with private gardens and extensive driveway space, starting from ₹1.25 Cr.";
    }

    // 4. Booking, Tours & Visiting
    if (text.includes("book") || text.includes("tour") || text.includes("viewing") || text.includes("visit") || text.includes("see the property")) {
      return "I can certainly arrange an exclusive private tour for you. You can select your preferred time on the property detail page, or simply leave your number and our advisor will call you within 15 minutes.";
    }

    // 5. Investment & ROI
    if (text.includes("investment") || text.includes("roi") || text.includes("returns") || text.includes("profit") || text.includes("appreciation")) {
      return "Sun Bright properties have shown an average capital appreciation of 12-15% annually in recent years. Our locations are hand-picked for their high ROI potential. Would you like our investment whitepaper?";
    }

    // 6. EMI, Loans & Financing
    if (text.includes("emi") || text.includes("loan") || text.includes("finance") || text.includes("bank") || text.includes("mortgage")) {
      return "We are partnered with major premium banks to offer exclusive home loan rates starting at 8.4% for our clients. We can also assist with all the legal and financial paperwork.";
    }

    // 7. Amenities & Features
    if (text.includes("pool") || text.includes("gym") || text.includes("club") || text.includes("parking") || text.includes("security")) {
      return "All our estates come with 'Gold Standard' amenities: Temperature-controlled pools, professional-grade gyms, 5-tier security systems, and ample EV-ready parking spaces.";
    }

    // 8. Possession & Maintenance
    if (text.includes("possession") || text.includes("ready") || text.includes("when") || text.includes("maintenance")) {
      return "We have both Ready-to-Move-in estates and premium under-construction projects. Maintenance is handled by our in-house luxury facility management team to ensure top-tier standards.";
    }

    // 9. Location & Reach
    if (text.includes("location") || text.includes("where") || text.includes("address") || text.includes("city")) {
      return "Our main office is at 13 Fifth Avenue, but our properties are spread across the most elite pins in the country. Our digital map on the Contact page shows all exact locations.";
    }

    // 10. Contacting Human
    if (text.includes("human") || text.includes("person") || text.includes("call") || text.includes("phone") || text.includes("agent") || text.includes("talk to")) {
      return "You can reach our lead advisor directly at +91 555-1234-678. Alternatively, tell me your number and I will have them call you immediately.";
    }

    // Fallback for everything else
    return "That's a very specific and important question. To give you the most accurate data, I'd like to connect you with one of our Senior Portfolio Managers. Would you prefer a call or an email?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: ++messageIdRef.current, text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { id: ++messageIdRef.current, text: getBotResponse(inputValue), sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleAction = (action) => {
    const userMsg = { id: ++messageIdRef.current, text: action, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: ++messageIdRef.current, 
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
                <span>Sun Bright AI Assistant</span>
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
