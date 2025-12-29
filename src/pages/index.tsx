import { GetStaticProps } from 'next';
import { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';

import Head from 'next/head';

import Skills from '../components/Skill';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experiences from '../components/Experience';
import Projects from '../components/Projects';

import { fetchSocials } from '../pages/api/fetchSocials';
import { fetchSkills } from '../pages/api/fetchSkills';
import { fetchProfile } from '../pages/api/fetchProfile';
import { fetchExperience } from '../pages/api/fetchExperiences';
import { fetchProjects } from '../pages/api/fetchProjects';

import type { skillType } from '../types/skillType';
import type { socialType } from '../types/socialType';
import type { profileType } from '../types/profileType';
import type { experienceType } from '../types/experienceType';
import type { refName, refType } from '../types/refType';
import type { projectType } from '../types/projectType';

type typeProps = {
    skills: skillType[];
    socials: socialType[];
    profile: profileType;
    experiences: experienceType[];
    projects: projectType[];
}

export default function Home({ skills, socials, profile, experiences, projects }: typeProps) {

    const [refMe, setRefMe] = useState<HTMLElement | null>(null);
    const [refs, setRefs] = useState<refType>({
        "A propos": null,
        "Projets": null,
        "Expériences": null,
        "Compétences": null,
    });

    const handleSetRefs = (key: refName, ref: (HTMLElement | null)) => {
    if (ref && !refs[key]) setRefs({ ...refs, [key]: ref })
  }

    return (
    <>
        <Head>
            <title>Franck ROY - Portfolio</title>
            <meta name="description" content='Portfolio de Franck Roy. Vous trouverez ici mes expériences et mes projets.'/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/next.svg" />
        </Head>

        <div className={styles.container}>
            <header className={styles.header}>
                <NavBar socials={socials} refHome={refMe} refs={refs} />
            </header>
            <main className={styles.main}>
                <section id='profile' ref={refMe ? undefined : ref => ref && setRefMe(ref)} className={styles.section}>
                    <Profile
                        picture={profile.picture}
                        socials={socials} 
                    />
                </section>
                <section ref={ref => handleSetRefs("A propos", ref)} className={styles.section}>
                    <AboutMe description={profile.description} pictureAboutMe={profile.pictureAboutMe}/>
                </section>
                <section ref={ref => handleSetRefs("Projets", ref)} className={styles.section}>
                    <Projects projects={projects}/>
                </section>
                <section ref={ref => handleSetRefs("Expériences", ref)} className={styles.section}>
                    <Experiences experiences={experiences} />
                </section>
                <section ref={ref => handleSetRefs("Compétences", ref)} className={styles.section}>
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
  const projectPromise: Promise<projectType[]> = fetchProjects();

  let skills: skillType[];
  let socials: socialType[];
  let profile: profileType;
  let experiences: experienceType[];
  let projects: projectType[];

  [
    skills, 
    socials,
    profile,
    experiences,
    projects,
  ] = await Promise.all([skillsPromise, socialsPromise, profilePromise, experiencePromise, projectPromise]);

  return {
    props: {
      skills,
      socials,
      profile,
      experiences,
      projects,
    },
  }
};