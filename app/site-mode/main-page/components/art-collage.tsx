
"use client";
import styles from '../styles/art-collage.module.css'
import Image from 'next/image';
import ArtCard from './artCard'
import { useState } from 'react';
import ArtworkOverlay from '@/app/general-components/artwork-overlay';
import { ArtCollageProps } from '../../schema-interfaces.ts';


export default function ArtCollage({artworks} : ArtCollageProps){
    const [overlayMode, setOverlayMode] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');
    const [description, setDescription] = useState('');
    const [medium, setMedium] = useState('');
    const [date, setDate] = useState(new Date());
    const [links, setLinks] = useState<string[]>([]);
    const [projectType, setProjectType] = useState('');
    function handleArtCardClicked(
        imgUrl : string, 
        artworkName : string,
        description : string,
        medium : string,
        date : Date,
        links : string[],
        projectType : string,

    ){
        setImgUrl(imgUrl);
        setArtworkName(artworkName);
        setDescription(description);
        setMedium(medium);
        setDate(date);
        setLinks(links);
        setProjectType(projectType);
        setOverlayMode(true);
    }

    return(
        <>
            {overlayMode && 
                <ArtworkOverlay imgUrl={imgUrl} artworkName={artworkName} artworkDescription={description} 
                medium={medium}
                date={date}
                links={links}
                projectType={projectType}
                setOverlay={setOverlayMode}/>
            }
            <div className={styles['art-collage']}>                
                <div className={styles['artworks']}>
                    {artworks.map(
                        (value, index)=>
                            <ArtCard  key= {index} 
                            imgUrl={value.img_url} 
                            artworkName={value.name}
                            description={value.description}
                            medium = {value.medium}
                            links={value.links}
                            date={value.date_created}
                            projectType={value.project_type}
                        handleArtCardClicked={handleArtCardClicked}/>  
                    )}
                </div>
            </div>
        </>
    );
}