import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import silver_key from '../images/paintings/silver_key.jpg'
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
      <img className="projectImage" src={silver_key}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Old Times</h3>
      <p style={paragraphStyle}>
        This one was a nice validation from the state of Rhode Island. I can't remember what the contest was about but I was awarded one of the lesser metals. This one reminds me how enamoured I became with the oily goop of ballpoint pen and the wonderful challenge of mimicking the wrinkles of ancient skin.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Silver

