import React, { useState } from "react"

const Contact = () => {

    const [data,setdata]=useState({
        fullname:'',
        number:'',
        email:'',
        msg:''
        }
    );

    const InputEvent = (event) =>{
        const {name,value}=event.target;
        setdata ((preValue)=>{
            return{
            ...preValue,
            [name] : value
        }
        })
    }
    
    const SubmitMe = (e) =>{
        e.preventDefault();
        alert(`Your full name is ${data.fullname} , your phone no is ${data.phone} and your message is ${data.msg}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={SubmitMe}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" 
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Enter your Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" 
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact