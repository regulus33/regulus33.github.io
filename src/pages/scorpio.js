import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import scorpio from '../images/paintings/scorpio.jpg'
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

const Scorpio = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={scorpio}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Scorpio</h3>
                <p style={paragraphStyle}>
                   Scorpio
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Scorpio
