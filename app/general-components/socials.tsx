"use server";
import styles from './styles/socials.module.css'
import Link from 'next/link';
import Image from 'next/image';
import fetchData from '../site-mode/methods/methods';
import { socialSchema } from '../site-mode/schema-interfaces';
export default async function Socials(){
    var socialsArray : socialSchema[] | null = null;
    var isEmpty = false;
    const socials : {iconUrl : string, href : string, socialTitle : string}[] = [
        {
            iconUrl : "/artfol-icon.png", 
            href : "https://artfol.app/@Eric_Stratosphere",
            socialTitle : "Artfol",
        },
        {
            iconUrl :"/instagram.svg",
            href: "https://www.instagram.com/theboyinthestratosphere/",
            socialTitle : "Instagram",
        },
        {
            iconUrl : "/upwork.png",
            href : "https://www.upwork.com/freelancers/~016d80d833a67e919a",
            socialTitle : "Upwork",
        },
    ]

    const url = "https://stratosphere-art-portfolio-backend.vercel.app/api/v1/socials";
    const Response = await fetchData(url);
    if(!Response.ok){

    }
    else{
        const response = await Response.json();
        socialsArray = response.data;
        isEmpty = socialsArray?.length === 0;
    }
    return(
        <>
            <div className={styles['socials-container']}>
                <div className={styles['socials-text']}>
                    Socials
                </div>
                <div className={styles['socials']}>
                    
                    {
                        
                    isEmpty ? 
                    
                    <div className={styles['empty-message']}>
                        You have no socials added
                    </div>

                    :

                    socialsArray?.map
                        (
                            (value, index : number) => 
                                <Link key={index} className={styles['social-link']} href={value.social_link}>
                                    <Image height={0} width={0} className={styles['social-icon']} src={value.icon_url} alt="Social Icon"/>
                                    {value.social_name}
                                </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}