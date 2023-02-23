import React from 'react'
import Layout from '../components/layout'
import tiger_leep from '../images/paintings/tiger_leap.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}


const MegaDoodle = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={tiger_leep}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>MegaDoodle</h3>
                <p style={paragraphStyle}>
                  Stream of consciousness.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default MegaDoodle
