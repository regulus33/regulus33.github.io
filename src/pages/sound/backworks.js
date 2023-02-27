import React from 'react'
import Layout from '../../components/layout'
import backworks from '../../images/paintings/backworks.png'
import BackButton from '../../components/BackButton'


const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}


const BackWorks = () => (
    <Layout>
        <div className="projectContainer">
            <img className="projectImage" src={backworks}/>
            <div className="artTalk">
                <h3 style={headingStyle}>Backworks</h3>
                <p style={paragraphStyle}>
                    ...
                </p>
                <center>
                    <iframe src="https://open.spotify.com/embed/album/49xqEVVowVV7Vmpm1K7hbz"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                    ></iframe>
                </center>

            </div>
        </div>
    </Layout>
)

export default BackWorks
