import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Project.module.css';
import type { projectType } from '../../types/projectType';

type propsType = {
    project: projectType;
}

const Project = ({ project }: propsType) => {

    const { 
        projectTitle,
        mainImage,
        images,
    } = project;

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{projectTitle}</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <div className={styles.imageContainer}>
                        <Image
                            style={{ objectFit: "contain" }}
                            src={mainImage.url}
                            alt={mainImage.alt || 'Image'}
                            width={mainImage.width}
                            height={mainImage.height}
                        />
                    </div>
                    {images.map((image, i) => {
                        return (
                            <div key={i}>
                                <Image
                                    className={styles.imageContainer}
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
            </div>
        </div>
    )
}

export default Project;
