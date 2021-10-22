import React from "react";

import InputTask from "./inputTask.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>ToDo</h1>
			<div className="container mt-3">
				<InputTask />
			</div>
		</div>
	);
};

export default Home;
