import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Contact = () => {
  const resumeFile = "/Vikram_Sharma_Resume.docx"
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
          <img src="/home1.png"/>
        </div>
      </div>
      <div className="contact-links">
        <p className="contact-links-item">email: <a href="mailto:vikram.sharma1024@gmail.com">vikram.sharma1024@gmail.com</a></p>
        <p className="contact-links-item">linkedin: <a href="https://www.linkedin.com/in/vikramraisharma/">https://www.linkedin.com/in/vikramraisharma/</a></p>
        <p className="contact-links-item">github: <a href="https://github.com/vikramraisharma">https://github.com/vikramraisharma</a></p>
        <p className="contact-links-item">download <a href="https://docs.google.com/document/d/1UQGi163Ycao5XbxuuK2BRp0LhEjyoVp_/edit?usp=sharing&ouid=103128135030545190082&rtpof=true&sd=true" download>my resume</a></p>
      </div>
     </>
   );
 }

 export default Contact
 
