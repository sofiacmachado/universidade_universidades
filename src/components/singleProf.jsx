import React from 'react';
import { professores } from '../database';

export default class SingleProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professores: {},
    }
  }

  componentDidMount() {
    let data = {
      professor: professores
    }
    this.setState({
      image: data.professor.image,
      name: data.professor.name,
      birth: data.professor.birth,
      salary: data.professor.salary
    });
  }

  render() {
    const { image, name, birth, salary } = this.state;
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Professores</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src={image} />
                  <h3>Prof. Andreia Gomes {name}</h3>
                  <h4>Data de Nascimento: {birth}</h4>
                  <h4>Salário: {salary}</h4>
                
              </div>
            </div>
            </div>
          </div>
        </section>
    )
  }
}
