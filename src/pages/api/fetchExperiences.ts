import { client } from "../api/sanityClient";

import type { experienceType } from "../../types/experienceType";
import { skillType } from "../../types/skillType";

const fetchExperience = async () => {
    const fetchedExperiences: experienceType[] = await client.fetch(`*[_type == "experience"] | order(startDate desc){
        jobTitle, company, description, location, industry, startDate, endDate,
        logo { alt, caption,
            "url": asset->url,
            "aspect": asset->metadata.dimensions.aspectRatio,
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
        },
        skills[]->{
            skill,
            image{alt, caption, "url": asset->url}    
        }
    }`);

    return fetchedExperiences.map((fetchedExperiences: experienceType) => ({
        ...fetchedExperiences,
        location: fetchedExperiences.location || "",
        industry: fetchedExperiences.industry || "",
        endDate: fetchedExperiences.endDate || "",
        logo: {
            ...fetchedExperiences.logo,
            caption: fetchedExperiences.logo.caption || "",
        },
        skills: fetchedExperiences.skills.map((skill: skillType) => ({
            ...skill,
            image: {
                ...skill.image,
                caption: skill.image.caption || "",
            }
        }))
     }))
};

export { fetchExperience };
