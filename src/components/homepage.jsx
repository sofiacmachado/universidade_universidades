import React from 'react';
import { CURSOSDATA, ALUNOSDATA, PROFESSORESDATA } from '../database';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const cursosList = CURSOSDATA.slice(0,3);
    const alunosList = ALUNOSDATA.slice(0,3);
    const profList = PROFESSORESDATA.slice(0,3);


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

    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="hero-section container">
            <div className="slideshow-container">

            <Link to="/cursos">
                <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_1.jpg" />
                    <div className="hero-citation">
                        <h2 className="hero-title">CURSOS</h2>
                        <h3 className="hero-subtitle">Consulta os cursos disponíveis</h3>
                    </div>
                </div>
            </Link>
    
            <Link to="/professores">
                <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_2.jpg" />
                    <div className="hero-citation">
                        <h2 className="hero-title">PROFESSORES</h2>
                        <h3 className="hero-subtitle">Consulta o corpo docente</h3>
                    </div>
                </div>
            </Link>
                
            <Link to="/alunos">
                <div className="mySlides">
                    <img src="./assets/universidade_das_universidades_3.jpg" />
                    <div className="hero-citation">
                        <h2 className="hero-title">ALUNOS</h2>
                        <h3 className="hero-subtitle">Consulta a listagem de alunos</h3>
                    </div>
                </div>
            </Link>
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
                            {cursosList.map((curso) => {
                                return (
                                    <div key={curso.id} className="row-image col-md-4 col-sm-4">
                                        <Link to={`/cursos/singleCurso/${curso.id}`}>
                                            <img src={curso.image} />
                                            <h4>{curso.name}</h4>
                                            <p className="mb-0">Grau: Licenciatura</p>
                                            <p>Duração: {Object.keys(curso.semester).length} semestres</p>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <span className="ver-mais"><Link to="/cursos">ver mais</Link></span>
                    </div>
                </div>
            </section>
    
            {/* Prof Section */}
            <section className="row-background row">
            <div className="row-section container">
                <div className="col-md-12 p-0">
                    <h2 className="row-title mb-3">Professores</h2>
                    <div className="row">
                        {profList.map((prof) => {
                            return(
                                <div key={prof.id} className="row-image col-md-4 col-sm-4">
                                    <Link to={`/professores/singleProf/${prof.id}`}>
                                        <img src={prof.image} />
                                        <h4>Prof. {prof.name}</h4>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <span className="ver-mais"><Link to="/professores">ver mais</Link></span>
                </div>
            </div>
            </section>
    
            {/* Alunos Section */}
            <section className="row-background row">
                <div className="row-section container">
                    <div className="col-md-12 p-0">
                        <h2 className="row-title mb-3">Alunos</h2>
                        <div className="row">
                            {alunosList.map((aluno) => {
                                return(
                                    <div key={aluno.id} className="row-image col-md-4 col-sm-4">
                                        <Link to={`/professores/singleAluno/${aluno.id}`}>
                                            <img src={aluno.image} />
                                            <h4>{aluno.name}</h4>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <span className="ver-mais"><Link to="/alunos">ver mais</Link></span>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Homepage;