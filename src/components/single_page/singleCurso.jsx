import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CURSOSDATA, setCursoData } from '../../database';

const SingleCurso = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const curso = CURSOSDATA[id];

  const [cursoInfo, setCursoInfo] = useState({
    name: curso.name,
    image: curso.image,
    semester: curso.semester,
    firstSemesterClasses: curso.semester[0].classes,
    secondSemesterClasses: curso.semester[1].classes,
    thirdSemesterClasses: curso.semester[2].classes
  })

  const [edit, setEdit] = useState(false);

  function turnOnEdit() {
    if( edit === false ) {
      setEdit( true )
    }
  }

  function submitData(e) {
    e.preventDefault();
    console.log(id);
    setCursoData(id, {
      name: cursoInfo.name,
      image: cursoInfo.image,
      semester: cursoInfo.semester
    });
  }
  
  function removeElement(id) {
    cursoInfo.firstSemesterClasses.splice(id, 1);
  };

  function deleteCurso() {
    setEdit(false);
    CURSOSDATA.splice(id, 1);
    navigate('/cursos');
  }
  
  const [input, setInput] = useState("");

  function saveInput(e) {
    setInput(e.target.value);
  }

  function addItem(e) {
    const copyCurso = ({...cursoInfo});
    cursoInfo.firstSemesterClasses.push(input);
    setCursoInfo({ ...copyCurso })
    setInput('');
  }

 return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
        {!edit ? 
        (<div className="col-md-12 p-0">
            <h2 className="row-title mb-3">{cursoInfo.name}</h2>
            <div className="row">
              <div className="row-image col-md-4 col-sm-4">
                <img src={cursoInfo.image} />
                <ul className="form-submit-list">
                  <li className="form-submit-list-item">
                    <h4>Semestre 1</h4>
                    <p>{cursoInfo.firstSemesterClasses.join(', ')}</p>
                  </li>
                  <li className="form-submit-list-item">
                    <h4>Semestre 2</h4>
                    <p>{cursoInfo.secondSemesterClasses.join(', ')}</p>
                  </li>
                  <li className="form-submit-list-item">
                    <h4>Semestre 3</h4>
                    <p>{cursoInfo.thirdSemesterClasses.join(', ')}</p>
                  </li>
                </ul>
            </div>
          </div>
          <button className="btn btn-primary" onClick={turnOnEdit}>Editar</button>
          </div>) 
        : 
        (<form onSubmit={((e) => e, submitData)} className="col-md-12 p-0">
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
              <ul className="form-submit-list">
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputName">Curso</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder={cursoInfo.name}
                    value={cursoInfo.name}
                    onChange={(e) => setCursoInfo({ ...cursoInfo, name: e.target.value })}
                    maxLength="70"
                    required
                  />
                </li>
                <li className="form-submit-list-item">
                  <img src={cursoInfo.image} />
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputSemester1">Semestre 1 - Disciplinas</label>
                    
                    {/* add item */}
                    <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control add-item-form mb-2"
                        id={`inputSemester1`}
                        placeholder={"Adicione uma nova disciplina"}
                        value={input}
                        onChange={saveInput}
                        maxLength="70"
                        required
                      />
                      <button className="btn btn-element-border d-flex justify-content-center ml-2" onClick={addItem}>
                        <i class="btn btn-element btn-success fa-solid fa-plus"></i>
                      </button>
                    </div>


                  {cursoInfo.firstSemesterClasses.map((classes, id) => (
                    <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control mb-2"
                        id={`inputSemester1-${id}`}
                        placeholder={classes}
                        value={classes}
                        onChange={(e) => {
                          cursoInfo.firstSemesterClasses[id] = e.target.value;
                          setCursoInfo({ ...cursoInfo })
                        }}
                        maxLength="70"
                        required
                      />
                      <button className="btn btn-element-border d-flex justify-items-center ml-2" onClick={() => {
                        removeElement(id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element rounded-circle fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputSemester2">Semestre 2 - Disciplinas</label>
                  {cursoInfo.secondSemesterClasses.map((classes, id) => (
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control mb-2"
                        id={`inputSemester2-${id}`}
                        placeholder={classes}
                        value={classes}
                        onChange={(e) => {
                          cursoInfo.secondSemesterClasses[id] = e.target.value;
                          setCursoInfo({ ...cursoInfo })
                        }}
                        maxLength="70"
                        required
                      />
                      <button className="btn btn-element-border d-flex ml-2" onClick={() => {
                        removeElement(id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputSemester3">Semestre 3 - Disciplinas</label>
                  {cursoInfo.thirdSemesterClasses.map((classes, id) => (
                    <div className="d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control mb-2"
                        id={`inputSemester3-${id}`}
                        placeholder={classes}
                        value={classes}
                        onChange={(e) => {
                          cursoInfo.thirdSemesterClasses[id] = e.target.value;
                          setCursoInfo({ ...cursoInfo })
                        }}
                        maxLength="70"
                        required
                      />
                      <button className="btn btn-element-border d-flex ml-2" onClick={() => {
                        removeElement(id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
              </div>
            </div>
            <button type="submit" onClick={() => setEdit(false)} className="btn btn-success mt-3 mr-3">Guardar</button>
            <button className="btn btn-danger mt-3" onClick={deleteCurso}>Apagar</button>
          </form>
        )}
        </div>
      </section>
  )
}

export default SingleCurso;