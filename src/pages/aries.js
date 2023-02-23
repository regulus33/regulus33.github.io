import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import aries from '../images/paintings/aries.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}

const Aries = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={aries}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Aries</h3>
                <p style={paragraphStyle}>
                    Graphite
                </p>
                <p style={paragraphStyle}>
                    Digital Color
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Aries
