import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PROFESSORESDATA, setProfessorData } from '../../database';

const SingleProf = () => {
 
  const { id } = useParams();

  const professor = PROFESSORESDATA[id];

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

  function submitData(e) {
    e.preventDefault();
    if( edit === true ) {
      setProfessorData(id, {
        image: profInfo.image,
        name: profInfo.name,
        birth: profInfo.birth,
        salary: profInfo.salary
      });
      setEdit(false)
    }
    
  }

  const prettyBirth = new Date(profInfo.birth).toLocaleDateString();

return (
  <section className="row-background mt-0 row">
      <div className="row-section container">
        {!edit ? 
        (<div className="col-md-12 p-0">
          <h2 className="row-title mb-3">{profInfo.name}</h2>
          <div className="row">
            <div className="row-image col-md-4 col-sm-4">
              <img src={profInfo.image} />
              <h4>Data de Nascimento: {prettyBirth}</h4>
              <h4>Salário: {profInfo.salary}€</h4>
          </div>
          </div>
          <button className="btn btn-primary" onClick={turnOnEdit}>Edit</button>
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
                  placeholder={profInfo.name}
                  value={profInfo.name}
                  onChange={(e) => setProfInfo({ ...profInfo, name: e.target.value })}
                  maxLength="70"
                />
              </li>
              <img src={profInfo.image} />
              <li>
                <label className="label-text" htmlFor="inputBirth">Data de Nascimento</label>
                <input 
                  type="date" 
                  id="inputBirth" 
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
              <li>
                <label className="label-text" htmlFor="inputSalary">Salário</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputSalary"
                    placeholder={`${profInfo.salary}$`}
                    value={profInfo.salary}
                    onChange={(e) => setProfInfo({ ...profInfo, salary: e.target.value })}
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

export default SingleProf;