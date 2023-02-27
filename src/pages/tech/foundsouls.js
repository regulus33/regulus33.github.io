import React from 'react'
import Layout from '../../components/layout'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}

const video = (
    <iframe
        width="744"
        height="420"
        src="https://www.youtube.com/embed/OZMFAXGWWDU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
)

const FoundSouls = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                {video}
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>Found Souls</h3>
                <center><p style={paragraphStyle}>
                    Script using built in Unity FFT analysis to change the size of assets.
                </p></center>
                
            </div>
        </div>
    </Layout>
)

export default FoundSouls
