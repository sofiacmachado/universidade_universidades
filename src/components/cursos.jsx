import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { CURSOSDATA } from '../database';
import avatar from '../assets/avatar_curso.png'

const Cursos = () => {

  const cursoList = CURSOSDATA;

  return ( 
      <section className="row-background mt-0 row">
        <div className="row-section container">
          <div className="col-md-12 p-0">
            <h2 className="row-title mb-3">Cursos</h2>
              <Link to ="/cursos/addCurso"><button className="btn btn-success mb-3">Adicionar Curso</button></Link>
            <div className="row mt-2 ">
            {cursoList.map((curso, id) => {
                return(
                <div key={id} className="row-image col-md-4 col-sm-4">
                  <img className="image-avatar" alt="avatar" src={avatar} />
                  <h4 className="mt-3">{curso.name}</h4>
                  <Link to={`/cursos/singleCurso/${id}`}><p><i className="fa-solid fa-angles-right"></i> Plano de estudos</p></Link>
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