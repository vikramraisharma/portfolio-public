import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function DevShowcase() {
   return (
     <>
        <Header headerText={"developer showcase"}/>
        <NavBar activeLink="/showcase/code"/>
        <div className="showcase-container">
          <div className="showcase-card">
            <p className="sc-card-title">Designing Platforms</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Designing and developing 508/WCAG compliant platforms to drive engagement in Next/React, Shopify, Wix, and more.
             </div>
          </div>
          <div className="showcase-card">
            <p className="sc-card-title">Integrating AI/GenAI</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Creating applications with AI in mind including agentic workflows, chat-based interfaces, and e-commerce platforms. 
             </div>
          </div>
          <div className="showcase-card">
            <p className="sc-card-title">Pushing the Boundaries</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Leveraging cutting-edge technology such as NextJS (server actions, SSR) and AWS (creating knowledge bases and graphs).
             </div>
          </div>
        </div>
     </>
   );
 }
 