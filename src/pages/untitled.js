import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import sbr from '../images/paintings/sbrntsbr.png'
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

const Silver = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={sbr}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Untitled</h3>
      <p style={paragraphStyle}>
        Untitled, ink on paper with digital color. 
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Silver

