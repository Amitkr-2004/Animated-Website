import React from "react"
import { NavLink } from "react-router-dom"
import web from "../src/Images/photo2.avif"
import Common from "./Common"

const Home = () =>{
    return(
        <Common 
            name="Grow Your Business with"
            imgsrc={web}
            visit="/service"
            bname="Get started"
        />
    )
}

export default Home