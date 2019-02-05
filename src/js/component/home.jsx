import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//create your first component

let BigCounter = props => {
	console.log(props);
	return (
		<div className="BigCounter">
			<div className="calender">
				<FontAwesomeIcon icon="clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{parseInt(props.digitOne) % 10}</div>
		</div>
	);
};

BigCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default BigCounter;
