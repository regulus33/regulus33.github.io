import React from 'react'
import Layout from '../components/layout'
import gemini from '../images/paintings/gemini.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}


const Gemini = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={gemini}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Gemini</h3>
                <p style={paragraphStyle}>
                    Kitty cat man.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Gemini
