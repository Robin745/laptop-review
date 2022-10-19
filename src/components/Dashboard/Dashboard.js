import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useData } from "../../hooks/CustomHooks";

const Dashboard = () => {
	const [graphData] = useData();
	const data = graphData;
	console.log(graphData);
	return (
		<div>
			<h2 className="text-2xl mt-8"> Some Graph will appear here</h2>
			<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</div>
	);
};

export default Dashboard;
