import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import silver_key from '../images/paintings/silver_key.jpeg'

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

const Silver = () => (
  <Layout>
    <div style={{display: "flex", flexWrap: "no-wrap"}}>
      <img style={imageStyle}  src={silver_key}/>
      <div className="artTalk">
      <h3 style={headingStyle}>Old Times</h3>
      <p style={paragraphStyle}>
        This one was a nice validation from the state of Rhode Island. I can't remember what the contest was about but I was awarded one of the lesser metals. This one reminds me how enamoured I became with the oily goop of ballpoint pen and the wonderful challenge of mimicking the wrinkles of ancient skin.
      </p>
      <center><a href="javascript:window.history.back();">back</a></center>
    </div>
    </div>
  </Layout>
)

export default Silver

