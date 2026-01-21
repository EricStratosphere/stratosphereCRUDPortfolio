"use client";
import ServiceArtCard from "./service-art-card"
import styles from '../styles/service-sample.module.css';
interface CarouselProps{
    handleArtCardClicked : (imgUrl : string, artworkName : string) => void
    artworks : {imgUrl : string, artworkName : string}[]
}



export default function Carousel({handleArtCardClicked, artworks} : CarouselProps){

    return(
        <>
            <div className={styles['service-works']}>
                    {/* Hello world! */}
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.imgUrl} artworkName={value.artworkName} setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.imgUrl} artworkName={value.artworkName} setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
                    <div className={styles['group']}>
                        {artworks.map(
                            (value, index)=>
                                <ServiceArtCard  key= {index} imgUrl={value.imgUrl} artworkName={value.artworkName} setArtworkClicked={handleArtCardClicked}/>  
                        )}
                    </div>
            </div>
        </>
    )
}