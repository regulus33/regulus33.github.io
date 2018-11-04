import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import light from '../images/paintings/light.png'

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

const Light = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={light}/>
      <div className="artTalk">
      <h3 style={headingStyle}>Light</h3>
      <p style={paragraphStyle}>
        Illustrated music. Listen and look.
      </p>
      <center><iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264489231&color=%238bab5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Light
