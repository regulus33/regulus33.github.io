import React from 'react'
import Layout from '../components/layout'
import quit from '../images/paintings/quit.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}

const Quit = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={quit}/>
            </div>
            <div className="artTalk" style={{marginLeft: 45}}>
                <h3 style={headingStyle}>Quit</h3>
                <p style={paragraphStyle}>
                  :)
                </p>
                <center>
                    <iframe src="https://open.spotify.com/embed/album/6Riix1TtqXTJCup514luqF" width="300" height="380"
                            frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </center>
                
            </div>
        </div>
    </Layout>
)

export default Quit
