"use client"

import styles from '../styles/service-sample.module.css'
import ServiceArtCard from './service-art-card'
import { useState } from 'react'; 
import ArtworkOverlay from '@/app/general-components/artwork-overlay';
export default function ServiceSample(){

    const [artworkClicked, setArtworkClicked] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');

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
                <div className={styles['service-text']}>
                    Works
                </div>

            </div>
             <div className={styles['service-works']}>
                    {/* Hello world! */}
                    <div className={styles['group']} style={{backgroundColor : "blue"}}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>
                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>
                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>

                </div>
        </> 
    )
}