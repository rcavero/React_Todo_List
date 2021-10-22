import React from "react";
import PropTypes from "prop-types";

const FooterCounter = props => {
	return (
		<div className="card-footer d-flex justify-content-start">
			{props.numTasks} Items Left
		</div>
	);
};

FooterCounter.propTypes = {
	numTasks: PropTypes.number
};

export default FooterCounter;
