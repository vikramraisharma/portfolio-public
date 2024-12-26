import NavBar from "../components/navBar";
import Header from "../components/Header";

const Contact = () => {
   return (
     <>
      <Header headerText={"getting personal"}/>
      <NavBar activeLink="/contact"/>
      <div className="contact-main">
        <p className="contact-text">As a dynamic UI/UX designer and developer, I blend creative vision with business acumen to transform complex challenges into compelling digital experiences. Over seven years of expertise has taken me from founding a flourishing digital marketing agency to architecting sophisticated government applications. I excel at building lasting client relationships and delivering results – evidenced by scaling multiple small businesses and expertly navigating federal stakeholder requirements.
          <br/>
          <br/>
          My mastery spans design systems and React development, but my true strength lies in driving business growth through thoughtful, user-centered design. I bring an entrepreneurial mindset to every project, whether I'm crafting high-fidelity prototypes, facilitating design sprints, or developing production applications with TypeScript and AWS. 
        </p>
        <div className="photo">
          &nbsp;
        </div>
      </div>
      <div className="contact-links">
        <p className="contact-links-item">email: <a href="#">vikram.sharma1024@gmail.com</a></p>
        <p className="contact-links-item">linkedin: <a href="#">https://www.linkedin.com/in/vikramraisharma/</a></p>
        <p className="contact-links-item">github: <a href="#">https://github.com/vikramraisharma</a></p>
        <p className="contact-links-item">download <a href="#">my resume</a></p>
      </div>
     </>
   );
 }

 export default Contact
 