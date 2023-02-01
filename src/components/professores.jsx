import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Professores extends React.Component {
  render() {
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/profs/prof_1.jpg" />
                  <h4>Prof. Andreia Gomes</h4>
                  <Link to='singleProf'><p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p></Link>
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/profs/prof_1.jpg" />
                  <h4>Prof. Carlos Monteiro</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p> 
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/profs/prof_1.jpg" />
                  <h4>Prof. Óscar Pereira</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

/* 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Professores />,
    document.getElementById('container-root')
  )
}) */