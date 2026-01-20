

import styles from '../styles/art-collage.module.css'
import Image from 'next/image';
import ArtCard from './artCard'
export default function ArtCollage(){
    return(
        <>
            <div className={styles['art-collage']}>
                
                <div className={styles['artworks']}>
                    <ArtCard imgUrl="/Howl.png" artworkName='Howl'></ArtCard>

                    <ArtCard imgUrl="/Arcane.png" artworkName='Arcane'></ArtCard>

                    <ArtCard imgUrl="/Atelier.png" artworkName='The Lonely Atelier'></ArtCard>

                    <ArtCard imgUrl='/Dreamnotfound.jpg' artworkName="Error 404: Dream Not Found"></ArtCard>
                    
                    <ArtCard imgUrl='/songOfAchilles.png' artworkName='Achilles smiled as his face strikes the Earth'></ArtCard>
                </div>
            </div>
        </>
    );
}