import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import us from '../images/paintings/us.png'

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

const Us = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={us}/>
      <div className="artTalk">
      <h3 style={headingStyle}>us</h3>
      <p style={paragraphStyle}>
        A music collaboration with <a href="https://soundcloud.com/eric-rhames">Eric Rhames</a> illustration: inverted ink drawing.
      </p>
     <center><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274407554&color=%23989898&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Us
