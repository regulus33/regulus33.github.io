import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import tiger_leep from '../images/paintings/tiger_leap.jpeg'
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

const MegaDoodle = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={tiger_leep}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>MegaDoodle</h3>
      <p style={paragraphStyle}>
        One of the best experiences you can have while drawing is to let yourself go wherever you feel like going. Grab a pen and a huge piece of paper and just wander. Its like playing an open world, procedurally generated video game but the GPU is your pineal gland. Ballpoint pen on printmaking paper. 3` x 2`.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default MegaDoodle
