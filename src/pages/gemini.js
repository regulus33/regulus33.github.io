import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import gemini from '../images/paintings/gemini.jpg'

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
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={gemini}/>
      <div className="artTalk">
      <h3 style={headingStyle}>Gemini</h3>
      <p style={paragraphStyle}>
       The mischievous twins bonded and defined by their duplicity. The world is full of strange color when you see with two perspectives. Graphite on paper, digital color.
      </p>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Gemini
