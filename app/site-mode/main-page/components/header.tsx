"use server"

import styles from '../styles/hero-section.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ContactButtons from './contact-buttons';
import fetchData from '../../methods/methods.ts';

function splitString(introduction : string) : string[]{
    const splitIntroduction = introduction.split("Eric Stratosphere!");
    // console.log(splitIntroduction);
    return splitIntroduction;
}
export default async function HeroSection(){
    var description : string = "";
    var introduction : string = "";
    var profile_imgurl : string = "";
    var splitIntroduction : string[] = [];
    const url : string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/mainpage';
    var Response = await fetchData(url);
    if(!Response.ok){
        
    }else{
        var response = await Response.json();
        var data = response.data;
        introduction = data.introduction;
        description = data.description;
        profile_imgurl = data.profile_imgurl;
        splitIntroduction = splitString(introduction);
    }
    return(
    <>
        <header className={styles['hero-section']}>
            <div className={styles['text-area']}>
                <span className={styles['artist-introduction']}>
                    
                    {splitIntroduction[0]} <span className={styles['name']}>Eric Stratosphere!</span> <br/> {splitIntroduction[1]}

                </span>
                <div className={styles['about-me']}>
                    {description ? description : ""}
                </div>
                <ContactButtons></ContactButtons>
            </div>

            <div className={styles['outer-image-container']}>
                <div className={styles['hero-image-container']}>
                    <Image className={styles['image']}src="https://storage.googleapis.com/stratosphere-art-bucket/EricStratosphere-mockpic.webp" loading="eager" crossOrigin="anonymous" alt="image" width={0} height={0} sizes="100vw"></Image>
                </div>
            </div>
        </header>
    </>
    )
}