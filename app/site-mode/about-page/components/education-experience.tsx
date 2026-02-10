"use server"
import styles from '../styles/education-experience.module.css'
import Credential from './credential'
import fetchData from '../../methods/methods.ts'
import { experienceInterface } from '../../interfaces.ts'
export default async function EducationExperience(){
    const url : string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/experiences';
    const Response = await fetchData(url);
    var data : experienceInterface[] | null = null;
    if(!Response.ok){

    }
    else{
        const response = await Response.json();
        console.log(response);
        data = response.data;
    }
    return(
        <>
            <div className={styles['outer-container']}>  
            <div className={styles['main-container']}>
                <div className={styles['education']}>
                    <h1>
                        Education
                    </h1>
                    {
                        data?.map(
                            (value, index : number) => {
                                if(value.entryType === "Education"){
                                    return <Credential key={index} institution={value.institution} program={value.program} 
                                    startYear={value.startYear}
                                    endYear={value.endYear}/>    
                                }
                                return null;
                            }
                            )
                    }
                </div>
                <div className={styles['experience']}>
                    <h1>
                        Experience
                    </h1>
                    {
                        data?.map(
                            (value, index : number) => {
                                if(value.entryType === "Experience"){
                                    return <Credential key={index} institution={value.institution} program={value.program} 
                                    startYear={value.startYear}
                                    endYear={value.endYear}/>    
                                }
                                return null;
                            }
                            )
                    }
                </div>
            </div>
            </div>
        </>
    )
}