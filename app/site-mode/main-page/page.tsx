"use server";

import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
import Services from "./components/services";
import styles from './styles/art-collage.module.css'

const artworks : {imgUrl : string, artworkName : string}[] = 
    [
        {imgUrl : '/Howl.png', artworkName : 'Howl'},
        {imgUrl : '/Arcane.png', artworkName : 'Arcane'},
        {imgUrl : '/Atelier.png', artworkName : 'The Lonely Atleier'},
        {imgUrl : '/Dreamnotfound.jpg', artworkName : 'Error 404: Dream Not Found'},
        {imgUrl : '/songOfAchilles.png', artworkName : 'Achilles smiled as his face strikes the Earth'},   
    ]

export default async function MainPage(){
    return(
        <>
            <header>
                <HeroSection></HeroSection>
            </header>
            <main>
                <Services></Services>
                <div className={styles['collage-text']}>
                    Works
                </div>
                <ArtCollage artworks={artworks}></ArtCollage>
            </main>
            <footer>
                
            </footer>
        </>
    )
}