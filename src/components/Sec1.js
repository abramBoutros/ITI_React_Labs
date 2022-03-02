import React from "react";

function Sec1({ fullName, jobTitle }) {
	return (
		<>
			<header id="sec1" className="container-fluid bg-dark	">
				<div className="row">
					<div className="col-md-7  ms-5  " style={{ height: "400px" }}>
						<h1 className=" display-3 d-block mt-5 ms-5 text-light text-monospace">
							{fullName}
						</h1>
						<h1 className="display-6 d-block mt-5 ms-5 text-light text-monospace">
							{jobTitle}
						</h1>
						<button
							type="button"
							className="btn btn-outline-light ms-5 btn-lg text-monospace"
							style={{ width: "200px", height: "50px" }}
						>
							Contact Me
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Sec1;
