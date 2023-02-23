import React from 'react'
import Layout from '../components/layout'
import anatomy from '../images/paintings/anatomy.jpg'
import BackButton from '../components/BackButton.js'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}


const Anatomy = () => (
    <Layout>
        <div className="projectContainer">
            <img className="projectImage" src={anatomy}/>
            <div className="artTalk">
                <h3 style={headingStyle}>Anatomy Study</h3>
                <p style={paragraphStyle}>
                    Nothing like a skinless face to teach you how to draw humans.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Anatomy
