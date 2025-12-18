import React from 'react';
import Image from 'next/image';

import type { skillType } from '../../types/skillType';

type propsType = {
    skill: skillType;
    maxSize?: number;
}

const Skill = ({ skill, maxSize = 60 }: propsType) => {
    return (
        <div>
            <Image
                style={{ objectFit: "contain", padding: "20%" }}
                src={skill.image.url}
                alt={skill.image.alt}
                fill
                sizes={`${maxSize}px`}  
            />
            <div>
                <h3>{skill.skill}</h3>
            </div>
        </div>
    );
};

export default Skill;
