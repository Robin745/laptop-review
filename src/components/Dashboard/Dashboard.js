import React from "react";
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useData } from "../../hooks/CustomHooks";

const Dashboard = () => {
	const [graphData] = useData();
	const data = graphData;
	console.log(graphData);
	return (
		<div className="">
			<h2 className="text-xl md:text-2xl my-8"> Some Graph will appear here</h2>
			<div className="md:flex justify-center">
				<div className="h-96 md:mr-10">
					<ResponsiveContainer width={400} height="70%">
						<LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
							<Line type="monotone" dataKey="sell" stroke="#82ca9d" />
							<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
						</LineChart>
					</ResponsiveContainer>
					<p>Fig: LineChart</p>
				</div>

				<div className="mt-8 h-96">
					<ResponsiveContainer width={400} height="70%">
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="investment" fill="#8884d8" />
							<Bar dataKey="revenue" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>

					<p className="mt-4">Fig: BarChart</p>
				</div>

			</div>
			<div className="md:flex justify-center my-8">
				<div className="mb-4 h-96 md:mr-10">
					<ResponsiveContainer width={400} height="70%">
						<ComposedChart data={data}>
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<CartesianGrid stroke="#f5f5f5" />
							<Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
							<Bar dataKey="sell" barSize={20} fill="#413ea0" />
							<Line type="monotone" dataKey="revenue" stroke="#ff7300" />
						</ComposedChart>
					</ResponsiveContainer>

					<p className="mt-2">Fig: ComposedChart</p>
				</div>

				<div className="h-96">
					<ResponsiveContainer width={400} height="70%">
						<PieChart>
							<Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
							<Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
						</PieChart>
					</ResponsiveContainer>

					<p>Fig: PieChart</p>
				</div>

			</div>

		</div>
	);
};

export default Dashboard;
