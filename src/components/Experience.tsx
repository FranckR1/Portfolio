import React from 'react';
import Experience from './elements/Experience';

import type { experienceType } from '../types/experienceType';

type propsType = {
    experiences: experienceType[];
}

const Experiences = ({ experiences }: propsType) => {

    return (
        <div>
            <h2>Expériences</h2>
            <div>
                {experiences.map((experience, i) => {
                    return (
                        <section key={i}>
                            <Experience experience={experience} />
                        </section>)
                })}
            </div>
        </div>
    )
}

export default Experiences;
