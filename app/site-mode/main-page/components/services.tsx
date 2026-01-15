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
                        <a className={styles['service-button']}href="">
                            <Image className={styles['service-img']}src='/favicon.ico' alt='icon' width={0} height={0}></Image>
                        </a>
                    </div>

                    <div className={styles['service-item']}>
                        <a className={styles['service-button']}href="">
                            <Image className={styles['service-img']}src='/favicon.ico' alt='icon' width={0} height={0}></Image>
                        </a>
                    </div>
                    <div className={styles['service-item']}>
                        <a className={styles['service-button']}href="">
                            <Image className={styles['service-img']}src='/favicon.ico' alt='icon' width={0} height={0}></Image>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}