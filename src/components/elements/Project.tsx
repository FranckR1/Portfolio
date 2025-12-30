import React from 'react';
import Image from 'next/image';
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
        <div>
            <div>
                <h3>{projectTitle}</h3>
            </div>
            <div>
                <div>
                    <div>
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
