export interface Publication {
	title: string;
	venue: string;
	summary: string;
	href: string;
}

export interface WritingPost {
	title: string;
	platform: string;
	date: string;
	href: string;
}

export const person = {
	name: "Gal Oz",
	role: "Senior AI Engineer",
	bio: "Placeholder bio — senior software engineer building AI systems, with a master's thesis on [thesis topic placeholder]. Replace this paragraph with your own summary.",
};

export const publications: Publication[] = [
	{
		title: "Placeholder Paper Title on Applied ML",
		venue: "Conference / Journal, 2025",
		summary:
			"One-line placeholder summary of the research contribution and findings.",
		href: "#",
	},
	{
		title: "Master's Thesis: [Thesis Title Placeholder]",
		venue: "University Name, 2019",
		summary:
			"Placeholder abstract line describing the thesis scope and key result.",
		href: "#",
	},
];

export const writingPosts: WritingPost[] = [
	{
		title: "Placeholder blog post title",
		platform: "Medium",
		date: "Jun 2026",
		href: "#",
	},
	{
		title: "Another placeholder writing entry",
		platform: "LinkedIn",
		date: "Feb 2026",
		href: "#",
	},
	{
		title: "Notes on a placeholder topic",
		platform: "Medium",
		date: "Nov 2025",
		href: "#",
	},
];

export const contactLinks = {
	email: "#", // TODO: mailto:hey@galoz.dev
	linkedin: "#", // TODO: real LinkedIn URL
	github: "#", // TODO: real GitHub URL
};
