import React from "react";
import useComments from "../../hooks/CustomHooks";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
	const [comments] = useComments();
	console.log(comments);
	return (
		<div>
			<h2 className="text-2xl mt-8">All the reviews will appear here</h2>
			<div>
				{comments.map((review) => (
					<SingleReview review={review} key={review.id}></SingleReview>
				))}
			</div>
		</div>
	);
};

export default Reviews;
