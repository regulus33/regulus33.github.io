import React from 'react'
import Layout from '../components/layout'
import sbr from '../images/paintings/sbrntsbr.png'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}

const Silver = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={sbr}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Untitled</h3>
                <p style={paragraphStyle}>
                    Untitled, ink on paper with digital color.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Silver

