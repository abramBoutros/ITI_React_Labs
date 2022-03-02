import "bootstrap/dist/css/bootstrap.min.css";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";

function App() {
	const skills = [
		"FRONTEND DEVELOPMENT",
		"BACKEND DEVELOPMENT",
		"SOFTWARE ENGINEERING",
	];
	const projects = [
		"Project #1",
		"Project #2",
		"Project #3",
		"Project #4",
		"Project #5",
		"Project #6",
	];
	return (
		<div>
			<Sec1 fullName={"Abram Boutros"} jobTitle={"Full Stack Developer"} />
			<Sec2 />
			<Sec3 skills={skills} HTML={"25%"} />
			<Sec4 projects={projects} />
			<Sec5 />
		</div>
	);
}

export default App;
