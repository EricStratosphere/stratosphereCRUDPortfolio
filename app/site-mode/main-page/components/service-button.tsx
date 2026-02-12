"use client";
import styles from '../styles/services.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { serviceInterface } from '../../schema-interfaces.ts';

interface serviceButtonProps{
    service : serviceInterface
}
export default function ServiceButton({service} : serviceButtonProps){


    const { push } = useRouter();

    const handleButtonClick = (serviceId  : string) : void => {
        push('/site-mode/service-page/' + serviceId);
    }
    return(
        <>
            <div className={styles['service-item']}>
                <button className={styles['service-button']} onClick={()=>{handleButtonClick(service._id)}}>
                    <Image className={styles['service-img']}src={service.service_img_link} alt='icon' width={0} height={0}></Image>
                </button>
                {service.service_name}
            </div>
        </>
    )
}