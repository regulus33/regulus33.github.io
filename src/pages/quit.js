import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import quit from '../images/paintings/quit.jpg'

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

const Quit = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={quit}/>
      <div className="artTalk" style={{marginLeft: 45}}>
      <h3 style={headingStyle}>Quit</h3>
      <p style={paragraphStyle}>
      Winter 2017. 
      </p>
      <center><iframe src="https://open.spotify.com/embed/album/6Riix1TtqXTJCup514luqF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></center>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Quit
