import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import { professores } from '../database';

const Professores = () => {

 
  const profList = professores; 

    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <div className="row">
              {professores.map((prof) => {
                return(
                <div key={prof.id} className="row-image col-md-4 col-sm-4">
                  <img src={prof.image} />
                  <h4>Prof. {prof.name}</h4>
                  <a href={`/professores/singleProf/${prof.id}`}><p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p></a>
                </div>
                )
              })}
              </div>
            </div>
          </div>
        </section>
    )
  }

  export default Professores;