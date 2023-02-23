import React from 'react'
import Layout from '../components/layout'
import god from '../images/paintings/god.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
    padding: 20
}

const headingStyle = {
    textAlign: 'center'
}

const God = () => (
    <Layout>
        <div className="projectContainer">
            <div>
                <img className="projectImage" src={god}/>
            </div>
            <div className="artTalk">
                <h3 style={headingStyle}>God</h3>
                <p style={paragraphStyle}>
                    Music
                </p>
                <center>
                    <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274414593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </center>
                <BackButton/>
            </div>
        </div>
    </Layout>
)

export default God
