import React from 'react';
import ReactDOM from 'react-dom';
//import {Link} from "react-router-dom";
//<Link to="/Dashboard"> Dashboard </Link>

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)


        function slideshow() {
            var slideIndex = 0;
            var timeAuto = setTimeout(autoSlides, 3000);
            showSlides(slideIndex);

            // Next/previous controls
            function plusSlides(n) {
                let slides = document.getElementsByClassName("mySlides");
                slideIndex += n;
                if (slideIndex >= slides.length) {slideIndex = 0}
                if (slideIndex < 0) {slideIndex = slides.length - 1}
                showSlides(slideIndex);
                clearTimeout(timeAuto);
                timeAuto = setTimeout(autoSlides, 3000);
            }

            function showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[n].style.display = "block";
            }

            function autoSlides() {
                let slides = document.getElementsByClassName("mySlides");
                slideIndex++;
                if (slideIndex >= slides.length) {slideIndex = 0}
                showSlides(slideIndex);
                timeAuto = setTimeout(autoSlides, 3000);
            }
        }
    }

    
    render() {
        return (
            <React.Fragment>
                {/* Hero Section */}
                <section className="hero-section container">
                <div className="slideshow-container">
        
                    <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_1.jpg" />
                    <div className="hero-citation">
                        <a>
                        <h2 className="hero-title">CURSOS</h2>
                        <h3 className="hero-subtitle">Consulta os cursos disponíveis</h3>
                        </a>
                    </div>
                    </div>
        
                    <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_2.jpg" />
                    <div className="hero-citation">
                        <h2 className="hero-title">PROFESSORES</h2>
                        <h3 className="hero-subtitle">Consulta o corpo docente</h3>  
                    </div>
                    </div>
        
                    <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_3.jpg" />
                    <div className="hero-citation">
                        <h2 className="hero-title">ALUNOS</h2>
                        <h3 className="hero-subtitle">Consulta a listagem de alunos</h3>
                    </div>
                    </div>
                    {/* Next and previous buttons */}
                    <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onClick="plusSlides(1)">&#10095;</a>
        
                </div>
                <br/>
                </section>
        
                {/* Degree Section */}            
                <section className="row-background mt-0 row">
                    <div className="row-section container">
                        <div className="col-md-12 p-0">
                            <h2 className="row-title mb-3">Cursos</h2>
                            <div className="row">
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/cursos/curso_1.jpg" />
                                    <h4>História</h4>
                                    <p className="mb-0">Grau: Licenciatura</p>
                                    <p>Duração: 6 semestres</p>
                                </div>
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/cursos/curso_2.jpg" />
                                    <h4>Marketing</h4>
                                    <p className="mb-0">Grau: Licenciatura</p>
                                    <p>Duração: 6 semestres</p>
                                </div>
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/cursos/curso_3.jpg" />
                                    <h4>Engenharia Informática</h4>
                                    <p className="mb-0">Grau: Licenciatura</p>
                                    <p>Duração: 6 semestres</p>
                                </div>
                            </div>
                            <span className="ver-mais"><a>ver mais</a></span>
                        </div>
                    </div>
                </section>
        
                {/* Prof Section */}
                <section className="row-background row">
                <div className="row-section container">
                    <div className="col-md-12 p-0">
                        <h2 className="row-title mb-3">Professores</h2>
                        <div className="row">
                            <div className="row-image col-md-4 col-sm-4">
                                <img src="./assets/profs/prof_1.jpg" />
                                <h4>Prof. Andreia Gomes</h4>
                            </div>
                            <div className="row-image col-md-4 col-sm-4">
                                <img src="./assets/profs/prof_1.jpg" />
                                <h4>Prof. Carlos Monteiro</h4>
                            </div>
                            <div className="row-image col-md-4 col-sm-4">
                                <img src="./assets/profs/prof_1.jpg" />
                                <h4>Prof. Óscar Pereira</h4>
                            </div>
                        </div>
                        <span className="ver-mais"><a>ver mais</a></span>
                    </div>
                </div>
                </section>
        
                {/* Alunos Section */}
                <section className="row-background row">
                    <div className="row-section container">
                        <div className="col-md-12 p-0">
                            <h2 className="row-title mb-3">Alunos</h2>
                            <div className="row">
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/alunos/aluno_1.jpg" />
                                    <h4>António Lopes</h4>
                                </div>
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/alunos/aluno_1.jpg" />
                                    <h4>Fernando Castro</h4>
                                </div>
                                <div className="row-image col-md-4 col-sm-4">
                                    <img src="./assets/alunos/aluno_1.jpg" />
                                    <h4>Beatriz Afonso</h4>
                                </div>
                            </div>
                            <span className="ver-mais"><a>ver mais</a></span>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
} 
