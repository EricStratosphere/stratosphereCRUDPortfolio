"use client";
import { useState } from "react";
import styles from '../styles/art-collage.module.css'
import Image from "next/image";
interface ArtCardProps{
    imgUrl : string,
    artworkName : string,
}

export default function ArtCard({imgUrl, artworkName} : ArtCardProps){
    const [isHovering, setIsHovering] = useState(false);
    const [artworkClicked, setArtworkClicked] = useState(false);
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
            onMouseLeave={handleMouseLeave}>
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