import styles from '../styles/service-sample.module.css'
import ServiceArtCard from './service-art-card'
export default function ServiceSample(){
    return(
        <>
            <div className={styles['service-sample-div']}>
                <div className={styles['service-text']}>
                    Works
                </div>

                <div className={styles['service-works']}>
                    {/* Hello world! */}
                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen"></ServiceArtCard>

                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes"></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages"></ServiceArtCard>
                    </div>

                    <div  className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen"></ServiceArtCard>

                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes"></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages"></ServiceArtCard>
                    </div>

                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen"></ServiceArtCard>

                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes"></ServiceArtCard>
                    
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages"></ServiceArtCard>
                    </div>
                </div>
            </div>
        </> 
    )
}