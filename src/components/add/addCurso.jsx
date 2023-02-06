import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CURSOSDATA, addCursoData } from '../../database';

const AddCurso = () => {

  const navigate = useNavigate();

  const [cursoInfo, setCursoInfo] = useState({
    name: '',
    image: '',
    firstSemesterClasses: [],
    secondSemesterClasses: [],
    thirdSemesterClasses: []
  })

  //Submit data
  function submitData(e) {
    e.preventDefault();
    console.log();
    addCursoData({
      name: cursoInfo.name,
      image: cursoInfo.image,
      semester: [
        {
            classes: cursoInfo.firstSemesterClasses
        },
        {
            classes: cursoInfo.secondSemesterClasses
        },
        {
            classes: cursoInfo.thirdSemesterClasses
        }
    ]
    });
    navigate('/cursos');
  }
  
  //Cancel
  function cancelCurso() {
    navigate('/cursos');
  }

  //Remove classes from semesters
  function removeElementFirst(e, id) {
    e.preventDefault();
    cursoInfo.firstSemesterClasses.splice(id, 1);
  };
  function removeElementSecond(e, id) {
    e.preventDefault();
    cursoInfo.secondSemesterClasses.splice(id, 1);
  };  function removeElementThird(e, id) {
    e.preventDefault();
    cursoInfo.thirdSemesterClasses.splice(id, 1);
  };

  //Add classes to semesters
  const [inputs, setInput] = useState(['', '', '']);
  function saveInput(e, i) {
    inputs[i] = e.target.value;
    setInput([...inputs]);
  }

  function addItemFirst(e) {
    e.preventDefault();
    if (inputs[0] !== '') {
      const copyCurso = ({...cursoInfo});
      cursoInfo.firstSemesterClasses.push(inputs[0]);
      setCursoInfo({ ...copyCurso })
      inputs[0] = '';
      setInput([...inputs]);
    }
  }

  function addItemSecond(e) {
    e.preventDefault();
    if (inputs[1] !== '') {
      const copyCurso = ({...cursoInfo});
      cursoInfo.secondSemesterClasses.push(inputs[1]);
      setCursoInfo({ ...copyCurso })
      inputs[1] = '';
      setInput([...inputs]);
    }
  }
  function addItemThird(e) {
    e.preventDefault();
    if (inputs[2] !== '') {
      const copyCurso = ({...cursoInfo});
      cursoInfo.thirdSemesterClasses.push(inputs[2]);
      setCursoInfo({ ...copyCurso })
      inputs[2] = '';
      setInput([...inputs]);
    }
  }

  return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
        <form onSubmit={submitData} className="col-md-12 p-0">
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
                  <label className="label-text" htmlFor="inputSemester1">Semestre 1 - Disciplinas</label>
                    {/* add item */}
                    <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control add-item-form mb-2"
                        id={`inputSemester1`}
                        placeholder={"Adicione uma nova disciplina"}
                        value={inputs[0]}
                        onChange={(e) => {saveInput(e, 0)}}
                        maxLength="70"
                      />
                      <button type="button" className="btn btn-element-border d-flex justify-content-center ml-2" onClick={addItemFirst}>
                        <i className="btn btn-element btn-success fa-solid fa-plus"></i>
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
                      {/* remove item */}
                      <button type="button" className="btn btn-element-border d-flex justify-items-center ml-2" onClick={(e) => {
                        removeElementFirst(e, id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element rounded-circle fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>

                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputSemester2">Semestre 2 - Disciplinas</label>
                  {/* add item */}
                  <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control add-item-form mb-2"
                        id={`inputSemester1`}
                        placeholder={"Adicione uma nova disciplina"}
                        value={inputs[1]}
                        onChange={(e) => {saveInput(e, 1)}}
                        maxLength="70"
                      />
                      <button type="button" className="btn btn-element-border d-flex justify-content-center ml-2" onClick={addItemSecond}>
                        <i className="btn btn-element btn-success fa-solid fa-plus"></i>
                      </button>
                    </div>

                  {cursoInfo.secondSemesterClasses.map((classes, id) => (
                    <div className="d-flex align-items-center">
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
                      {/* remove item */}
                      <button type="button" className="btn btn-element-border d-flex ml-2" onClick={(e) => {
                        removeElementSecond(e, id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
                <li className="form-submit-list-item">
                  <label className="label-text" htmlFor="inputSemester3">Semestre 3 - Disciplinas</label>
                  {/* add item */}
                  <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control add-item-form mb-2"
                        id={`inputSemester1`}
                        placeholder={"Adicione uma nova disciplina"}
                        value={inputs[2]}
                        onChange={(e) => {saveInput(e, 2)}}
                        maxLength="70"
                      />
                      <button type="button" className="btn btn-element-border d-flex justify-content-center ml-2" onClick={addItemThird}>
                        <i className="btn btn-element btn-success fa-solid fa-plus"></i>
                      </button>
                    </div>
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
                      <button type="button" className="btn btn-element-border d-flex ml-2" onClick={(e) => {
                        removeElementThird(e, id);
                        setCursoInfo({ ...cursoInfo })}}>
                        <i className="btn btn-danger btn-element fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3 mr-3">Guardar</button>
            <button className="btn btn-danger mt-3" onClick={cancelCurso}>Cancelar</button>
          </form>
        </div>
      </section>
  )
}

export default AddCurso;