"use server";

import fetchData from "../methods/methods";
import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
import Services from "./components/services";
import styles from './styles/art-collage.module.css'
import Socials from "@/app/general-components/socials";

export default async function MainPage() {
    var response;
    var artworkArray = null;
    var message = "";
    const url: string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/artworks';
    const Response = await fetchData(url);
    // console.log(Response.ok);
    response = await Response.json();
    if (Response.ok) {
        artworkArray = response.data;
    } else {
        message = response.message;
    }
    return (
        <>
            <header>
                <HeroSection></HeroSection>
            </header>
            <main>
                <Services></Services>
                <div className={styles['collage-text']}>
                    Works
                </div>
                {
                    artworkArray === null ?
                        <div className={styles['artwork-div']}>
                            {message}
                        </div>
                        :
                        <ArtCollage artworks={artworkArray}></ArtCollage>
                }
            </main>
            <footer>
                <Socials></Socials>
            </footer>
        </>
    )
}