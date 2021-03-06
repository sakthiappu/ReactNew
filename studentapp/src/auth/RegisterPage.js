import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image001 from '../image001.png';
import cloud from '../cloud.png';

function RegisterPage() {
  const [regname, setName] = useState();
  const [number, setPhone] = useState();
  const [email, setMail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const [userList,setRegList]=useState([]);

  const navigate = useNavigate();
  const userLoginDetails = JSON.parse(sessionStorage.getItem('loginDetails'));
  if (userLoginDetails !== null) {
    window.location.href = "#/dashboard";
    return (
      <div></div>
    );
  }
  else {


    function addEmployee(event) {
      if (!regname) {
        alert("Enter Name");
      }
      else if (!number) {
        alert("Please enter Mobile number");
      }
      else if (!email) {
        alert("Please enter Email");
      }
      else if (!username) {
        alert("Please enter Username");
      }
      else if (!password) {
        alert("Please enter Password");
      }
      else {
        var exitData = JSON.parse(localStorage.getItem("userList"));
        var updatedEmpListPush = JSON.parse(JSON.stringify(exitData));

        updatedEmpListPush.push({
          regname: regname,
          number: number,
          email: email,
          username: username,
          password: password

        });
        // setRegList(updatedEmpListPush);
        console.log("updated state", updatedEmpListPush);
        localStorage.setItem("userList", JSON.stringify(updatedEmpListPush));
        event.preventDefault();
        navigate("/login");
        //resetForm();
      }
    }

    console.log("name is" + regname);
    return (
      <div>
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
        <div className="row">
          <div className='col-3 welcome'>
            <img src={cloud} width='350px' height='250px'></img>
            <span><h2>cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service</h2></span>
          </div>
          <div className='col-9 formreg'>
            <p className="heading1">Registration Page</p>
            <div className="register">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputCity" name={regname} required onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputMobile" className="form-label">Phone Number</label>
                  <input type="Number" className="form-control" id="inputMobile" name={number} required onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" name={email} required onChange={e => setMail(e.target.value)} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Username</label>
                  <input type="text" className="form-control" id="inputAddress" required name={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" name={password} required onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="col-6">
                  <button type="submit" className="btn btn-primary" onClick={addEmployee}>Sign in</button>
                  <p className="signup">Already Have an Account <a href="#/login">Click Here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default RegisterPage;