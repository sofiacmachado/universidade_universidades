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
              {profList.map((prof) => {
                return(
                <div key={prof.id} className="row-image col-md-4 col-sm-4">
                  <img src={prof.image} />
                  <h4>Prof. {prof.name}</h4>
                  <Link to={`/professores/singleProf/${prof.id}`}><p className="mb-0"><i className="fa-solid fa-angles-right"></i> Mais informações</p></Link>
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