import React from 'react';
import { data } from '../database';

export default class SingleProf extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      professor: []
    }
  }
  render() {
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src="./assets/profs/prof_1.jpg" />
                  <h3>Prof. Andreia Gomes</h3>
                  <h4>Data de Nascimento: {}</h4>
                  <h4>Salário: </h4>
                
              </div>
            </div>
            </div>
          </div>
        </section>
    )
  }
}
