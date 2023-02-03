import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand"><Link to='/'>Universidade das Universidades</Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item nav-link"><Link to="cursos">Cursos</Link></li>
                <li className="nav-item nav-link"><Link to="professores">Professores</Link></li>
                <li className="nav-item nav-link"><Link to="alunos">Alunos</Link></li>
                <li className="nav-item nav-link" type="button">Log In</li>
              </div>
            </div>
          </nav>
    </header>
    )
}

export default Navbar;