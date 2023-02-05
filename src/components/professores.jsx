import React from 'react';
import { Link } from 'react-router-dom';
import { PROFESSORESDATA } from '../database';

const Professores = () => {
 
  const profList = PROFESSORESDATA; 

    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <div className="row">
              {profList.map((prof, id) => {
                return(
                <div key={id} className="row-image col-md-4 col-sm-4 mt-3 mb-3">
                  <h4>Prof. {prof.name}</h4>
                  <Link to={`/professores/singleProf/${id}`}><p className="mb-0"><i className="fa-solid fa-angles-right"></i> Mais informações</p></Link>
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