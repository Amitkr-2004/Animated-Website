import React from "react"
import Card from "./Card"
import SData from "./SData"

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                SData.map((val,ind)=>{
                                    return <Card 
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        btname={val.btname}
                                        about={val.about}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service