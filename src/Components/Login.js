import React, { Component } from "react";
import '../css/Login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotPassword: false,
      loginShowing: true
    };
  }

  handleClick = () => {
    this.setState({
      forgotPassword:true 
    })
  }

  render(){
    return(
      <div>
        <h1>Login Here</h1>
       <div>
         <form>
           <label>Username</label>
          <input id="email" type="email" required />
          <label>Password</label> 
          <input id="password" type="password" required />
          <input type="submit"></input>
         </form>
        </div>
        <div>
         <Link to="/forgot-password">Forgot Your Password?</Link>
         <p>Don't Have An Account? <Link to="/create-account">Create account</Link></p>
        </div>
      </div>
    )
  }
}

export default Login;