import React from 'react';
import { Link } from 'react-router-dom';
import { PROFESSORESDATA } from '../database';
import avatar from "../assets/avatar_prof.png"

const Professores = () => {
 
  const profList = PROFESSORESDATA; 

    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <Link to ="/professores/addProf"><button className="btn btn-success mb-3">Adicionar Professor</button></Link>
              <div className="row">
              {profList.map((prof, id) => {
                return(
                <div key={id} className="row-image col-md-4 col-sm-4 mt-3">
                  <img className="image-avatar" alt="avatar" src={avatar} />
                  <h4 className="mt-3">Prof. {prof.name}</h4>
                  <Link to={`/professores/singleProf/${id}`}><p><i className="fa-solid fa-angles-right"></i> Mais informações</p></Link>
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