import React from "react";
import styles from '../styles/AboutMe.module.css';
import Image from 'next/image';
import { PortableText } from '@portabletext/react'

import type { profileType } from "../types/profileType";

type propsType = {
    description: profileType['description'];
    pictureAboutMe: profileType['pictureAboutMe'];
}

const AboutMe = ({ description, pictureAboutMe }: propsType) => {
    return (
        <>
            <div className={styles.imageContainer}>
                <Image 
                    style={{ objectFit: "cover" }}
                    className={styles.image}
                    src={pictureAboutMe.url}
                    alt={pictureAboutMe.alt || 'Image'}
                    fill={true}
                    sizes="450px"
                    priority={true}
                />
            </div>
            <div className={styles.description}>
                <PortableText value={description}/>
            </div>
        </>
    )
}

export default AboutMe;
