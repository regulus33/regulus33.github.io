import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import pillowman from '../images/paintings/pillowman.jpg'
import BackButton from '../components/BackButton'



const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}
const imageStyle = {
  //width: window.innerWidth/2,
  height:"100%"
}

const Pillowman = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={pillowman}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Pillow Man</h3>
      <center><p style={paragraphStyle}>
      Winter 2017. Cover art by <a style={{color: 'blue'}}href="https://www.instagram.com/esterpsutkova/" target="_blank">my favorite person</a>
      </p></center>
      <center><iframe src="https://open.spotify.com/embed/album/7bSMESqWa9ukWNWDJee86n" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Pillowman
