import React from 'react';
import Header from "@/components/Header";
import NavBar from "@/components/navBar";

export default function CreativeShowcase() {
  const showcaseCards = [
    {
      title: "Creating (eco)Systems",
      caption: "Using Figma Variables, Aliases, and Auto-Layouts to create design systems including padding and colors for development and stakeholder engagement.",
      source: "/variables.jpg"
    },
    {
      title: "Designing for the Future",
      caption: "Prioritizing maintainability and integration is a key focus of technical design. Generating precise wireframes and visual assets to expedite development.",
      source: "/ccm1.jpg"
    },
    {
      title: "Communicating to Users",
      caption: "Creating and managing content creation, content scheduling, and brand campaigns to drive DTC traffic, increasing both impressions and revenue.",
      source: "/supp1.jpg"
    }
  ];

  return (
    <>
      <Header headerText={"creative showcase"}/>
      <NavBar activeLink="/showcase/create"/>
      <div className="showcase-container">
        {showcaseCards.map((card, index) => (
          <div 
            key={index}
            className="showcase-card" 
          >
            <p className="sc-card-title">{card.title}</p>
            <div className="sc-card-image">
              <img 
                src={card.source} 
                alt={card.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="sc-card-caption">{card.caption}</div>
          </div>
        ))}
      </div>
    </>
  );
}