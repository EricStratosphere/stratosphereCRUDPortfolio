"use client"

import styles from '../styles/service-sample.module.css'
import ServiceArtCard from './service-art-card'
import { useState } from 'react'; 
import ArtworkOverlay from '@/app/general-components/artwork-overlay';
import Carousel from './carousel';
import ArtCollage from '../../main-page/components/art-collage';


const serviceWorks : {imgUrl : string, artworkName : string}[] = 
[
    {imgUrl : "/Augustus.png", artworkName : "Descendants of the Fallen"},
    {imgUrl : "/MimiRose1.png", artworkName : "The Fate of Cursed Roses and Stolen Snowflakes"},
    {imgUrl : "/MimiRose2.png", artworkName : "The Tale of Merry Marriages and Lying Legends"},
    {imgUrl : "/LePetitPrince.png", artworkName : "Le Petit Prince"},
    {imgUrl : "/kid's Book.png", artworkName : "Spanish Word Search"}
]

const artworks : {imgUrl : string, artworkName : string}[] = 
[
    {imgUrl : '/Howl.png', artworkName : 'Howl'},
    {imgUrl : '/Arcane.png', artworkName : 'Arcane'},
    {imgUrl : '/Atelier.png', artworkName : 'The Lonely Atleier'},
    {imgUrl : '/Dreamnotfound.jpg', artworkName : 'Error 404: Dream Not Found'},
    {imgUrl : '/songOfAchilles.png', artworkName : 'Achilles smiled as his face strikes the Earth'},   
]

export default function ServiceSample(){

    const [carousel, setCarousel] = useState(true);
    const [artworkClicked, setArtworkClicked] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');
    const [rotate, setRotate] = useState(false);
    function handleArtCardClicked(imgUrl : string, artworkName : string) : void{
        setImgUrl(imgUrl);
        setArtworkName(artworkName);
        setArtworkClicked(true);
    }
    return(
        <>
            {artworkClicked && 
                <ArtworkOverlay imgUrl={imgUrl} artworkName={artworkName} artworkDescription='' setOverlay={setArtworkClicked}></ArtworkOverlay>
            }
            <div className={styles['service-sample-div']}>
                <div className={styles['service-text']} onClick={()=>{setCarousel(!carousel);}}>
                    Works
                </div>
                <span className={styles['triangle']} style={!carousel ? {transform : "rotate(90deg)",} : {}}>
                    ▶
                </span>
            </div>
            {
                carousel ? 
                <Carousel handleArtCardClicked={handleArtCardClicked} artworks={serviceWorks}></Carousel>
                :
                <ArtCollage artworks={serviceWorks}></ArtCollage>
            }
        </> 
    )
}