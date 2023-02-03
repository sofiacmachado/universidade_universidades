import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { professores } from '../database';

const SingleProf = () => {
 
  const { id } = useParams();

  const professor = professores[id];

  const [profInfo, setProfInfo] = useState({
      image: professor.image,
      name: professor.name,
      birth: professor.birth,
      salary: professor.salary
  })

const [edit, setEdit] = useState(false);

  function turnOnEdit() {
    if( edit === false ) {
      setEdit( true )
    }
  }

  function handleNameChange(e) {
    setProfInfo({ ...profInfo, name: e.target.value });
  }

  function handleBirthChange(e) {
    setProfInfo({ ...profInfo, birth: e.target.value });
  }

  function handleSalaryChange(e) {
    setProfInfo({ ...profInfo, salary: e.target.value });
  }

  function submitData(e) {
    if( edit === true ) {
      setEdit(false )
    }
    setProfInfo({
      name: e.target.value,
      birth: e.target.value,
      salary: e.target.value
    })
  }

return (
  <section className="row-background mt-0 row">
      <div className="row-section container">
        {!edit ? 
        (<div className="col-md-12 p-0">
          <h2 className="row-title mb-3">{profInfo.name}</h2>
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
              <img src={profInfo.image} />
              <h4>Data de Nascimento: {profInfo.birth}</h4>
              <h4>Salário: {profInfo.salary}€</h4>
          </div>
          </div>
          <button className="btn btn-primary" onClick={turnOnEdit}>Edit</button>
        </div>) : 
        (
        <form className="col-md-12 p-0">
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
            <label className="label-text" htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder={profInfo.name}
              value={profInfo.name}
              onChange={handleNameChange}
              maxLength="70"
            />
            <img src={profInfo.image} />
            <label className="label-text" htmlFor="inputBirth">Data de Nascimento</label>
            <input 
              type="date" 
              id="inputBirth" 
              placeholder={profInfo.birth}
              value={profInfo.birth}
              onChange={handleBirthChange}
              min="1955-01-01" max="2002-12-31" 
            />
            <label className="label-text" htmlFor="inputBirth">Data de Nascimento</label>
            <input
                type="number"
                className="form-control"
                id="inputPrice"
                placeholder={`${profInfo.price}$`}
                value={profInfo.salary}
                onChange={handleSalaryChange}
                maxLength="200"
            />
            </div>
          <button type="submit" className="btn btn-primary" onClick={((e) => e, submitData)}>Save</button>
          </div>
        </form>
        )}
        </div>
    </section>
  )
}

export default SingleProf;