import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container text-center">
        <div class="main-container">
          <div class="row align-items-center bg-opacity-50">
            
              <div class="col">
                <div className="Creadores">
                  <h1>Contáctanos</h1>
                  <h5>
                    Somos estudiantes apasionados de la ingeniería de software
                    en busca de conocimiento y excelencia en nuestra formación.
                    Nos emociona explorar las diversas áreas de esta disciplina,
                    desde el diseño y desarrollo de aplicaciones hasta la
                    gestión de proyectos y la implementación de soluciones
                    innovadoras.
                  </h5>
                  <h3>Somos YES!</h3>
                </div>
              </div>
              <div class="col">
                <div className="formulario">
                  <h4 className="info-career-title-data">
                    Formulario de contacto
                  </h4>
                  <form className="container-info-career-form">
                    <div className="yes-form-input">
                      <input
                        className="form-input"
                        required
                        id="name"
                        name="name"
                        type="text"
                        placeholder=" Ingresa tu nombre"
                      />
                    </div>
                    <div className="yes-form-input">
                      <input
                        className="form-input"
                        required
                        id="mail"
                        name="mail"
                        type="email"
                        placeholder=" Ingresa tu email"
                      />
                    </div>
                    <div className="yes-form-input">
                      <textarea
                        name="message"
                        placeholder=" Ingresa tu mensaje"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn btn text-white bg_red rounded-0 border-0"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
