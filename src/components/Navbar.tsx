import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-5xl mx-auto bg-black/20 backdrop-blur-sm border border-[#00ff9d]/10 rounded-2xl shadow-lg shadow-[#00ff9d]/5">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-[#00ff9d]" />
              <span className="ml-2 text-[#00ff9d] font-mono font-bold tracking-wider text-sm">
                CYBER_SPECIALIST
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-1">
                {['About', 'Services', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-3 py-1.5 text-sm font-mono tracking-wide text-gray-300 hover:text-[#00ff9d] hover:bg-[#00ff9d]/5 rounded-lg transition-all duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-[#00ff9d] hover:bg-[#00ff9d]/5 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-4 right-4 mt-2 bg-black/95 backdrop-blur-md border border-[#00ff9d]/10 rounded-xl overflow-hidden shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Services', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-sm font-mono tracking-wide text-gray-300 hover:text-[#00ff9d] hover:bg-[#00ff9d]/5 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}