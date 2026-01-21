import styles from '../styles/education-experience.module.css'
import Credential from './credential'

export default function EducationExperience(){
    const education : 
    {
        institution : string,
        program : string,
        startYear : number,
        endYear : string | number,
        link : string | null,
    }[] = 
    [
        {
            institution : "New Ormoc City National High School",
            program : "Special Program in the Arts",
            startYear : 2017,
            endYear : 2020,
            link : null,
        },
        {
            institution : "New Ormoc City Senior High School",
            program : "STEM",
            startYear : 2021,
            endYear : 2022,
            link : null,
        },
        {
            institution : "Visayas State University",
            program : "Computer Science",
            startYear : 2023,
            endYear : "Present",
            link : null,
        },
        
    ]

    const experience : 
    {
        institution : string,
        program : string,
        startYear : number,
        endYear : string | number,
        link : string | null,
    }[] = 
    [
        {
            institution : "Upwork Freelancer",
            program : "Graphic Designer, Illustrator, Book Cover Artist",
            startYear : 2023,
            endYear : "Present",
            link : null,
        },
        {
            institution : "Local Freelancer",
            program : "Illustrator, Portrait Artist, Acrylic Artist",
            startYear : 2018,
            endYear : "Present",
            link : null,
        },
        {
            institution : "Mimi Rose's Designer",
            program : "Book Design, Layout Artist",
            startYear : 2025,
            endYear : "Present",
            link : null,
        },
        
    ]
    return(
        <>
            <div className={styles['outer-container']}>  
            <div className={styles['main-container']}>
                <div className={styles['education']}>
                    <h1>
                        Education
                    </h1>
                    {
                        education.map(
                            (value, index) => <Credential key={index} institution={value.institution}
                    program={value.program}
                    startYear={value.startYear}
                    endYear={value.endYear}
                    />
                            )
                    }
                </div>
                <div className={styles['experience']}>
                    <h1>
                        Experience
                    </h1>
                    {
                        experience.map(
                            (value, index) => <Credential key={index} institution={value.institution}
                    program={value.program}
                    startYear={value.startYear}
                    endYear={value.endYear}
                    />
                            )
                    }
                </div>
            </div>
            </div>
        </>
    )
}