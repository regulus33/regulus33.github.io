import React from 'react'
import Layout from '../components/layout'
import regulus_on_my_mind from '../images/paintings/regulus_on_my_mind.jpg'
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

const onmymind = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={regulus_on_my_mind}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>On My Mind</h3>
                <p style={paragraphStyle}>
                  Sound.
                </p>
                <center>
                    <iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269349308&color=%23cb80ac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </center>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default onmymind
