import React from 'react'
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
        It's a unity RPG but I never finished it.
      </p></center>
      <center><p>All art and code by me.</p></center>
      <center><a style={{color:"blue"}}href="https://github.com/regulus33/PrivateVoid" target="_blank">THE REPO</a></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Pillowman
