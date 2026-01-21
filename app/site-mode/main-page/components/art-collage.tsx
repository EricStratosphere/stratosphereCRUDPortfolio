
"use client";
import styles from '../styles/art-collage.module.css'
import Image from 'next/image';
import ArtCard from './artCard'
import { useState } from 'react';
import ArtworkOverlay from '@/app/general-components/artwork-overlay';

interface ArtCollageProps{
    artworks : {imgUrl : string, artworkName : string}[],
}

export default function ArtCollage({artworks} : ArtCollageProps){
    const [overlayMode, setOverlayMode] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');

    function handleArtCardClicked(imgUrl : string, artworkName : string){
        setImgUrl(imgUrl);
        setArtworkName(artworkName);
        setOverlayMode(true);
    }

    return(
        <>
            {overlayMode && 
                <ArtworkOverlay imgUrl={imgUrl} artworkName={artworkName} artworkDescription='' setOverlay={setOverlayMode}/>
            }
            <div className={styles['art-collage']}>                
                <div className={styles['artworks']}>
                    {artworks.map(
                        (value, index)=>
                            <ArtCard  key= {index} imgUrl={value.imgUrl} artworkName={value.artworkName} handleArtCardClicked={handleArtCardClicked}/>  
                    )}
                </div>
            </div>
        </>
    );
}