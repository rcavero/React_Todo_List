import React, { useState, useEffect } from "react";
import ToDoTask from "./toDoTask.jsx";
import FooterCounter from "./footerCounter.jsx";

const InputTask = props => {
	const [inputValue, setInputValue] = useState("");

	const [toDoList, setToDoList] = useState([]);

	// useEffect(() => {
	// 	// Actualiza el título del documento usando la API del navegador
	// 	console.log(toDoList);
	// }, [toDoList]);

	const handleKeypress = e => {
		if (e.key === "Enter") {
			//Hace lo mismo que el toDoList.push, añadir un elemento al final del array
			setToDoList([...toDoList, inputValue]); // Probar en otro orden [inputValue, ...toDoList]
			//recorre el array y crea uno nuevo con los mismos elementos del anterior
			setInputValue(""); //limpia la ventana de input
		}
	};

	const handleOnChange = e => {
		// console.log("palabra: " + e.target.value);
		setInputValue(e.target.value);
	};

	return (
		<div className="card w-50 mx-auto">
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<input
						className="border-0 w-100"
						type="text"
						placeholder="Add Task"
						onKeyPress={handleKeypress}
						onChange={handleOnChange}
						value={inputValue}
					/>
				</li>
				<ToDoTask toDoList={toDoList} />
			</ul>
			<FooterCounter numTasks={toDoList.length} />
		</div>
	);
};

// InputTask.propTypes = {
// 	inputValue: PropTypes.string
// };
// Esto sólo lo necesitamos en el componente hijo (el que recibe las propiedades)

export default InputTask;
