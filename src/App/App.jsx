import { SectionAbout } from "../components/SectionAbout";
import "./App.css";
import Header from "../components/Header/Header";
import {SectionProjects} from "../components/SectionProjects";
import {SectionSkills} from "../components/SectionSkills";
import "../publicStyles.css";
import { SectionContacts } from "../components/SectionContacts";

function App() {
 
  return (
    <div className="app__wrapper">
      <Header />
      <div className="app__sections">
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContacts/>
      </div>
    </div>
  );
}

export { App };
