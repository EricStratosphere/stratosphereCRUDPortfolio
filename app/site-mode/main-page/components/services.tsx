import styles from '../styles/services.module.css'
import Image from 'next/image'

export default function Services(){
    return(
        <>
            <div className={styles['services-container']}>

                <div className={styles['services-text']}>
                    Services
                </div>

                <div className={styles['services-box']}>
                    <div className={styles['service-item']}>
                        <button className={styles['service-button']}>
                            <Image className={styles['service-img']}src='/Vector(1).svg' alt='icon' width={0} height={0}></Image>
                        </button>
                        Book cover art
                    </div>

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