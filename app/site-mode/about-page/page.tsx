"use server";
import AboutHeader from "./components/about-header";
import EducationExperience from "./components/education-experience";
import Socials from "@/app/general-components/socials";
export default async function AboutPage(){
    return(
        <>  
            <AboutHeader/>
            <main>
                <EducationExperience></EducationExperience>
            </main>  
            <footer>
                <Socials></Socials>
            </footer>
        </>
    );
}