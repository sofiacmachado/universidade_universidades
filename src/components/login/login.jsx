import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function Login(props) {

  console.log(props.isSubmitted)
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const database = [
    {
      username: "UserName1",
      password: "PassWord1"
    },
    {
      username: "UserName2",
      password: "PassWord2"
    }
  ];

  const errors = {
    errorName: "invalid username",
    errorPass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { errorName, errorPass } = document.forms[0];
    const userData = database.find((user) => user.username === errorName.value);

    //Compare info
    if (userData) {
      if (userData.password !== errorPass.value) {
        setErrorMessages({ name: "errorPass", message: errors.errorPass });
      } else {
        props.setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "errorName", message: errors.errorName });
    }
  };

  //Render error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //Login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Utilizador </label>
          <input className="form-control" type="text" name="errorName" required />
          {renderErrorMessage("errorName")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input className="form-control" type="password" name="errorPass" required />
          {renderErrorMessage("errorPass")}
        </div>
        <div className="button-container">
          <button className="btn btn-success mt-2" type="submit">Submeter</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="title">Entrar</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login;