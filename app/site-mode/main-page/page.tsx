"use server";

import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
import Services from "./components/services";
import styles from './styles/art-collage.module.css'
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
                <ArtCollage></ArtCollage>
            </main>
            <footer>
                
            </footer>
        </>
    )
}