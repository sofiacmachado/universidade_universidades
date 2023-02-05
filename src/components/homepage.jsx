import React from 'react';
import { CURSOSDATA, ALUNOSDATA, PROFESSORESDATA } from '../database';
import { Link } from 'react-router-dom';
import img1 from "../assets/universidade_das_universidades_1.jpg";
import img2 from "../assets/universidade_das_universidades_2.jpg";
import img3 from "../assets/universidade_das_universidades_3.jpg";

const Homepage = () => {

    const cursosList = CURSOSDATA.slice(0,3);
    const alunosList = ALUNOSDATA.slice(0,3);
    const profList = PROFESSORESDATA.slice(0,3);


    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="hero-section container">
            <div className="slideshow-container">

            <Link to="/cursos">
                <div className="mySlides">
                    <img src={img1} />
                    <div className="hero-citation">
                        <h2 className="hero-title">CURSOS</h2>
                        <h3 className="hero-subtitle">Consulta os cursos disponíveis</h3>
                    </div>
                </div>
            </Link>
    
            <Link to="/professores">
                <div className="mySlides">
                    <img src={img2} />
                    <div className="hero-citation">
                        <h2 className="hero-title">PROFESSORES</h2>
                        <h3 className="hero-subtitle">Consulta o corpo docente</h3>
                    </div>
                </div>
            </Link>
                
            <Link to="/alunos">
                <div className="mySlides">
                    <img src={img3} />
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
                            {cursosList.map((curso, id) => {
                                return (
                                    <div key={id} className="row-image col-md-4 col-sm-4">
                                        <Link to={`/cursos/singleCurso/${id}`}>
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
                        {profList.map((prof, id) => {
                            return(
                                <div key={id} className="row-image col-md-4 col-sm-4">
                                    <Link to={`/professores/singleProf/${id}`}>
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
                            {alunosList.map((aluno, id) => {
                                return(
                                    <div key={id} className="row-image col-md-4 col-sm-4">
                                        <Link to={`/alunos/singleAluno/${id}`}>
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