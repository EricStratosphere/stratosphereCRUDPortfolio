"use client";
import styles from '../styles/services.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface serviceButtonProps{
    imgUrl : string,
    serviceTitle : string,
}
export default function ServiceButton({imgUrl, serviceTitle} : serviceButtonProps){


    const { push } = useRouter();

    const handleButtonClick = (serviceTitle  : string) : void => {
        push('/site-mode/service-page?serviceTitle=' + serviceTitle);
    }
    return(
        <>
            <div className={styles['service-item']}>
                <button className={styles['service-button']} onClick={()=>{handleButtonClick(serviceTitle)}}>
                    <Image className={styles['service-img']}src='/book.png' alt='icon' width={0} height={0}></Image>
                </button>
                Book cover art
            </div>
        </>
    )
}