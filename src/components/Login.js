import React, { useState } from "react";

const Login = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userError, setUserError] = useState("");

	const [userPassword, setUserPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleEmail = (e) => {
		setUserEmail(e.target.value);
	};

	const emailBlur = (e) => {
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
			setUserError(null);
			return;
		}
		setUserError("You have entered an invalid Email");
	};

	const handlePassword = (e) => {
		setUserPassword(e.target.value);
	};

	const passwordBlur = (e) => {
		if (e.target.value.length >= 8) {
			setPasswordError(null);
			return;
		}
		setPasswordError("You have entered an invalid password");
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					onChange={(e) => handleEmail(e)}
					onBlur={(e) => emailBlur(e)}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter email"
					value={userEmail}
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
				{userError && <div className="text-danger">{userError}</div>}
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					onChange={(e) => handlePassword(e)}
					onBlur={(e) => passwordBlur(e)}
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
					value={userPassword}
				/>
				{passwordError && (
					<div className="text-danger">{passwordError}</div>
				)}
			</div>
			<div className="form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button
				type="submit"
				className="btn btn-primary mt-3"
				disabled={
					userError ||
					passwordError ||
					userEmail.length === 0 ||
					userPassword.length === 0
						? true
						: false
				}
			>
				Submit
			</button>
		</form>
	);
};

export default Login;
