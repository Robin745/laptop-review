import React from "react";

const Home = () => {
	return (
		<div className="flex flex-col md:flex md:flex-row items-center my-8 md:my-0 mx-auto w-11/12">
			<div className="w-full text-left p-4 pb-0 order-2 md:order-1">
				<h2 className="text-3xl mb-4">HP 11th Gen Intel Core i5 IPS 14 Inch.</h2>
				<p className="">
					Laptop Brand - HP, Laptop Model - HP 14s-dq5345TU, Processor Brand - Intel, Processor Type
					- Intel Core i3, Processor Generation - 12th (Intel), Processor Model - Core i3 1215U,
					Processor Max Turbo Frequency - 4.40 GHz, Processor Core - 6, Processor Thread - 8,
					Processor Cache - 10MB, Chipset - Intel Integrated SoC, Display Size - 14 Inch,
					Display Technology - FHD IPS LED Display, Display Resolution - 1920 x 1080.
				</p>
				<p className="w-40 my-3 py-2 text-center bg-cyan-600 hover:bg-purple-900 rounded text-white text-xl">
					<button>Review</button>
				</p>
			</div>
			<div className="order-1 md:order-2">
				<img className="" src="laptop.png" alt="" />
			</div>
		</div>
	);
};

export default Home;
