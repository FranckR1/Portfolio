import { GetStaticProps } from 'next';

import { fetchSocials } from '../pages/api/fetchSocials';

import type { socialType } from '../types/socialType';

type typeProps = {
    socials: socialType[];
}

export default function Home({ socials }: typeProps) {
    
    console.log("Données reçues dans le composant Home:", socials); 

    return (
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
    );
}

export const getStaticProps: GetStaticProps<typeProps> = async () => {
    try {
        const socials = await fetchSocials();

        console.log("Données récupérées avec succès (dans le terminal) :");
        console.log(socials);

        return {
            props: {
                socials,
            },
        };
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        
        return {
            props: {
                socials: [],
            },
        };
    }
};