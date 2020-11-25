import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Nav.css';
const Nav = () => {
  return (
    <div className="nav-container d-flex">
      <nav className="navbar navbar-expand-xl w-100 navbar-dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                to="/cardetail"
                activeClassName="active-link">
                Prices & spec
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/newcarpricing"
                activeClassName="active-link">
                New Cars
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/dealer-details"
                activeClassName="active-link">
                Dealers
              </NavLink>
            </li>
          </ul>
          <div className="user-container">
            <i className="fas fa-user-alt pr-2 user-icon"></i>
            <span className="username">Andrew Peki</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
