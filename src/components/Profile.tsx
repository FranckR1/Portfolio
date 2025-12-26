import React, { useState } from 'react';
import Image from 'next/image';

import type { imageType } from '../types/imageType';
import type { socialType } from '../types/socialType';

type propsType = {
    picture: imageType;
    pictureGit: imageType;
    socials: socialType[];
}

const Profile = ({ picture, pictureGit, socials}: propsType) => {

    const [ isFlip, setIsFlip ] = useState(false);

    const github = socials.find(social => /github/i.test(social.name));

    const flipCard = () => {
        github && setIsFlip(!isFlip);
    }

    return (
        <div>
            <div>
                <div>
                    <Image
                        style={{ objectFit: "cover" }}
                        src={picture.url}
                        alt={picture.alt}
                        fill={true}
                        sizes="(max-width: 788px) 315px ,(max-width: 1100px) 450px, 450px"
                        priority={true}
                    />
                </div>
                {github && <a href={github.url}>
                    <Image
                        style={{ objectFit: "cover" }}
                        src={pictureGit.url}
                        alt={pictureGit.alt}
                        fill={true}
                        sizes="(max-width: 788px) 315px ,(max-width: 1100px) 450px, 450px"
                        priority={true}
                    />
                </a>}
                {github && <div>
                    <Image
                        style={{ objectFit: "cover" }}
                        src={github.image.url}
                        alt={github.image.alt}
                        fill={true}
                        sizes="80px"
                    />
                </div>}
                <div>
                    <h1>
                        Franck ROY
                        <span>
                            Développeur Full Stack Junior
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Profile; 
