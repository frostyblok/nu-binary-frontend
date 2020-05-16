import React from 'react';
import {Link} from 'react-router-dom';

const SignupForm = ({onChange, onSubmit}) => {
	return (
		<form className="myform-signup" id="myform-signup" onSubmit={(event) => onSubmit(event)}>
			<div className="input-field">
				<input type="text" name="email" placeholder="Email" id="email-signup" onChange={(event) => onChange(event)} required />
			</div>
			<div className="input-field">
				<input type="password" name="password" placeholder="Enter Password" id="password-signup" onChange={(event) => onChange(event)} required />
			</div>
			<div className="input-field">
				<input type="password" name="password_confirmation" placeholder="Confirm Password" id="password-signup" onChange={(event) => onChange(event)} required />
			</div>
			<div className="input-field-bttn">
				<input type="submit" name="login" value="SIGN UP" />
			</div>
			<div id="signup-link">
				<p>Already have an account? <Link to="/login">Login Here</Link></p>
			</div>
		</form>
	)
}

export default SignupForm;
