import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALUNOSDATA, setAlunoData } from '../../database';

const SingleAluno = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const aluno = ALUNOSDATA[id];

  const [alunoInfo, setAlunoInfo] = useState({
    name: aluno.name,
    birth: aluno.birth,
    enrollment: aluno.enrollment,
    grades: aluno.grades
  })

  const [edit, setEdit] = useState(false);

  function submitData(e) {
    e.preventDefault();
      setAlunoData(id, {
        name: alunoInfo.name,
        birth: alunoInfo.birth,
        enrollment: alunoInfo.enrollment,
        grades: alunoInfo.grades
      });
      setEdit(false);
    }
  
  function deleteAluno() {
    setEdit(false);
    ALUNOSDATA.splice(id, 1);
    navigate('/alunos');
  }

  function removeGrade(id) {
    alunoInfo.grades.splice(id, 1);
  };

  const [input, setInput] = useState('');

  function saveInput(e) {
    setInput(e.target.value);
  }
  
  function addGrade() {
    const copyAluno = ({...alunoInfo});
    copyAluno.grades.push(input);
    setAlunoInfo({...copyAluno});
    setInput('');
  }

  const prettyBirth = new Date(alunoInfo.birth).toLocaleDateString();

  return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
        {!edit ? 
          (<div className="col-md-12 p-0">
            <h2 className="row-title mb-3">{aluno.name}</h2>
            <div className="row">
              <div className="row-image col-md-4 col-sm-4">
               <ul className="form-submit-list">
                  <li className="form-submit-list-item">
                   <h4>Data de Nascimento: {prettyBirth}</h4>
                  </li>
                  <li className="form-submit-list-item">
                    <h4>Notas: {aluno.grades.join(', ')}</h4>
                  </li>
                  <li className="form-submit-list-item">
                    <h4>Matrícula: {aluno.enrollment}</h4>
                  </li>
                </ul>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => setEdit(true)}>Editar</button>
          </div>) 
          :
        (<form onSubmit={submitData} className="col-md-12 p-0">
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
               <ul className="form-submit-list">
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputName">Nome</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="inputName"
                    placeholder={alunoInfo.name}
                    value={alunoInfo.name}
                    onChange={(e) => setAlunoInfo({ ...alunoInfo, name: e.target.value })}
                    maxLength="70"
                    required
                  />
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputBirth">Data de Nascimento</label>
                  <input 
                    type="date" 
                    id="inputBirth" 
                    className="form-control mb-2"
                    placeholder={alunoInfo.birth}
                    value={alunoInfo.birth}
                    onChange={(e) => setAlunoInfo({
                      ...alunoInfo,
                      birth: e.target.value
                    })}
                    min="1955-01-01" max="2004-12-31" 
                    required
                  />
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputEnrollment">Matrícula</label>
                  <input
                      type="number"
                      className="form-control mb-2"
                      id="inputEnrollment"
                      placeholder={alunoInfo.enrollment}
                      value={alunoInfo.enrollment}
                      onChange={(e) => setAlunoInfo({ ...alunoInfo, enrollment: e.target.value })}
                      maxLength="8"
                      required
                  />
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputGrades">Notas</label>
                   {/* add item */}
                   <div className="d-flex align-items-center">
                    <input
                        type="number"
                        className="form-control add-item-form mb-2"
                        id={`inputSemester1`}
                        placeholder={"Adicione uma nota"}
                        value={input}
                        onChange={(e) => {saveInput(e)}}
                        maxLength="2"
                        min='0'
                        max='20'
                      />
                      <button className="btn btn-element-border d-flex justify-content-center ml-2" onClick={addGrade}>
                        <i className="btn btn-element btn-success fa-solid fa-plus"></i>
                      </button>
                    </div>
                  {alunoInfo.grades.map((grades, id) => (
                    <div className="d-flex align-items-center">
                      <input
                          type="number"
                          className="form-control mb-2"
                          id={`inputGrades${id}`}
                          placeholder={grades}
                          value={grades}
                          onChange={(e) => {
                            alunoInfo.grades[id] = e.target.value;
                            setAlunoInfo({ ...alunoInfo })
                          }}
                          maxLength="20"
                      />
                      {/* remove item */}
                      <button className="btn btn-element-border d-flex justify-items-center ml-2" onClick={(e) => {
                        e.preventDefault();
                        removeGrade(id);
                        setAlunoInfo({ ...alunoInfo })}}>
                        <i className="btn btn-danger btn-element rounded-circle fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3 mr-3">Guardar</button>
          <button className="btn btn-danger mt-3" onClick={deleteAluno}>Apagar</button>
        </form>
        )}
        </div>
      </section>
  )
}

export default SingleAluno;