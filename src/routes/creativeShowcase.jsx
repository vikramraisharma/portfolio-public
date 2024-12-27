import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function CreativeShowcase() {
   return (
     <>
        <Header headerText={"creative showcase"}/>
        <NavBar activeLink="/showcase/create"/>
        <div className="showcase-container">
          <div className="showcase-card">
            <p className="sc-card-title">Creating (eco)Systems</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Using Figma Variables, Aliases, and Auto-Layouts to create design systems including padding and colors for development and stakeholder engagement.
             </div>
          </div>
          <div className="showcase-card">
            <p className="sc-card-title">Designing for the Future</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Prioritizing maintainability and integration is a key focus of technical design. Generating precise wireframes and visual assets to expedite development.
             </div>
          </div>
          <div className="showcase-card">
            <p className="sc-card-title">Communicating to Users</p>
             <div className="sc-card-image">
              {/* image formatted with size x width to match caption */}
              &nbsp;
             </div>
             <div className="sc-card-caption">
              {/* card caption, 1 sentence about project */}
              Creating and managing content creation, content scheduling, and brand campaigns to drive DTC traffic, increasing both impressions and revenue.
             </div>
          </div>
        </div>
     </>
   );
 }