import React from 'react';
import ReactDOM from 'react-dom';

export default class Alunos extends React.Component {
  render() {
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Alunos</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/alunos/aluno_1.jpg" />
                  <h4>António Lopes</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p>
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/alunos/aluno_1.jpg" />
                  <h4>Fernando Castro</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p> 
                  
                </div>
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/alunos/aluno_1.jpg" />
                  <h4>Beatriz Afonso</h4>
                  <p className="mb-0"><a><i className="fa-solid fa-angles-right"></i> Mais informações</a></p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
