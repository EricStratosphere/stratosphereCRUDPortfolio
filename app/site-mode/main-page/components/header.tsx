"use server"

import styles from '../styles/hero-section.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeroSection(){
    return(
    <>
        <header className={styles['hero-section']}>
            <div className={styles['text-area']}>
                <span className={styles['artist-introduction']}>
                    
                    Hi! My name is <span className={styles['name']}>Eric Stratosphere!</span> <br/> Nice to meet you.
                    
                </span>
                <div className={styles['about-me']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed tempore temporibus aliquam a, id totam vero exercitationem modi cupiditate, obcaecati error minus dolorum labore possimus dolor ad similique quod!
                </div>
                <div className={styles['contact-me']}>
                    <Link href="/site-mode/contact-page">Hello!</Link>
                </div>
            </div>

            <div className={styles['outer-image-container']}>
                <div className={styles['hero-image-container']}>
                    <Image className={styles['image']}src="/EricStratosphere-mockpic.webp" alt="image" width={0} height={0} sizes="100vw"></Image>
                </div>
            </div>
        </header>
    </>
    )
}