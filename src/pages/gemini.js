import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import gemini from '../images/paintings/gemini.jpg'
import BackButton from '../components/BackButton'


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

const Gemini = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={gemini}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Gemini</h3>
      <p style={paragraphStyle}>
       The mischievous twins bonded and defined by their duplicity. The world is full of strange color when you see with two perspectives. Graphite on paper, digital color.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Gemini
