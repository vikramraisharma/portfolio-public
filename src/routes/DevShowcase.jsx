import React from 'react';
import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function CodeShowcase() {
  const showcaseCards = [
    {
      title: "Designing Platforms",
      caption: "Designing and developing 508/WCAG compliant platforms to drive engagement in Next/React, Shopify, Wix, and more.",
      source: "/aidan1.jpg"
    },
    {
      title: "Integrating AI/GenAI",
      caption: "Creating applications with AI in mind including agentic workflows, chat-based interfaces, and e-commerce platforms.",
      source:"/heart2.jpg"
    },
    {
      title: "Pushing the Boundaries",
      caption: "Leveraging cutting-edge technology such as NextJS (server actions, SSR) and AWS (creating knowledge bases and graphs).",
      source: "/nih1.jpg"
    }
  ];

  return (
    <>
      <Header headerText={"developer showcase"}/>
      <NavBar activeLink="/showcase/code"/>
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