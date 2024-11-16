import React, { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string;
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (input: string) => {
    const responses: { [key: string]: string } = {
      'help': 'Available commands:\n  help - Show this help message\n  about - About me\n  skills - List my skills\n  contact - Contact information\n  clear - Clear terminal',
      'about': 'Security researcher and penetration tester with 5+ years of experience in identifying and exploiting vulnerabilities in web applications and network infrastructure.',
      'skills': '• Penetration Testing\n• Vulnerability Assessment\n• Network Security\n• Web Application Security\n• Reverse Engineering\n• Malware Analysis',
      'contact': 'Email: contact@example.com\nGitHub: github.com/securescope\nLinkedIn: linkedin.com/in/securescope',
      'clear': 'CLEAR',
    };

    if (input.toLowerCase() === 'clear') {
      setCommands([]);
      return;
    }

    const newCommand: Command = {
      input,
      output: responses[input.toLowerCase()] || `Command not found: ${input}. Type 'help' for available commands.`
    };

    setCommands(prev => [...prev, newCommand]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg w-full max-w-2xl">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-sm text-gray-400">visitor@securescope:~$</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 h-96 overflow-y-auto font-mono text-sm"
        style={{ backgroundColor: '#1a1b1e' }}
      >
        <div className="text-green-400 mb-4">
          Welcome to SecureScope Terminal. Type 'help' for available commands.
        </div>
        
        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="text-emerald-400">visitor@securescope:~$ {cmd.input}</div>
            <div className="text-gray-300 whitespace-pre-line">{cmd.output}</div>
          </div>
        ))}
        
        <div className="flex">
          <span className="text-emerald-400">visitor@securescope:~$&nbsp;</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-300 focus:outline-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}