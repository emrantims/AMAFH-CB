import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FINANCIAL_GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryTerm } from '../types';

interface GlossaryContextType {
  isGlossaryOpen: boolean;
  activeTermId: string | null;
  activeTerm: GlossaryTerm | null;
  openGlossary: (termId?: string) => void;
  closeGlossary: () => void;
  selectTerm: (termId: string) => void;
}

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

export const GlossaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [activeTermId, setActiveTermId] = useState<string | null>('dbr');

  const openGlossary = (termId?: string) => {
    if (termId) {
      setActiveTermId(termId);
    } else if (!activeTermId) {
      setActiveTermId('dbr');
    }
    setIsGlossaryOpen(true);
  };

  const closeGlossary = () => {
    setIsGlossaryOpen(false);
  };

  const selectTerm = (termId: string) => {
    setActiveTermId(termId);
  };

  const activeTerm = FINANCIAL_GLOSSARY_TERMS.find((t) => t.id === activeTermId) || FINANCIAL_GLOSSARY_TERMS[0];

  return (
    <GlossaryContext.Provider
      value={{
        isGlossaryOpen,
        activeTermId,
        activeTerm,
        openGlossary,
        closeGlossary,
        selectTerm,
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
};

export const useGlossary = () => {
  const context = useContext(GlossaryContext);
  if (!context) {
    throw new Error('useGlossary must be used within a GlossaryProvider');
  }
  return context;
};
