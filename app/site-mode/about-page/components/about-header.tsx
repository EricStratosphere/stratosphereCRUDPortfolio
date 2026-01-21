import styles from '../styles/about-header.module.css'
import Image from 'next/image';
export default function AboutHeader(){
    return(
        <>
            <header className={styles['header']}>
                <div className={styles['text-area']}>
                <span className={styles['artist-greeting']}>
                    
                   HELLO!!
                    
                </span>
                <span className={styles['brief-introduction']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem totam consequuntur amet, distinctio necessitatibus voluptatum suscipit laudantium reiciendis officiis consequatur ducimus magni aspernatur veritatis fugiat unde dolore similique fuga quaerat!
                    </span>
                <div className={styles['about-me']}>
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed tempore temporibus aliquam a, id totam vero exercitationem modi cupiditate, obcaecati error minus dolorum labore possimus dolor ad similique quod!
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