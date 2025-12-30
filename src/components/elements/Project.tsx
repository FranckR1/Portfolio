import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Project.module.css';
import Skill from './Skill';
import type { projectType } from '../../types/projectType';

type propsType = {
    project: projectType;
}

const Project = ({ project }: propsType) => {

    const { 
        projectTitle,
        date,
        onProgress,
        mainImage,
        images,
        skills,
    } = project;

    const imgContainerHeight = 350;
    
    const [ dateString, setDateString ] = useState('');

    useEffect(() => {
        !onProgress && setDateString(Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(new Date(date)));   
    }, [onProgress, date]);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{projectTitle}</h3>
                {!onProgress && <time className={styles.date}>Fini en {dateString}</time>}
            </div>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <div className={styles.imageContainer} style={{ width: imgContainerHeight * mainImage.aspect }}>
                        <Image
                            className={styles.image}
                            style={{ objectFit: "contain" }}
                            src={mainImage.url}
                            alt={mainImage.alt || 'Image'}
                            width={mainImage.width}
                            height={mainImage.height}
                        />
                    </div>
                    {images.map((image, i) => {
                        return (
                            <div key={i} className={styles.imageContainer} style={{ width: imgContainerHeight * mainImage.aspect }}>
                                <Image
                                    className={styles.image}
                                    style={{ objectFit: "contain" }}
                                    src={image.url}
                                    alt={image.alt || 'Image'}
                                    width={image.width}
                                    height={image.height}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.skills}>
                    {skills.map((skill, i) => {
                        return (
                            <div key={i} className={styles.skill}>
                                <Skill skill={skill} maxSize={50} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;
