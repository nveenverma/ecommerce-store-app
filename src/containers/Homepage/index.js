import React from "react";

import Layout from "../../components/Layout";
import heroImg from "../../images/hero1.jpg";

import "./style.css";

function Homepage() {

    // console.log("Token from HomePage : ", localStorage.getItem('token'))

	return (
		<div>
			<Layout />
			<div
				style={{
					backgroundImage: `url(${heroImg})`,
					backgroundColor: "#cccccc",
					height: "625px",
					backgroundPosition: "top",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					position: "relative",
					// filter: "blur(0.8px)",
					// -webkit-filter: blur(8px);
				}}
			></div>
            <div className="overview1">
                <div className="innerContainer">                    
                    <p className="title">
                        Project Name & Features:
                    </p>
                    <div>
                        <div className="flexRow" style={{textAlign: 'left'}}>
                            <p style={{ width: '30%' }} >
                                <strong>E-Commerce Store : </strong>
                            </p>  
                            <div 
                                className="flexRow"
                                style={{ 
                                    minWidth: '65%',
                                    justifyContent: 'space-around'
                                }}
                                >                          
                                <div>
                                    <p className="minusBtmMargin">User Signup / Login</p>
                                    <p className="minusBtmMargin">Add/Delete Cart items</p>
                                    <p className="minusBtmMargin">Add/Edit Delivery Address</p>
                                </div>
                                <div>
                                    <p className="minusBtmMargin">Order Placement + Checkout </p>
                                    <p className="minusBtmMargin">Order Summary + Tracking</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="flexRow" style={{textAlign: 'left'}}>
                            <p style={{ width: '30%' }} >
                                <strong>Content Management System (CMS) :</strong>
                            </p>
                            <div 
                                className="flexRow"
                                style={{ 
                                    minWidth: '65%',
                                    justifyContent: 'space-around'
                                }}
                            >
                                <div>
                                    <p className="minusBtmMargin">Admin Signup/Login</p>
                                    <p className="minusBtmMargin">High Level Statistics</p>
                                    <p className="minusBtmMargin">Add/Edit/Delete Products</p>
                                </div>
                                <div>
                                    <p className="minusBtmMargin">Add/Update/Delete Categories</p>
                                    <p className="minusBtmMargin">Update Order Tracking Details</p>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
            </div>
			<div className="overview2">
                <div className="innerContainer">
                    <p className="title">
                        Languages and Tools Used
                    </p>
                    <div>
                        <div className="flexRow sb" style={{textAlign: 'left'}}>
                            <p style={{ maxWidth : '30%'}} >
                                <strong>For building Frontend :</strong>
                            </p>
                            <div 
                                className="flexRow sb"
                                style={{ width : '50%'}}
                            >
                                <div>
                                    <p className="minusBtmMargin">HTML</p>
                                    <p className="minusBtmMargin">CSS</p>
                                    <p className="minusBtmMargin">JavaScript</p>
                                </div>
                                <div>
                                    <p className="minusBtmMargin">ReactJS</p>
                                    <p className="minusBtmMargin">Redux</p>
                                </div>
                            </div>
                        </div> 
                        <br />
                        <div className="flexRow sb" style={{textAlign: 'left'}}>
                            <p style={{ maxWidth : '30%'}} >
                                <strong>For building Backend :</strong>
                            </p>
                            <div
                                className="flexRow sb"
                                style={{ width : '50%'}}
                            >
                                <div>
                                    <p className="minusBtmMargin">NodeJS</p>
                                    <p className="minusBtmMargin">ExpressJS</p>
                                    <p className="minusBtmMargin">MongoDB</p>
                                </div>
                                <div>
                                    <p className="minusBtmMargin">Postman</p>
                                    <p className="minusBtmMargin">AWS</p>
                                    <p className="minusBtmMargin">Heroku</p>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
			</div>
		</div>
	);
}

export default Homepage;
