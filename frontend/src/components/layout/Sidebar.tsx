
import { useState } from 'react';
import { chatHistory } from '@/data/mockData';
import { ChatMessage } from '@/types/dashboard';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, MessageSquare, BarChart3, AlertTriangle, Lightbulb, Send } from 'lucide-react';
import { useEffect, useRef } from 'react';


interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(chatHistory);
  const [inputValue, setInputValue] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const newAiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `I've analyzed your query: "${inputValue}". Here are the relevant KPIs and metrics from our latest data.`,
        sender: 'ai',
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, newAiMessage]);
    }, 1000);
  };

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out shadow-sm",
        isOpen ? "w-96" : "w-16"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen && (
            <h2 className="text-lg font-semibold text-navy-800">Vista AI</h2>
          )}
          <button 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        {/* Navigation and Chat UI */}
        {!isOpen ? (
          <div className="flex flex-col items-center py-4 space-y-4">
            <button className="p-2 text-gray-600 hover:text-teal-500 hover:bg-gray-100 rounded-full transition-colors">
              <BarChart3 size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-teal-500 hover:bg-gray-100 rounded-full transition-colors">
              <AlertTriangle size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-teal-500 hover:bg-gray-100 rounded-full transition-colors">
              <Lightbulb size={20} />
            </button>
            <button className="p-2 text-teal-500 bg-gray-100 rounded-full">
              <MessageSquare size={20} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto pb-20">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={cn(
                    "max-w-[80%] mx-2 my-2 p-3 rounded-lg",
                    message.sender === 'user' 
                      ? "bg-teal-500 text-white ml-auto rounded-br-none" 
                      : "bg-gray-100 text-gray-800 mr-auto rounded-bl-none"
                  )}
                >
                  {message.content}
                </div>
              ))}
              <div ref={messagesEndRef} /> {/* Empty div at bottom for scrolling */}
            </div>
            
            <div className="sticky bottom-0 p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="relative">
                <input
                  type="text"
                  placeholder="Ask about KPIs..."
                  className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
