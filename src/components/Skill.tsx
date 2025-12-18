import React from 'react';

import Skill from './elements/Skill';

import type { skillType } from '../types/skillType';

type propsType = {
    skills: skillType[];
}

const Skills = ({ skills }: propsType) => {
    return (
        <div>
            {skills.map((skill, i) => {
                return (
                    <Skill skill={skill} maxSize={100} />
                )
            })}
        </div>
    )
}

export default Skills;
