import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import type { socialType } from '../types/socialType';
import type { refName, refType } from '../types/refType';

type socialIconHashType = Record<string, IconDefinition>;

const socialIconHash: socialIconHashType = {
    'GitHub': faGithub,
    'Linkedin': faLinkedin,
};

const isRefName = (variable: any): variable is refName => (
    typeof variable === 'string'
);


type propsType = {
    socials: socialType[];
    refHome: HTMLElement | null;
    refs: refType;
};

const NavBar = ({ socials, refHome, refs}: propsType) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const validKeys: refName[] = [];
    Object.keys(refs).forEach(key => isRefName(key) && validKeys.push(key));

    const handleShowMenu = () => setShowMenu(!showMenu);

    const scrollTo = (ref: HTMLElement | null) => {
        ref?.scrollIntoView({ behavior: 'smooth' });
        setShowMenu(false);
    }

    return (
        <nav>
            <FontAwesomeIcon onClick={() => scrollTo(refHome)} icon={faHome} />

            <ul>
                {socials.map((social, i) => {
                    return (
                        <li key={i}>
                            <a href={social.url}>
                                <FontAwesomeIcon icon={socialIconHash[social.name]} />
                            </a>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {validKeys.map((key, i) => {
                    return (
                        <li key={i} onClick={() => scrollTo(refs[key])}>
                            {key}
                        </li>
                    )
                })}
            </ul>

            <FontAwesomeIcon 
                icon={showMenu ? faX : faBars}
                onClick={handleShowMenu}
            />

        </nav>
    )
};

export default NavBar;
