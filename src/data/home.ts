export interface Publication {
	title: string;
	venue: string;
	summary: string;
	href: string;
}

export const person = {
	name: "Gal Oz",
	role: "Senior AI Engineer",
	bio: "Software engineer with 7 years of experience building backend systems and production AI with LLMs, RAG, and autonomous agents. NLP research background and recognized LangChain.js contributor. I take products from concept to production in fast-paced startups, with a focus on user impact.",
};

export const publications: Publication[] = [
	{
		title:
			"When LLMs Choose the Wrong Tools: The Hidden Challenge Behind AI-Powered Applications",
		venue: "Elementor Engineers · Medium",
		summary:
			"Exploring the challenge of tool selection in LLM-powered applications.",
		href: "https://medium.com/elementor-engineers/when-llms-choose-the-wrong-tools-the-hidden-challenge-behind-ai-powered-applications-5c50d20998c5?sharedUserId=galoz05",
	},
	{
		title: "Master's Thesis: [Thesis Title Placeholder]",
		venue: "University Name, 2019",
		summary:
			"Placeholder abstract line describing the thesis scope and key result.",
		href: "#",
	},
];

export const contactLinks = {
	email: "mailto:hey@galoz.dev",
	linkedin: "https://www.linkedin.com/in/galoz05/",
	github: "https://github.com/galz5",
};
