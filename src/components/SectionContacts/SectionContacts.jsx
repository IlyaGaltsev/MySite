import './SectionContacts.css';
import ava from '../../assets/images/ava.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import buttons from '../../data/buttons';
import contacts from '../../data/contacts';

function SectionContacts() {
  return (
    <div id='contacts' className="section-contacts__wrapper">
      <div className="section-contacts__avatarka">
        <img src={ava} className='avatarka' alt="i" />
        <div className="avatarka__online">
          <div className="ellipse"/>
        </div>
      </div>
      <h3 className='section-contacts__title'>Илья Гальцев</h3>
      <p className='section-contacts__text'>frontend developer</p>
      <div className="section-contacts__button">
        <PrimaryButton button={buttons[1]}/>
      </div>
      <div className="section-contacts__contacts">
        {contacts.map(contact => <a className='color-link' key={contact.id} href={contact.link}>
          {contact.icon()}
        </a>)}
      </div>
    </div>
  );
}

export default SectionContacts;