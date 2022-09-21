import './Link.css';

function Link({link, setVisibleMenu}) {
  const onHangleClickLink = () => {
    setVisibleMenu(false);
  }
  return (
    <a href={link.path} onClick={onHangleClickLink} className="link">
      {link.name}
    </a>
  );
}

export default Link;