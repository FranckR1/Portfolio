import React from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';
import type { imageType } from '../types/imageType';
import type { socialType } from '../types/socialType';

type propsType = {
    picture: imageType;
    socials: socialType[];
}

const Profile = ({ picture, socials }: propsType) => {

    const github = socials.find(social => /github/i.test(social.name));

    return (
        <div className={styles.container}>
            <div className={styles.profileWrapper}>
                {github ? (
                    <a href={github.url} className={styles.imageContainer} target="_blank">
                        <Image
                            style={{ objectFit: "cover" }}
                            src={picture.url}
                            alt={picture.alt || 'Image'}
                            fill={true}
                            sizes="(max-width: 788px) 315px, 450px"
                            priority={true}
                        />
                        <div className={styles.overlay}>
                            <Image 
                                src={github.image.url} 
                                alt={github.image.url} 
                                width={50} 
                                height={50} 
                                style={{ borderRadius: "50%" }}
                            />
                            <span>GitHub</span>
                        </div>
                    </a>
                ) : (
                    <div className={styles.imageContainer}>
                        <Image
                            style={{ objectFit: "cover" }}
                            src={picture.url}
                            alt={picture.alt || 'Image'}
                            fill={true}
                            sizes="(max-width: 788px) 315px, 450px"
                            priority={true}
                        />
                    </div>
                )}

                <div className={styles.introContainer}>
                    <h1 className={styles.name}>
                        Franck ROY
                        <span className={styles.job}>
                            Développeur Full Stack Junior
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Profile;
