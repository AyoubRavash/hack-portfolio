import type {TFunction} from "i18next";
import PROJECTS from "./projects.ts";
import SKILLS from "./skills.ts";

const getText = (translate: TFunction, key: string) => String(translate(key));

export const buildPortfolioContext = (translate: TFunction) => {
    const projects = PROJECTS.map((project) => {
        const title = getText(translate, project.title);
        const description = getText(translate, project.description);

        return `- ${title}: ${description}. Technologies: ${project.technologies.join(", ")}.`;
    }).join("\n");

    const skills = SKILLS.map((skill) => (
        `- ${getText(translate, skill.title)}: ${getText(translate, skill.description)}.`
    )).join("\n");

    return `Name: ${getText(translate, "common.name")}
Role: ${getText(translate, "header.title")}
Professional summary: ${getText(translate, "header.description")}
About: ${getText(translate, "aboutMe.text")}
Availability: ${getText(translate, "contacts.description")}

Projects:
${projects}

Skills:
${skills}

Exact contact details:
- GitHub: https://github.com/AyoubRavash
- LinkedIn: https://www.linkedin.com/in/ayoub-ravash-41752631a/
- Telegram: https://Telegram.me/AyoubRavash
- Email: ${getText(translate, "common.email")}`;
};
