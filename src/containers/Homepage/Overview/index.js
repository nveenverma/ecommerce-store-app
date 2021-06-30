import React from 'react'
import "./style.css"

const Overview = (props) => {

    return (
        <div className='overviewContainer'>
            <div className="title">
                {props.title}
            </div>
            {
                props.sections && props.sections.map((section, index) => (
                    <div className='section' key={index}>
                        <div className="sectionTitle">
                            {section.title}
                        </div>
                        <div className="sectionContent">
                            {
                                section.content.map((item, idx) => (
                                    <p 
                                        key={idx}
                                        className="contentItem"
                                    >
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Overview
