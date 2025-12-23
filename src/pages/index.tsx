import { GetStaticProps } from 'next';
import { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';

import Skills from '../components/Skill';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';

import { fetchSocials } from '../pages/api/fetchSocials';
import { fetchSkills } from '../pages/api/fetchSkills';
import { fetchProfile } from './api/fetchProfile';
import { fetchExperience } from './api/fetchExperiences';

import type { skillType } from '../types/skillType';
import type { socialType } from '../types/socialType';
import type { profileType } from '../types/profileType';
import type { experienceType } from '../types/experienceType';
import type { refName, refType } from '../types/refType';

type typeProps = {
    skills: skillType[];
    socials: socialType[];
    profile: profileType;
    experiences: experienceType[];
}

export default function Home({ skills, socials, profile, experiences }: typeProps) {

    const [refMe, setRefMe] = useState<HTMLElement | null>(null);
    const [refs, setRefs] = useState<refType>({
        "A propos": null,
        "Projets": null,
        "Expériences": null,
        "Compétences": null,
    });

    return (
    <>
        <head>
            <title>Franck ROY - Portfolio</title>
            <meta name="description" content='Portfolio de Franck Roy. Vous trouverez ici mes expériences et mes projets.'/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <div className={styles.container}>
            <header className={styles.header}>
                <NavBar socials={socials} refHome={refMe} refs={refs} />
            </header>
            <main>
                {/* <section id='profile' ref={refMe ? undefined : ref => ref && setRefMe(ref)}>
                    <Profile
                        picture={profile.picture}
                        pictureGit={profile.pictureGit}
                        socials={socials} 
                    />
                </section> */}
                <section className={styles.section}>
                    <Skills skills={skills} />
                </section>
            </main>
            
        </div>
        
    </>
    );
}

export const getStaticProps: GetStaticProps<typeProps> = async () => {
 
  const skillsPromise: Promise<skillType[]> = fetchSkills();
  const socialsPromise: Promise<socialType[]> = fetchSocials();
  const profilePromise: Promise<profileType> = fetchProfile();
  const experiencePromise: Promise<experienceType[]> = fetchExperience();

  let skills: skillType[];
  let socials: socialType[];
  let profile: profileType;
  let experiences: experienceType[];

  [
    skills, 
    socials,
    profile,
    experiences,
  ] = await Promise.all([skillsPromise, socialsPromise, profilePromise, experiencePromise]);

  return {
    props: {
      skills,
      socials,
      profile,
      experiences,
    },
  }
};