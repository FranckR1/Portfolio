import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Skill.module.css';

import type { skillType } from '../../types/skillType';

type propsType = {
    skill: skillType;
    maxSize?: number;
}

const Skill = ({ skill, maxSize = 60 }: propsType) => {
    return (
        <div className={styles.skill}>
            <Image
                style={{ objectFit: "contain", padding: "20%" }}
                src={skill.image.url}
                alt={skill.image.alt || "Image description"}
                width={maxSize}
                height={maxSize}
                sizes={`${maxSize}px`}  
            />
            <div className={styles.skillName}>
                <h3>{skill.skill}</h3>
            </div>
        </div>
    );
};

export default Skill;
