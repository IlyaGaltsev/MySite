import './SectionAbout.css';
import handle from '../../assets/icons/handle.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import buttons from '../../data/buttons';
function SectionAbout() {
  return (
    <div className="section-about__wrapper" id='about'>
      <div className="section-about__title">
        <h1>
        Привет я <span className='primary-color'>Илья</span>
        </h1>
        <img class='title__icon' src={handle} alt='k'/>
      </div>
      <h1>Я Frontend разработчик</h1>
      <p className='section-about__text'>Специализируюсь на веб- и мобильной разработке с акцентом на разработку интерфейса. Заинтересован в создании чего-то потрясающего с помощью кода. Не так давно возникло желание делать более купные проекты, тем самым развиваться в разработке приложений и помогать людям, делая их жизнь чуть проще</p>
      <div className="section-about__button">
        <PrimaryButton button={buttons[0]} />
      </div>
    </div>
  );
}

export default SectionAbout;
