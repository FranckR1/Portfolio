import { GetStaticProps } from 'next';

import Skills from '../components/Skill';

import { fetchSocials } from '../pages/api/fetchSocials';
import { fetchSkills } from '../pages/api/fetchSkills';
import { fetchProfile } from './api/fetchProfile';
import { fetchExperience } from './api/fetchExperiences';

import type { skillType } from '../types/skillType';
import type { socialType } from '../types/socialType';
import type { profileType } from '../types/profileType';
import type { experienceType } from '../types/experienceType';

type typeProps = {
    skills: skillType[];
    socials: socialType[];
    profile: profileType;
    experiences: experienceType[];
}

export default function Home({ skills, socials, profile, experiences }: typeProps) {
    
    console.log("Données reçues dans le composant Home socials:", socials); 
    console.log("Données reçues dans le composant Home profil:", profile); 
    console.log("Données reçues dans le composant Home experience:", experiences); 

    return (
    <>
      <div>
            <h1>Page d'Accueil</h1>
            <h2>Test de Données Socials</h2>
            {socials.length > 0 ? (
                <ul>
                    {socials.map((social) => (
                        <li key={social.url}>{social.name} : {social.url}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucune donnée récupérée.</p>
            )}
        </div>
        <section>
            <Skills skills={skills} />
        </section>
        <div>
            <h2>Test données du profil</h2>
            <p>{profile.firstname}</p>
            <p>{profile.lastname}</p>
            <p>{profile.email}</p>
        </div>
        <div>
            <h2>Test données experience</h2>
            {experiences.length > 0 ? (
                <ul>
                    {experiences.map((experience) => (
                        <li key={experience.company}>{experience.jobTitle}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucune donnée récupérée.</p>
            )}
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