import { GetStaticProps } from 'next';

import { fetchSocials } from '../pages/api/fetchSocials';
import { fetchSkills } from '../pages/api/fetchSkills';
import { fetchProfile } from './api/fetchProfile';

import type { skillType } from '../types/skillType';
import type { socialType } from '../types/socialType';
import type { profileType } from '../types/profileType';

type typeProps = {
    skills: skillType[];
    socials: socialType[];
    profile: profileType;
}

export default function Home({ skills, socials, profile }: typeProps) {
    
    console.log("Données reçues dans le composant Home socials:", socials); 
    console.log("Données reçues dans le composant Home skills:", skills); 
    console.log("Données reçues dans le composant Home socials:", profile); 

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
        <div>
            <h2>Test de Données Skills</h2>
            {skills.length > 0 ? (
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.skill}>{skill.skill}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucune donnée récupérée.</p>
            )}
        </div>
        <div>
            <h2>Test données du profil</h2>
            <p>{profile.firstname}</p>
            <p>{profile.lastname}</p>
            <p>{profile.email}</p>
        </div>
    </>
    );
}

export const getStaticProps: GetStaticProps<typeProps> = async () => {
 
  const skillsPromise: Promise<skillType[]> = fetchSkills();
  const socialsPromise: Promise<socialType[]> = fetchSocials();
  const profilePromise: Promise<profileType> = fetchProfile();

  let skills: skillType[];
  let socials: socialType[];
  let profile: profileType;

  [
    skills,
    socials,
    profile,
  ] = await Promise.all([skillsPromise, socialsPromise, profilePromise]);

  return {
    props: {
      skills,
      socials,
      profile,
    },
  }
};