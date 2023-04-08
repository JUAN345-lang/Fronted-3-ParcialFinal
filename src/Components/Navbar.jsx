import styles from "./Navbar.module.css";
import { ThemeContext, actions } from "../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <header className="sticky-top">
     
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link to={`./home`}>Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                 <Link to={`./contacto`}>Contacto</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                 <Link to={`./outstanding`}>Destacados</Link>
               
              </li>
              <li className={`nav-item`}>
                <button
                  onClick={() => dispatch({ type: actions.change })}
                  className={`btn btn-light${styles.btnStyle
                    }`}
                >
                  ☀ 🌙{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
