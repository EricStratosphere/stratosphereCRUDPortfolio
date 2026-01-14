"use server";

import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
export default async function MainPage(){
    return(
        <>
            <header>
                <HeroSection></HeroSection>
            </header>
            <main>
                <ArtCollage></ArtCollage>
            </main>
            <footer>
                
            </footer>
        </>
    )
}