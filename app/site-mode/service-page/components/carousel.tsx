import ServiceArtCard from "./service-art-card"
import styles from '../styles/service-sample.module.css';
interface CarouselProps{
    handleArtCardClicked : (imgUrl : string, artworkName : string) => void
}

export default function Carousel({handleArtCardClicked} : CarouselProps){
    return(
        <>
            <div className={styles['service-works']}>
                    {/* Hello world! */}
                    <div className={styles['special-group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>
                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>
                    <div className={styles['group']}>
                        <ServiceArtCard imgUrl="/Augustus.png" artworkName="Descendants of The Fallen" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/MimiRose1.png" artworkName="The Stolen Snowflakes" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/MimiRose2.png' artworkName="Merry Marriages" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl='/LePetitPrince.png' artworkName='Le Petit Prince' setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                        <ServiceArtCard imgUrl="/kid's book.png" artworkName="Spanish Word Search" setArtworkClicked={handleArtCardClicked}></ServiceArtCard>
                    </div>
            </div>
        </>
    )
}