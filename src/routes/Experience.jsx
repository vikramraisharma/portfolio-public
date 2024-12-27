import { useState, useEffect } from 'react';
import Header from "../components/Header";
import NavBar from "../components/navBar";
import ExpBarChart from '../components/expChart';
import "../App.css"
export default function Experience() {

  const designData = [
    { name: "Prototyping", years: 5, tooltip: "Building low, medium, and high fidelity wireframes and prototypes in Figma, Adobe xD, and more." },
    { name: "Design Systems", years: 3, tooltip: "Creating and maintaining scalable design systems with component libraries, style guides, and documentation for consistent user experiences." },
    { name: "Website Design", years: 7, tooltip: "Extensive experience designing responsive, user-centric websites with strong focus on aesthetics and functionality across all devices." },
    { name: "User Testing", years: 2, tooltip: "Conducting usability tests, gathering feedback, and implementing data-driven design improvements based on user behavior." },
    { name: "Brand Design", years: 3, tooltip: "Developing comprehensive brand identities including logos, color palettes, typography, and visual guidelines for cohesive brand experiences." },
    { name: "508 Compliance", years: 5, tooltip: "Implementing accessibility standards and WCAG guidelines to ensure digital content is accessible to users with disabilities." },
    { name: "USWDS", years: 3, tooltip: "Building government websites using U.S. Web Design System components and principles for consistent federal web presence." },
    { name: "Bootstrap/Bulma", years: 5, tooltip: "Utilizing popular CSS frameworks to create responsive layouts and components with rapid development and cross-browser compatibility." },
    { name: "Adobe Suite", years: 3, tooltip: "Creating and editing digital assets using Photoshop, Illustrator, and InDesign for various design deliverables." },
    { name: "Figma", years: 5, tooltip: "Designing and collaborating on interface designs, design systems, and interactive prototypes in a modern cloud-based environment." }
  ];
  
  const codeData = [
    { name: "HTML/CSS", years: 7, tooltip: "Building semantic, accessible web interfaces with modern CSS techniques including Flexbox, Grid, and responsive design." },
    { name: "React", years: 5, tooltip: "Developing dynamic web applications using React components, hooks, and state management for interactive user experiences." },
    { name: "Next", years: 2, tooltip: "Creating server-side rendered React applications with optimized performance, routing, and SEO capabilities." },
    { name: "Node", years: 5, tooltip: "Building scalable backend services and APIs using Node.js with Express and various middleware integrations." },
    { name: "MongoDB", years: 3, tooltip: "Designing and implementing NoSQL database solutions with MongoDB for flexible data storage and retrieval." },
    { name: "SQL and PostgreSQL", years: 3, tooltip: "Managing relational databases, writing complex queries, and optimizing database performance for web applications." },
    { name: "Data Visualization", years: 3, tooltip: "Creating interactive charts and graphs using D3.js and other visualization libraries to present complex data clearly." },
    { name: "API Design", years: 5, tooltip: "Architecting RESTful and GraphQL APIs with proper documentation, security, and scalability considerations." },
    { name: "Amazon Web Services", years: 3, tooltip: "Deploying and managing cloud infrastructure using AWS services including EC2, S3, and Lambda." },
    { name: "Git/Version Control", years: 7, tooltip: "Managing code repositories, coordinating team collaboration, and maintaining deployment workflows with Git." },
    { name: "Theme Development", years: 5, tooltip: "Creating custom themes and templates for content management systems with focus on flexibility and maintainability." },
    { name: "Drupal 7, 8, 9", years: 5, tooltip: "Building and maintaining Drupal websites with custom modules, themes, and integration with third-party services." },
    { name: "Shopify Web", years: 3, tooltip: "Developing custom Shopify themes and implementing e-commerce solutions with Liquid templates and APIs." },
    { name: "JIRA/Agile SAFe", years: 5, tooltip: "Managing project workflows, sprint planning, and team coordination using Agile methodologies and JIRA." }
  ];
  
  const bizData = [
    { name: "Social Media Marketing", years: 3, tooltip: "Planning and executing social media campaigns across multiple platforms to increase brand awareness and engagement." },
    { name: "Content Marketing", years: 3, tooltip: "Creating and distributing valuable content to attract and retain target audiences through various digital channels." },
    { name: "Marketing Analytics", years: 3, tooltip: "Analyzing marketing metrics and KPIs to optimize campaign performance and demonstrate ROI." },
    { name: "SEO", years: 5, tooltip: "Implementing technical SEO strategies and content optimization to improve search engine rankings and organic traffic." },
    { name: "Lead Generation", years: 3, tooltip: "Developing and implementing strategies to capture and nurture qualified leads through digital marketing channels." },
    { name: "Building Pipelines", years: 3, tooltip: "Creating and optimizing sales and marketing funnels to streamline lead conversion and customer acquisition." },
    { name: "Corporate Sales", years: 3, tooltip: "Managing B2B sales cycles and building relationships with enterprise clients to drive revenue growth." },
    { name: "Operations Management", years: 5, tooltip: "Overseeing day-to-day business operations, process improvement, and team coordination for optimal efficiency." },
    { name: "Business Development", years: 7, tooltip: "Identifying growth opportunities, building strategic partnerships, and expanding market presence across industries." },
    { name: "Product Development", years: 3, tooltip: "Leading product lifecycle from ideation to launch, incorporating market research and user feedback." }
  ];

  return (
    <>
      <Header headerText={"my experience"}/>
      <NavBar activeLink="/experience"/>
      <div className="container">
        <ExpBarChart 
          designData={designData}
          codeData={codeData}
          bizData={bizData}
        />
      </div>
    </>
  );
 }