import React from 'react'
import Layout from '../components/layout'
import silver_key from '../images/paintings/silver_key.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}
const imageStyle = {
    //width: window.innerWidth/2,
    height: "100%"
}

const Silver = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={silver_key}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Old Times</h3>
                <p style={paragraphStyle}>
                  Old photo, low res :(
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Silver

