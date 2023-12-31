import './style.css'
import './logo.css';

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__container container fade-up"
      >
        <h1 className="hero__title">Natalya&nbsp;Samutina</h1>
        <div className="logo logo--white">
          <a href="./index.html">ReeviRo</a>
        </div>
        <div className="hero__subtitle">
          Concept&nbsp;Artist&nbsp;& Illustrator
        </div>
      </div>
    </section>
  );
};

export default Hero;
