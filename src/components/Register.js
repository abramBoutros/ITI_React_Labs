import React, { useState } from "react";

const Register = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userError, setUserError] = useState("");

	const [userName, setUserName] = useState("");
	const [userNameError, setUserNameError] = useState("");

	const [name, setName] = useState("");
	const [nameError, setNameError] = useState("");

	const [userPassword, setUserPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [confirm, setConfirm] = useState("");
	const [confirmError, setConfirmError] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const nameBlur = (e) => {
		if (e.target.value.length > 0) {
			setNameError(null);
			return;
		}
		setNameError("You must enter a Name");
	};

	/////////////////////////////////////
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

	//////////////////////////////////

	const handleUserName = (e) => {
		setUserName(e.target.value);
	};

	const userNameBlur = (e) => {
		if (/^\S*$/.test(e.target.value)) {
			setUserNameError(null);
			return;
		}
		setUserNameError("You have entered an invalid User Name");
	};

	////////////////////////////////////////////

	var strongRegex = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);

	const handlePassword = (e) => {
		setUserPassword(e.target.value);
	};

	const passwordBlur = (e) => {
		if (strongRegex.test(e.target.value)) {
			setPasswordError(null);
			return;
		}
		setPasswordError("You have entered an invalid password");
	};

	///////////////////////////////////////////////
	const handleConfirm = (e) => {
		setConfirm(e.target.value);
	};

	const confirmBlur = (e) => {
		if (e.target.value === userPassword) {
			setConfirmError(null);
			return;
		}
		setConfirmError("password and password confirmation does not match!");
	};

	///////////////////////////////////////////////

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Name</label>
				<input
					onChange={(e) => handleName(e)}
					onBlur={(e) => nameBlur(e)}
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter Name"
					value={name}
				/>
				{nameError && <div className="text-danger">{nameError}</div>}
			</div>
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
				{userError && <div className="text-danger">{userError}</div>}
			</div>

			<div className="form-group">
				<label htmlFor="exampleInputEmail1">UserName</label>
				<input
					onChange={(e) => handleUserName(e)}
					onBlur={(e) => userNameBlur(e)}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter email"
					value={userName}
				/>
				{userNameError && (
					<div className="text-danger">{userNameError}</div>
				)}
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
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Confirm Password</label>
				<input
					onChange={(e) => handleConfirm(e)}
					onBlur={(e) => confirmBlur(e)}
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
					value={confirm}
				/>
				{confirmError && <div className="text-danger">{confirmError}</div>}
			</div>

			<button
				type="submit"
				className="btn btn-primary mt-3"
				disabled={
					userNameError ||
					confirmError ||
					nameError ||
					userError ||
					passwordError ||
					userEmail.length === 0 ||
					userPassword.length === 0 ||
					name.length === 0 ||
					userName.length === 0 ||
					confirm.length === 0
						? true
						: false
				}
			>
				Submit
			</button>
		</form>
	);
};

export default Register;
