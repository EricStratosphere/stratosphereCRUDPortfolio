"use server";

import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
import Services from "./components/services";
export default async function MainPage(){
    return(
        <>
            <header>
                <HeroSection></HeroSection>
            </header>
            <main>
                <Services></Services>
                <ArtCollage></ArtCollage>
            </main>
            <footer>
                
            </footer>
        </>
    )
}