"use server";
import styles from './styles/socials.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default async function Socials(){
    const socials : {iconUrl : string, href : string}[] = [
        {iconUrl : "", href : ""},
        
    ] 
    return(
        <>
            <div className={styles['socials-container']}>
                <div className={styles['socials-text']}>
                    Socials
                </div>
                <div className={styles['socials']}>
                    {socials.map((value, index) => 
                    <Link key={index}className={styles['social-link']} href={value.href}>
                        <Image height={0} width={0} className={styles['social-icon']} src={value.iconUrl} alt="Social Icon"/>
                    </Link>
                    )
                    }
                </div>
            </div>
        </>
    )
}