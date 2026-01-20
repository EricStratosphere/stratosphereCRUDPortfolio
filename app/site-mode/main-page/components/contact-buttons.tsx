"use client";
import styles from '../styles/hero-section.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
export default function ContactButtons(){
    const [connectHovering, setConnectHovering] = useState(false);
    const [aboutHovering, setAboutHovering] = useState(false);
    // console.log(imgUrl);

    const handleMouseEnterConnect = ()=>{
        setConnectHovering(true);
    }

    const handleMouseLeaveConnect = ()=>{
        setConnectHovering(false);
    }

    const handleMouseEnterAbout = ()=>{
        setAboutHovering(true);
    }

    const handleMouseLeaveAbout = () => {
        setAboutHovering(false);
    }
    
    return(
        <>
         <div className={styles['contact-me']}>
            <div className={styles['outer-contact-div']} onMouseEnter={handleMouseEnterConnect} onMouseLeave={handleMouseLeaveConnect}>
                <Link href="/site-mode/contact-page" className={styles['contact-link']}>Let&apos;s connect!</Link>
                {connectHovering &&  <div className={styles['underline']}></div>}               
            </div>

            <div className={styles['outer-contact-div']} onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}>
                <Link href="/site-mode/about-page" className={styles['about-link']} >More about me</Link>
                {aboutHovering && <div className={styles['underline']}></div>}  
            </div>
        </div>
        </>
    )
}