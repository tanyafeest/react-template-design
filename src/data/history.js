import React from "react";

function history_1() {
	return {
		date: "May 2021 ~ Step 2023",
		title: "Senior Full Stack developer",
		company : "Tianlu Digital Services · Remote · Full time",
		description:
			"I participated in various project development as a Senior Full Stack developer.",
		keywords: [
			"Senior Full Stack developer"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div> - Implemented a site-wide redesign and front-end overhaul targeting both desktop and mobile devices.</div>
				<div> - Incorporated responsive image best practices to maximize performance and page speed ranking for SEO</div>
				<div> - Implemented downloadable custom PDF report using HTML-to-PDF rendering techniques to ensure proper formatting and layout of the final document.</div>
				<div> -  Developed an Ethereum ERC20 token contract as well as smart contracts for democratic voting by token holders.</div>
				<div> -  Built the back-end server for monitoring Ethereum contracts and creating transactions.</div>
				<div> -  Designed and built the Back-end API using Nest.js from scratch in just three weeks to be ready for FDA studies.</div>
				<div> -  Worked an AXA’s internal dashboard UI using a variety of custom components.</div>
				<div> - Built a Node.js-based library, which acted as middleware for Express.js and Koa, that automatically  captured user errors and sent them to a platform that aggregated and visualized them.</div>
			</React.Fragment>
		),
	};
}

function history_2() {
	return {
		date: "Fed 2019 ~ Oct 2020",
		title: "Web developer",
		company : "Yondu, Inc · Remote · Full time",
		description:
			"I mostly worked with Mobile Full-Stack developer at that company.",
		style: ``,
		keywords: [
			"Web developer"
		],
		body: (
			<React.Fragment>
				<div> - Developed a cropper solution for camera pictures that were taken so the user could easily decide what to send for analysis. </div>
				<div> - Re-factored a Front-end application by introducing Material-UI components and re-engineering the complete architecture to make the code readable, scalable, and optimized for specific usage. </div>
				<div> - Introduced and engineered code modules shared between the Front and Back-ends to remove redundancy and make the code more scalable. </div>
				<div> - Implemented a scalable module for Back-end communication, allowing query management and uniform query/mutation execution with customized result processing. </div>
				<div> - Integrated SendGrid email service and completed the migration from Apollo client to SWR </div>
			</React.Fragment>
		),
	};
}

function history_3() {
	return {
		date: "Sep 2017 ~ Jan 2019",
		title: "Front-end developer",
		company : "Oodles Blockchain · Full time",
		description:
			"I mostly worked with Front-end developer at that company.",
		style: ``,
		keywords: [
			"Web developer"
		],
		body: (
			<React.Fragment>
				<div> - Participated in developing five IOS and React Native App for various clients, including Soical-Networks and chat apps. </div>
				<div> - Built a lightweight yet powerful video-calling web application powered by Next.js, Twilio, and Tailwind CSS. </div>
				<div> - Ensured  that the application was fully responsive and animations worked smoothly on mobile devices. </div>
				<div> - Provided support and closely worked with UI artists, UX designers, and level designers on multiple features. </div>
				<div> - Created several React components with D3 charts that support interactive visualizations of market data projections and analysis. </div>
				<div> - Developed unit tests and component snapshot tests using Jest and Enzyme. </div>
				<div> - Supported dynamic forms for providing market data analysis for food and beverage companies making projections about product/factory capacity, cost and several other factors. </div>
				<div> - Created dynamically populated data filters as dropdowns, checkbox groups, input fields, sliders, etc. In order to evaluate and pivot market data analysis charts. </div>
				<div> - Wrote form-based pages to dynamically change as data was entered and REST API was queried. </div>
				<div> - Developed several filtering UX controls to allow users to quickly enter and review medical spending information. </div>
			</React.Fragment>
		),
	};
}

const MyHistory = [history_1, history_2, history_3];

export default MyHistory;
