import React from 'react';
import { professores } from '../database';

export default class SingleProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      professores: {},
    }
  }

  turnOnEdit() {
    if(this.state.edit === false) {
      this.setState({ edit: true })
    }
  }

  componentDidMount() {
    let data = {
      professor: professores
    }
    this.setState({
      image: data.professor.image,
      name: data.professor.name,
      birth: data.professor.birth,
      salary: data.professor.salary
    });
  }

  render() {
    const { edit, image, name, birth, salary } = this.state;
    return (
      <section className="row-background mt-0 row">
          <div className="row-section container">
            {edit ? 
            (<div className="col-md-12 p-0">
              <h2 className="row-title mb-3">{name}</h2>
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src={image} />
                  <h4>Data de Nascimento: {birth}</h4>
                  <h4>Salário: {salary}</h4>
              </div>
            </div>) 
            : 
            (
            <form className="col-md-12 p-0">
              <label className="label-text" htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder={name}
                value={this.state.name}
                onChange={this.handleNameChange}
                maxLength="70"
              />
              <div className="row">
                <div className="row-image col-md-4 col-sm-4">
                  <img src={image} />
                  <h4>Data de Nascimento: {birth}</h4>
                  <h4>Salário: {salary}</h4>
              </div>
            </form>
            ) }
            <button className="btn btn-primary" onClick={this.turnOnEdit}>Edit</button>
            </div>
          </div>
        </section>
    )
  }
}
