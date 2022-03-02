import React from "react";

function Sec4({ projects }) {
	return (
		<>
			<section id="sec4" className="container-fluid bg-light my-5	">
				<div className="row">
					<div className="col-md-12 " style={{ height: "200px" }}>
						<h1 className="d-block mt-5  text-dark display-1 font-weight-bolder text-monospace text-center">
							Portfolio
						</h1>
					</div>
					<div className="col-md-12 text-center align-content-center ">
						<div className="d-flex  flex-row justify-content-around align-items-sm-start flex-wrap align-content-around ">
							{projects.map((project, index) => (
								<div
									key={index}
									className={`card my-4  ${
										index % 2 ? "bg-primary" : "bg-danger"
									} `}
									style={{ width: "28rem" }}
								>
									<div className="card-body">
										<h5 className="card-title">{project}</h5>

										<a href="/" className="btn btn-success">
											Project Link
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Sec4;
