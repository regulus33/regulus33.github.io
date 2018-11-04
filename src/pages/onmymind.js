import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import regulus_on_my_mind from '../images/paintings/regulus_on_my_mind.jpg'

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

const onmymind = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={regulus_on_my_mind}/>
      <div className="artTalk">
      <h3 style={headingStyle}>On My Mind</h3>
      <p style={paragraphStyle}>
        Terrible attempt at a love song. But I like the Illustration I did for this. Ink on paper then photoshop for the flat color.
      </p>
      <center><iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269349308&color=%23cb80ac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default onmymind
