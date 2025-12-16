import type { imageType } from "./imageType";
import type { skillType } from "./skillType";
import type { PortableTextBlock } from "@portabletext/types";

export type experienceType = {
    jobTitle: string;
    company: string;
    description: PortableTextBlock[];
    location: string;
    industry: string;
    startDate: string | Date;
    endDate: string | Date;
    logo: imageType;
    skills: skillType[];
}
