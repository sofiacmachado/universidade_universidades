import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CURSOSDATA, setCursoInfo } from '../../database';

const SingleCurso = () => {

  const { id } = useParams();

  const curso = CURSOSDATA[id];

  const [cursoInfo, setCursoInfo] = useState({
    name: curso.name,
    image: curso.image,
    firstSemesterClasses: curso.firstSemesterClasses,
    secondSemesterClasses: curso.secondSemesterClasses,
    thirdSemesterClasses: curso.thirdSemesterClasses
  })

 return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
          <div className="col-md-12 p-0">
            <h2 className="row-title mb-3">{curso.name}</h2>
            <div className="row">
              <div className="row-image col-md-4 col-sm-4">
                <img src={curso.image} />
                <h4>Semestre 1</h4>
                <li>{curso.firstSemesterClasses}</li>
                <h4>Semestre 2</h4>
                <li>{curso.secondSemesterClasses}</li>
                <h4>Semestre 3</h4>
                <li>{curso.thirdSemesterClasses}</li>
            </div>
          </div>
          <button className="btn btn-primary" /* onClick={turnOnEdit} */>Edit</button>
          </div>
        </div>
      </section>
  )
}

export default SingleCurso;