import React, { useState } from 'react';
import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function DevShowcase() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const showcaseCards = [
    {
      title: "Designing Platforms",
      caption: "Designing and developing 508/WCAG compliant platforms to drive engagement in Next/React, Shopify, Wix, and more."
    },
    {
      title: "Integrating AI/GenAI",
      caption: "Creating applications with AI in mind including agentic workflows, chat-based interfaces, and e-commerce platforms."
    },
    {
      title: "Pushing the Boundaries",
      caption: "Leveraging cutting-edge technology such as NextJS (server actions, SSR) and AWS (creating knowledge bases and graphs)."
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
      <Header headerText={"developer showcase"}/>
      <NavBar activeLink="/showcase/code"/>
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