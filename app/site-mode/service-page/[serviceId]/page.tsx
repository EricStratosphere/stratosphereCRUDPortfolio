"use server";
import styles from './styles/service-page.module.css'
import Image from 'next/image'
import ServiceSample from './components/service-sample';
import Socials from '@/app/general-components/socials';
import { servicePageProps } from '../../schema-interfaces.ts';
import fetchData from '../../methods/methods.ts';
export default async function ServicePage({params} : servicePageProps){
    var response;
    var service;
    var subservices : string = "";
    const { serviceId } = await params;
    const url : string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/services/' + serviceId
    const Response = await fetchData(url);
    if(!Response.ok){
    
    }
    else{
        response = await Response.json();
        service = response.data;
        subservices = service.subservices[0];
        for(let i = 1; i < service.subservices.length; i++){
            subservices += " | " + service.subservices[i];
        }
    }
    return(
        <>
            <header className={styles['service-header']}>
                <div className={styles['text-area']}>
                    <span className={styles['service-title']}>

                        {service.service_name}
                        
                    </span>
                    <span className={styles['sub-services']}>
                        {subservices}
                    </span>
                    <div className={styles['service-description']}>
                        {service.service_description}
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