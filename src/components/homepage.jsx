import React from 'react';
import { CURSOSDATA, ALUNOSDATA, PROFESSORESDATA } from '../database';
import { Link } from 'react-router-dom';
import avatarProf from '../assets/avatar_prof.png';
import avatarAluno from '../assets/avatar_aluno.png';
import avatarCurso from '../assets/avatar_curso.png';

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
                        <div className="row mt-3 mb-3">
                            {cursosList.map((curso, id) => {
                                return (
                                    <div key={id} className="row-image row-image-home col-md-4 col-sm-4 mt-3">
                                        <Link to={`/cursos/singleCurso/${id}`}>
                                            <img className="image-avatar" alt="avatar" src={avatarCurso} />
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
            <hr className="hr-section"  />
    
            {/* Prof Section */}
            <section className="row-background row">
            <div className="row-section container">
                <div className="col-md-12 p-0">
                    <h2 className="row-title mb-3">Professores</h2>
                    <div className="row mt-3 mb-3">
                        {profList.map((prof, id) => {
                            return(
                                <div key={id} className="row-image  row-image-home col-md-4 col-sm-4 mt-3">
                                    <Link to={`/professores/singleProf/${id}`}>
                                        <img className="image-avatar" alt="avatar" src={avatarProf} />
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
            <hr className="hr-section"  />
            
            {/* Alunos Section */}
            <section className="row-background row">
                <div className="row-section container">
                    <div className="col-md-12 p-0">
                        <h2 className="row-title mb-3">Alunos</h2>
                        <div className="row mt-3 mb-3">
                            {alunosList.map((aluno, id) => {
                                return(
                                    <div key={id} className="row-image row-image-home col-md-4 col-sm-4 mt-3">
                                        <Link to={`/alunos/singleAluno/${id}`}>
                                            <img className="image-avatar" alt="avatar" src={avatarAluno} />
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
            <hr className="hr-section" />
        </React.Fragment>
    )
}

export default Homepage;