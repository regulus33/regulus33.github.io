import React from 'react'
import Layout from '../components/layout'
import taurus from '../images/paintings/taurus.jpg'
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

const Taurus = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={taurus}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Taurus</h3>
                <p style={paragraphStyle}>
                   Taurus
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Taurus
