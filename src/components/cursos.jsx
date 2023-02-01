import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Cursos extends React.Component {
  render() {
    return ( 
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Cursos</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/cursos/curso_1.jpg" />
                  <h4>História</h4>
                  <Link to={'singleCurso'}><p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Plano de estudos</a></p></Link>
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/cursos/curso_2.jpg" />
                  <h4>Marketing</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Plano de estudos</a></p> 
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/cursos/curso_3.jpg" />
                  <h4>Engenharia Informática</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Plano de estudos</a></p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
