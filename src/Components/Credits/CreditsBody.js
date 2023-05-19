import React from "react";
import { Link } from "react-router-dom";

function Bar() {
    return (
        <section id="center" class="center_o pt-2 pb-2">
            <div class="container-xl">
                <div class="row center_o1">
                    <div class="col-md-5">
                        <div class="center_o1l">
                            <h2 class="mb-0">Creditos</h2>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="center_o1r text-end">
                            <h6 class="mb-0 col_red">
                                <Link to="/">Home</Link>{" "}
                                <span
                                    class="me-2 ms-2
									text-light"
                                >
                                    <i class="fa fa-caret-right align-middle"></i>
                                </span>
                                Creditos
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" class="pt-4 pb-4 bg_grey">
            <div class="container-xl">
                <div class="row contact_1 bg_dark pt-5 pb-5">
                    <div class="col-md-3">
                        <div class="contact_1i row">
                            <div class="col-md-2 col-2">
                                <div class="contact_1il">
                                    <span class="col_red fs-3">
                                        <i class="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-10 col-10">
                                <div class="contact_1ir">
                                    <h5 class="col_red">API</h5>
                                    <p class="mb-0">TMDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact_1i row">
                            <div class="col-md-2 col-2">
                                <div class="contact_1il">
                                    <span class="col_red fs-3">
                                        <i class="fa fa-clock-o"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-10 col-10">
                                <div class="contact_1ir">
                                    <h5 class="col_red">Más sobre la API</h5>
                                    <a class="mb-0" href="https://www.themoviedb.org/">
                                        <strong>Link interfaz API</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact_1i row">
                            <div class="col-md-2 col-2">
                                <div class="contact_1il">
                                    <span class="col_red fs-3">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-10 col-10">
                                <div class="contact_1ir">
                                    <h5 class="col_red">Documentación API</h5>
                                    <a
                                        class="mb-0"
                                        href="https://www.themoviedb.org/documentation/api?language=es-es"
                                    >
                                        <strong>Ver documentación</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact_1i row">
                            <div class="col-md-10 col-10">
                                <div class="contact_1ir"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row contact_2 mt-4">
                    <div class="col-md-6">
                        <div class="contact_2r">
                            <h4 class="mb-3 col_red"> Extracción de datos</h4>
                            <p>
                                Se ha conectado la interfaz grafica del Frontend al API The
                                Movie Data Base para poder extraer la información de las
                                peliculas teniendo en cuenta que es una base de datos robusta
                                con informacion de mas de 5000 peliculas
                            </p>
                            <p>
                                Se instalaron las dependencias de axios para realizar la
                                peticion asincrona al servidor y poder recuperar los datos
                                mediante el JSON
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact_2l row">
                            <div class="col-md-12">
                                <h4 class="mb-3 col_red">Interfaz grafica</h4>
                                <p>
                                    Se implementaron las dependecias de bootstrap para estilar
                                    facilmente, sin embargo también se crearon hojas de estilos en
                                    css para complementar
                                </p>
                                <p>
                                    Para el Header y Footer se crearon web componentes utilizando
                                    js y poder hacer que el codigo sea reutilizable{" "}
                                </p>
                            </div>
                        </div>
                        <div class="contact_2l1 mt-3 row">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const CreditsBody = () => {

    return (
        <div>
            <Bar />
            <Contact />
        </div>
    )

};

export default CreditsBody;
