// "use client";
"use server";
import styles from '../styles/services.module.css'
import Image from 'next/image'
import ServiceButton from './service-button'
import fetchData from '../../methods/methods';
import { serviceInterface } from '../../interfaces';
export default async function Services(){
    var services : any = null;
    var dataSuccessfullyFetched : boolean = false;
    const url : string = "https://stratosphere-art-portfolio-backend.vercel.app/api/v1/services";
    const Response = await fetchData(url);
    if(!Response.ok){   
    }else{
        dataSuccessfullyFetched = true;
        const response = await Response.json();
        services = response.data;
        // console.log(services);
    }
    return(
        <>
            <div className={styles['services-container']}>

                <div className={styles['services-text']}>
                    Services
                </div>

                <div className={styles['services-box']}>
                    
                    {
                        services.map((value : serviceInterface, index : number)=>{
                            return (
                                    <ServiceButton service={value} key={index}></ServiceButton>
                            )
                        })
                    }
                    {/* <ServiceButton imgUrl="/Vector(1).svg" serviceTitle='Book Cover Art'></ServiceButton> */}
                </div>
            </div>
        </>
    )
}