
"use client";
import styles from '../styles/art-collage.module.css'
import Image from 'next/image';
import ArtCard from './artCard'
import { useState } from 'react';
import ArtworkOverlay from '@/app/general-components/artwork-overlay';
export default function ArtCollage(){
    const [overlayMode, setOverlayMode] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');

    const artworks : {imgUrl : string, artworkName : string}[] = 
    [
        {imgUrl : '/Howl.png', artworkName : 'Howl'},
        {imgUrl : '/Arcane.png', artworkName : 'Arcane'},
        {imgUrl : '/Atelier.png', artworkName : 'The Lonely Atleier'},
        {imgUrl : '/Dreamnotfound.jpg', artworkName : 'Error 404: Dream Not Found'}
        
    ]

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