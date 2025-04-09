import { Skill } from "../../data/skills";

/**
 * Sort skills by title and tags
 *
 * Should compare tags and return the one with more matches
 */
export const sortSkills = (skills: Skill[]) => {

	return skills.sort((a, b) => {

		const magicNumber = a.tags?.reduce((acc, tag) => {

			const lowerATag = tag.toLowerCase();
			const bMatches = b.tags?.some(tag => tag.toLowerCase().includes(lowerATag)) ? -1 : 1;

			return acc + bMatches;

		}, 0) ?? 0;

			return magicNumber + a.title.localeCompare(b.title);
})
}

