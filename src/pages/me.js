import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import me from '../images/paintings/regulus_me.jpg'
import BackButton from '../components/BackButton'



const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}

const Me = () => (
  <Layout>
    <div className="projectContainer">
    <div>
      <img className="projectImage" src={me}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Me</h3>
      <p style={paragraphStyle}>
       Audio visual project. Creating Illustrations and Music together. Ink on paper inverted digitally. This one's for "Me" on album "Gazer" under my "Dawnsoon" project. That album is the sound of 2015 in San Francisco, trees, fog and angst. Listen to Dawnsoon on Spotify:
      </p>
      <center><iframe src="https://open.spotify.com/embed/track/3DZE0hwWZg6PvD2Vkyepzw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Me
