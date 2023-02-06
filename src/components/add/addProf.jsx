import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROFESSORESDATA, addProfessorData } from '../../database';

const AddProf = () => {

  const navigate = useNavigate();
  
  const [profInfo, setProfInfo] = useState({
    name: "",
    birth: "",
    salary: ""
  })
 
  const prettyBirth = new Date(profInfo.birth).toLocaleDateString();
  
  function submitData(e) {
    e.preventDefault();
    addProfessorData({
      name: profInfo.name,
      birth: profInfo.birth,
      salary: profInfo.salary
    });
    navigate('/professores');
  }

  function cancelProf() {
    navigate('/professores');
  }

  return (
      <section className="row-background mt-0 row">
        <div className="row-section container">
          <form onSubmit={submitData} className="col-md-12 p-0">
            <div className="row">
              <div className="row-image col-md-4 col-sm-4">
                <ul className="form-submit-list">
                  <li className="form-submit-list-item">
                    <label className="label-text" htmlFor="inputName">Nome</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="inputName"
                      placeholder={profInfo.name}
                      value={profInfo.name}
                      onChange={(e) => setProfInfo({ ...profInfo, name: e.target.value })}
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
                      placeholder={profInfo.birth}
                      //value={new Date(profInfo.birth).toISOString().split("T")[0]}
                      value={profInfo.birth}
                      onChange={(e) => setProfInfo({
                        ...profInfo,
                        //birth: e.target.valueAsDate.toLocaleDateString()
                        birth: e.target.value
                      })}
                      min="1955-01-01" max="2002-12-31" 
                      required
                    />
                  </li>

                  <li className="form-submit-list-item">
                    <label className="label-text" htmlFor="inputSalary">Salário</label>
                    <input
                        type="number"
                        className="form-control mb-2"
                        id="inputSalary"
                        placeholder={`${profInfo.salary}$`}
                        value={profInfo.salary}
                        onChange={(e) => setProfInfo({ ...profInfo, salary: e.target.value })}
                        maxLength="5"
                        required
                    />
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mr-3">Guardar</button>
            <button className="btn btn-danger mt-3" onClick={cancelProf}>Cancelar</button>
          </form>
        </div>
      </section>
  )
}

export default AddProf;