"use client";
import styles from './styles/artwork-overlay.module.css'
import Image from 'next/image'
import { format } from 'path';
interface OverlayProps{
    imgUrl : string,
    artworkName : string,
    artworkDescription : string,
    medium : string,
    date : Date,
    links : string[],
    projectType : string,
    setOverlay : (value : boolean)=>void,
}


import { useState, useEffect} from 'react';

export default function ArtworkOverlay({imgUrl, artworkName, artworkDescription, 
    medium, date, links, projectType,
    setOverlay} : OverlayProps){
    
    // const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [formattedDate, setFormattedDate] = useState('');
    console.log("Overlay!");
        const image : HTMLImageElement = new window.Image();
        image.src = imgUrl;
        image.onload = () => {
            
        }
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        
        window.addEventListener("resize", handleResize);

        return(
            ()=>{
                window.removeEventListener("resize", handleResize);
            }
        )
    }, [])
    useEffect(()=>{
        const months = [
            "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
        ]

        const fixedDate = new Date(date);
        const monthName = months[fixedDate.getMonth()];
        const day = fixedDate.getDate();
        const year = fixedDate.getFullYear();

        setFormattedDate(`${monthName} ${day}, ${year}`);
    }, [])
    return(
        <>
            {image ? 
            
            <div className={styles['overlay']} onClick={()=>{setOverlay(false)}}>
                    <div className={styles['img-partition']}>
                        <Image src={imgUrl} alt='overlay-img' width={0} height={0} className={styles['overlay-img']}

                        style={
                            
                            (
                                (width > 0 && width <= 750) ?

                                (
                                    (image.height > image.width) ? 

                                    {width : "auto", height : "50vh", maxHeight : "600px"}

                                    :

                                    {width : "80%", height : "auto"}
                                )

                                :


                                (
                                    (image.height > image.width) ? 
                            
                                    {width : "auto", minHeight : "250px", height : "60vw", maxHeight : "800px", marginLeft : "20px"}

                                    :

                                    {width : "80%", height : "auto"}
                                )
                            )
                            
                            

                        }
                        ></Image>
                    </div>
                    <div className={styles['txt-partition']}>
                        <h1>
                            {artworkName}
                        </h1>
                                
                        <p>
                            Date | {formattedDate}
                            <br/>
                            Medium | {medium}
                            <br/>
                            Project Type | {projectType}
                            <br/>

                        </p>
                        <h3>
                            {artworkDescription}
                        </h3>

                        {
                        
                        links.length > 0 ? 
                        <h3>
                            Affiliated links:
                            <br />
                        {
                        links.map((value, index)=>{
                            return (
                                <a key={index} href={value}>Link {index + 1}</a>
                                
                            )
                        })
                        }
                        </h3>
                        : 
                        
                        null 

                        }

                        <p className={styles['instructions']}>Click anywhere to close.</p>
                    </div>
            </div>

            :


            null
            
            }
        </>
    )
}