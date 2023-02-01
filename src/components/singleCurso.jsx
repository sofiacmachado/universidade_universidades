import React from 'react';
import { cursos } from '../database';

export default class SingleCurso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: {},
    }
  }

  componentDidMount() {
    let data = {
      curso: cursos
    }
    this.setState({
      image: data.curso.image,
      name: data.curso.name,
      firstSemesterClasses: data.curso.semester.firstSemester.classes,
      secondSemesterClasses: data.curso.semester.secondSemester.classes,
      thirdSemesterClasses: data.curso.semester.thirdSemester.classes,
    });
  }

  render() {
    const { image, name, firstSemesterClasses, secondSemesterClasses, thirdSemesterClasses } = this.state;
    return (
        <section className="row-background mt-0 row">
          <div className="row-section container">
            <div className="col-md-12 p-0">
              <h2 className="row-title mb-3">{name}</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src={image} />
                  <h4>Semestre 1</h4>
                  <li>{firstSemesterClasses}</li>
                  <h4>Semestre 2</h4>
                  <li>{secondSemesterClasses}</li>
                  <h4>Semestre 3</h4>
                  <li>{thirdSemesterClasses}</li>
              </div>
            </div>
            <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        </section>
    )
  }
}
