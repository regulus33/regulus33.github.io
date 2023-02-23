import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Bird from '../images/paintings/bird.png'
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
                <img className="projectImage" src={Bird}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Bird</h3>
                <p style={paragraphStyle}>
                    Graphite + digital Color
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Silver

