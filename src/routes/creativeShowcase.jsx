import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function CreativeShowcase() {
   return (
     <>
        <Header headerText={"creative showcase"}/>
        <NavBar activeLink="/showcase/create"/>
     </>
   );
 }