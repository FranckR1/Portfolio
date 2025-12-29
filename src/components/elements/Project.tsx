import React from 'react';

import type { projectType } from '../../types/projectType';

type propsType = {
    project: projectType;
}

const Project = ({ project }: propsType) => {

    const { 
        projectTitle,
    } = project;

    return (
        <div>
            <div>
                <h3>{projectTitle}</h3>
            </div>
        </div>
    )
}

export default Project;
