import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Toast, ToastMessage } from './components/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    addToast('Email address copied to clipboard: ' + PERSONAL_INFO.email, 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    addToast(`Copied ${label} to clipboard!`, 'info');
  };

  const handleCopyCommand = (cmd: string, name: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    addToast(`Copied install command for ${name}: ${cmd}`, 'success');
    setTimeout(() => setCopiedCommand(null), 2500);
  };

  // Section observer to update active nav link
  useEffect(() => {
    const sections = ['home', 'projects', 'experience', 'open-source', 'skills', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] relative selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

      {/* Main Content */}
      <main id="main-content">
        <Hero
          onExploreProjects={scrollToProjects}
          onContactClick={scrollToContact}
        />
        <Projects onCopyUrl={(url, title) => handleCopyText(url, `${title} URL`)} />
        <Experience />
        <OpenSource
          onCopyCommand={handleCopyCommand}
          copiedCommand={copiedCommand}
        />
        <Skills />
        <About />
        <Education />
        <Contact
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
        />
      </main>

      {/* Footer */}
      <Footer
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Global Interactive Toasts */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
