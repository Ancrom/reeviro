import "./style.css";
import photo from "./photo.webp";

const About = () => {
  return (
    <section className="about" data-aos="fade-up" data-aos-once="true">
      <div className="about__container container">
        <div className="about__left">
          <div className="about__photo image">
            <img src={photo} alt="Natalya's Photo" className="about__image" />
          </div>
        </div>
        <div className="about__right">
          <div className="about__content">
            <h2 className="about__title">Natalya Samutina</h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatibus fugit quidem laborum officiis quod, dolores minima
              nostrum assumenda ut ratione adipisci consectetur explicabo nihil,
              id a similique quaerat commodi.
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              eligendi earum possimus quasi nam, minus harum delectus sunt amet.
              Incidunt, placeat repellendus rem facere reiciendis aut veritatis
              ab velit repudiandae?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
