import React from "react";

function Sec3({ skills, HTML }) {
	return (
		<>
			<section id="sec3" className="container-fluid bg-secondary">
				<div className="row">
					<div className="col-md-12 " style={{ height: "200px" }}>
						<h1 className="d-block mt-5  text-light display-1 font-weight-bolder text-monospace text-center">
							Skills
						</h1>
					</div>
					<div
						className="col-md-12 text-center "
						style={{ height: "200px" }}
					>
						<div className="d-block  text-light font-weight-bolder text-monospace text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dolor eos voluptas sunt iste. Dolor veniam eos sunt
							perspiciatis asperiores impedit nisi error quibusdam
							deserunt modi velit ipsum excepturi eum nobis, odio, beatae
							temporibus fuga quis labore neque et quam dicta officiis.
							Consequatur odit adipisci consequuntur delectus similique a
							fugit sunt, repudiandae, aliquid, nihil explicabo quos.
							Facilis qui nihil porro corporis, ratione laboriosam
							quaerat iusto architecto fugiat doloribus eveniet eum vel
							possimus reprehenderit quis tempora. Tempore molestiae cum
							eius qui temporibus, eveniet aliquam in, nesciunt velit nam
							quod, facilis rerum. Est nulla ullam beatae qui maxime
							sapiente corporis aliquam explicabo dicta.
						</div>
					</div>

					<div className="col-md-12 row " style={{ height: "400px" }}>
						<div className="col-md-5 text-light">
							<h1 className="ms-5 display-4 ">My Focus </h1>

							{skills.map((skill) => (
								<h3
									key={skill}
									className="h4 ms-5 text-uppercase mt-3 text-monospace"
								>
									{skill}
								</h3>
							))}
						</div>
						<div className="col-md-7">
							<h1 className="display-6 text-light">HTML</h1>
							<div className="progress">
								<div
									className="progress-bar bg-success"
									role="progressbar"
									style={{ width: HTML }}
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>

							<h1 className="display-6 text-light">CSS</h1>
							<div className="progress">
								<div
									className="progress-bar bg-info"
									role="progressbar"
									style={{ width: "50%" }}
									aria-valuenow="50"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>

							<h1 className="display-6 text-light"> Angular</h1>
							<div className="progress">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "75%" }}
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>

							<h1 className="display-6 text-light">React</h1>
							<div className="progress">
								<div
									className="progress-bar bg-danger"
									role="progressbar"
									style={{ width: "100%" }}
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Sec3;
