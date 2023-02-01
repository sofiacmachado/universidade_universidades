import React from 'react';
import { alunos } from '../database';

export default class SingleAluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: {},
    }
  }

  componentDidMount() {
    let data = {
      aluno: alunos
    }
    this.setState({
      image: data.aluno.image,
      name: data.aluno.name,
      birth: data.aluno.birth,
      grades: data.aluno.grades,
      enrollment: data.aluno.enrollment
    });
  }

  render() {
    const { image, name, birth, enrollment, grades } = this.state;
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">Alunos</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src={image} />
                  <h3>{name}</h3>
                  <h4>Data de Nascimento: {birth}</h4>
                  <h4>Notas: {grades}</h4>
                  <h4>Matrícula: {enrollment}</h4>
              </div>
            </div>
            </div>
          </div>
        </section>
    )
  }
}
