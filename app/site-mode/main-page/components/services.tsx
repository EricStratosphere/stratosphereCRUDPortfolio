// "use client";
import styles from '../styles/services.module.css'
import Image from 'next/image'
import ServiceButton from './service-button'

export default function Services(){
    

    return(
        <>
            <div className={styles['services-container']}>

                <div className={styles['services-text']}>
                    Services
                </div>

                <div className={styles['services-box']}>
                    
                    <ServiceButton imgUrl="/Vector(1).svg" serviceTitle='Book Cover Art'></ServiceButton>
                    <div className={styles['service-item']}>
                        <button className={styles['service-button']}>
                            <Image className={styles['service-img']}src='/Vector.svg' alt='icon' width={0} height={0}></Image>
                        </button>
                        Illustrations
                    </div>

                    <div className={styles['service-item']}>
                        <button className={styles['service-button']}>
                            <Image className={styles['service-img']}src='/Vector(2).svg' alt='icon' width={0} height={0}></Image>
                        </button>
                        Music Cover art
                    </div>
                   
                </div>
            </div>
        </>
    )
}