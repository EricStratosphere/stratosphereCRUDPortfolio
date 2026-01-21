import styles from '../styles/credential.module.css'
interface CredentialProps{
    institution : string,
    program : string,
    startYear : number,
    endYear : number | string,
}
export default function Credential(
    {institution, program, startYear, endYear} : CredentialProps
){
    return(
        <>
            <div className={styles['credential']}>
                <div className={styles['institution-program']}>
                    <h3>
                        {institution}               
                    </h3>
                    <p>
                        {program}
                    </p>    
                </div>

                <div className={styles['timeline']}>
                    {startYear} - {endYear}
                </div>
            </div>
        </>
    )   

}