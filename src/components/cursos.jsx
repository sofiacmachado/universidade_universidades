import React from 'react';
import {Link} from "react-router-dom";
import { CURSOSDATA } from '../database';

const Cursos = () => {

  const cursoList = CURSOSDATA;
  
  return ( 
      <section className="row-background mt-0 row">
        <div className="row-section container">
          <div className="col-md-12 p-0">
            <h2 className="row-title mb-3">Cursos</h2>
            <div className="row">
            {cursoList.map((curso, id) => {
                return(
                <div key={id} className="row-image col-md-4 col-sm-4">
                  <img src={curso.image} />
                  <h4>{curso.name}</h4>
                  <Link to={`/cursos/singleCurso/${id}`}><p className="mb-0"><i className="fa-solid fa-angles-right"></i> Plano de estudos</p></Link>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
  )
}
export default Cursos;