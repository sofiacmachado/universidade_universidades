import React from 'react';
import {Link} from "react-router-dom";
import { ALUNOSDATA } from '../database';


const Alunos = () => {

  const alunoList = ALUNOSDATA;

  return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
          <div className="col-md-12 p-0">
            <h2 className="row-title mb-3">Alunos</h2>
            <Link to ="/cursos/addCurso"><button className="btn btn-success mb-2">Adicionar Aluno</button></Link>
            <div className="row">
            {alunoList.map((aluno, id) => {
                return(
                <div key={id} className="row-image col-md-4 col-sm-4">
                  <img src='#' />
                  <h4>{aluno.name}</h4>
                  <Link to={`/alunos/singleAluno/${id}`}><p className="mb-0"><i className="fa-solid fa-angles-right"></i> Mais informações</p></Link>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Alunos;
