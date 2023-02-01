const Footer = () => {
    return (
        <footer className="container">
          <div className="footer">
            <div className="row">
                <ul className="nav">
                  <li className="nav-item mb-2">
                    <a className="nav-link">Política de Privacidade</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link">Sobre Nós</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link">Contactos</a>
                  </li>
                </ul>
            </div>
            <hr/>
            <p className="copy">©2023 All rights reserved</p>
        </div>
        </footer>
    )
}

export default Footer;