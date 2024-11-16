import React from 'react';
import { Shield, Lock, Search, Bug, Mail, Github, Linkedin, Terminal as TerminalIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "SecureAudit Pro",
      description: "Automated security assessment tool for web applications with detailed reporting and remediation suggestions.",
      tags: ["Python", "Security", "Web", "Automation"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
    },
    {
      title: "NetworkGuardian",
      description: "Real-time network monitoring and intrusion detection system with ML-powered threat detection.",
      tags: ["Python", "ML", "Network Security"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
    },
    {
      title: "VulnScanner",
      description: "Advanced vulnerability scanner with custom exploit detection and automated reporting.",
      tags: ["Go", "Security", "DevSecOps"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="cyber-grid"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Cybersecurity Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-emerald-500">Secure</span> By Design
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Penetration Testing | Vulnerability Assessment | Security Research
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-600 transition duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="#terminal"
                  className="border border-emerald-500 text-emerald-500 px-8 py-3 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition duration-300"
                >
                  Try Terminal
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg">
              <Lock className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-gray-400">Comprehensive security assessments to identify vulnerabilities in your systems.</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg">
              <Search className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Vulnerability Assessment</h3>
              <p className="text-gray-400">Systematic review of security weaknesses in your infrastructure.</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg">
              <Bug className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Research</h3>
              <p className="text-gray-400">Advanced research into emerging threats and security trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TerminalIcon className="h-6 w-6 text-emerald-500 mr-2" />
                <h3 className="text-xl font-bold">Lead Security Researcher</h3>
              </div>
              <p className="text-gray-400 mb-2">CyberGuard Solutions • 2020 - Present</p>
              <p className="text-gray-300">Led vulnerability assessments for Fortune 500 companies and discovered critical security flaws.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-emerald-500 mr-2" />
                <h3 className="text-xl font-bold">Security Consultant</h3>
              </div>
              <p className="text-gray-400 mb-2">SecureNet Industries • 2018 - 2020</p>
              <p className="text-gray-300">Conducted penetration testing and security audits for enterprise clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-emerald-500 transition duration-300">
              <Mail className="h-8 w-8" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 SecureScope. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;