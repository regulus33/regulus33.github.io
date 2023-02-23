import React from 'react'
import Layout from '../components/layout'
import self from '../images/paintings/self_portrait.jpg'
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

const Self = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={self}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Self Portrait</h3>
                <p style={paragraphStyle}>
                    Stone Lithograph portrait of myself.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Self
