import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import beer from '../images/paintings/lithograph_dream.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}


const Beer = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={beer}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Beer</h3>
                <p style={paragraphStyle}>
                    I can't find the original scan of this one. A good friend bought a print and sent me this picture.
                    Limestone block lithograph.
                </p>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default Beer
