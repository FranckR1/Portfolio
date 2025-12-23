import React from 'react';
import styles from '../styles/Skills.module.css';
import Skill from './elements/Skill';

import type { skillType } from '../types/skillType';

type propsType = {
    skills: skillType[];
}

const Skills = ({ skills }: propsType) => {
    return (
        <div className={styles.skillsContainer}>
            {skills.map((skill, i) => {
                return (
                    <Skill key={i} skill={skill} maxSize={100} />
                )
            })}
        </div>
    )
}

export default Skills;
