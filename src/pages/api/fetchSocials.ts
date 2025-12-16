import { client } from "./sanityClient";

import type { socialType } from "../../types/socialType";

const fetchSocials = async () => {
    const fetchedSocilas: socialType[] = await client.fetch(`*[_type == "social"]{
            name, url,
            image { alt, caption,
                "url": asset->url,
                "aspect": asset->metadata.dimensions.aspectRatio,
                "width": asset->metadata.dimensions.width,
                "height": asset->metadata.dimensions.height,
            },    
    }`);

    return fetchedSocilas.map((social: socialType) => ({
        ...social,
        image: {
            ...social.image,
            caption: social.image.caption || '',
        }
    }));
};

export { fetchSocials };
