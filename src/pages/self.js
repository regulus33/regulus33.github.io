import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import self from '../images/paintings/self_portrait.jpg'
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

const Self = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={self}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Self Portrait</h3>
      <p style={paragraphStyle}>
       Stone Lithograph portrait of myself after I cut my hair back in 2014. I looked like a real greasy hippie for ~2 years then cut my hair one day and every person I encountered told me I looked great. Its nice to make little changes like that and have people notice. Then I started to look in the mirror more and more often. Eventually my self-perception leveled itself back out  -  somewhere between intrigue and disgust. I like to look at this to remind myself that your self image is just your self image. Its not you. 
      </p>
    <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Self
