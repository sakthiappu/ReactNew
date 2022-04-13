import img1 from '../img1.png';
import image001 from '../image001.png';
import '../App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          {/* <marquee width="30%" direction="left" height="60px"> */}
            <img src={image001}></img>            
          {/* </marquee> */}
          <div id="navbarResponsive">
              <ul className="navbar-nav">
                <li className='nav-item mx-0 mx-lg-1' >
                  <Link to={'/'} className='li' style={{ color: 'white' }}>Home</Link>
                </li>
                <li className='nav-item mx-0 mx-lg-1' >
                  <Link to={'/loginpage/login'} className='li' style={{ color: 'white' }}>Login</Link>
                </li>
                <li className='nav-item mx-0 mx-lg-1' >
                  <Link to={'/loginpage/register'} className='li' style={{ color: 'white' }}>Register</Link>
                </li>
                <li className='nav-item mx-0 mx-lg-1' >
                  <Link to={'/loginpage/dashboard'} className='li' style={{ color: 'white' }}>Dashboard</Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>

      <div className='row'>
        <div className='col-6'>
          <img src={img1} width='700px' height='600px'></img>
        </div>
        <div className='col-6 login'>
          <h2 className='heading'>LogIn Here</h2>

          <Login />

        </div>
      </div>

    </div>

  );
}

export default App;
