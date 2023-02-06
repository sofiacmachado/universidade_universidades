import React from 'react';
import { CURSOSDATA, ALUNOSDATA, PROFESSORESDATA } from '../database';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const cursosList = CURSOSDATA.slice(0,3);
    const alunosList = ALUNOSDATA.slice(0,3);
    const profList = PROFESSORESDATA.slice(0,3);


    return (
        <React.Fragment>
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