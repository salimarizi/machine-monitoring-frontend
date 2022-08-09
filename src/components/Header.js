import '../assets/css/styles.css';
import '../assets/css/custom.css';
import '../assets/fontawesome/css/all.min.css';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">DASHBOARD</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">ALERTS <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href='#' className='btn btn-icon mr-2'>
              <i className='fa fa-gear'></i>
            </a>
            <a href='#' className='btn btn-icon'>
              <i className='fa fa-user'></i>
            </a>
            <a href='#' className='btn btn-icon'>
              <i className='fa fa-bell'></i>
            </a>
            | &nbsp; Welcome Admin!
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
