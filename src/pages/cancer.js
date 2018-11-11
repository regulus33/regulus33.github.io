import React from 'react'
import Layout from '../components/layout'
import cancer from '../images/paintings/cancer.jpg'
import BackButton from '../components/BackButton'


const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}


const Cancer = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={cancer}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Cancer</h3>
      <p style={paragraphStyle}>
        Cancer is the Queen of Moons. Imagining worlds within worlds reflected in the distant lights of a starry ocean. Cancer provides water to the visionary spirit of those born under her influence.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Cancer
