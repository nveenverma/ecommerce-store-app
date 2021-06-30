import React from "react";

import Layout from "../../components/Layout";
import Overview from "./Overview"
import heroImg from "../../images/hero1.jpg";

import "./style.css";

function HomePage () {
    
    const projectFeaturesSection = [
        {
            title :'E-Commerce Store : ',
            content : [
                'User Signup / Login',
                'Add/Delete Cart items',
                'Add/Edit Delivery Address',            
                'Order Placement + Checkout ',
                'Order Summary + Tracking',
            ]
        },
        {
            
            title :'Content Management System (CMS) :',
            content : [
                'Admin Signup/Login',
                'High Level Statistics',
                'Add/Edit/Delete Products',
                'Add/Update/Delete Categories',
                'Update Order Tracking Details',
            ]
        }
    ]
    const languagesSection = [
        {
            title :'For building Frontend :',
            content : [
                'HTML',
                'CSS',
                'JavaScript',
                'ReactJS',
                'Redux',
            ]
        },
        {
            title :'For building Backend :',
            content : [
                'NodeJS',
                'ExpressJS',
                'MongoDB',
                'Postman',
                'AWS',
                'Heroku',
            ]
        }
    ]

    return (
        <div className="bigger">
            <Layout className="layout"/>
            <div className="jumbotron">
                <div
                    style={{
                        backgroundImage: `url(${heroImg})`,                        
                        height: '100vh',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: '#fff',
                        overflow: 'auto',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                    }}
                    className="bgImg"
                >

                </div>
                    <div className="mainContainer" >
                        <Overview 
                            title='Project Name & Features'
                            sections={projectFeaturesSection}
                            />
                        <Overview 
                            title='Languages and Tools Used'
                            sections={languagesSection}
                        />
                    </div>

            </div>
        </div>
    )
}

export default HomePage