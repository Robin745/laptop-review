import React from "react";

const SingleReview = ({ review }) => {
	const { name, comment, picture } = review;
	return (
		<div className="w-10/12 mx-auto">
			<div className="w-20 ">
				<img className="w-full rounded-full" src={picture} alt="" />
				<h4>{name}</h4>
			</div>
			<p> {comment}</p>
		</div>
	);
};

export default SingleReview;
