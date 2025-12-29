import React from 'react';

import type { projectType } from '../types/projectType';

import Project from './elements/Project';

type propsType = {
    projects: projectType[];
}

const Projects = ({ projects }: propsType) => {
    return (
        <div>
            <h2>Projets</h2>
            <div>
                {projects.map((project, i) => {
                    return (
                        <section key={i}>
                            <Project project={project}/>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;
