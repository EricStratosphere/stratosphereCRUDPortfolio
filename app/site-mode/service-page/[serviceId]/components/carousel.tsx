"use client";
import ServiceArtCard from "./service-art-card"
import styles from '../styles/service-sample.module.css';
import { artworkInterface } from "@/app/site-mode/schema-interfaces";
interface CarouselProps{
    handleArtCardClicked : (
        imgUrl : string, 
        artworkName : string,
        description : string,
        medium : string,
        date : Date,
        links : string[],
        projectType : string,) => void
    artworks : artworkInterface[]
}



export default function Carousel({handleArtCardClicked, artworks} : CarouselProps){

    return(
        <>
            <div className={styles['service-works']}>
                    {/* Hello world! */}
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.img_url} 
                            artworkName={value.name}
                            description={value.description}
                            medium = {value.medium}
                            links={value.links}
                            date={value.date_created}
                            projectType={value.project_type}setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.img_url} 
                            artworkName={value.name}
                            description={value.description}
                            medium = {value.medium}
                            links={value.links}
                            date={value.date_created}
                            projectType={value.project_type} setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.img_url} 
                            artworkName={value.name}
                            description={value.description}
                            medium = {value.medium}
                            links={value.links}
                            date={value.date_created}
                            projectType={value.project_type} setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
            </div>
        </>
    )
}