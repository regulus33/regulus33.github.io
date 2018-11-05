import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import scorpio from '../images/paintings/scorpio.jpeg'
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

const Scorpio = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      <img className="projectImage" src={scorpio}/>
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Scorpio</h3>
      <p style={paragraphStyle}>
        The seductive dreamer. Ruled by his desires, Scorpio is a natural dreamer. He befriends the peaceful butterfly. She's unarmed but embodies the power of flight. A freedom only the peaceful know. Scorpio is of the Earth and knows the realm of flesh. But Scorpio is not ruled by the Earth. Something idealistic burns in his soul. He finds gold in the mud. The moon is his guide. 
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Scorpio
