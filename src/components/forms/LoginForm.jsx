import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = ({onChange, onSubmit}) => {
	return (
		<form className="myform-signup" id="myform-login" onSubmit={(event) => onSubmit(event)}>
			<div className="input-field">
				<input type="text" name="email" placeholder="Email" id="email" onChange={(event) => onChange(event)}  required />
			</div>
			<div className="input-field">
				<input type="password" name="password" placeholder="*******" id="password" onChange={(event) => onChange(event)} required />
			</div>
			<div className="forgot-password">
				{/*<a href="#">Forgot Password?</a>*/}
				<button className="forgot-password-btn">Forgot Password</button>
			</div>
			<div className="input-field-bttn">
				<input type="submit" name="login" value="LOG IN" />
			</div>
			<div id="signup-link">
				<p>New Here? <Link to="/signup">Sign Up</Link></p>
			</div>
		</form>
	)
}

export default LoginForm;
