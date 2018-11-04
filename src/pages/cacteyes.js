import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import cacteyes from '../images/paintings/cacteyes.jpg'

console.log(window.innerWidth)

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}
const imageStyle = {
  width: window.innerWidth/2,
  height:"100%"
}

const Cacteyes = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={cacteyes}/>
      <div className="artTalk">
      <h3 style={headingStyle}>Cacteyes</h3>
      <p style={paragraphStyle}>
        Imagine having Saguaros for eyes. THE MORE HE CRIES THE SHARPER HIS EYES.
      </p>
      <center><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/267303979&color=%23c8b0b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Cacteyes
