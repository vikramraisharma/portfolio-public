import { useState, useEffect } from 'react';
import Header from "../components/Header";
import NavBar from "../components/navBar";
import ExpBarChart from '../components/expChart';

export default function Experience() {

  const designData = [
    { name: "Prototyping", years: 5 },
    { name: "Design Systems", years: 3 },
    { name: "Website Design", years: 7 },
    { name: "User Testing", years: 2 },
    { name: "Brand Design", years: 3 },
    { name: "508 Compliance", years: 5 },
    { name: "USWDS", years: 3 },
    { name: "Bootstrap/Bulma", years: 5 },
    { name: "Adobe Suite", years: 3 },
    { name: "Figma", years: 5 }
  ];

  const codeData = [
    { name: "HTML/CSS", years: 7 },
    { name: "React", years: 5 },
    { name: "Next", years: 2 },
    { name: "Node", years: 5 },
    { name: "MongoDB", years: 3 },
    { name: "SQL and PostgreSQL", years: 3 },
    { name: "Data Visualization", years: 3 },
    { name: "API Design", years: 5 },
    { name: "Amazon Web Services", years: 3 },
    { name: "Git/Version Control", years: 7 },
    { name: "Theme Development", years: 5 },
    { name: "Drupal 7, 8, 9", years: 5 },
    { name: "Shopify Web", years: 3 },
    { name: "JIRA/Agile SAFe", years: 5 }
  ];

  const bizData = [
    { name: "Social Media Marketing", years: 3 },
    { name: "Content Marketing", years: 3 },
    { name: "Marketing Analytics", years: 3 },
    { name: "SEO", years: 5 },
    { name: "Lead Generation", years: 3 },
    { name: "Building Pipelines", years: 3 },
    { name: "Corporate Sales", years: 3 },
    { name: "Operations Management", years: 5 },
    { name: "Business Development", years: 7 },
    { name: "Product Development", years: 3 }
  ]

   return (
     <>
        <Header headerText={"my experience"}/>
        <NavBar activeLink="/experience"/>
        <div className="container mx-auto px-4 py-8">
          <ExpBarChart filteredData={designData}/>
          <div>Data being passed: {JSON.stringify(designData.length)} items</div>
        </div>
     </>
   );
 }