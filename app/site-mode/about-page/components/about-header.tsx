import styles from '../styles/about-header.module.css'
import Image from 'next/image';
import fetchData from '../../methods/methods';
export default async function AboutHeader(){
    var brief_introduction;
    var long_introduction;
    const url : string = 'https://stratosphere-art-portfolio-backend.vercel.app/api/v1/aboutmepage';
    const Response = await fetchData(url);
    if(!Response.ok){

    }
    else{
        const response = await Response.json();
        const data = response.data;
        console.log(data);
        brief_introduction = data.brief_introduction;
        long_introduction = data.long_introduction;
    }

    return(
        <>
            <header className={styles['header']}>
                <div className={styles['text-area']}>
                <span className={styles['artist-greeting']}>
                    
                   HELLO!!
                    
                </span>
                <span className={styles['brief-introduction']}>
                    {brief_introduction}
                    </span>
                <div className={styles['about-me']}>
                    
                   {long_introduction}
                </div>
            </div>

            <div className={styles['outer-image-container']}>
                <div className={styles['hero-image-container']}>
                    <Image className={styles['image']}src="/EricStratosphere-mockpic.webp" alt="image" width={0} height={0} sizes="100vw"></Image>
                </div>
            </div>
            </header>   
        </>
    );
}