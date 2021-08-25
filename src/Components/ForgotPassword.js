import React, {Component} from 'react';


class ForgotPassword extends Component {
    render(){
        return(
            <div>
            <h3>Forgot Your Password?</h3>
            <p>Enter the associated email here and check your email for a reset link.</p>
            <form>
                <input type="email" id="email" required name="email"/>
            </form>
            </div>
        )
    }
}

export default ForgotPassword;