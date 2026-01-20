"use client";
import { useState } from "react";
import styles from '../styles/art-collage.module.css'
import Image from "next/image";
import ArtworkOverlay from "@/app/general-components/artwork-overlay";
interface ArtCardProps{
    imgUrl : string,
    artworkName : string,
    handleArtCardClicked : (imgUrl : string, artworkName : string) => void,
}

export default function ArtCard({imgUrl, artworkName, handleArtCardClicked} : ArtCardProps){
    const [isHovering, setIsHovering] = useState(false);
    // console.log(imgUrl);

    const handleMouseEnter = ()=>{
        setIsHovering(true);
    }

    const handleMouseLeave = ()=>{
        setIsHovering(false);
    }
    
    return(
        <>

            <button className={styles['artwork-container']} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} onClick={()=>{handleArtCardClicked(imgUrl, artworkName)}}>
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