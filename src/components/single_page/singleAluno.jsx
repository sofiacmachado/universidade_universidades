import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ALUNOSDATA, setAlunoData } from '../../database';

const SingleAluno = () => {

const { id } = useParams();

const aluno = ALUNOSDATA[id];

const [alunoInfo, setAlunoInfo] = useState({
  name: aluno.name,
  image: aluno.image,
  birth: aluno.birth,
  enrollment: aluno.enrollment,
  grades: aluno.grades
})

const [edit, setEdit] = useState(false);

  function turnOnEdit() {
    if( edit === false ) {
      setEdit( true )
    }
  }

  function submitData(e) {
    e.preventDefault();
    if( edit === true ) {
      setAlunoData(id, {
        name: alunoInfo.name,
        image: alunoInfo.image,
        birth: alunoInfo.birth,
        enrollment: alunoInfo.enrollment,
        grades: alunoInfo.grades
      });
      setEdit(false)
    }
    
  }

  const prettyBirth = new Date(alunoInfo.birth).toLocaleDateString();

  return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
        {!edit ? 
          (<div className="col-md-12 p-0">
            <h2 className="row-title mb-3">Alunos</h2>
            <div className="row">
              <div className="row-image col-md-4 col-sm-4">
                <img src={aluno.image} />
                <h3>{aluno.name}</h3>
                <h4>Data de Nascimento: {aluno.birth}</h4>
                <h4>Notas: {aluno.grades}</h4>
                <h4>Matrícula: {aluno.enrollment}</h4>
            </div>
          </div>
          </div>) 
          :
        (<form onSubmit={((e) => e, submitData)} className="col-md-12 p-0">
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
              <li>
                <label className="label-text" htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder={alunoInfo.name}
                  value={alunoInfo.name}
                  onChange={(e) => setAlunoInfo({ ...alunoInfo, name: e.target.value })}
                  maxLength="70"
                />
              </li>
              <img src={alunoInfo.image} />
              <li>
                <label className="label-text" htmlFor="inputBirth">Data de Nascimento</label>
                <input 
                  type="date" 
                  id="inputBirth" 
                  placeholder={alunoInfo.birth}
                  value={alunoInfo.birth}
                  onChange={(e) => setAlunoInfo({
                    ...alunoInfo,
                    birth: e.target.value
                  })}
                  min="1955-01-01" max="2002-12-31" 
                  required
                />
              </li>
              <li>
                <label className="label-text" htmlFor="inputEnrollment">Matrícula</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputEnrollment"
                    placeholder={`${alunoInfo.enrollment}$`}
                    value={alunoInfo.enrollment}
                    onChange={(e) => setAlunoInfo({ ...alunoInfo, enrollment: e.target.value })}
                    maxLength="8"
                />
              </li>
              <li>
                <label className="label-text" htmlFor="inputGrades">Notas</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputGrades"
                    placeholder={`${alunoInfo.grades}$`}
                    value={alunoInfo.grades}
                    onChange={(e) => setAlunoInfo({ ...alunoInfo, grades: e.target.value })}
                    maxLength="200"
                />
              </li>
            </div>
          <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
        )}
        </div>
      </section>
  )
}

export default SingleAluno;