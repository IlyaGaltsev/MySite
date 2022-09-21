import './App.css';
import Header from './components/Header/Header';
import SectionAbout from './components/SectionAbout/SectionAbout';
import SectionContacts from './components/SectionContacts/SectionContacts';
import SectionProjects from './components/SectionProjects/SectionProjects';
import SectionSkills from './components/SectionSkills/SectionSkills';
import"./publicStyles.css"

function App() {
  return (
    <div className="page__wrapper">
      <Header/>
      <div className='sections'>
      <SectionAbout/>
      <SectionSkills/>
      <SectionProjects/>
      <SectionContacts/>
      </div>
    </div>
  );
}

export default App;
