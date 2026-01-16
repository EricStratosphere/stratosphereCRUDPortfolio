"use server"

import styles from '../styles/art-collage.module.css'
import Image from 'next/image';
export default async function ArtCollage(){
    return(
        <>
            <div className={styles['art-collage']}>
                <div className={styles['collage-text']}>
                    Works
                </div>
                <div className={styles['artworks']}>
                    <button>
                        <Image src="/Howl.png" alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
                    </button>
                    <button>
                        <Image src="/Arcane.png" alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
                    </button>
                    <button>
                        <Image src="/Atelier.png" alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
                    </button>
                    <button>
                        <Image src="/Dreamnotfound.jpg" alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
                    </button>
                    <button>
                        <Image src="/songOfAchilles.png" alt="artwork" width={0} height={0} className={styles['artwork']}></Image>            
                    </button>

                </div>
            </div>
        </>
    );
}