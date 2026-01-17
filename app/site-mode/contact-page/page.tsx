import styles from './styles/contact-page.module.css'
import Link from 'next/link';
export default function ContactPage(){
    return(
        <>
            <div className={styles['form-div']}>
                <Link href='/site-mode/main-page' className={styles['home']}>Home</Link>
                <h2>Contact me!</h2>

                <p>
                    If the art I've showcased has piqued your interest, don't hesitate to reach out! You can contact me via my email: <br/><br /> <strong>stratospherestu@gmail.com</strong>
                </p>
                <form action="https://formspree.io/f/mqeeewoe" method="post">
                    <div className={styles['name-area']}>
                        <div className={styles['input-area']}>
                            <label htmlFor="first-name">
                                First Name (required)</label>
                            <input type="text" name='first-name' required/>
                        </div>
                        
                        <div className={styles['input-area']}>
                            <label htmlFor="last-name">Last name (required)</label>
                            <input type="text" name='last-name'required/>
                        </div>
                    </div>
                    <div className={styles['input-area']}>
                        <label htmlFor="email">E-Mail (required)</label>
                        <input type="text" name='email'/>
                    </div>

                    <div className={styles['input-area']}>
                        <label htmlFor="message">Message (required)</label>
                        <textarea name="message" id="message">    
                        </textarea>
                    </div>

                    <input className={styles['submit']} type="submit" value="Submit"/>
                </form>
            </div>
        </>
    );
}