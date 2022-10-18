import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';
const SingleReview = ({ review }) => {
	const { name, comment, picture, rating } = review;
	return (
		<div className="w-10/12 mx-auto bg-white my-3 p-4">
			<div className="flex my-1">
				<StarIcon className="w-6 text-gray-300"></StarIcon>
				<StarIcon className="w-6 text-gray-300"></StarIcon>
				<StarIcon className="w-6 text-gray-300"></StarIcon>
				<StarIcon className="w-6 text-gray-300"></StarIcon>
				<StarIcon className="w-6 text-gray-300"></StarIcon>
			</div>
			<div className="text-left flex">
				<p>Rating: {rating}</p>
				<StarIcon className="w-6 text-cyan-800"></StarIcon>
			</div>
			<div className=" flex items-center">
				<img className="w-12 rounded-full" src={picture} alt="" />
				<h4 className="ml-4 text-xl">{name}</h4>
			</div>

			<div className="text-left mt-1">
				<p> {comment}</p>
			</div>
		</div>
	);
};

export default SingleReview;
