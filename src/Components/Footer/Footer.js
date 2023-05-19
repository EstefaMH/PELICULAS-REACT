import React from "react";
import "../../global.css";
import "../../index.css";
import Logo from "../../utils/img/logo1.png";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div class="footer_m clearfix">
          <div class="container">
            <div class="row footer_1">
              <div class="col-md-4">
                <div class="footer_1i">
                  <h3>
                    <Link to="/" class="text-white">
                      <img className="Logo" src={Logo} alt="Logo" />
                      <img className="Logo" src={Logo} alt="Logo" />
                      <img className="Logo" src={Logo} alt="Logo" />
                      YESmovies
                    </Link>
                  </h3>
                  <p class="mt-3">
                    Encontraras reseñas de mas de 5.000 peliculas
                  </p>
                </div>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="footer_1i">
                  <h4>
                    Sign <span class="col_red">Newsletter</span>
                  </h4>
                  <p class="mt-3">Actividad de Transferencia FrontEnd </p>
                  <div class="d-flex justify-content-between">
                    <ul>
                      <strong>Tecnologias : </strong>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>

                    <ul>
                      <strong>API : </strong>
                      <li>Axios</li>
                      <li>TMDB</li>
                    </ul>
                  </div>
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer_b" class="pt-3 pb-3 bg_grey">
        <div class="container">
          <div class="row footer_1">
            <div class="col-md-8">
              <div class="footer_1l">
                <p class="mb-0">
                  © 2023 YESmovies. All Rights Reserved | Design by
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer_1r">
                <p class="col_red">
                  
                Yany, Estefa , Sebas  &
                  {" "}
                  <a class="col_red" href="http://www.templateonweb.com">
                     TemplateOnWeb
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
