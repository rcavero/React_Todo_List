import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ToDoTask = props => {
	return props.toDoList.map((value, index) => {
		return (
			<li
				key={index}
				className="list-group-item d-flex justify-content-between">
				<div>{value}</div>
				<div
					onClick={() =>
						props.setToDoList(props.toDoList.splice({ index }, 1))
					}>
					x
				</div>
			</li>
		);
	});
};

ToDoTask.propTypes = {
	toDoList: PropTypes.array
};

export default ToDoTask;
