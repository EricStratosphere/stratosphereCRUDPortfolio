import styles from './styling/artwork-overlay.module.css'
import Image from 'next/image'
interface OverlayProps{
    imgUrl : string,
    artworkName : string,
    artworkDescription : string,
}
export default function ArtworkOverlay({imgUrl, artworkName, artworkDescription} : OverlayProps){
    return(
        <>
            <div className={styles['overlay']}>
                    <div className={styles['img-partition']}>
                        <Image src={imgUrl} alt='overlay-img' width={0} height={0} className={styles['overlay-img']}></Image>
                    </div>
                    <div className={styles['txt-partition']}>
                        <h1>
                            Howl Pendragon
                        </h1>

                        <h3>
                            A fanart I created of my first and favorite Ghibli film. Howl's Moving Castle will always have a special place in my heart.
                        </h3>
                    </div>
            </div>
        </>
    )
}