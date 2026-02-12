"use client"

import styles from '../styles/service-sample.module.css'
import ServiceArtCard from './service-art-card'
import { useState, useEffect } from 'react'; 
import ArtworkOverlay from '@/app/general-components/artwork-overlay';
import Carousel from './carousel';
import ArtCollage from '@/app/site-mode/main-page/components/art-collage';
import fetchData from '@/app/site-mode/methods/methods';
import { artworkInterface } from '@/app/site-mode/schema-interfaces';
interface ServiceSampleProps{
    id : string
}

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

export default function ServiceSample({id} : ServiceSampleProps){

    const [carousel, setCarousel] = useState(true);
    const [overlayMode, setOverlayMode] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [artworkName, setArtworkName] = useState('');
    const [description, setDescription] = useState('');
    const [medium, setMedium] = useState('');
    const [date, setDate] = useState(new Date());
    const [links, setLinks] = useState<string[]>([]);
    const [projectType, setProjectType] = useState('');
    const [mouseEntered, setMouseEntered] = useState(false);
    const [artworkArray, setArtworkArray] = useState<artworkInterface[]>([]);
    const [successfulDataFetch, setSuccessfulDataFetch] = useState(false);
    const url = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/serviceartwork/getartworks/' + id;
    var Response : Response;
    const handleMouseEnter = ()=>{
        setMouseEntered(true);
    }

    const handleMouseLeave = ()=>{
        setMouseEntered(false);
    }
    function handleArtCardClicked(
        imgUrl : string, 
        artworkName : string,
        description : string,
        medium : string,
        date : Date,
        links : string[],
        projectType : string,

    ){
        setImgUrl(imgUrl);
        setArtworkName(artworkName);
        setDescription(description);
        setMedium(medium);
        setDate(date);
        setLinks(links);
        setProjectType(projectType);
        setOverlayMode(true);
    }

    useEffect(()=> {
        const getServiceArtworks = async () => {
            var Response = await fetchData(url);
            var response = await Response.json();
            if(!Response.ok){
            }
            else{
                setArtworkArray(response.data);
            }
        }

        getServiceArtworks();

        return ()=>{}
    }, [])
    return(
        <>
            {overlayMode && 
                <ArtworkOverlay 
                imgUrl={imgUrl} 
                artworkName={artworkName} artworkDescription={description} 
                medium={medium}
                date={date}
                links={links}
                projectType={projectType}
                setOverlay={setOverlayMode}/>
            }
            <div className={styles['service-sample-div']}>
                <div className={styles['lettering']}>
                <div className={styles['service-text']} onClick={()=>{setCarousel(!carousel);}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    Works
                </div>
                <div className={styles['triangle']} style={!carousel ? {transform : "rotate(90deg)",} : {}}>
                    ▶
                </div>
                </div>
                {
                    mouseEntered && 
                    <div className={styles['underline']}>

                    </div>
                }
                
            </div>
            {
                carousel ? 
                <Carousel handleArtCardClicked={handleArtCardClicked} artworks={artworkArray}></Carousel>
                :
                <ArtCollage artworks={artworkArray}></ArtCollage>
            }
        </> 
    )
}