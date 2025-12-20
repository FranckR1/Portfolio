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
        <div></div>
    )
};

export default Profile; 
