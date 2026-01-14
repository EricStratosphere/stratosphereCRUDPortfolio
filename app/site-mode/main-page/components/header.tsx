import styles from '../styles/main-page.module.css'
import Image
 from 'next/image'
export default function Header(){
    return(
    <>
        <header className={styles['hero-section']}>
                <div className={styles['header']}>
                    <div className={styles['name-area']}>
                        ERIC STRATOSPHERE
                    </div>

                    <div className={styles['hero-image-container']}>
                        <Image src="/globe.svg" alt="image" width={0} height={0} sizes="100vw" style={{ width : '100%', height : '100%'}}></Image>
                    </div>
                </div>
        </header>
    </>
    )
}