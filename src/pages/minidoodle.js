import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import min from '../images/paintings/ghost_mirrors.jpeg'
import BackButton from '../components/BackButton'


const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}



const MiniDoodle = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={min}/>
    </div>
    <div className="artTalk">
      <h3 style={headingStyle}>MiniDoodle</h3>
      <p style={paragraphStyle}>
        Ballpoint pen on print making paper.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default MiniDoodle
