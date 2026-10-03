export interface Publication {
	title: string;
	venue: string;
	year: number;
	summary: string;
	href: string;
}

export const person = {
	name: "Gal Oz",
	role: "Senior AI Engineer",
	bio: "Senior Software Engineer with 7 years in backend systems and production AI with LLMs, RAG, and autonomous agents. I hold a master’s in Information Science, with a thesis focused on Natural Language Processing (NLP) that became a published research article. I build products from concept to production with a focus on user impact.",
};

export const publications: Publication[] = [
	{
		title:
			"Modeling public engagement in political discourse on Facebook in times of political crisis: the case of the four-cycle election loop",
		venue: "Online Information Review",
		year: 2026,
		summary:
			"Analyzing sentiment and public engagement across more than 8,000 Facebook posts by Israeli politicians during four election cycles (2019–2021).",
		href: "https://www.emerald.com/oir/article-abstract/50/5/999/1390339/Modeling-public-engagement-in-political-discourse",
	},
	{
		title:
			"When LLMs Choose the Wrong Tools: The Hidden Challenge Behind AI-Powered Applications",
		venue: "Elementor Engineers",
		year: 2025,
		summary:
			"Exploring the challenge of tool selection in LLM-powered applications.",
		href: "https://medium.com/elementor-engineers/when-llms-choose-the-wrong-tools-the-hidden-challenge-behind-ai-powered-applications-5c50d20998c5?sharedUserId=galoz05",
	},
	{
		title:
			"Master’s Thesis: Automatic analysis of the political discourse change on Facebook during four election campaigns in Israel",
		venue: "Bar-Ilan University",
		year: 2022,
		summary:
			"Using NLP and machine learning to study shifts in political sentiment across four Israeli election campaigns.",
		href: "https://is.biu.ac.il/sites/is/files/thesis/Gal%20Oz_eng.pdf",
	},
];

export const contactLinks = {
	email: "mailto:hey@galoz.dev",
	linkedin: "https://www.linkedin.com/in/galoz05/",
	github: "https://github.com/galz5",
};
