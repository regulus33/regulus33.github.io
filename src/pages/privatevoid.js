import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import privateVoida from '../images/paintings/privateVoida.png'
import privateVoidb from '../images/paintings/privateVoidb.png'
import code from '../images/paintings/codesample.png'
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
      <img className="projectImage" src={privateVoidb}/>
      <img className="projectImage" src={privateVoida}/>
      <img className="projectImage" src={code}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Private Void</h3>
      <center><p style={paragraphStyle}>
      Private void is a unity game I started making a in 2018. It's about a blue haired man addicted to a virtual reality game who must find power inside himself and through the support of the other strange beings in this world to overcome his VR addiciton.
      </p></center>
      <center><p>All art and code by me.</p></center>
      <center><a style={{color:"blue"}}href="https://github.com/regulus33/PrivateVoid" target="_blank">THE REPO</a></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Pillowman
