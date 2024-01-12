import React from "react"
import Common from "./Common"
import web from "../src/Images/photo8.webp"

const About = () =>{
    return(
        <>
            <Common 
                name="Welcome to About Page"
                imgsrc={web}
                visit="/contact"
                bname="Contact Now"
            />
        </>
    )
}

export default About