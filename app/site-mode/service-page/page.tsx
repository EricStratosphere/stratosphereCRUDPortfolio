"use server";
import styles from './styles/service-page.module.css'
import Image from 'next/image'
import ServiceSample from './components/service-sample';
import Socials from '@/app/general-components/socials';
export default async function ServicePage(){
    return(
        <>
            <header className={styles['service-header']}>
                <div className={styles['text-area']}>
                    <span className={styles['service-title']}>
                        
                       Book Cover Design
                        
                    </span>
                    <span className={styles['sub-services']}>
                        Composition layout | Graphic Design | Font Design | Environmental design
                    </span>
                    <div className={styles['service-description']}>
                        From fantasy to non-fiction, if you are looking for a visual artist to design your books, I have the experience in composition and color theory to produce designs that provide easy navigation for the eyes and attract readers!
                    </div>
                </div>

                <div className={styles['outer-image-container']}>
                    <div className={styles['hero-image-container']}>
                        <Image className={styles['image']}src="/book.png" alt="image" width={0} height={0} sizes="100vw"></Image>
                    </div>
                </div>
            </header>

            <main>
                <ServiceSample></ServiceSample>
            </main>
            <footer>
                <Socials></Socials>
            </footer>
        </>

    )
}