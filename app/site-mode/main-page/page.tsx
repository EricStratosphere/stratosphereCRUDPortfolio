"use server";

import fetchData from "../methods/methods";
import ArtCollage from "./components/art-collage"
import HeroSection from "./components/header"
import Services from "./components/services";
import styles from './styles/art-collage.module.css'
import Socials from "@/app/general-components/socials";

const artworks : {imgUrl : string, artworkName : string}[] = 
    [
        {imgUrl : '/Howl.png', artworkName : 'Howl'},
        {imgUrl : '/Arcane.png', artworkName : 'Arcane'},
        {imgUrl : '/Atelier.png', artworkName : 'The Lonely Atelier'},
        {imgUrl : '/Dreamnotfound.jpg', artworkName : 'Error 404: Dream Not Found'},
        {imgUrl : '/songOfAchilles.png', artworkName : 'Achilles smiled as his face strikes the Earth'},   
    ]

export default async function MainPage(){
    var response;
    var status = false;
    var artworkArray = null;
    var message = "";
    const url : string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/artworks';
    const Response = await fetchData(url);
    // console.log(Response.ok);
    response = await Response.json();
    console.log(response);
    if(Response.ok){
        artworkArray = response.data;
        status = response.success;
    }else{
        message = response.message;
    }
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
                {
                    status ? 
                    <ArtCollage artworks={artworks}></ArtCollage>
                    :
                    <div className={styles['artwork-div']}>
                        {message} 
                    </div>
                }
            </main>
            <footer>
                <Socials></Socials>
            </footer>
        </>
    )
}