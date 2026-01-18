"use server";
import styles from './styles/service-page.module.css'
import Image from 'next/image'
import ServiceSample from './components/service-sample';
export default async function ServicePage(){
    return(
        <>
            <header className={styles['service-header']}>
                <div className={styles['text-area']}>
                    <span className={styles['service-title']}>
                        
                       Book Cover Design
                        
                    </span>
                    <div className={styles['service-description']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed tempore temporibus aliquam a, id totam vero exercitationem modi cupiditate, obcaecati error minus dolorum labore possimus dolor ad similique quod!
                    </div>
                </div>

                <div className={styles['outer-image-container']}>
                    <div className={styles['hero-image-container']}>
                        <Image className={styles['image']}src="/Vector(1).svg" alt="image" width={0} height={0} sizes="100vw"></Image>
                    </div>
                </div>
            </header>

            <main>
                <ServiceSample></ServiceSample>
            </main>
        </>

    )
}