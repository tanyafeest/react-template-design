import React from "react";

function history_1() {
	return {
		date: "5/2021 ~ 9/2023",
		title: "Full Stack Specialist",
		company : "Freelancing · Remote · Full time",
		description:
			"I participated in various project development as a Full-Stack Specialist.",
		keywords: [
			"Full Stack Specialist"
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
				<div> - Developed a cropper solution for camera pictures that were taken so the user could easily decide what to send for analysis. </div>
				<div> - Re-factored a Front-end application by introducing Material-UI components and re-engineering the complete architecture to make the code readable, scalable, and optimized for specific usage. </div>
				<div> - Introduced and engineered code modules shared between the Front and Back-ends to remove redundancy and make the code more scalable. </div>
				<div> - Implemented a scalable module for Back-end communication, allowing query management and uniform query/mutation execution with customized result processing. </div>
				<div> - Integrated SendGrid email service and completed the migration from Apollo client to SWR </div>
				<div> - Implemented a site-wide redesign and front-end overhaul targeting both desktop and mobile devices.</div>
				<div> - Incorporated responsive image best practices to maximize performance and page speed ranking for SEO</div>
				<div> - Implemented downloadable custom PDF report using HTML-to-PDF rendering techniques to ensure proper formatting and layout of the final document.</div>
				<div> - Developed an Ethereum ERC20 token contract as well as smart contracts for democratic voting by token holders.</div>
				<div> - Built the back-end server for monitoring Ethereum contracts and creating transactions.</div>
				<div> - Designed and built the Back-end API using Nest.js from scratch in just three weeks to be ready for FDA studies.</div>
				<div> - Worked an AXA’s internal dashboard UI using a variety of custom components.</div>
				<div> - Built a Node.js-based library, which acted as middleware for Express.js and Koa, that automatically  captured user errors and sent them to a platform that aggregated and visualized them.</div>
			</React.Fragment>
		),
	};
}

function history_2() {
	return {
		date: "3/2017 ~ 1/2021",
		title: "Senior Web developer",
		company : "Fingent · Remote · Full-time (Philippines)",
		description:
			"I mostly worked with Senior Back-end developer at that company.",
		style: ``,
		keywords: [
			"Senior Web developer"
		],
		body: (
			<React.Fragment>
			<div> - Developed and consulted on Google API for SMTP authentication and PHP mail delivery via that API.</div>
			<div> - Placed a maintenance message on the login screen reminding users to start at least 48 hours before any scheduled maintenance and perform that maintenance after 12:30 am CST with a roll-back time of 3:00 am CST.</div>
			<div> - Automated business needs using shell scripts, batch files, and PHP scripts.</div>
			<div> - Led the effort to carry out the needed adaptations to migrate the sites from PHP 5 to PHP 7 and from PHP 7 to PHP 8.1.</div>
			<div> - Developed a custom advanced search functionality using REST API using Laravel for Vue.js.</div>
			<div> - Implemented deep third-party tracking, including Google, Facebook, and Salesforce.</div>
			<div> - Implemented an asynchronous long-polling service for receiving chat events using ReactPHP. Made it multi-threaded using various concurrent and parallel programming techniques.</div>
			<div> - Redesigned the database and the API for consistency, readability, performance, and future expansion.</div>
			<div> - Developed a Laravel + Vue.js SaaS for website monitoring.</div>
			<div> - Developed an online Excel-like website using a custom PHP MVC framework where you could create multiple sheets, and in each, you could create N columns/rows, use formulas also from other sheets and generate reports.</div>
			<div> - Maintained a Rancher environment that housed many applications using a variety of technologies including PHP, Go, Node.js, Java, and C#.</div>
			<div> - Enhanced the performance of Lowes.com through building the infrastructure to migrate product pages out of WebSphere Commerce and into Node.js.</div>
			<div> - Pioneered a way for developers to make uniformed service calls across multiple applications by developing Node.js modules that standardized the way Lowes.com makes RESTful API calls.</div>
			<div> - Advised and implemented numerous improvements to codebase, architecture, and infrastructure to better align them with best practices.</div>
		</React.Fragment>
		),
	};
}

const MyHistory = [history_1, history_2];

export default MyHistory;
