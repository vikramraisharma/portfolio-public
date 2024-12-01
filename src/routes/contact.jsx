import NavBar from "../components/navBar";
import Header from "../components/Header";

const Contact = () => {
   return (
     <>
      <Header headerText={"getting personal"}/>
      <NavBar activeLink="/contact"/>
      <div className="contact-main">
        <p className="contact-text">lorem ipsum</p>
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
 