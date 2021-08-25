import React from "react";
import ReactDOM from 'react-dom';

const CreateAccountComponent = () => {
    return(
        <div>
            <h1>Create Your Account Now</h1>
            <form>
                <label>First Name</label>
                <input type="text" id="FirstName" />
                <label>Email</label>
                <input type="email" id="email" required />
                <label>Password</label>
                <input type="password" id="password" />
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}
ReactDOM.render(CreateAccountComponent, document.getElementById('root'));


export default CreateAccountComponent;