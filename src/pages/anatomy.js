import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import anatomy from '../images/paintings/anatomy.jpeg'
import BackButton from '../components/backbutton.js'
const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}



const Anatomy = () => (
  <Layout>
    <div className="projectContainer">
      <img className="projectImage" src={anatomy}/>
    <div className="artTalk">
      <h3 style={headingStyle}>Anatomy Study</h3>
      <p style={paragraphStyle}>
        Nothing like a skinless face to teach you how to draw humans correctly. I love this drawing even though it was just a study for a class many years ago. This must have been the first time I truly enjoyed art that was assigned to me.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Anatomy
