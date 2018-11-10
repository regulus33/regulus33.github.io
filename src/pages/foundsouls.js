import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import dreams from '../images/paintings/dreams.jpg'
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



const video = (
<iframe 
    width="744" 
    height="420" 
    src="https://www.youtube.com/embed/OZMFAXGWWDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
>
</iframe>
)

const Dreams = () => (
  <Layout>
  <div className="projectContainer">
    <div>
      {video}
    </div>
      <div className="artTalk">
      <h3 style={headingStyle}>Found Souls</h3>
      <center><p style={paragraphStyle}>
        This is one of my first Unity projects. Components are just a song that I produced, sampling and chopping vocals from an HBO show called <a style={{color: "blue"}} href="https://www.youtube.com/watch?v=VDVaiwzU8yc&t=492s" target="_blank">Child of Rage.</a>
      </p></center>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Dreams
