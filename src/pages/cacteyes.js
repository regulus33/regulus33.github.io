import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import cacteyes from '../images/paintings/cacteyes.jpg'
import BackButton from '../components/BackButton'



const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}

const Cacteyes = () => (
  <Layout>
       <div className="projectContainer">
    <div>
      <img className="projectImage" src={cacteyes}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Cacteyes</h3>
      <p style={paragraphStyle}>
        Imagine having Saguaros for eyes. THE MORE HE CRIES THE SHARPER HIS EYES.
      </p>
      <center><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/267303979&color=%23c8b0b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Cacteyes
