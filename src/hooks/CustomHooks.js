import { useEffect, useState } from "react";

const useComments = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch("comments.json")
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);

	return [comments];
};
const useData = () => {
	const [graphData, setData] = useState([]);
	useEffect(() => {
		fetch("graphData.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return [graphData];
};
export { useData, useComments };
