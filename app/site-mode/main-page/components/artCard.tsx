"use client";
import { useState } from "react";
import styles from '../styles/art-collage.module.css'
import Image from "next/image";
import ArtworkOverlay from "@/app/general-components/artwork-overlay";
interface ArtCardProps{
    imgUrl : string, 
    artworkName : string,
    description : string,
    medium : string,
    date : Date,
    links : string[],
    projectType : string,
    handleArtCardClicked : (
        imgUrl : string, 
        artworkName : string,
        description : string,
        medium : string,
        date : Date,
        links : string[],
        projectType : string,
    ) => void,
}

export default function ArtCard({imgUrl, artworkName, description, medium, date, links, projectType, handleArtCardClicked} : ArtCardProps){
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
            onMouseLeave={handleMouseLeave} onClick={()=>{handleArtCardClicked(imgUrl, artworkName, description, medium, date, links, projectType)}}>
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