"use server";
import styles from './styles/socials.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default async function Socials(){
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
    return(
        <>
            <div className={styles['socials-container']}>
                <div className={styles['socials-text']}>
                    Socials
                </div>
                <div className={styles['socials']}>
                    {socials.map
                        (
                            (value, index) => 
                                <Link key={index} className={styles['social-link']} href={value.href}>
                                    <Image height={0} width={0} className={styles['social-icon']} src={value.iconUrl} alt="Social Icon"/>
                                    {value.socialTitle}
                                </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}