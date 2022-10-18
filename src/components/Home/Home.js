import React from "react";
import { useNavigate } from "react-router-dom";
import useComments from "../../hooks/CustomHooks";
import SingleReview from "../SingleReview/SingleReview";

const Home = () => {
	const [comments] = useComments();
	const navigate = useNavigate();
	const seeAllReviews = () => {
		navigate('/reviews');
	};
	return (
		<div>
			<div>
				<div className="flex flex-col md:flex md:flex-row items-center mt-12 md:mt-0 mx-auto w-10/12">
					<div className="w-full text-left p-4 pb-0 order-2 md:order-1">
						<h2 className="text-3xl mb-4">HP 11th Gen Intel Core i5 IPS 14 Inch.</h2>
						<p className="">
							Laptop Brand - HP, Laptop Model - HP 14s-dq5345TU, Processor Brand - Intel, Processor Type
							- Intel Core i3, Processor Generation - 12th (Intel), Processor Model - Core i3 1215U,
							Processor Max Turbo Frequency - 4.40 GHz, Processor Core - 6, Processor Thread - 8,
							Processor Cache - 10MB, Chipset - Intel Integrated SoC, Display Size - 14 Inch,
							Display Technology - FHD IPS LED Display, Display Resolution - 1920 x 1080.
						</p>
						<p className="w-32 my-3 py-2 text-center bg-cyan-600 hover:bg-purple-900 rounded text-white text-xl">
							<button>Review</button>
						</p>
					</div>
					<div className="order-1 md:order-2">
						<img className="" src="laptop.png" alt="" />
					</div>
				</div>
				<div className="text-left mx-auto mb-8 px-4 w-10/12">
					<p className="text-xl text-cyan-900 underline underline-offset-8 w-28 mb-2">Details:</p>
					<p className="">Laptop Brand - Dynabook, Laptop Series - Satellite Pro, Laptop Model - Dynabook Satellite Pro C40-G-109, Processor Brand - Intel, Processor Type - Intel Celeron Dual Core, Processor Model - Celeron Dual Core 5205U, Processor Base Frequency - 1.90 GHz, Processor Core - 2, Processor Thread - 2, Processor Cache - 2MB, Display Size - 14 Inch, Display Technology - HD Display, Display Resolution - 1366 x 768, Touch Display - No, Memory (RAM) - 4GB, Installed Memory Details - 1 x 4GB Removable, Memory Type - DDR4, Memory Bus (MHz) - 3200MHz, Total Memory Slot - 1, Empty Memory Slot - None, Max Memory Support - 8GB, Storage - 128GB SSD, Installed SSD Type - SATA, SSD Expansion Slot - None, Storage Upgrade - Installed SSD can be upgradeable, Optical Drive - No-ODD, Multimedia Card Slot - 1, Supported Multimedia Card - Micro SD, Graphics Chipset - Intel UHD Graphics, Graphics Memory Accessibility - Integrated, Graphics Memory - Shared, LAN - RJ-45, WiFi - Wi-Fi 5 (802.11 ac), Bluetooth - Bluetooth 5.0, USB 3 Port - 2 x USB 3.1, USB C / Thunderbolt Port - 1 x USB 3.1 Type-C Gen 1, HDMI Port - 1, Headphone Port - combo, Microphone Port - combo, Audio Properties - Stereo speakers, Speaker - Yes, Microphone - Yes, WebCam - HD Webcam, Keyboard Layout - Frameless black tile keyboard, Keyboard Back-lit - Yes, Pointing Device - ClickPad, Security Chip - Firmware TPM, Battery Cell - 2 Cell, Battery Capacity - 45.6WHr, Battery Type - Lithium Ion, Power Adapter - 45W Adapter, Operating System - Windows 10 Pro, Color - Dark Blue, Dimension (W x D x H) - 328 x 224.8 x 18.9mm, Weight - 1.55Kg, Warranty - 2 Year (1 year for Battery and Adapter), Warranty Claim Duration (Approximate) - Estimated Warranty Claim Duration 20 Days. It may take additional time up to 40 days, Part Number - PYS26E, Disclaimer - Mentioned Battery Backup information is collected from manufacturer. As per manufacturer the backup time may very for different use case, settings, applications and some other factors.</p>
				</div>
			</div>

			<div>
				<h1 className="text-3xl underline underline-offset-8">Customar Reviews(<span className="text-emerald-900">3</span>)</h1>
				{comments.slice(0, 3).map((review) => (
					<SingleReview review={review} key={review.id}></SingleReview>
				))}
				<div className="w-44 py-1 mx-auto mb-8 text-xl text-white bg-emerald-900 rounded-md">
					<button onClick={seeAllReviews}>See All Reviews</button>
				</div>

			</div>


		</div>
	);
};

export default Home;
