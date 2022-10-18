import React from "react";

const Blogs = () => {
	return (
		<div className="w-10/12 mx-auto mb-8">
			<h2 className="text-2xl my-6">Read Some of Our latest blogs</h2>
			<div className="text-left bg-gray-200 px-6 py-4 rounded my-3">
				<h3 className="text-xl font-bold"> Context API </h3>
				<p>Context Api is a way to pass data through the component tree .It helps us to avoid pass props manually at every single component level.
					Context api is a way for a React app to effectively produce global variables that can be passed around.<br></br>
					Context API can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.
				</p>
			</div>
			<div className="text-left bg-gray-200 px-6 py-4 rounded my-3">
				<h3 className="text-xl font-bold"> Symentic Tag </h3>
				<p>
					A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: div and span - Tells nothing about its content.<br></br>
					Examples of semantic elements: form , table , and article - Clearly defines its content.
				</p>
				<p className="text-xl">Some Advantages of Symentic tags are :</p>
				<p>
					1.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. <br />
					2.The pages made with semantic elements are much easier to read. <br />
					3. It has greater accessibility. It offers a better user experience.
				</p>
			</div>
			<div className="text-left bg-gray-200 px-6 py-4 rounded my-3">
				<h3 className="text-xl font-bold"> Difference between inline and inline block </h3>
				<p className="text-xl ">Inline:</p>
				<p>
					An inline elements appears on the same line.
					The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element.
					There’s a bunch of property values. Displays an element as an inline element. Any height and width properties will have no effect. elements that have a default inline property: span, a, img, em, strong, i, small</p>
				<p className="text-xl ">Inline-block:</p>
				<p>
					An inline-block is used to display list items horizontally instead of vertically. <br />
					An inline-block element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element.
					Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
					The top and bottom margins/paddings are respected.
				</p>
				<p></p>
			</div>
		</div>
	);
};

export default Blogs;
