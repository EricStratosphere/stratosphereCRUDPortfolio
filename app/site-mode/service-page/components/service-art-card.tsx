"use client";
import ArtworkOverlay from "@/app/general-components/artwork-overlay";
import styles from '../styles/service-sample.module.css'
import { useState } from 'react';
import Image from "next/image";
interface ServiceProps{    
    imgUrl : string,
    artworkName : string,
}

export default function ServiceArtCard({imgUrl, artworkName} : ServiceProps){
    const [isHovering, setIsHovering] = useState(false);
    const [artworkClicked, setArtworkClicked] = useState(false);
    // console.log(imgUrl);

    const handleMouseEnter = ()=>{
        setIsHovering(true);
    }

    const handleMouseLeave = ()=>{
        setIsHovering(false);
    }
    const handleClick = () => {
        setArtworkClicked(true);
    }
    return(
        <>
            {artworkClicked && 
                <ArtworkOverlay imgUrl={imgUrl} artworkName={artworkName} artworkDescription={""} setOverlay={setArtworkClicked}></ArtworkOverlay>
            }
            <button className={styles['artwork-container']} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} onClick={handleClick}>
                {isHovering && 
                    <div className={styles['onHover']}>
                        {artworkName}
                    </div>
                }
                <Image src={imgUrl} alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
            </button>
        </>
    );
}