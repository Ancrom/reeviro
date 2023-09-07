import './style.css'

const BtnContactMe = () => {
  return (
    <div className="contact-me">
      <a
        href="mailto:natalia2dartist@gmail.com"
        target="_blank"
				rel="noreferrer"
        className="contact-me__link"
      >
        Contact me
      </a>
    </div>
  );
};

export default BtnContactMe;
