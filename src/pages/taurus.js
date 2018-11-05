import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import taurus from '../images/paintings/taurus.jpg'
import BackButton from '../components/BackButton'

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

const Taurus = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={taurus}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Taurus</h3>
      <p style={paragraphStyle}>
        Part two of a Zodiac Illustration project. Graphite on paper, acrylic background and additional coloring applied digitially. 
        The Moon is exaulated in the sign of Taurus. The moon and the bull stand peacefully together. The volatility of the moon and its government over the ever shifting waters are soothed by the calm gaze of the bull and his patuent antlers waving in the cold light of the moon.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Taurus
