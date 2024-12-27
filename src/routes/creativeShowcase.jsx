import React, { useState } from 'react';
import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function CreativeShowcase() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const showcaseCards = [
    {
      title: "Creating (eco)Systems",
      caption: "Using Figma Variables, Aliases, and Auto-Layouts to create design systems including padding and colors for development and stakeholder engagement."
    },
    {
      title: "Designing for the Future",
      caption: "Prioritizing maintainability and integration is a key focus of technical design. Generating precise wireframes and visual assets to expedite development."
    },
    {
      title: "Communicating to Users",
      caption: "Creating and managing content creation, content scheduling, and brand campaigns to drive DTC traffic, increasing both impressions and revenue."
    }
  ];

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCard(null);
      setIsClosing(false);
    }, 280);
  };

  return (
    <>
      <Header headerText={"creative showcase"}/>
      <NavBar activeLink="/showcase/create"/>
      <div className="showcase-container">
        {showcaseCards.map((card, index) => (
          <div 
            key={index}
            className="showcase-card cursor-pointer" 
            onClick={() => setSelectedCard(card)}
          >
            <p className="sc-card-title">{card.title}</p>
            <div className="sc-card-image">&nbsp;</div>
            <div className="sc-card-caption">{card.caption}</div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
          <div className="modal-background"></div>
          <div className={`modal-card ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
            <header className="modal-card-head">
              <p className="modal-card-title">{selectedCard.title}</p>
              <button className="delete" onClick={closeModal}>&times;</button>
            </header>
            <section className="modal-card-body">
              <p>{selectedCard.caption}</p>
              {/* Future image gallery would go here */}
            </section>
            <footer className="modal-card-foot">
              <button 
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={closeModal}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}