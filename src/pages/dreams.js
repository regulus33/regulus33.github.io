import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import dreams from '../images/paintings/dreams.jpg'
import BackButton from '../components/BackButton'



const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}


const Dreams = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={dreams}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Dreams</h3>
      <p style={paragraphStyle}>
        Part of an audio visual project. Creating Illustrations and Music together. Dreams.
      </p>
      <center><iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265810004&color=%239388e3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Dreams
