// "use client";
import styles from './styles/artwork-overlay.module.css'
import Image from 'next/image'
interface OverlayProps{
    imgUrl : string,
    artworkName : string,
    artworkDescription : string,
    setOverlay : (value : boolean)=>void,
}

interface imageStyling{
    width : string,
    height : string,
}
// import { useState, useEffect, CSSProperties} from 'react';

export default function ArtworkOverlay({imgUrl, artworkName, artworkDescription, setOverlay} : OverlayProps){
    
    // const [image, setImage] = useState<HTMLImageElement | null>(null);
    console.log("Overlay!");
        const image : HTMLImageElement = new window.Image();
        image.src = imgUrl;
        image.onload = () => {
            
        }
    

    // useEffect(()=>{
    //     loadImage();
    // }, [])
    return(
        <>
            {image ? 
            
            <div className={styles['overlay']} onClick={()=>{setOverlay(false)}}>
                    <div className={styles['img-partition']}>
                        <Image src={imgUrl} alt='overlay-img' width={0} height={0} className={styles['overlay-img']}

                        style={
                            image.height > image.width ? 
                            
                            {width : "auto", minHeight : "250px", height : "60vw", maxHeight : "800px", marginLeft : "20px"}

                            :

                            {width : "80%", height : "auto"}

                        }
                        ></Image>
                    </div>
                    <div className={styles['txt-partition']}>
                        <h1>
                            {artworkName}
                        </h1>
                                
                        <p>
                            Date | March 18, 2025
                            <br/>
                            Medium | Digital art on IbisPaintX
                            <br/>
                            Project Type | Personal Project
                            <br/>

                        </p>
                        <h3>
                            A fanart I created of my first and favorite Ghibli film. Howl's Moving Castle will always have a special place in my heart.
                        </h3>

                        <p className={styles['instructions']}>Click anywhere to close.</p>
                    </div>
            </div>

            :


            null
            
            }
        </>
    )
}