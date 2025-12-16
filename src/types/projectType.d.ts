import type { imageType } from "./imageType";
import type { skillType } from "./skillType";
import type { PortableTextBlock } from "@portabletext/types";

type githubLink = {
    name: string;
    url: string;
}

export type projectType = {
    projectTitle: string;
    description: PortableTextBlock[];
    date: string | Date;
    onProgress: boolean;
    mainImage: imageType;
    images: imageType[];
    githubLinks: githubLink[];
    skills: skillType[];
}
