import React, {useState, useEffect} from 'react';
import styles from '../../styles/Experience.module.css';
import Image from 'next/image';
import Skill from './Skill';
import { PortableText } from 'next-sanity';

import type { experienceType } from '../../types/experienceType';

type propsType = {
    experience: experienceType;
}

const Experience = ({ experience }: propsType) => {

    const {
        jobTitle,
        company,
        description,
        location,
        industry,
        startDate,
        endDate,
        logo,
        skills,
    } = experience;

    const [startDateStr, setStartDateStr] = useState('');
    const [endDateStr, setEndDateStr] = useState('');

    useEffect(() => {
        setStartDateStr(Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(new Date(startDate)));
        setEndDateStr(Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(new Date(endDate)));
    }, [startDate, endDate]);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    style={{ objectFit: "contain" }}
                    src={logo.url}
                    alt={logo.alt}
                    fill
                    sizes='600px'
                />
            </div>
            <div>
                <h3>{jobTitle}</h3>
                <h3>{company}</h3>
                <div>
                    <p>
                        <time>{startDateStr}</time>
                        <span> à </span>
                        <time>{endDateStr}</time>
                    </p>
                </div>
            </div>
            <div>
                {skills.map((skill, i) => {
                    return (
                        <div key={i}>
                            <Skill skill={skill} maxSize={60} />
                        </div>
                    );
                })}
            </div>

            <div>
                <PortableText value={description} />
            </div>
        </div>
    )
}

export default Experience;
