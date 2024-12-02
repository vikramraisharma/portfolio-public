import Header from "../components/Header";
import NavBar from "../components/navBar";

export default function DevShowcase() {
   return (
     <>
        <Header headerText={"developer showcase"}/>
        <NavBar activeLink="/showcase/code"/>
     </>
   );
 }
 