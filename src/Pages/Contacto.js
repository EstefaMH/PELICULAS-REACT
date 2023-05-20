import Footer from "../Components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

function Contacto() {
  return (
    <div>
  <Navbar />
  <div class="container text-center">
  <div class="row align-items-start">
  <div class="col">
  <div className="Creadores">
      <h1>Contactanos</h1>
      <h2>
        Somos estudiantes apasionados de la ingeniería de software en busca de conocimiento y excelencia en nuestra formación. Nos emociona explorar las diversas áreas de esta disciplina, desde el diseño y desarrollo de aplicaciones hasta la gestión de proyectos y la implementación de soluciones innovadoras.
      </h2>
      <h1>Somos YES!</h1>
      <h2>Yany Gonzalez Yepez</h2>
      <h2>Estefania Moncaleano</h2>
      <h2>Sebastian Pineda Bautista</h2>
    </div>
      </div>

  </div>
  <div class="col">
  <div className="formulario">
      <h4 className="info-career-title-data">Formulario de contacto</h4>
      <form className="container-info-career-form">
        <div className="info-career-form-input">
          <label htmlFor="name">Nombre*</label>
          <input className="form-input" required id="name" name="name" type="text" />
        </div>
        <div className="info-career-form-input">
          <label htmlFor="mail">Email*</label>
          <input className="form-input" required id="mail" name="mail" type="email" />
        </div>
        <div className="info-career-form-input">
          <label htmlFor="lastName">Mensaje*</label>
          <input className="form-input" required id="lastName" name="lastName" type="text" />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>
  </div>
</div>    
  <Footer />
</div>

  );
}

export default Contacto;