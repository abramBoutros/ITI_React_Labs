import React from "react";

function Sec2() {
	return (
		<>
			<section id="sec2" className="container-fluid bg-light	">
				<div className="row">
					<div className="col-md-4  ms-5  " style={{ height: "400px" }}>
						<h1 className="d-block mt-5 ms-5 text-dark display-1 font-weight-bolder text-monospace">
							About Me
						</h1>
					</div>
					<div
						className="col-md-7  ms-5 mt-5  "
						style={{ height: "400px" }}
					>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur, blanditiis. Fugiat totam ea debitis fuga illum
							id fugit. Id, eius possimus deserunt maxime nobis
							dignissimos labore quam assumenda dolores natus? Dicta eum
							quis dolorum aut fuga atque omnis, sequi velit.
						</div>

						<a
							type="button"
							className="btn btn-dark shadow-lg ms-5 btn-lg text-monospace mt-5"
							style={{ width: "200px", height: "50px" }}
							href="../assets/bg-dark.jpg"
							download="bg-dark.jpg"
						>
							Download Resume
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Sec2;
