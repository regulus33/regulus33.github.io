import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import min from '../images/paintings/ghost_mirrors.jpeg'

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}



const MiniDoodle = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={{width: window.innerWidth/2, height:"100%"}}  src={min}/>
    <div className="artTalk">
      <h3 style={headingStyle}>MiniDoodle</h3>
      <p style={paragraphStyle}>
        Ballpoint pen on print making paper.
      </p>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default MiniDoodle
